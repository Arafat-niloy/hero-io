import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import MyInstallation from "../Pages/MyInstallation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
        
        loader: () => fetch('/appData.json'),
      },
      
      {
        path: '/apps',
        element: <AllApps />,
        loader: () => fetch('/appData.json'),
      },
      {
        path: '/installation',
        element: <MyInstallation />,
        loader: () => fetch('/appData.json'),
      },
      {
        path: '/app/:id',
        element: <AppDetails />,
        loader: ({ params }) => fetch('/appData.json'),
      },
    ]
  },
]);