import React from "react";
import Animotion from "../Animotion/Animotion";

const Spinner = () => {
  return (
    <Animotion>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-10 h-10 rounded-full animate-spin border-4 border-t-transparent border-b-transparent border-l-pink-500 border-r-blue-500"></div>
      </div>
    </Animotion>
  );
};

export default Spinner;
