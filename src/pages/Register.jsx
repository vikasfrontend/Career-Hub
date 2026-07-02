import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../firebase";

function Register() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();
const handleRegister = async (e) => {
  e.preventDefault();

  try {

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    await updateProfile(
      userCredential.user,
      {
        displayName: name
      }
    );

    alert("Registration Successful 🚀");
    navigate("/login");

  } catch (error) {
    alert(error.message);
  }
};

return ( <div className="auth-container">

  {/* Left Side */}
  <div className="auth-left">
    <div className="left-bg"></div>
    <div className="left-overlay"></div>

    <div className="left-content">
      <div className="trust-pill">
        🚀 Trusted by 12,000+ learners
      </div>

      {/* <div className="brand-icon">
        🚀
      </div> */}

      <h1>Build your dream career today</h1>

      <p>
        Join thousands of professionals upskilling
        with Career Hub — the smarter way to grow.
      </p>
    </div>

    <div className="stats-row">
      <div className="stat-box">
        <h3>12K+</h3>
        <span>Learners</span>
      </div>

      <div className="stat-box">
        <h3>300+</h3>
        <span>Courses</span>
      </div>

      <div className="stat-box">
        <h3>94%</h3>
        <span>Hired</span>
      </div>
    </div>
  </div>

  {/* Right Side */}
  <div className="auth-right">
    <div className="auth-box">

      <h2>Create Account 🚀</h2>

      <p className="auth-subtitle">
        Join Career Hub and start your journey
      </p>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button type="submit">
          Register
        </button>

      </form>

      <p className="auth-link">
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>

    </div>
  </div>

</div>

);
}

export default Register;
