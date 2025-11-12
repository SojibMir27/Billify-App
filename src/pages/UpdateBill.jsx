// import React, { useContext, useRef } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../context/AuthContext";
// import toast from "react-hot-toast";

// const UpdateBill = ({ bill }) => {
//   const bidModalRef = useRef(null);
//   const { username, Phone, Address, amount, _id, title } = bill;
//   const { user } = useContext(AuthContext);

//   const handleBidModalOpen = () => {
//     bidModalRef.current.showModal();
//   };

//   const handleUpdateBill = (e) => {
//     e.preventDefault();
//     const name = e.target.username.value;
//     const address = e.target.address.value;
//     const phone = e.target.phone.value;

//     const newUpdateBillsData = {
//       username: name,
//       Phone: phone,
//       Address: address,
//       date: new Date().toLocaleDateString("en-GB"),
//     };

//     fetch(`http://localhost:5000/my-bills/${_id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(newUpdateBillsData),
//     })
//       .then((res) => res.json())
//       .then(() => {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Your bill has been updated!.",
//           showConfirmButton: false,
//           timer: 2500,
//         });
//       })
//       .catch((err) => {
//         toast.error(err);
//       });
//   };

//   const handleDeleteBill = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/my-bills/${_id}`, {
//           method: "DELETE",
//           headers: {
//             "content-type": "application/json",
//           },
//         })
//           .then((res) => res.json())
//           .then(() => {
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success",
//             });
//           })
//           .catch((err) => {
//             toast.error(err);
//           });
//       }
//     });
//   };

//   return (
//     <div>
//       <div>
//         <dialog
//           ref={bidModalRef}
//           className="modal modal-bottom sm:modal-middle"
//         >
//           <div className="modal-box w-11/12 mx-auto">
//             <h3 className="font-bold text-3xl text-center mb-5">
//               Bill Update Now!
//             </h3>

//             <form onSubmit={handleUpdateBill}>
//               <fieldset className="fieldset">
//                 {/* Username */}
//                 <label>Username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   className="input w-full rounded focus:border-0 focus:outline-sky-300"
//                   placeholder="Your username"
//                   required
//                   defaultValue={username}
//                 />

//                 {/* Address */}
//                 <label>Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   className="input w-full rounded focus:border-0 focus:outline-sky-300"
//                   placeholder="Your address"
//                   required
//                   defaultValue={Address}
//                 />

//                 {/* Phone */}
//                 <label>Phone</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   className="input w-full rounded focus:border-0 focus:outline-sky-300"
//                   placeholder="Your phone number"
//                   required
//                   defaultValue={Phone}
//                 />

//                 {/* Bill Name */}
//                 <label>Bill Name</label>
//                 <input
//                   type="text"
//                   name="title"
//                   className="input w-full rounded focus:border-0 focus:outline-sky-300"
//                   readOnly
//                   defaultValue={title}
//                 />

//                 {/* Email */}
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="input w-full rounded focus:border-0 focus:outline-sky-300"
//                   readOnly
//                   defaultValue={user?.email || ""}
//                 />

//                 {/* Bill ID */}
//                 <label>Bill ID</label>
//                 <input
//                   type="text"
//                   name="billId"
//                   className="input w-full rounded focus:border-0 focus:outline-sky-300"
//                   readOnly
//                   defaultValue={_id}
//                 />

//                 {/* Amount */}
//                 <label>Amount</label>
//                 <input
//                   type="number"
//                   name="amount"
//                   className="input w-full rounded focus:border-0 focus:outline-sky-300"
//                   readOnly
//                   defaultValue={amount}
//                 />

//                 <button
//                   type="submit"
//                   className="btn text-white mt-4 rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 w-full"
//                 >
//                   Update Bill
//                 </button>
//               </fieldset>
//             </form>

//             <div className="modal-action">
//               <form method="dialog">
//                 {/* if there is a button in form, it will close the modal */}
//                 <button className="btn">Cancel</button>
//               </form>
//             </div>
//           </div>
//         </dialog>
//       </div>

