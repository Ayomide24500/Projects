import { createBrowserRouter } from "react-router-dom";
// import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
// import DashboardLayout from "../DashBoard/DashboardLayout";
// import UserHome from "../DashBoard/UserHome";
import Layout from "../FileCommon/Layout";
import Flyer from "../pages/Flyer";
import Mainpage from "../pages/Mainpage";
// import HomeScreen from "../pages/Homescreen";
// import MainCard from "../pages/innercard";
// import Upload from "../pages/upload"

export const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Mainpage />,
      },
    ],
  },
  {
    path: "/flyer",
    element: <Flyer />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  // {
  //   path: "/UserDashboard",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <UserHome />,
  //     },
  //   ],
  // },
]);
