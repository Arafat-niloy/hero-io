import React, { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ratingImg from "../assets/icon-ratings.png";
import dwnldImg from "../assets/icon-downloads.png";
import reviewImg from "../assets/icon-review.png";
import notFoundImg from "../assets/App-Error.png";

import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const AppDetails = () => {
  const allApps = useLoaderData();
  const { id } = useParams();
  const app = allApps.find((app) => app.id === parseInt(id));
  const [isInstalled, setIsInstalled] = useState(false);

  // Local Storage e data load
  const getStoredApps = () => {
    const stored = localStorage.getItem("installedApps");
    return stored ? JSON.parse(stored) : [];
  };

  // App save in local storage
  const saveApp = (app) => {
    const existingList = getStoredApps();
    const isDuplicate = existingList.some((a) => a.id === app.id);

    if (isDuplicate) {
      toast.info("Already installed");
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem("installedApps", JSON.stringify(updatedList));
    toast.success(`${app.title} has been installed!`);
  };

  useEffect(() => {
    const storedApps = getStoredApps();
    const found = storedApps.some((a) => a.id === parseInt(id));
    if (found) {
      setIsInstalled(true);
    }
  }, [id]);

  const handleInstall = () => {
    saveApp(app);
    setIsInstalled(true);
  };
  const {
    image,
    title,
    companyName,
    ratingAvg,
    reviews,
    downloads,
    size,
    fullDescription,
    ratings,
  } = app || {};

  if (!app) {
    return (
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
    );
  }
  return (
    <div className="w-11/12 mx-auto mt-20">
      <div className="lg:flex gap-8 ">
        <div className="w-1/2 lg:w-auto mx-auto lg:mx-0 ">
          <img
            src={image}
            alt={title}
            className="object-cover w-full bg-white h-105"
          />
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
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-18 md:gap-22 text-center md:text-start">
            <div className="">
              <img src={dwnldImg} alt="" className="mx-auto md:mx-0" />
              <p className="text-3xl">Downloads</p>
              <h3 className="text-8xl font-bold">{downloads}M</h3>
            </div>
            <div>
              <img src={ratingImg} alt="" className="mx-auto md:mx-0" />
              <p className="text-3xl">Average Ratings</p>
              <h3 className="text-8xl font-bold">{ratingAvg}</h3>
            </div>
            <div>
              <img src={reviewImg} alt="" className="mx-auto md:mx-0" />
              <p className="text-3xl">Total Reviews</p>
              <h3 className="text-8xl font-bold">{reviews}K</h3>
            </div>
          </div>
          <button // Link এর পরিবর্তে button ব্যবহার করা ভালো কারণ এটি কোনো পেজে নেভিগেট করছে না
            className="bg-green-500 mt-6 py-2 rounded text-lg w-1/2 mx-auto lg:w-1/2 text-center lg:mx-0 md:px-4 text-white hover:bg-green-600 disabled:bg-gray-400 cursor-pointer"
            onClick={handleInstall}
            disabled={isInstalled}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <hr className="my-12 text-gray-300" />

      {/* ratings recharts - এই অংশটি পরিবর্তন করা হয়েছে */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Review Ratings</h3>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart
              layout="vertical" // চার্টটিকে হরাইজন্টাল করা হয়েছে
              data={ratings ? [...ratings].reverse() : []}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#FF8811" name="Total Votes" />
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
