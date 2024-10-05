import { useState } from "react";
import Sidebar from "../component/sidebar.js";
import { Link, useLocation } from "react-router-dom";  // Import useLocation
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false); // State to toggle sidebar
  const location = useLocation(); // Get the current path
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];

  function toggleSidebar() {
    setShowSidebar(!showSidebar); 
  }

  function closeSidebar() {
    setShowSidebar(false); 
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>oo</span>diesHub
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
              key={link.name} 
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={toggleSidebar} 
          className={`sidebar-btn ${showSidebar ? "active" : ""}`} // Change the button style based on sidebar state
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {showSidebar && <Sidebar close={closeSidebar} Link={links} />} {/* Sidebar visibility */}
    </>
  );
}
