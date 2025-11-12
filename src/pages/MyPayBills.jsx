// import React, { use, useEffect, useState } from "react";
// import UseTitle from "../hooks/UseTitle";
// import { AuthContext } from "../context/AuthContext";
// import MyPaidBillsCard from "./MyPaidBillsCard";
// import Spinner from "./Spinner";

// const MyPayBills = () => {
//   UseTitle("My-Bills || Billify");
//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [, setError] = useState(null);
//   const { user, loading: userloading } = use(AuthContext);

//   useEffect(() => {
//     async function fetchUsers() {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/my-bills?email=${user.email}`
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setBills(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchUsers();
//   }, [user]);

//   if (loading || userloading) return <Spinner />;

//   return (
//     <>
//       {bills.length === 0 ? (
//         ""
//       ) : (
//         <div
//           className="w-11/12 md:w-6/12 mx-auto bg-gradient-to-r from-blue-600 to-pink-600 text-white
//       rounded-xl p-4 shadow-lg mt-4 text-center"
//         >
//           <h3 className="text-lg font-semibold">
//             Total Bill Paid: {bills.length}
//           </h3>
//           <h3 className="text-lg font-semibold">
//             Total Amount: {""}
//             {bills.reduce((total, bill) => total + Number(bill.amount), 0)}{" "}
//             (BDT)
//           </h3>
//         </div>
//       )}

//       <div>
//         {bills?.length === 0 ? (
//           <div className="flex w-11/12 mx-auto justify-center items-center py-65 md:py-50">
//             <div className="bg-gradient-to-r from-purple-700 to-pink-700 text-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center">
//               <h2 className="text-3xl font-bold drop-shadow mb-3">
//                 No Data Found
//               </h2>
//               <p className="text-sm opacity-90 mb-3">
//                 Looks like there’s nothing here right now…
//               </p>
//               <div className="mt-4 text-4xl">😢</div>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <table className="table">
//               {/* head */}
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Phone</th>
//                   <th>Address</th>
//                   <th>Amount</th>
//                   <th>ID</th>
//                   <th>Name</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {/* row 1 */}
//                 {bills.map((bill) => (
//                   <MyPaidBillsCard key={bill._id} bill={bill} />
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default MyPayBills;

import React, { useContext, useEffect, useState } from "react";
import UseTitle from "../hooks/UseTitle";
import { AuthContext } from "../context/AuthContext";
import Spinner from "./Spinner";
import UpdateBill from "./UpdateBill";
import jsPDF from "jspdf";
import { autoTable } from "jspdf-autotable";
import toast from "react-hot-toast";

const MyPayBills = () => {
  UseTitle("My-Bills || Billify");
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, loading: userLoading } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    async function fetchBills() {
      try {
        const response = await fetch(
          `http://localhost:5000/my-bills?email=${user.email}`
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
      "Bill Name",
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
      headStyles: { fillColor: [52, 200, 253] }, // nice green header
      alternateRowStyles: { fillColor: [235, 235, 235] }, // light gray rows
    });

    doc.save("my_paid_bills.pdf");
    toast.success("PDF downloaded successfully!");
  };

  if (loading || userLoading) return <Spinner />;

  return (
    <>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {bills.length > 0 && (
        <div className="w-11/12 md:w-6/12 mx-auto bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-xl p-4 shadow-lg mt-4 text-center">
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
          <div className="bg-gradient-to-r from-purple-700 to-pink-700 text-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center">
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
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{bill.username}</td>
                  <td className="whitespace-nowrap">{bill.title}</td>
                  <td>{bill.amount}</td>
                  <td>{bill._id}</td>
                  <td>{bill.date}</td>
                  <td className="whitespace-nowrap">{bill.Phone}</td>
                  <td>{bill.Address}</td>

                  {/* update button */}
                  <th>
                    <UpdateBill bill={bill} />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default MyPayBills;

// import React, { useContext, useEffect, useState } from "react";
// import UseTitle from "../hooks/UseTitle";
// import { AuthContext } from "../context/AuthContext";
// import Spinner from "./Spinner";
// import UpdateBill from "./UpdateBill";
// import jsPDF from "jspdf";
// import { autoTable } from "jspdf-autotable";
// import toast from "react-hot-toast";

// const MyPayBills = () => {
//   UseTitle("My-Bills || Billify");
//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { user, loading: userLoading } = useContext(AuthContext);

//   useEffect(() => {
//     if (!user?.email) return;

//     async function fetchBills() {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/my-bills?email=${user.email}`
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setBills(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchBills();
//   }, [user]);

//   // PDF Download
//   const downloadPDF = () => {
//     // if (!bills || bills.length === 0) {
//     //   toast.error("No bills to download!");
//     //   return;
//     // }

//     const doc = new jsPDF("p", "pt", "a4");
//     doc.setFontSize(20);
//     doc.text("My Paid Bills", 40, 40);
//     doc.setFontSize(12);
//     doc.text(`Generated on: ${new Date().toLocaleString()}`, 40, 60);

//     const tableColumn = [
//       "SL",
//       "Username",
//       "Bill Name",
//       "Amount",
//       "Bill ID",
//       "Date",
//       "Phone",
//       "Address",
//     ];
//     const tableRows = [];

//     bills.forEach((bill, index) => {
//       const row = [
//         index + 1,
//         bill.username,
//         bill.title,
//         bill.amount,
//         bill._id,
//         bill.date,
//         bill.Phone,
//         bill.Address,
//       ];
//       tableRows.push(row);
//     });

//     autoTable(doc, {
//       startY: 80,
//       head: [tableColumn],
//       body: tableRows,
//       styles: { fontSize: 10, cellPadding: 4 },
//       headStyles: { fillColor: [52, 211, 153] }, // nice green header
//       alternateRowStyles: { fillColor: [245, 245, 245] }, // light gray rows
//     });

//     doc.save("my_paid_bills.pdf");
//     toast.success("PDF downloaded successfully!");
//   };

//   if (loading || userLoading) return <Spinner />;

//   return (
//     <>
//       {error && <div className="text-red-500 text-center mb-4">{error}</div>}

//       {bills.length > 0 && (
//         <div className="w-11/12 md:w-6/12 mx-auto bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-xl p-4 shadow-lg mt-4 text-center">
//           <h3 className="text-lg font-semibold">
//             Total Bills Paid: {bills.length}
//           </h3>
//           <h3 className="text-lg font-semibold">
//             Total Amount:{" "}
//             {bills.reduce((total, bill) => total + Number(bill.amount), 0)} BDT
//           </h3>
//         </div>
//       )}

//       {bills.length === 0 ? (
//         <div className="flex w-11/12 mx-auto justify-center items-center py-20">
//           <div className="bg-gradient-to-r from-purple-700 to-pink-700 text-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center">
//             <h2 className="text-3xl font-bold drop-shadow mb-3">
//               No Data Found
//             </h2>
//             <p className="text-sm opacity-90 mb-3">
//               Looks like there’s nothing here right now…
//             </p>
//             <div className="mt-4 text-4xl">😢</div>
//           </div>
//         </div>
//       ) : (
//         <div className="overflow-x-auto w-11/12 mx-auto mt-6">
//           {/* Right aligned PDF button */}
//           <div className="flex justify-end mb-3">
//             <button
//               onClick={downloadPDF}
//               className="btn btn-sm text-white font-semibold rounded bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition-colors duration-300 md:w-2/12"
//             >
//               Download PDF
//             </button>
//           </div>

//           <table className="table w-full">
//             <thead>
//               <tr>
//                 <th>SL</th>
//                 <th>User Name</th>
//                 <th>Bill Name</th>
//                 <th>Amount</th>
//                 <th>Bill ID</th>
//                 <th>Date</th>
//                 <th>Phone</th>
//                 <th>Address</th>
//                 <th className="text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bills.map((bill, index) => (
//                 <tr key={index}>
//                   <th>{index + 1}</th>
//                   <td>{bill.username}</td>
//                   <td className="whitespace-nowrap">{bill.title}</td>
//                   <td>{bill.amount}</td>
//                   <td>{bill._id}</td>
//                   <td>{bill.date}</td>
//                   <td className="whitespace-nowrap">{bill.Phone}</td>
//                   <td>{bill.Address}</td>
//                   <th>
//                     <UpdateBill
//                       bill={bill}
//                       onUpdate={(updated) =>
//                         setBills((prev) =>
//                           prev.map((b) => (b._id === updated._id ? updated : b))
//                         )
//                       }
//                       onDelete={(id) =>
//                         setBills((prev) => prev.filter((b) => b._id !== id))
//                       }
//                     />
//                   </th>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </>
//   );
// };

// export default MyPayBills;
