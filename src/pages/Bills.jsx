import React from "react";
import UseTitle from "../hooks/UseTitle";
import BillCard from "./BillCard";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useScroll } from "framer-motion";
import Spinner from "./Spinner";

const Bills = () => {
  UseTitle("Bills || Billify");
  const data = useLoaderData();
   const {  loading } = useScroll(AuthContext);

  if (loading) {
    return <Spinner/>;
  }
  return (
    <>
      <div className="text-4xl text-center font-bold mb-10 mt-5">
        {" "}
        All Bills
      </div>

      {/* sort section */}
      <div className="flex justify-end items-center w-11/12 mx-auto mb-5 gap-2">
        <select className="select select-bordered  focus:border-0 focus:outline-sky-300 rounded w-5/12 md:w-2/12">
          <option value="">Sort By Category</option>
          <option value="electricity">Electricity</option>
          <option value="gas">Gas</option>
          <option value="water">Water</option>
          <option value="internet">Internet</option>
        </select>
      </div>

      {data?.length === 0 ? (
        <div className="flex w-11/12 mx-auto justify-center items-center py-65 md:py-50">
          <div className="bg-gradient-to-r from-purple-700 to-pink-700 text-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center animate-[fadeIn_0.6s_ease-out, floating_3s_ease-in-out_infinite]">
            <h2 className="text-3xl font-bold drop-shadow mb-3 animate-bounce">
              No Data Found
            </h2>
            <p className="text-sm opacity-90 mb-3">
              Looks like there’s nothing here right now…
            </p>
            <div className="mt-4 text-4xl animate-pulse">😢</div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 mx-auto w-11/12 md:grid-cols-3 gap-3 mb-5">
          {data.map((bill) => (
            <BillCard key={bill._id} bill={bill} />
          ))}
        </div>
      )}
    </>
  );
};

export default Bills;
