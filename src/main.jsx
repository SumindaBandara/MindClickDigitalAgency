import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";

import ScrollToTop from "./Components/ScrollToTop";

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

// Root component that includes ScrollToTop
function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Layout />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />, // Use RootLayout instead of Layout directly
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