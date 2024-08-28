import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
