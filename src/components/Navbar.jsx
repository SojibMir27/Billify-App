import { Link, NavLink, useNavigate } from "react-router";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogOut = () => {
    logoutUser().then(() => {
      navigate("/login");
      toast.success("Logout successful");
    });
  };

  const links = (
    <>
      <li className="font-semibold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/bills"}>Bills</NavLink>
      </li>

      <li className="font-semibold">
        <NavLink to={"/my-pay-bills"}>My Paid Bills</NavLink>
      </li>

      <li className="font-semibold">
        <NavLink to={"/about"}>About</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar relative z-50 rounded shadow-sm glass-card max-w-7xl mx-auto px-2 sm:px-4">
      <div className="navbar-start">
        <div className="dropdown md:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            className={`menu menu-sm dropdown-content absolute top-full left-0 bg-base-100 rounded-box w-52 p-2 shadow 'z-[9999]' transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {links}
          </ul>
        </div>

        <Link
          to={"/"}
          className="flex items-center gap-1 text-pink-500 text-xl font-bold"
        >
          Billify
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal">{links}</ul>
      </div>

      <div className="navbar-end flex items-center relative">
        <input
          type="checkbox"
          className="toggle"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />

        {user ? (
          <>
            <div className="relative">
              <div
                className="btn btn-ghost btn-circle avatar mx-1"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="w-8 h-8 border-2 border-gray-300 rounded-full overflow-hidden">
                  <img
                    alt="User Avatar"
                    src={user.photoURL}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <ul
                className={`menu menu-sm dropdown-content absolute -right-13 bg-base-100 rounded-box w-42 p-2 shadow 'z-[9999]' transition-all duration-300 border border-purple-500 ${
                  dropdownOpen ? "block" : "hidden"
                }`}
              >
                <div className="text-center pb-2 -mt-2">
                  <li className="text-xl font-bold ">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
              </ul>
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-sm text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800"
            >
              <IoLogOut /> Logout
            </button>
          </>
        ) : (
          <Link
            to={"/login"}
            className="btn btn-sm ml-2 text-white rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800"
          >
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
