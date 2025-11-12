import React from "react";
import UpdateBill from "./UpdateBill";
import { useLoaderData } from "react-router";
import UseTitle from "../hooks/UseTitle";

const MyPayBillDetails = () => {
  const bill = useLoaderData();
  const { username, Phone, Address, amount, date, _id, title } = bill;
  UseTitle("Mypay-Bills-Details || Billify");

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-500 rounded w-11/12 md:w-4/12 mx-auto my-5 p-4">
      <div className="card-body">
        <figure className="relative h-48 overflow-hidden rounded-xl flex justify-center items-center">
          <span className="absolute bg-red-600 text-white text-sm font-bold px-4 py-2 rounded shadow-lg">
            Bill ID : {_id}
          </span>
        </figure>

        <p className="text-center">
          <span className="font-semibold">Bill Name:</span> {title}
        </p>

        <p className=" text-center">
          <span className="font-semibold">Name:</span> {username}
        </p>

        <p className="text-center">
          <span className="font-semibold">Phone:</span> {Phone}
        </p>
        <p className="text-center">
          <span className="font-semibold">Location:</span> {Address}
        </p>
        <p className="text-center">
          <span className="font-semibold">Amount:</span> {amount} BDT
        </p>
        <p className="text-center">
          <span className="font-semibold">Date:</span> {date}
        </p>

        {/* Update Modal */}
        <UpdateBill bill={bill} />
      </div>
    </div>
  );
};

export default MyPayBillDetails;
