import React from "react";
import { Link } from "react-router";

const MyPaidBillsCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-500 rounded">
      <figure className="h-48 overflow-hidden">
        <img
          src="https://i.ibb.co.com/Q3ScKmQ2/download.jpg"
          alt="title"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">"title"</h2>

        <div className="badge text-xs badge-xs badge-secondary rounded-full">
          "category"
        </div>
        <div className="badge text-xs text-secondary rounded-full">
          location
        </div>

        <p className="line-clamp-2 mt-2">"description"</p>
        <p className="mt-2 font-semibold">Amount: $"amount"</p>
        <p className="text-sm text-gray-500">Date: "date"</p>

        <div className="card-actions justify-between items-center mt-4">
          <Link
            to={`/mypay-bills-details/:id`}
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
