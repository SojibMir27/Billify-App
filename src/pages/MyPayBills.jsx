import React, { use, useEffect, useState } from "react";
import UseTitle from "../hooks/UseTitle";
import { AuthContext } from "../context/AuthContext";
import MyPaidBillsCard from "./MyPaidBillsCard";
import Spinner from "./Spinner";

const MyPayBills = () => {
  UseTitle("My-Bills || Billify");

  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState(null);
  const { user, loading: userloading } = use(AuthContext);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          `http://localhost:5000/my-bills?email=${user.email}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBills(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [user]);

  if (loading || userloading) return <Spinner />;

  return (
    <>
      <div>
        {bills?.length === 0 ? (
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
          <div className="grid grid-cols-1 mx-auto w-11/12 md:grid-cols-3 gap-3 my-2">
            {bills.map((bill) => (
              <MyPaidBillsCard key={bill._id} bill={bill} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyPayBills;
