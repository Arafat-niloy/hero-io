import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const allApps = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const [isInstalled, setIsInstalled] = useState(false);

  const getStoredApps = () => {
    const stored = localStorage.getItem("installedApps");
    if (stored) {
      return JSON.parse(stored);
    }
    return [];
  };

  const saveApp = (id) => {
    const storedApps = getStoredApps();
    if (!storedApps.includes(id)) {
      storedApps.push(id);
      localStorage.setItem("installedApps", JSON.stringify(storedApps));
    }
  };

  useEffect(() => {
    const storedApps = getStoredApps();
    if (storedApps.includes(parseInt(id))) {
      setIsInstalled(true);
    }
  }, [id]);

  const handleInstall = () => {
    setIsInstalled(true);
    saveApp(parseInt(id));
    toast.success(`${title} has been installed!`);
  };

  const app = allApps.find((app) => app.id === parseInt(id));
  console.log(app);
  const {
    image,
    title,
    companyName,
    description,
    ratingAvg,
    reviews,
    downloads,
    size,
    fullDescription,
    ratings,
  } = app || {};

  if (!app) {
    return <div className="text-center text-3xl my-20">App Not Found!</div>;
  }
  return (
    <div className="w-11/12 mx-auto mt-20">
      <div className="lg:flex gap-8">
        <div className="w-1/2 lg:w-auto mx-auto lg:mx-0 ">
          <img src={image} alt="" className="object-cover w-[350px]" />
        </div>
        <div className=" flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-5xl">{title}</h3>
            <p className="text-2xl mt-3">
              Developed by{" "}
              <span className="text-violet-500">{companyName}</span>
            </p>
          </div>
          <hr className="my-6 lg:mt-8 text-gray-300" />
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 text-center">
            <div className="">
              <img src="" alt="" />
              <p className="text-3xl">Downloads</p>
              <h3 className="text-8xl font-bold">{downloads}M</h3>
            </div>
            <div>
              <img src="" alt="" />
              <p className="text-3xl">Average Ratings</p>
              <h3 className="text-8xl font-bold">{ratingAvg}</h3>
            </div>
            <div>
              <img src="" alt="" />
              <p className="text-3xl">Total Reviews</p>
              <h3 className="text-8xl font-bold">{reviews}K</h3>
            </div>
          </div>
          <Link
            className="bg-green-500 my-8 py-2 rounded text-lg w-1/2 mx-auto lg:w-1/2 text-center lg:mx-0 md:px-4 text-white hover:bg-green-600"
            onClick={handleInstall}
            disabled={isInstalled}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </Link>
        </div>
      </div>
      <hr className="my-12 text-gray-300" />
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Review Ratings</h3>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <hr className="my-12 text-gray-300" />
      <div>
        <h3 className="text-4xl font-bold">Description</h3>
        <p className="text-gray-400 text-lg mb-8">{fullDescription}</p>
      </div>
    </div>
  );
};

export default AppDetails;
