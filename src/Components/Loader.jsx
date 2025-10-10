import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-200px)] space-x-3">
      <span className="loading loading-spinner loading-lg text-6xl"></span> 
      <p className="text-4xl"> Loading...</p>
    </div>
  );
};

export default Loader;