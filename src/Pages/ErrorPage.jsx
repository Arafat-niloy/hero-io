import React from "react";
import errorImg from "../assets/error-404.png";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="text-center mt-36">
      <div>
        <img src={errorImg} alt="" className="mx-auto" />
      </div>
      <div className="my-6">
        <h3 className="text-4xl">Oops, page not found!</h3>
        <p className="text-xl text-gray-500">
          The page you are looking for is not available.
        </p>
      </div>
      <div>
        <Link to='/' className="btn btn-primary px-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
