import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto ">
        <Navbar />
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default MainLayout;
