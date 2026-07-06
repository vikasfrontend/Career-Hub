import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaBriefcase, FaBrain, FaBullseye, FaStickyNote, FaUser } from "react-icons/fa";
import HeroImage from "../assets/hero.svg";
import DashboardLayout from "../components/DashboardLayout";
import { auth } from "../firebase";

function Dashboard() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="dashboard-home">
        <div className="hero-banner">
          <div className="hero-content">
            <h1>Welcome back, {user?.displayName || "User"}! 👋</h1>
            <p>
              Let’s continue building your amazing career.
              <br />
              You are doing great! Keep going.
            </p>
          </div>

          <div className="hero-image">
            <img src={HeroImage} alt="Hero" />
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="icon resume">📄</div>
            <div>
              <h4>Resumes Built</h4>
              <h2>2</h2>
              <p>Keep updating!</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon jobs">💼</div>
            <div>
              <h4>Jobs Saved</h4>
              <h2>8</h2>
              <p>Great choices!</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon quiz">📈</div>
            <div>
              <h4>Quizzes Taken</h4>
              <h2>5</h2>
              <p>Keep practicing!</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon active">📅</div>
            <div>
              <h4>Days Active</h4>
              <h2>12</h2>
              <p>Stay consistent!</p>
            </div>
          </div>
        </div>

        <h2 className="section-title">Quick Access</h2>

        <div className="quick-access">
          <div className="quick-card">
            <div className="card-icon purple">
              <FaFileAlt />
            </div>
            <h3>Resume Builder</h3>
            <p>Create professional resumes in minutes</p>
            <button className="btn-purple" onClick={() => navigate("/resume-builder")}>
              Build Now
            </button>
          </div>

          <div className="quick-card">
            <div className="card-icon green">
              <FaBriefcase />
            </div>
            <h3>Job Portal</h3>
            <p>Find the best job opportunities</p>
            <button className="btn-green">Explore Jobs</button>
          </div>

          <div className="quick-card">
            <div className="card-icon yellow">
              <FaBrain />
            </div>
            <h3>Aptitude Quiz</h3>
            <p>Test your skills and improve</p>
            <button className="btn-yellow">Start Quiz</button>
          </div>

          <div className="quick-card">
            <div className="card-icon pink">
              <FaBullseye />
            </div>
            <h3>Interview Prep</h3>
            <p>Prepare for interviews like a pro</p>
            <button className="btn-pink">Practice Now</button>
          </div>

          <div className="quick-card">
            <div className="card-icon blue">
              <FaStickyNote />
            </div>
            <h3>Notes Hub</h3>
            <p>Study notes and resources</p>
            <button className="btn-blue">View Notes</button>
          </div>

          <div className="quick-card">
            <div className="card-icon profile">
              <FaUser />
            </div>
            <h3>My Profile</h3>
            <p>View and update your profile</p>
            <button className="btn-profile">View Profile</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;