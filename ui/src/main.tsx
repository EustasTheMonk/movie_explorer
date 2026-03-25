// import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import {RouterProvider} from "react-router/dom";
import {router} from "./routes.tsx";

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
