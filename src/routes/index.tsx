import { Route, Routes } from "react-router-dom";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import DetailPost from "@/pages/DetailPost";
import Index from "@/pages/landing-page";
import Login from "@/pages/landing-page/login";
import Register from "@/pages/landing-page/register";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<Index />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Route>

        {/* private */}
        <Route element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/detail-post" element={<DetailPost />} />

        </Route>
      </Routes>

    </main>
  )
}

export default App
