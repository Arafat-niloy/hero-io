import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "./AppCard";
import Loader from "../Components/Loader"; 

const AllApps = () => {
  const allApps = useLoaderData();
  const [search, setSearch] = useState("");
  
 
  const [isSearching, setIsSearching] = useState(false);
  
  
  const [filteredApps, setFilteredApps] = useState(allApps);

  
  useEffect(() => {
    setIsSearching(true); // সার্চ শুরু হলে লোডার চালু
    const term = search.trim().toLowerCase();

    // একটি ছোট্ট ডিলে দেওয়া হয়েছে যাতে লোডারটি দৃশ্যমান হয়
    const searchTimeout = setTimeout(() => {
      if (term) {
        const searched = allApps.filter((app) =>
          app.title.toLowerCase().includes(term)
        );
        setFilteredApps(searched);
      } else {
        setFilteredApps(allApps);
      }
      setIsSearching(false); // সার্চ শেষ হলে লোডার বন্ধ
    }, 300); // 300ms ডিলে

    // ক্লিন-আপ ফাংশন
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6 py-10 ">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <p className="text-center text-6xl p-30"> No App Found</p>
      )}
    </div>
  );
};

export default AllApps;