import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import MyInstallation from "../Pages/MyInstallation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/apps",
        element: <AllApps />,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/installation",
        element: <MyInstallation />,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
        loader: () => fetch("/appData.json"),
      },
    ],
  },
]);
