import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/pages/Home';

export default function Router() {
    const routes = [
      {
        path: '/home',
        element: <Home />,
      },
    ];
      const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

