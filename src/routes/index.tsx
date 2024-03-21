import { Route, Routes } from "react-router-dom"
import Layout from "@/components/Layout"
import Home from "@/pages/Home"
import Profile from "@/user/profile"

<<<<<<< HEAD
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
=======
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
>>>>>>> origin/dev
