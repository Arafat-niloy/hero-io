import React, { useEffect, useState } from "react";

import { Link, useLoaderData } from "react-router-dom";
import AppCard from "./AppCard";
import Loader from "../Components/Loader";
import notFoundImg from "../assets/App-Error.png";

const AllApps = () => {
  const allApps = useLoaderData();
  const [search, setSearch] = useState("");

  const [isSearching, setIsSearching] = useState(false);

  const [filteredApps, setFilteredApps] = useState(allApps || []);

  useEffect(() => {
    setIsSearching(true);
    const term = search.trim().toLowerCase();

    const searchTimeout = setTimeout(() => {
      if (term) {
        const searched = allApps.filter((app) =>
          app.title.toLowerCase().includes(term)
        );
        setFilteredApps(searched);
      } else {
        setFilteredApps(allApps);
      }
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [search, allApps]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center py-10 space-y-2">
        <h2 className="text-4xl font-bold">Our All Applications </h2>
        <p className="text-lg md:text-xl text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col gap-3 justify-between md:flex-row mb-8">
        <h3 className="text-2xl lg:text-4xl font-medium">
          ({filteredApps.length}) Apps Found
        </h3>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search app..."
          className="input input-bordered w-full max-w-xs text-2xl"
        />
      </div>

      {isSearching ? (
        <Loader />
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6 pb-10 ">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-36">
          <div>
            <img src={notFoundImg} alt="" className="mx-auto" />
          </div>
          <div className="my-6">
            <h3 className="text-4xl">OPPS!! APP NOT FOUND</h3>
            <p className="text-xl text-gray-500">
              The App you are requesting is not found on our system. please try
              another apps.
            </p>
          </div>
          <div>
            <Link
              to="/apps"
              className="btn btn-primary mb-30 px-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
            >
              Go Back!
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllApps;
