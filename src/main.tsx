<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from "@/routes/index"

import "@/styles/globals.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
=======

import ReactDOM from 'react-dom/client'

import Home from './pages/Home'
import "./styles/globals.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    
    
    <Home />
    
  </>,
)
>>>>>>> origin/dev
