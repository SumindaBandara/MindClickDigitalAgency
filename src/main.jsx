import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

import { ClerkProvider } from "@clerk/clerk-react";

// Blog pages
import BlogList from "./Blog/pages/BlogList";
import BlogDetail from "./Blog/pages/BlogDetail";
import CreateBlog from "./Blog/pages/CreateBlog";

// Layout
import Layout from "./Components/Layout";

const PUBLISHABLE_KEY = "pk_test_bmVhcmJ5LWJ1cnJvLTUwLmNsZXJrLmFjY291bnRzLmRldiQ";

// Root component
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
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/GetStarted", element: <GetStartedPage /> },
      { path: "/NewProject", element: <StartProjectPage /> },
      { path: "/DetailedServicesPage", element: <DetailedServicesPage /> },
      { path: "/AboutPage", element: <AboutPage /> },
      { path: "/education", element: <EducationPage /> },
      { path: "/contact", element: <ContactPage /> },

      // ✅ Blogs
      { path: "/blogs", element: <BlogList /> },
      { path: "/blogs/:id", element: <BlogDetail /> },
      { path: "/blogs/create", element: <CreateBlog /> }, // later protect with admin check
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
    </ClerkProvider>
  
);
