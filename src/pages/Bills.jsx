import React from "react";
import UseTitle from "../hooks/UseTitle";
import { Link } from "react-router";
import BillCard from "./BillCard";

const Bills = () => {
  UseTitle("Bills || Billify");
  return (
    <>
      <div className="text-4xl text-center font-bold mb-10 mt-5">
        {" "}
        All Bills
      </div>

      {/* ✅ Sorting Dropdown Only */}
      <div className="flex justify-end items-center w-11/12 mx-auto mb-5 gap-2">
        {/* <label className="font-semibold">Sort By Category:</label> */}
        <select className="select select-bordered  focus:border-0 focus:outline-sky-300 rounded w-5/12 md:w-2/12">
          <option value="">Sort By Category</option>
          <option value="electricity">Electricity</option>
          <option value="gas">Gas</option>
          <option value="water">Water</option>
          <option value="internet">Internet</option>
        </select>
      </div>

      <div className="grid grid-cols-1 mx-auto w-11/12 md:grid-cols-3 gap-3 mb-5">
        {/* {data.map((bill) => (
          <BillCard key={bill._id} bill={bill} />
        ))} */}

        {/* optional */}

        <BillCard />
        <BillCard />
        <BillCard />
        <BillCard />
      </div>
    </>
  );
};

export default Bills;
