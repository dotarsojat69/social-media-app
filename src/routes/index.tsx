import { Route, Routes } from "react-router-dom";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public */}
        <Route element={<Layout />}>

        <Route index element={<Home />}/>

        </Route>
      </Routes>

    </main>
  )
}

export default App
