import React from "react";
import PayBill from "./PayBill";
import UpdateBill from "./UpdateBill";

const MyPayBillDetails = () => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-500/20 rounded-xl flex flex-col md:flex-row justify-between items-stretch mx-auto w-11/12 md:w-full max-w-6xl md:my-24 my-10">
      {/* Image - 40% */}
      <div className="md:w-2/5 w-full h-64 md:h-auto">
        <figure className="h-full overflow-hidden p-5">
          <img
            src="https://i.ibb.co/Q3ScKmQ2/download.jpg"
            alt="title"
            className="w-full h-full rounded object-cover hover:scale-102 transition-transform duration-300"
          />
        </figure>
      </div>

      {/* Details - 60% */}
      <div className="card-body md:w-3/5 w-full mr-2 flex flex-col justify-between ">
        <div className="space-y-5">
          <div className="flex justify-between items-center mx-auto">
            <h2 className="card-title text-center md:text-left">
              Bill Deo Vai
            </h2>
            <button className="btn btn-sm md:w-3/12 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300">
              Download Report
            </button>
          </div>
          <h2 className="badge text-xs badge-secondary rounded-full">
            category
          </h2>
          <p className="line-clamp-2 mt-2">location</p>
          <p className="line-clamp-2 mt-2">description</p>
          <p className="mt-2 font-semibold">Amount: $560</p>
          <p className="text-sm text-gray-500">Date: date</p>
          {/* pay-bill modal */}
          <UpdateBill />
        </div>
      </div>
    </div>
  );
};

export default MyPayBillDetails;
