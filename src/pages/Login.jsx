import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  alert("Login Button Clicked");

  try {
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    alert("Login Successful 🚀");
navigate("/dashboard");

  } catch (error) {
    alert(error.message);
  }
};
const handleForgotPassword = async () => {

  if (!email) {
    alert("Please enter your email first");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);

    alert(
      "Password reset link sent to your email 📧"
    );

  } catch (error) {
    alert(error.message);
  }
};
const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Google User:", result.user);

    alert("Google Login Successful 🚀");
navigate("/dashboard");
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
        🚀 DevCareerHub
      </div>

      {/* <div className="brand-icon">
        🚀
      </div> */}

      <h1>Welcome Back! Ready to grow?</h1>

      <p>
        Continue your journey with Career Hub
        and unlock new career opportunities.
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

      <h2>Welcome Back 👋</h2>

      <p className="auth-subtitle">
        Login to your Career Hub account
      </p>

      <form onSubmit={handleLogin}>

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

        <div className="auth-options">
          <label className="remember-me">
            <input type="checkbox" />
            Remember Me
          </label>

          <a
            type="button"
            className="forgot-link"
            onClick={handleForgotPassword}
            >
            Forgot Password?
           </a>
        </div>

        <button type="submit">
          Login
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
        type="button"
         className="google-btn"
          onClick={handleGoogleLogin}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="Google"
          />
          Continue with Google
        </button>

      </form>

      <p className="auth-link">
        Don't have an account?
        <Link to="/register"> Register</Link>
      </p>

    </div>
  </div>

</div>

);
}

export default Login;
