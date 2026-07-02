
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>🚀</span>
        DevCareerHub
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Resume</a></li>
        <li><a href="#">Quiz</a></li>
        <li><a href="#">Notes</a></li>
      </ul>

      <div className="nav-btns">
          <a href="/login" className="login-btn">
  Login
</a>

<a href="/register" className="signup-btn">
  Register
</a>
        
      </div>
    </nav>
  );
}

export default Navbar;