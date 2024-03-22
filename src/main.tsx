import ReactDOM from "react-dom/client";

import "@/styles/globals.css";
// import "@/styles/custom.css";
import App from "./routes";

import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster />
    <App />
  </>
);
