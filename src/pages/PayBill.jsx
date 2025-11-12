import React, { use, useRef } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const PayBill = ({ isDisabled, bill }) => {
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);
  const { _id, amount, title } = bill;
  const navigate = useNavigate();

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBillPaySubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const amount = e.target.amount.value;

    const newPayData = {
      username: name,
      Phone: phone,
      Address: address,
      amount: amount,
      title: title,
      email: email,
      date: new Date().toLocaleDateString("en-GB"),
    };

    fetch("http://localhost:5000/my-bills", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPayData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your payment has been successful!.",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/my-pay-bills");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div className="mt-10">
      <div>
        <dialog
          ref={bidModalRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box w-11/12 mx-auto">
            <h3 className="font-bold text-3xl text-center mb-5">
              Bill Pay Now!
            </h3>

            <form onSubmit={handleBillPaySubmit}>
              <fieldset className="fieldset">
                {/* Username */}
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="input w-full rounded focus:border-0 focus:outline-sky-300"
                  placeholder="Your username"
                  defaultValue={user.displayName}
                />

                {/* Address */}
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  className="input w-full rounded focus:border-0 focus:outline-sky-300"
                  placeholder="Your address"
                  defaultValue={"Dhaka, Bangladesh"}
                  required
                />

                {/* Phone */}
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="input w-full rounded focus:border-0 focus:outline-sky-300"
                  placeholder="Your phone number"
                  defaultValue={"+8801885-785448"}
                  required
                />

                {/* Bill Name */}
                <label>Bill Name</label>
                <input
                  type="text"
                  name="title"
                  className="input w-full rounded focus:border-0 focus:outline-sky-300"
                  readOnly
                  defaultValue={title}
                />

                {/* Email */}
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full rounded focus:border-0 focus:outline-sky-300"
                  readOnly
                  defaultValue={user?.email || ""}
                />

                {/* Bill ID */}
                <label>Bill ID</label>
                <input
                  type="text"
                  name="billId"
                  className="input w-full rounded focus:border-0 focus:outline-sky-300"
                  readOnly
                  defaultValue={_id}
                />

                {/* Amount */}
                <label>Amount</label>
                <input
                  type="number"
                  name="amount"
                  className="input w-full rounded focus:border-0 focus:outline-sky-300"
                  readOnly
                  defaultValue={amount}
                />

                <button className="btn text-white mt-4 rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 w-full rounded focus:border-0 focus:outline-sky-300">
                  Send Payment
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
      </div>

      {/* Update Bill  */}
      <button
        onClick={handleBidModalOpen}
        disabled={isDisabled}
        className={`btn w-full rounded focus:border-0 focus:outline-sky-300 md:w-4/12 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 ${
          isDisabled ? "btn-disabled opacity-30 cursor-not-allowed" : ""
        }`}
      >
        Bill Pay Now
      </button>
    </div>
  );
};

export default PayBill;
