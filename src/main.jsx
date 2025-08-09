import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Pages
import HomePage from "./pages/Home/HomePage";
import GetStartedPage from "./pages/GetStarted/GetStartedPage";
import StartProjectPage from "./pages/NewProject/StartProjectPage";
import DetailedServicesPage from "./pages/ServicesPage/DetailedServicesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import EducationPage from "./pages/EducationPage/EducationPage";
import ContactPage from "./pages/Contact/ContactPage";

// Layout
import Layout from "./Components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />, // global navigation + footer
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/GetStarted", element: <GetStartedPage /> },
      { path: "/NewProject", element: <StartProjectPage /> },
      { path: "/DetailedServicesPage", element: <DetailedServicesPage /> },
      { path: "/AboutPage", element: <AboutPage /> },
      { path: "/education", element: <EducationPage /> },
      { path: "/contact", element: <ContactPage /> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
