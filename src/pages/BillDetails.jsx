import React from "react";
import UseTitle from "../hooks/UseTitle";
import { useLoaderData } from "react-router";
import BillDetailsCard from "./BillDetailsCard";

const BillDetails = () => {
  UseTitle("Bill-Details || Billify");
  const bill = useLoaderData();
  return (
    <div>
      <BillDetailsCard bill={bill} />
    </div>
  );
};

export default BillDetails;
