// import React, { useContext, useEffect, useState } from "react";
// import UpdateBill from "./UpdateBill";
// import { AuthContext } from "../context/AuthContext";
// import { useParams } from "react-router";

// const MyPayBillDetails = () => {
//   const [bills, setBills] = useState([]); // store API data
//   const [loading, setLoading] = useState(true); // loading indicator
//   const [, setError] = useState(null); // error state
//   const { user, loading: userloading } = useContext(AuthContext);
//   const { id } = useParams();

//   console.log(bills);

//   useEffect(() => {
//     // Define async function inside useEffect
//     async function fetchUsers() {
//       try {
//         const response = await fetch(`http://localhost:5000/my-bills/${id}`);
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

//     fetchUsers(); // call the async function
//   }, [id, user]); // Empty dependency array -> runs only once after component mounts

//   // UI rendering logic
//   if (loading || userloading) return <p>Loading users... </p>;

//   return (
//     <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-500/20 rounded-xl flex flex-col md:flex-row justify-between items-stretch mx-auto w-11/12 md:w-full max-w-6xl md:my-24 my-10">
//       {/* Image - 40% */}
//       <div className="md:w-2/5 w-full h-64 md:h-auto">
//         <figure className="h-full overflow-hidden p-5">
//           <img
//             src="https://i.ibb.co/Q3ScKmQ2/download.jpg"
//             alt="title"
//             className="w-full h-full rounded object-cover hover:scale-102 transition-transform duration-300"
//           />
//         </figure>
//       </div>

//       {/* Details - 60% */}
//       <div className="card-body md:w-3/5 w-full mr-2 flex flex-col justify-between ">
//         <div className="space-y-5">
//           <div className="flex justify-between items-center mx-auto">
//             <h2 className="card-title text-center md:text-left">User Name</h2>
//             <button className="btn btn-sm md:w-3/12 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300">
//               Download Report
//             </button>
//           </div>
//           <h2 className="badge text-xs badge-secondary rounded-full">
//             category
//           </h2>
//           <p className="line-clamp-2 mt-2">location</p>
//           <p className="line-clamp-2 mt-2">description</p>
//           <p className="mt-2 font-semibold">Amount: $560</p>
//           <p className="text-sm text-gray-500">Date: date</p>
//           {/* pay-bill modal */}
//           <UpdateBill />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyPayBillDetails;

import React from "react";
import UpdateBill from "./UpdateBill";
import { AuthContext } from "../context/AuthContext";
import { useLoaderData } from "react-router";

const MyPayBillDetails = () => {
  const bill = useLoaderData();
  const { username, Phone, Address, amount, date, _id } = bill;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-500 rounded w-11/12 md:w-5/12 mx-auto my-30">
      <div className="card-body">
        <h2 className="card-title text-center flex mx-auto">
          <span className="text-lg font-semibold">Bill ID :</span>
          <span className="badge bg-pink-900/40">{_id}</span>
        </h2>

        <h2 className="font-semibold text-center">
          <span className="text-lg font-semibold">Name :</span>{" "}
          <span className="badge bg-pink-900/40">{username}</span>
        </h2>
        <h2 className="text-xs rounded-full text-center">
          <span className="text-lg font-semibold">Phone :</span>{" "}
          <span className="badge bg-pink-900/40">{Phone}</span>
        </h2>

        <h2 className="font-semibold text-center">
          <span className="text-lg font-semibold">Location : </span>
          <span className="badge bg-pink-900/40">{Address}</span>
        </h2>

        <h2 className="font-semibold text-center">
          <span className="text-lg font-semibold">Amount :</span>{" "}
          <span className="badge bg-pink-900/40">{amount} (BDT)</span>
        </h2>

        <h2 className="text-sm text-center">
          <span className="text-lg font-semibold">Date :</span>{" "}
          <span className="badge bg-pink-900/40">{date}</span>
        </h2>

        {/* Update Modal */}
        <UpdateBill bill={bill} />

        <button className="btn mt-5 btn-sm text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300">
          Download Pdf
        </button>
      </div>
    </div>
  );
};

export default MyPayBillDetails;
