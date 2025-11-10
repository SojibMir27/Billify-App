import React, { useContext, useRef } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const UpdateBill = ({ bill }) => {
  //   const [bids, setBids] = useState([]);
  const bidModalRef = useRef(null);
  //   const { user } = use(AuthContext);

  const { username, Phone, Address, amount, _id } = bill;
  const { user } = useContext(AuthContext);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  //   const handleBidSubmit = (e) => {
  //     e.preventDefault();
  //     const name = e.target.name.value;
  //     const email = e.target.email.value;
  //     const bid = e.target.bid.value;

  //     // const newBid = {
  //     //   product: productId,
  //     //   buyer_name: name,
  //     //   buyer_email: email,
  //     //   buyer_image: user?.photoURL,
  //     //   bid_price: bid,
  //     //   status: "pending",
  //     // };

  //     fetch("http://localhost:5000/bids", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(newBid),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.insertedId) {
  //           bidModalRef.current.close();
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: "Your bid has been placed.",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //           // add the new bid to the state
  //           newBid._id = data.insertedId;
  //           const newBids = [...bids, newBid];
  //           newBids.sort((a, b) => b.bid_price - a.bid_price);
  //           setBids(newBids);
  //         }
  //       });
  //   };

  const handleUpdateBill = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <dialog
          ref={bidModalRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box w-11/12 mx-auto">
            <h3 className="font-bold text-3xl text-center mb-5">
              Bill Update Now!
            </h3>

            <form onSubmit={handleUpdateBill}>
              <fieldset className="fieldset">
                {/* Username */}
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="input w-full"
                  placeholder="Your username"
                  required
                  defaultValue={username}
                />

                {/* Address */}
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  className="input w-full"
                  placeholder="Your address"
                  required
                  defaultValue={Address}
                />

                {/* Phone */}
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="input w-full"
                  placeholder="Your phone number"
                  required
                  defaultValue={Phone}
                />

                {/* Email */}
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  readOnly
                  defaultValue={user?.email || ""}
                />

                {/* Bill ID */}
                <label>Bill ID</label>
                <input
                  type="text"
                  name="billId"
                  className="input w-full"
                  readOnly
                  defaultValue={_id}
                />

                {/* Amount */}
                <label>Amount</label>
                <input
                  type="number"
                  name="amount"
                  className="input w-full"
                  readOnly
                  defaultValue={amount}
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
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      {/* BUTTON */}
      <div className="flex justify-around mt-4">
        {/* Update Bill */}
      <button
        onClick={handleBidModalOpen}
        className="btn md:w-2/6 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300"
      >
        Update Now
      </button>
      {/* Delete Bill */}
      <button className="btn md:w-2/6 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300">
        Delete Now
      </button>
      </div>
    </div>
  );
};

export default UpdateBill;
