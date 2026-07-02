import background from "../assets/background.png";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-tag">Developer Career Hub</span>
          <h1>
            Your Journey to a <span>Successful Developer</span> Career Starts Here
          </h1>
          <p>
            Build your resume, practice interviews, take quizzes, find <br /> jobs and track your progress — all in one place.
          </p>

          <div className="hero-btns">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;