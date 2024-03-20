import { Route, Routes } from "react-router-dom";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import DetailPost from "@/pages/DetailPost";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public */}
        <Route element={<Layout />}>

        <Route index element={<Home />}/>
        <Route path="/detail-post/" element={<DetailPost />} />

        </Route>
      </Routes>

    </main>
  )
}

export default App
