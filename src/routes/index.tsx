import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/pages/Home';
import Index from '@/pages/landing-page/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/landing-page",
    element: <Index />,
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;
