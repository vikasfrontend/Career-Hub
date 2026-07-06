import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaBriefcase,
  FaBrain,
  FaBullseye,
  FaStickyNote,
  FaUser,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaChevronDown,
  FaSearch
} from "react-icons/fa";
import { auth } from "../firebase";

function DashboardLayout({ children, activeMenu = "Dashboard" }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaFileAlt />, label: "Resume Builder", path: "/resume-builder" },
    { icon: <FaBriefcase />, label: "Job Portal", path: "/jobs" },
    { icon: <FaBrain />, label: "Aptitude Quiz", path: "/quiz" },
    { icon: <FaBullseye />, label: "Interview Prep", path: "/interview-questions" },
    { icon: <FaStickyNote />, label: "Notes Hub", path: "/notes" },
    { icon: <FaUser />, label: "Profile", path: "/profile" },
    { icon: <FaClipboardList />, label: "Applications", path: "/applications" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
    { icon: <FaSignOutAlt />, label: "Logout", path: null }
  ];

  const handleMenuClick = (item) => {
    setDrawerOpen(false);
    if (item.path) {
      navigate(item.path);
    }
  };

  const isActive = (label) => label === activeMenu;

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">🚀 Career Hub</div>

        <ul>
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={isActive(item.label) ? "active-menu" : ""}
              onClick={() => handleMenuClick(item)}
            >
              {item.icon}
              {item.label}
            </li>
          ))}

          <div className="career-card">
            <h3>Build Your Career</h3>
            <h2>Step by Step 🚀</h2>
            <p>Explore opportunities and achieve your goals.</p>
            <button type="button" onClick={() => navigate("/resume-builder")}>
              Explore Now
            </button>
          </div>
        </ul>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <button
            className="drawer-toggle"
            type="button"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className="topbar-logo">🚀Career Hub</div>

          <div className="search-box desktop-search">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search anything..." />
          </div>

          <button
            className="mobile-search-toggle"
            type="button"
            aria-label="Search"
            onClick={() => setMobileSearchOpen((prev) => !prev)}
          >
            <FaSearch />
          </button>

          <div className="topbar-right">
            <button className="notification" type="button" aria-label="Show notifications">
              <FaBell />
            </button>

            <div className="profile-box">
              <img
                src={user?.photoURL || "https://i.pravatar.cc/150?img=12"}
                alt="profile"
              />

              <div className="profile-info">
                <h4>Hi, {user?.displayName || "User"}</h4>
                <p>{user?.email}</p>
              </div>

              <FaChevronDown className="down-icon" />
            </div>
          </div>
        </div>

        {mobileSearchOpen && (
          <div className="mobile-search-panel">
            <div className="search-box mobile-search">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search anything..." />
            </div>
          </div>
        )}

        <div className={`dashboard-drawer ${drawerOpen ? "open" : ""}`}>
          <div className="drawer-header">
            <div className="drawer-brand">Career Hub</div>
            <button
              type="button"
              className="drawer-close"
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            >
              ×
            </button>
          </div>
          <ul className="drawer-menu">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={isActive(item.label) ? "active-menu" : ""}
                onClick={() => handleMenuClick(item)}
              >
                <span className="drawer-icon">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`drawer-overlay ${drawerOpen ? "active" : ""}`}
          onClick={() => setDrawerOpen(false)}
        />

        <div className="layout-page-content">{children}</div>
      </main>
    </div>
  );
}

export default DashboardLayout;
