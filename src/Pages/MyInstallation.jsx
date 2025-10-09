import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

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
    return (
      <p className="text-center text-2xl my-20">No Apps Installed Yet.</p>
    );
  }

  return (
    <div className="p-10">
      {/* Left side */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        
        <h2 className="text-2xl md:text-3xl font-bold">
          Installed Apps:
          <span className="text-primary"> {installedApps.length}</span>
        </h2>

        {/* Right side */}
        <div className="mt-4 md:mt-0">
          <label className="font-semibold mr-2 text-lg">Sort by Downloads:</label>
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="select select-bordered"
          >
            <option value="default">Default</option>
            <option value="downloadsHighLow">High-Low</option>
            <option value="downloadsLowHigh">Low-High</option>
          </select>
        </div>
      </div>

      {/* Apps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {installedApps.map((app) => (
          <div key={app.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={app.image}
                alt={app.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{app.title}</h2>
              <p className="text-gray-500 text-sm">
                Downloads: {app.downloads?.toLocaleString() || 0}M
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="btn btn-error"
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
