import { Routes, Route } from "react-router-dom";

import RootLayout from "./_root/RootLayout";

import "./global.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        {/* <Route element={<AuthLayout />}>
          
        </Route> */}

        {/* private routes */}
        <Route element={<RootLayout />}>
          
        </Route>
      </Routes>

      
    </main>
  );
};

export default App;
