import React, { use, useEffect, useState } from "react";
import UseTitle from "../hooks/UseTitle";
import { AuthContext } from "../context/AuthContext";
import MyPaidBillsCard from "./MyPaidBillsCard";

const MyPayBills = () => {
  UseTitle("My-Bills || Billify");

  const [bills, setBills] = useState([]); // store API data
  const [loading, setLoading] = useState(true); // loading indicator
  const [, setError] = useState(null); // error state
  const { user, loading: userloading } = use(AuthContext);

  useEffect(() => {
    // Define async function inside useEffect
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

    fetchUsers(); // call the async function
  }, [user]); // Empty dependency array -> runs only once after component mounts

  // UI rendering logic
  if (loading || userloading) return <p>Loading users... </p>;

  return (
    <>
      <div className="text-4xl text-center font-bold mb-10 mt-5">
        {" "}
        My Pay Bills{" "}
      </div>

      <div className="grid grid-cols-1 mx-auto w-11/12 md:grid-cols-3 gap-3 mb-5">
        {bills.map((bill) => (
          <MyPaidBillsCard key={bill._id} bill={bill} />
        ))}

        {/* optional */}
        {/* <MyPaidBillsCard /> */}
      </div>
    </>
  );
};

export default MyPayBills;
