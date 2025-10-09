import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-200px)]">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
};

export default Loader;