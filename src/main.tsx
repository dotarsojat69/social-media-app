import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from "@/routes/index"

import "@/styles/globals.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
