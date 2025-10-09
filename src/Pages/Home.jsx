import React from "react";
import heroImg from "../assets/hero.png";
import AppCard from "./AppCard";
import { Link, useLoaderData } from "react-router";
const Home = () => {
  const allApps = useLoaderData();
  console.log(allApps);
  const topApps = allApps.slice(0, 8);

  return (
    <div className="  ">
      {/* banner hero section */}
      <div className="space-y-6 pt-22 w-11/12 mx-auto text-center">
        <h2 className="text-6xl font-bold">
          We Build <br />
          <span className="text-violet-600">Productive</span> Apps
        </h2>
        <p className="text-lg">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="space-x-3">
          <a href="/" className="border border-gray-400 p-1 rounded ">
            Google Play
          </a>
          <a href="/" className="border border-gray-400 p-1 rounded ">
            App Store
          </a>
        </div>
        <div className="text-center flex justify-center">
          <img src={heroImg} alt="" className="" />
        </div>
      </div>

      {/* trusted section */}
      <div className="bg-violet-600 text-white space-y-14 py-16 text-center">
        <h3 className="text-2xl md:text-4xl font-bold">
          Trusted by Millions, Built for You
        </h3>
        <div className="flex justify-center gap-16 lg:gap-34 flex-col md:flex-row">
          <div>
            <p>Total Downloads</p>
            <h3 className="font-bold text-5xl">29.6M</h3>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h3 className="font-bold text-5xl">906K</h3>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h3 className="font-bold text-5xl">132+</h3>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>

      {/* trending apps section */}
      <div className="w-11/12 mx-auto pt-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold">Trending Apps</h3>
          <p className="mt-4 mb-8">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* card map */}
          {topApps?.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/apps" className="btn btn-outline btn-primary mb-8">Show All</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
