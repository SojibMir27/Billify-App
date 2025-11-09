import React, { useRef } from "react";
import Swal from "sweetalert2";

const PayBill = () => {
  //   const [bids, setBids] = useState([]);
  const bidModalRef = useRef(null);
  //   const { user } = use(AuthContext);

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

            <form>
              <fieldset className="fieldset">
                {/* Username */}
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="input w-full"
                  placeholder="Your username"
                  defaultValue={"username"}
                  // onChange={handleChange}
                />

                {/* Address */}
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  className="input w-full"
                  placeholder="Your address"
                  defaultValue={"address"}
                  // value={formData.address}
                  // onChange={handleChange}
                  required
                />

                {/* Phone */}
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="input w-full"
                  placeholder="Your phone number"
                  defaultValue="+8801885-785448"
                  // value={formData.phone}
                  // onChange={handleChange}
                  required
                />

                {/* Email */}
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  readOnly
                  // defaultValue={user?.email || ""}
                  defaultValue="byteprime2025@gmail.com"
                />

                {/* Bill ID */}
                <label>Bill ID</label>
                <input
                  type="text"
                  name="billId"
                  className="input w-full"
                  readOnly
                  defaultValue="BILL123456"
                />

                {/* Amount */}
                <label>Amount</label>
                <input
                  type="number"
                  name="amount"
                  className="input w-full"
                  readOnly
                  defaultValue={499.99}
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  Submit Payment
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

      {/* Update Bill */}
      <button
        onClick={handleBidModalOpen}
        className="btn w-full md:w-4/12 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300"
      >
        Bill Pay Now
      </button>

      {/* Delete Bill
      <button className="btn w-full md:w-4/12 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 mt-2 md:mt-0 md:ml-5">
        Delete Now
      </button> */}
    </div>
  );
};

export default PayBill;
