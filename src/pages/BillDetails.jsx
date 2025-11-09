import React from "react";
import UseTitle from "../hooks/UseTitle";
import { Link } from "react-router";
import BillDetailsCard from "./BillDetailsCard";

const BillDetails = () => {
  UseTitle("Bill-Details || Billify");
  return (
    <div>
      <h1 className="flex justify-center items-center mx-auto text-4xl font-bold my-5">
        Bill Details
      </h1>

      <BillDetailsCard />
    </div>
  );
};

export default BillDetails;
