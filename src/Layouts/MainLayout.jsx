import React from "react";

import Footer from "../Components/Footer";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Loader from "../Components/Loader";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-gray-100">
        {navigation.state === "loading" ? <Loader /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
