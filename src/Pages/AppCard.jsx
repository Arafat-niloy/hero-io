import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id, title, image, downloads, ratingAvg } = app;
  return (
    <Link
      to={`/app/${id}`}
      className="app_card shadow p-6 hover:shadow-2xl rounded bg-white"
    >
      <div className="flex justify-center bg-blue-50 rounded">
        <img src={image} alt="" />
      </div>
      <p className="my-4 font-bold">{title}</p>
      <div className="flex justify-between">
        <button className=" bg-[#F1F5E8] text-[#00D390] font-bold rounded-lg px-4 cursor">
          {downloads}M
        </button>
        <button className=" bg-[#FFF0E1] text-[#FF8811]  rounded-lg px-4 cursor">
          {ratingAvg} ⭐
        </button>
      </div>
    </Link>
  );
};

export default AppCard;
