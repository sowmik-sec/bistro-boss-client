import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4 text-white">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userHome">
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd />
              Add a review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList />
              My Bookings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
