import React, { useState, useEffect } from "react";

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
import HeroImage from "../assets/hero.svg";
import { auth } from "../firebase";

function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const drawerItems = [
    { icon: <FaFileAlt />, label: "Resume Builder" },
    { icon: <FaBriefcase />, label: "Job Portal" },
    { icon: <FaBrain />, label: "Aptitude Quiz" },
    { icon: <FaBullseye />, label: "Interview Prep" },
    { icon: <FaStickyNote />, label: "Notes Hub" },
    { icon: <FaUser />, label: "Profile" },
    { icon: <FaClipboardList />, label: "Applications" },
    { icon: <FaCog />, label: "Settings" }
  ];

  return (
    <div className="dashboard">

      <aside className="sidebar">
        <div className="logo">
          🚀 Career Hub
        </div>

        <ul>

          <li>
            <FaHome />
            Dashboard
          </li>

          <li>
            <FaFileAlt />
            Resume Builder
          </li>

          <li>
            <FaBriefcase />
            Job Portal
          </li>

          <li>
            <FaBrain />
            Aptitude Quiz
          </li>

          <li>
            <FaBullseye />
            Interview Prep
          </li>

          <li>
            <FaStickyNote />
            Notes Hub
          </li>

          <li>
            <FaUser />
            Profile
          </li>

          <li>
            <FaClipboardList />
            Applications
          </li>

          <li>
            <FaCog />
            Settings
          </li>

          <li>
            <FaSignOutAlt />
            Logout
          </li>
          <div className="career-card">
            <h3>Build Your Career</h3>

            <h2>
              Step by Step 🚀
            </h2>

            <p>
              Explore opportunities and
              achieve your goals.
            </p>

            <button>
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

            <input
              type="text"
              placeholder="Search anything..."
            />
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
                src={
                  user?.photoURL ||
                  "https://i.pravatar.cc/150?img=12"
                }
                alt="profile"
              />

              <div className="profile-info">
                <h4>
                  Hi, {user?.displayName || "User"}
                </h4>

                <p>
                  {user?.email}
                </p>
              </div>

              <FaChevronDown className="down-icon" />
            </div>
          </div>
        </div>

        {mobileSearchOpen && (
          <div className="mobile-search-panel">
            <div className="search-box mobile-search">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search anything..."
              />
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
            {drawerItems.map((item) => (
              <li key={item.label} onClick={() => setDrawerOpen(false)}>
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

        <div className="hero-banner">

  <div className="hero-content">
    <h1>
  Welcome back, {user?.displayName || "User"}! 👋
    </h1>
    <p> Let's continuebsp building your amazing career<br/>
    You are doing great! Keep going.</p>
  </div>

  <div className="hero-image">
    <img
      src={HeroImage}
      alt="Hero"
    />
  </div>

</div>
        <div className="stats-container">

          <div className="stat-card">
            <div className="icon resume">
              📄
            </div>

            <div>
              <h4>Resumes Built</h4>
              <h2>2</h2>
              <p>Keep updating!</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon jobs">
              💼
            </div>

            <div>
              <h4>Jobs Saved</h4>
              <h2>8</h2>
              <p>Great choices!</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon quiz">
              📈
            </div>

            <div>
              <h4>Quizzes Taken</h4>
              <h2>5</h2>
              <p>Keep practicing!</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon active">
              📅
            </div>

            <div>
              <h4>Days Active</h4>
              <h2>12</h2>
              <p>Stay consistent!</p>
            </div>
          </div>

        </div>
        
          <h2 className="section-title">
            Quick Access
          </h2>

          <div className="quick-access">

            <div className="quick-card">
              <div className="card-icon purple">
                <FaFileAlt />
              </div>

              <h3>Resume Builder</h3>

              <p>
                Create professional resumes in minutes
              </p>

              <button className="btn-purple">
                Build Now
              </button>
            </div>

            <div className="quick-card">
              <div className="card-icon green">
                <FaBriefcase />
              </div>

              <h3>Job Portal</h3>

              <p>
                Find the best job opportunities
              </p>

              <button className="btn-green">
                Explore Jobs
              </button>
            </div>

            <div className="quick-card">
              <div className="card-icon yellow">
                <FaBrain />
              </div>

              <h3>Aptitude Quiz</h3>

              <p>
                Test your skills and improve
              </p>

              <button className="btn-yellow">
                Start Quiz
              </button>
            </div>

            <div className="quick-card">
              <div className="card-icon pink">
                <FaBullseye />
              </div>

              <h3>Interview Prep</h3>

              <p>
                Prepare for interviews like a pro
              </p>

              <button className="btn-pink">
                Practice Now
              </button>
            </div>

            <div className="quick-card">
              <div className="card-icon blue">
                <FaStickyNote />
              </div>

              <h3>Notes Hub</h3>

              <p>
                Study notes and resources
              </p>

              <button className="btn-blue">
                View Notes
              </button>
            </div>

            <div className="quick-card">
              <div className="card-icon profile">
                <FaUser />
              </div>

              <h3>My Profile</h3>

              <p>
                View and update your profile
              </p>

              <button className="btn-profile">
                View Profile
              </button>
            </div>

          </div>
  
      
 
      </main>


    </div>

  );
}

export default Dashboard;