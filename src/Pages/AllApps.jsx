import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "./AppCard";

const AllApps = () => {
  const allApps = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center py-10 space-y-2">
        <h2 className="text-4xl font-bold">Our All Applications </h2>
        <p className="text-lg md:text-xl text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col gap-3 justify-between md:flex-row">
        <h3 className="text-2xl lg:text-4xl font-medium"> () Apps Found</h3>
        <input
          type="text"
          placeholder="Search app..."
          className="input input-bordered w-full max-w-xs text-2xl"
          
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6 py-10">
        {/* card map */}
        {allApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
