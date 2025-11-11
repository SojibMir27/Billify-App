import React from "react";
import { Link } from "react-router";

const MyPaidBillsCard = ({ bill }) => {
  const { username, Phone, Address, amount, date, _id, title } = bill;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-500 rounded">
      <div className="card-body">
        <figure className="relative h-48 overflow-hidden rounded-xl flex justify-center items-center">
          <img
            src={"https://i.ibb.co.com/35R6DdLM/paidbills.jpg"}
            alt="Bill Details"
            className="w-full h-full object-cover hover:scale-135 transition-transform duration-300 opacity-50"
          />
          {/* Bill ID Overlay Center */}
          <span className="absolute bg-red-600 text-white text-sm font-bold px-4 py-2 mt-35 rounded shadow-lg backdrop-blur-sm hover:scale-65 transition-transform duration-300">
            Bill ID : {_id}
          </span>
        </figure>

        <h2 className="card-title text-center md:text-left">
          <span className="text-lg font-semibold">Bill Name :</span> {title}
        </h2>

        <h2 className="card-title text-center md:text-left">
          <span className="text-lg font-semibold">Bill ID :</span> {_id}
        </h2>

        <h2 className="card-title text-center md:text-left">
          <span className="text-lg font-semibold">Name :</span> {username}
        </h2>

        <h2 className="text-xs rounded-full">
          <span className="text-lg font-semibold bg-none">Phone :</span>{" "}
          <span className="badge bg-pink-900/40">{Phone}</span>
        </h2>

        <p className="line-clamp-2">
          <span className="text-lg font-semibold">Location :</span> {Address}
        </p>

        <p className="font-semibold">
          <span className="text-lg font-semibold">Amount :</span> {amount} (BDT)
        </p>

        <p className="text-sm">
          <span className="text-lg font-semibold">Date :</span> {date}
        </p>

        <div className="card-actions justify-between items-center mt-4">
          <Link
            to={`/mypay-bills-details/${_id}`}
            className="btn text-white mt-4 rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 w-full"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPaidBillsCard;
