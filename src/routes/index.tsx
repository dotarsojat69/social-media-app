import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/pages/Home';
import Index from '@/pages/landing-page/index';
import Register from '@/pages/landing-page/register';
import Login from '@/pages/landing-page/login';
import CreatePost from '@/pages/CreatePost';
import Layout from '@/components/Layout';
import DetailPost from '@/pages/DetailPost';


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Index />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/landing-page/register",
        element: <Register />,
      },
      {
        path: "/landing-page/login",
        element: <Login />,
      },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/detail-post",
        element: <DetailPost />,
      },
    ],
    },
    ]);
 

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;