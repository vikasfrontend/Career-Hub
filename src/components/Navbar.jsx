
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>🚀</span>
        DevCareerHub
      </div>

      <input id="nav-toggle" type="checkbox" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="menu-toggle" aria-label="Open navigation">
        <span />
        <span />
        <span />
      </label>
      <label htmlFor="nav-toggle" className="nav-overlay" aria-label="Close navigation" />

      <ul className="nav-links">
        <li>
          <label htmlFor="nav-toggle" className="nav-link-label">
            <a href="#">Home</a>
          </label>
        </li>
        <li>
          <label htmlFor="nav-toggle" className="nav-link-label">
            <a href="#">Jobs</a>
          </label>
        </li>
        <li>
          <label htmlFor="nav-toggle" className="nav-link-label">
            <a href="#">Resume</a>
          </label>
        </li>
        <li>
          <label htmlFor="nav-toggle" className="nav-link-label">
            <a href="#">Quiz</a>
          </label>
        </li>
        <li>
          <label htmlFor="nav-toggle" className="nav-link-label">
            <a href="#">Notes</a>
          </label>
        </li>
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