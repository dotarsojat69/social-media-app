import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/Home";
import Index from "@/pages/landing-page/index";
import Register from "@/pages/landing-page/register";
import Login from "@/pages/landing-page/login";
import CreatePost from "@/pages/CreatePost";
import Layout from "@/components/Layout";
import DetailPost from '@/pages/DetailPost';
import Profile from '@/pages/Profile';
import EditPost from "@/pages/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/detail-post",
        element: <DetailPost />,
      },
      {
        path: "/update-post",
        element: <EditPost />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
