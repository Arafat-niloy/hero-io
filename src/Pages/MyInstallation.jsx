import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import ratingImg from "../assets/icon-ratings.png";
import dwnldImg from "../assets/icon-downloads.png";

const MyInstallation = () => {
  const allApps = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  const getStoredApps = () => {
    const stored = localStorage.getItem("installedApps");
    return stored ? JSON.parse(stored) : [];
  };

  // remove app part
  const removeApp = (id) => {
    let storedApps = getStoredApps();
    storedApps = storedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(storedApps));
  };

  // Installed Apps Load
  useEffect(() => {
    const storedApps = getStoredApps();
    setInstalledApps(storedApps);
  }, []);

  // Uninstall click part
  const handleUninstall = (id, title) => {
    removeApp(id);
    const remainingApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(remainingApps);
    toast.error(`${title} has been uninstalled!`);
  };

  // sort by part
  const handleSort = (option) => {
    setSortOption(option);
    let sortedApps = [...installedApps];

    if (option === "downloadsHighLow") {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    } else if (option === "downloadsLowHigh") {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    }

    setInstalledApps(sortedApps);
  };

  // no app part
  if (installedApps.length === 0) {
    return <p className="text-center text-2xl my-20">No Apps Installed Yet.</p>;
  }

  return (
    <div className="p-10">
      <div className=" space-y-2 mt-8">
        <h3 className="text-center text-4xl font-bold">Your Installed Apps</h3>
        <p className="text-center text-xl text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 mt-6">
        {/* Left side */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Installed Apps:
          <span className="text-primary"> {installedApps.length}</span>
        </h2>

        {/* Right side */}
        <div className="mt-4 md:mt-0">
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="select select-bordered"
          >
            <option value="default">Sort by Downloads</option>
            <option value="downloadsHighLow">High-Low</option>
            <option value="downloadsLowHigh">Low-High</option>
          </select>
        </div>
      </div>

      {/* Apps Card */}
      <div className="grid grid-cols-1 gap-6">
        {installedApps.map((app) => (
          <div key={app.id} className="bg-white rounded   shadow-xl flex items-center">
            <div className=" w-2/12 ">
              <img
                src={app.image}
                alt={app.title}
                className="h-30 object-cover mx-auto"
              />
            </div>
            <div className=" w-8/12 space-y-3">
              <h2 className="text-2xl font-bold">{app.title}</h2>

              <div className="flex gap-6">
                <p className="text-[#00D390] text-lg font-semibold flex items-center gap-2">
                <img src={dwnldImg} alt="" className="w-5 h-5" />
                {app.downloads}M
              </p>
              <p className="flex items-center text-lg font-semibold  gap-2 ">
                <img src={ratingImg} alt="" className="w-5 h-5" />
                {app.ratingAvg}
              </p>
              <p className="flex items-center text-lg font-semibold text-gray-500  gap-2 ">
                
                {app.size} MB
              </p>
              </div>
              
            </div>
            <div className="w-2/12 text-center">
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="btn btn-error text-white text-xl"
                >
                  Uninstall
                </button>
              </div>
          </div>
          // <div key={app.id} className="shadow">
          //   <div>
          //     <img src={app.image} alt={app.title} />
          //   </div>
          //   <div>
          //     <h3>{app.title}</h3>
          //     <div>
          //       <p>{app.downloads}M</p>
          //       <p>{app.ratingAvg}</p>
          //       <p>{app.size}</p>
          //     </div>
          //   </div>
          //   <div>
          //     <button
          //       onClick={() => handleUninstall(app.id, app.title)}
          //       className="text-white bg-[#00D390]"
          //     >
          //       Uninstall
          //     </button>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