//       {/* BUTTON */}
//       <div className="flex justify-center items-center mt-4">
//         {/* Update Bill */}
//         <button
//           onClick={handleBidModalOpen}
//           className="btn btn-sm md:w-3/6 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 mr-5"
//         >
//           Update
//         </button>
//         {/* Delete Bill */}
//         <button
//           onClick={handleDeleteBill}
//           className="btn btn-sm md:w-3/6 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UpdateBill;

import React, { useContext, useRef, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const UpdateBill = ({ bill, onUpdate }) => {
  const bidModalRef = useRef(null);
  const { _id, title, amount } = bill;
  const { user } = useContext(AuthContext);

  // Controlled form data
  const [formData, setFormData] = useState({
    username: bill.username || "",
    address: bill.Address || "",
    phone: bill.Phone || "",
  });

  const [updating, setUpdating] = useState(false);

  // Update form data if bill prop changes
  useEffect(() => {
    setFormData({
      username: bill.username || "",
      address: bill.Address || "",
      phone: bill.Phone || "",
    });
  }, [bill]);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdateBill = async (e) => {
    e.preventDefault();
    setUpdating(true);

    const newUpdateBillsData = {
      username: formData.username,
      Phone: formData.phone,
      Address: formData.address,
      date: new Date().toLocaleDateString("en-GB"),
    };

    try {
      const res = await fetch(`http://localhost:5000/my-bills/${_id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUpdateBillsData),
      });
      await res.json();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your bill has been updated!",
        showConfirmButton: false,
        timer: 1500,
      });

      bidModalRef.current.close(); // Auto close modal

      if (onUpdate) onUpdate(); // Trigger parent to refresh UI instantly
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setUpdating(false);
    }
  };

  const handleDeleteBill = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:5000/my-bills/${_id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        });
        await res.json();

        Swal.fire({
          title: "Deleted!",
          text: "Your bill has been deleted.",
          icon: "success",
        });

        if (onUpdate) onUpdate(); // Refresh parent UI
      } catch (err) {
        toast.error(err.message || "Something went wrong");
      }
    }
  };

  return (
    <div>
      {/* Modal */}
      <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 mx-auto">
          <h3 className="font-bold text-3xl text-center mb-5">
            Bill Update Now!
          </h3>

          <form onSubmit={handleUpdateBill} className="space-y-3">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="input w-full rounded focus:border-0 focus:outline-sky-300"
              placeholder="Your username"
              required
              value={formData.username}
              onChange={handleChange}
            />

            <label>Address</label>
            <input
              type="text"
              name="address"
              className="input w-full rounded focus:border-0 focus:outline-sky-300"
              placeholder="Your address"
              required
              value={formData.address}
              onChange={handleChange}
            />

            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              className="input w-full rounded focus:border-0 focus:outline-sky-300"
              placeholder="Your phone number"
              required
              value={formData.phone}
              onChange={handleChange}
            />

            <label>Bill Name</label>
            <input
              type="text"
              className="input w-full rounded focus:border-0 focus:outline-sky-300"
              readOnly
              value={title}
            />

            <label>Email</label>
            <input
              type="email"
              className="input w-full rounded focus:border-0 focus:outline-sky-300"
              readOnly
              value={user?.email || ""}
            />

            <label>Bill ID</label>
            <input
              type="text"
              className="input w-full rounded focus:border-0 focus:outline-sky-300"
              readOnly
              value={_id}
            />

            <label>Amount</label>
            <input
              type="number"
              className="input w-full rounded focus:border-0 focus:outline-sky-300"
              readOnly
              value={amount}
            />

            <button
              type="submit"
              className={`btn text-white mt-4 rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 w-full ${
                updating ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={updating}
            >
              {updating ? "Updating..." : "Update Bill"}
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Buttons */}
      <div className="flex justify-center items-center mt-4 gap-4">
        <button
          onClick={handleBidModalOpen}
          className="btn btn-sm md:w-3/6 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300"
        >
          Update
        </button>
        <button
          onClick={handleDeleteBill}
          className="btn btn-sm md:w-3/6 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UpdateBill;
