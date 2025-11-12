import React, { useContext, useEffect, useState } from "react";
import UseTitle from "../hooks/UseTitle";
import { AuthContext } from "../context/AuthContext";
import Spinner from "./Spinner";
import jsPDF from "jspdf";
import { autoTable } from "jspdf-autotable";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const MyPayBills = () => {
  UseTitle("My-Bills || Billify");
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, loading: userLoading } = useContext(AuthContext);

  useEffect(() => {
    async function fetchBills() {
      try {
        const response = await fetch(
          `https://billify-server-rho.vercel.app/my-bills?email=${user.email}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBills(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBills();
  }, [user]);

  // PDF download
  const downloadPDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.setFontSize(20);
    doc.text("My Paid Bills", 40, 40);
    doc.setFontSize(12);
    doc.text(
      `Generated on: ${new Date().toLocaleString("en-GB", {
        timeZone: "Asia/Dhaka",
        hour12: true,
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}`,
      40,
      60
    );

    const tableColumn = [
      "SL",
      "Username",
      "Billname",
      "Amount",
      "Bill ID",
      "Date",
      "Phone",
      "Address",
    ];
    const tableRows = [];

    bills.forEach((bill, index) => {
      const row = [
        index + 1,
        bill.username,
        bill.title,
        bill.amount,
        bill._id,
        bill.date,
        bill.Phone,
        bill.Address,
      ];
      tableRows.push(row);
    });

    autoTable(doc, {
      startY: 80,
      head: [tableColumn],
      body: tableRows,
      styles: { fontSize: 10, cellPadding: 4 },
    });

    doc.save("my_paid_bills.pdf");
    toast.success("PDF downloaded successfully!");
  };

  // Update bill
  const handleUpdateBill = (e, _id) => {
    e.preventDefault();
    const name = e.target.username.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;

    const newUpdateBillsData = {
      username: name,
      Phone: phone,
      Address: address,
      date: new Date().toLocaleDateString("en-GB"),
    };

    fetch(`https://billify-server-rho.vercel.app/my-bills/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUpdateBillsData),
    })
      .then((res) => res.json())
      .then(() => {
        setBills((prevBills) =>
          prevBills.map((bill) =>
            bill._id === _id ? { ...bill, ...newUpdateBillsData } : bill
          )
        );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your bill has been updated!",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => {
        toast.error(err.message || "Something went wrong!");
      });
  };

  // Delete bill
  const handleDeleteBill = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://billify-server-rho.vercel.app/my-bills/${_id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            setBills((prevBills) =>
              prevBills.filter((bill) => bill._id !== _id)
            );
            Swal.fire({
              title: "Deleted!",
              text: "Your bill has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            toast.error(err.message || "Something went wrong!");
          });
      }
    });
  };

  if (loading || userLoading) return <Spinner />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {bills.length > 0 && (
        <div className="w-11/12 md:w-6/12 mx-auto bg-linear-to-r from-blue-600 to-pink-600 text-white rounded-xl p-4 shadow-lg mt-4 text-center">
          <h3 className="text-lg font-semibold">
            Total Bills Paid: {bills.length}
          </h3>
          <h3 className="text-lg font-semibold">
            Total Amount:{" "}
            {bills.reduce((total, bill) => total + Number(bill.amount), 0)} BDT
          </h3>
        </div>
      )}

      {bills.length === 0 ? (
        <div className="flex w-11/12 mx-auto justify-center items-center py-20">
          <div className="bg-linear-to-r from-purple-700 to-pink-700 text-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center">
            <h2 className="text-3xl font-bold drop-shadow mb-3">
              No Data Found
            </h2>
            <p className="text-sm opacity-90 mb-3">
              Looks like there’s nothing here right now…
            </p>
            <div className="mt-4 text-4xl">😢</div>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto w-11/12  mx-auto mt-6">
          <div className="flex justify-end mt-4">
            <button
              onClick={downloadPDF}
              className="btn btn-sm text-white rounded bg-pink-800 hover:bg-pink-900 transition-colors duration-300 md:w-2/12"
            >
              Download PDF
            </button>
          </div>

          <table className="table w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>User Name</th>
                <th>Bill Name</th>
                <th>Amount</th>
                <th>Bill ID</th>
                <th>Date</th>
                <th>Phone</th>
                <th>Location</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill, index) => (
                <tr key={bill._id}>
                  <th>{index + 1}</th>
                  <td>{bill.username}</td>
                  <td className="whitespace-nowrap">{bill.title}</td>
                  <td>{bill.amount}</td>
                  <td>{bill._id}</td>
                  <td>{bill.date}</td>
                  <td className="whitespace-nowrap">{bill.Phone}</td>
                  <td>{bill.Address}</td>
                  <th>
                    <dialog
                      id={`modal-${bill._id}`}
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box w-11/12 mx-auto">
                        <h3 className="font-bold text-3xl text-center mb-5">
                          Update Bill
                        </h3>

                        <form onSubmit={(e) => handleUpdateBill(e, bill._id)}>
                          <fieldset className="fieldset">
                            <label>Username</label>
                            <input
                              type="text"
                              name="username"
                              className="input w-full rounded focus:border-0 focus:outline-sky-300"
                              placeholder="Your username"
                              required
                              defaultValue={bill.username}
                            />

                            <label>Address</label>
                            <input
                              type="text"
                              name="address"
                              className="input w-full rounded focus:border-0 focus:outline-sky-300"
                              placeholder="Your address"
                              required
                              defaultValue={bill.Address}
                            />

                            <label>Phone</label>
                            <input
                              type="tel"
                              name="phone"
                              className="input w-full rounded focus:border-0 focus:outline-sky-300"
                              placeholder="Your phone number"
                              required
                              defaultValue={bill.Phone}
                            />

                            <label>Bill Name</label>
                            <input
                              type="text"
                              name="title"
                              className="input w-full rounded focus:border-0 focus:outline-sky-300"
                              readOnly
                              defaultValue={bill.title}
                            />

                            <label>Email</label>
                            <input
                              type="email"
                              name="email"
                              className="input w-full rounded focus:border-0 focus:outline-sky-300"
                              readOnly
                              defaultValue={user?.email || ""}
                            />

                            <label>Bill ID</label>
                            <input
                              type="text"
                              name="billId"
                              className="input w-full rounded focus:border-0 focus:outline-sky-300"
                              readOnly
                              defaultValue={bill._id}
                            />

                            <label>Amount</label>
                            <input
                              type="number"
                              name="amount"
                              className="input w-full rounded focus:border-0 focus:outline-sky-300"
                              readOnly
                              defaultValue={bill.amount}
                            />

                            <button
                              type="submit"
                              className="btn text-white mt-4 rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 w-full"
                            >
                              Update Bill
                            </button>
                          </fieldset>
                        </form>

                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Cancel</button>
                          </form>
                        </div>
                      </div>
                    </dialog>

                    <div className="flex justify-center items-center mt-4 gap-2">
                      <button
                        className="btn btn-sm md:w-3/6 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300"
                        onClick={() =>
                          document
                            .getElementById(`modal-${bill._id}`)
                            .showModal()
                        }
                      >
                        Update
                      </button>

                      <button
                        className="btn btn-sm md:w-3/6 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300"
                        onClick={() => handleDeleteBill(bill._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
};

export default MyPayBills;
