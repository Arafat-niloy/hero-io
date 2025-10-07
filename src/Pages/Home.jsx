import React from "react";
import heroImg from "../assets/hero.png";
const Home = () => {
  return (
    <div className="  ">
      <div className="space-y-6 pt-22 w-11/12 mx-auto text-center">
        <h2 className="text-6xl font-bold">
          We Build <br />
          <span className="text-violet-600">Productive</span> Apps
        </h2>
        <p className="text-lg w-[850px] mx-auto">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="space-x-3">
          <button className="border border-gray-400 p-1 rounded ">Google Play</button>
          <button className="border border-gray-400 p-1 rounded ">App Store</button>
        </div>
        <div className="text-center flex justify-center">
          <img src={heroImg} alt="" className="" />
        </div>
      </div>
      <div className="bg-violet-600 text-white space-y-14 py-16 text-center">
        <h3 className="text-4xl font-bold">Trusted by Millions, Built for You</h3>
        <div className="flex justify-center gap-34">
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
      <div className="w-11/12 mx-auto pt-16">
        <div className="text-center">
            <h3 className="text-3xl font-bold">Trending Apps</h3>
            <p className="mt-4 mb-8">Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="border p-6">
                <img src={heroImg} alt="" />
                <p className="my-4 font-bold">Forest: Focus for Productivity</p>
                <div className="flex justify-between">
                    <button className="border bg-gray-200 rounded-lg px-4 cursor">9M</button>
                    <button className="border bg-gray-200 rounded-lg px-4 cursor">5</button>
                </div>
            </div>
            <div className="border">
                <img src="" alt="" />
                <p>Forest: Focus for Productivity</p>
                <div>
                    <button>9M</button>
                    <button>5</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
