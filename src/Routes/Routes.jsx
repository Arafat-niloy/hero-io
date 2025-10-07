import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        
        loader: () => fetch('/apps.json'),
      },
      {
        path: '/',
        element: <AllApps />,
        loader: () => fetch('/apps.json'),
      }
    ]
  },
]);