import React from "react";
import UseTitle from "../hooks/UseTitle";
import BillCard from "./BillCard";

const MyPayBills = () => {
  UseTitle("My-Bills || Billify");
  return (
    <>
      <div className="text-4xl text-center font-bold mb-10 mt-5">
        {" "}
        My Pay Bills{" "}
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
        <BillCard />
        <BillCard />
      </div>
    </>
  );
};

export default MyPayBills;
