import React from "react";
import { Link } from "react-router";
import ratingImg from "../assets/icon-ratings.png"
import dwnldImg from "../assets/icon-downloads.png"

const AppCard = ({ app }) => {
  const { id, title, image, downloads, ratingAvg } = app;
  return (
    <Link
      to={`/apps/${id}`}
      className="app_card shadow p-6 hover:shadow-2xl rounded bg-white"
    >
      <div className="flex justify-center  rounded  h-40">
        <img src={image} alt="" />
      </div>
      <p className="my-4 font-bold text-lg">{title}</p>
      <div className="flex justify-between">
        <button className=" bg-[#F1F5E8] py-1 flex items-center gap-2 text-xl text-[#00D390] font-semibold rounded-lg px-4 cursor">
         <img src={dwnldImg} alt="" className="w-4 h-4" /> {downloads}M
        </button>
        <button className="flex items-center gap-2 text-xl bg-[#FFF0E1] text-[#FF8811]  rounded-lg px-4 cursor">
          {ratingAvg} <img src={ratingImg} alt="" className="w-4 h-4" />
        </button>
      </div>
    </Link>
  );
};

export default AppCard;
