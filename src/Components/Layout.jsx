import { Outlet } from "react-router-dom";
import Navigation from "./Navigation"; // Your navigation bar component
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet /> {/* This is where each page will render */}
      </main>
      <Footer />
    </>
  );
}
