import React, { use } from "react";
import Banner from "./Banner";
import UseTitle from "../hooks/UseTitle";
import { Link, useLoaderData } from "react-router";
import Spinner from "../pages/Spinner";
import { AuthContext } from "../context/AuthContext";
import DisplayBillCard from "../pages/DisplayBillCard";


const Home = () => {
  UseTitle("Deshboard || Billify");
  const { loading } = use(AuthContext);
  const data = useLoaderData();

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {/* banner section */}
      <Banner data={data}/>

      {/* recent bill section */}
      <section className="my-5 py-10 w-11/12 mx-auto rounded-xl">
        <h2 className="text-center font-bold text-4xl mb-10">Recent Bills</h2>

        {/* recent bill card */}
        <div className="grid grid-cols-1 mx-auto w-11/12 md:grid-cols-3 gap-3 mb-5">
          {data.map((bill, index) => (
            <DisplayBillCard key={index} bill={bill}></DisplayBillCard>
          ))}
        </div>

        {/* go to all bills */}
        <div className="flex justify-center items-center mx-auto mb-5">
          <Link
            to={`/bills`}
            className="btn text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 w-2/12"
          >
            See More
          </Link>
        </div>
      </section>

      {/* bill manegment setction  */}
      <section className="my-5 py-10 w-11/12 mx-auto rounded-xl">
        <div className="w-11/12 mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 text-pink-500/80 ">
            Tips for Managing Your Bills
          </h2>
          <p className="text-center opacity-70 mb-10">
            Make your bill management smarter and stress-free using these
            helpful guidelines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl  text-center hover:shadow-red-500/40 hover:-translate-y-2 transition-all duration-200">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Stay Organized
              </h3>
              <p className="text-gray-600">
                Keep all your bills together in one place to easily track due
                dates and avoid missing payments.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-2xl text-center p-6 hover:shadow-red-500/40 hover:-translate-y-2 transition-all duration-200">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Set Payment Reminders
              </h3>
              <p className="text-gray-600">
                Use apps or calendars to get alerts before your bills are due to
                skip late charges.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl  text-center hover:shadow-red-500/40 hover:-translate-y-2 transition-all duration-200">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Track Your Spending
              </h3>
              <p className="text-gray-600">
                Monitor bill history regularly to control your monthly spending
                and save money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* bills is important section */}
      <section className="my-5 py-10 w-11/12 mx-auto rounded-xl">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-pink-500/80 ">
            Why Managing Bills Is Important
          </h2>
          <p className="opacity-70 mb-12">
            Good bill management keeps your financial life smooth and
            stress-free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl  text-center hover:shadow-red-500/40 hover:-translate-y-2 transition-all duration-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Avoid Extra Fees
              </h3>
              <p className="text-gray-600">
                Paying bills late can lead to penalties and higher charges.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl  text-center hover:shadow-red-500/40 hover:-translate-y-2 transition-all duration-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Maintain Good Credit
              </h3>
              <p className="text-gray-600">
                Timely payments help keep your credit score positive and strong.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl  text-center hover:shadow-red-500/40 hover:-translate-y-2 transition-all duration-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Financial Freedom
              </h3>
              <p className="text-gray-600">
                Proper planning keeps your monthly budget under control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* smart bill management section */}
      <section className="my-5 py-10 w-9/12 mx-auto rounded-xl">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Text */}
          <div className="md:w-5/6">
            <h2 className="text-2xl md:text-4xl font-bold mb-5 text-pink-500/80 text-center md:text-start">
              Smart Bill Management
            </h2>
            <p className=" mb-6 text-center md:text-start">
              Keep all your bills organized and always pay on time. Smart
              management helps you track expenses, avoid late fees, and save
              money each month.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Track monthly spending</li>
              <li>Set reminders for due dates</li>
              <li>Analyze bills for unnecessary costs</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co.com/qMbyFxhB/download-1.jpg"
              alt="Bill management illustration"
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-purple-500/20"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
