import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/Home/HomePage'

import GetStartedPage from "./pages/GetStarted/GetStartedPage";
import StartProjectPage from "./pages/NewProject/StartProjectPage";
import DetailedServicesPage from "./pages/ServicesPage/DetailedServicesPage";
import AboutPage from "./pages/AboutPage/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/GetStarted",
    element: <GetStartedPage />,
  },
  {
    path: "/NewProject",
    element: <StartProjectPage />,
  },
  {
    path: "/DetailedServicesPage",
    element: <DetailedServicesPage />,
  },
  {
    path: "/AboutPage",
    element: <AboutPage />,
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
