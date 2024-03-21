import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/pages/Home';
import Index from '@/pages/landing-page/index';
import Register from '@/pages/landing-page/register';
import Login from '@/pages/landing-page/login';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/landing-page",
    element: <Index />,
  },
  {
    path: "/landing-page/register",
    element: <Register />,
  },
  {
    path: "/landing-page/login",
    element: <Login />,
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;