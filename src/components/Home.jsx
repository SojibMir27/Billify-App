import React from "react";
import Banner from "./Banner";
import UseTitle from "../hooks/UseTitle";
import Spinner from "../pages/Spinner";
import ErrorPage from "../pages/ErrorPage";

const Home = () => {
  UseTitle("Deshboard || Billify");

  return (
    <div>
      <Banner />
      <ErrorPage />
      <Spinner />
    </div>
  );
};

export default Home;
