import React, { useContext, useEffect, useState } from "react";
import UseTitle from "../hooks/UseTitle";
import BillCard from "./BillCard";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Spinner from "./Spinner";

const Bills = () => {
  UseTitle("Bills || Billify");
  const initialData = useLoaderData();
  const { loading: userLoading } = useContext(AuthContext);

  const [bills, setBills] = useState(initialData || []);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [, setError] = useState(null);

  useEffect(() => {
    setBills(initialData);
    setLoading(false);
  }, [initialData]);

  const handleChange = async (e) => {
    const selected = e.target.value;
    setCategory(selected);
    setLoading(true);

    try {
      let url = "http://localhost:5000/bills";

      if (selected) {
        const formattedCategory =
          selected.charAt(0).toUpperCase() + selected.slice(1).toLowerCase();
        url = `http://localhost:5000/bills-category?category=${formattedCategory}`;
      }

      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const result = await response.json();
      setBills(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading || userLoading) return <Spinner />;

  return (
    <div className="w-full">
      <h1 className="text-4xl text-center font-bold mb-10 mt-5 text-pink-500">
        All Bills
      </h1>

      {/* dropdown */}
      <div className="flex justify-end items-center w-11/12 mx-auto mb-5 gap-2">
        <select
          value={category}
          onChange={handleChange}
          className="select select-bordered focus:border-0 focus:outline-sky-300 rounded w-5/12 md:w-2/12"
        >
          <option value="">Sort By Category</option>
          <option value="electricity">Electricity</option>
          <option value="gas">Gas</option>
          <option value="water">Water</option>
          <option value="internet">Internet</option>
        </select>
      </div>

      {/* bills card */}
      <div className="grid grid-cols-1 mx-auto w-11/12 md:grid-cols-3 gap-3 mb-5">
        {bills.length > 0 ? (
          bills.map((bill) => <BillCard key={bill._id} bill={bill} />)
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Bills;
