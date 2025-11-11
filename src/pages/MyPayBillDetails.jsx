import React from "react";
import UpdateBill from "./UpdateBill";
import { useLoaderData } from "react-router";

const MyPayBillDetails = () => {
  const bill = useLoaderData();
  const { username, Phone, Address, amount, date, _id } = bill;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-500 rounded w-11/12 md:w-4/12 mx-auto my-5">
      <div className="card-body">
        <figure className="h-48 overflow-hidden rounded-xl">
          <img
            src={"https://i.ibb.co/Q3ScKmQ2/download.jpg"}
            alt={""}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </figure>
        <h2 className="card-title text-center flex mx-auto">
          <span className="text-lg font-semibold">Bill ID :</span>
          <span className="badge bg-yellow-600/60">{_id}</span>
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
