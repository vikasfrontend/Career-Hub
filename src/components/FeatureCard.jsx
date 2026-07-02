function FeatureCard() {
  const features = [
    {
      icon: "📄",
      title: "Resume Builder",
      desc: "Create professional ATS-friendly resumes."
    },
    {
      icon: "💼",
      title: "Job Portal",
      desc: "Find latest internships and jobs."
    },
    {
      icon: "🎯",
      title: "Interview Prep",
      desc: "Practice technical interview questions."
    },
    {
      icon: "🧠",
      title: "Aptitude Quiz",
      desc: "Improve your problem solving skills."
    },
    {
      icon: "📝",
      title: "Notes Hub",
      desc: "Store and organize study notes."
    },
    {
      icon: "📊",
      title: "Progress Tracker",
      desc: "Track your learning journey."
    }
  ];

  return (
    <section className="features">
      <div className="features-header">
        <h2>
          Why Choose <span className="accent">Career Hub?</span>
        </h2>

        <p className="features-sub">
          All the tools you need to build, grow and achieve
          your dream developer career.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-top">
              <div className="icon-box">
                {item.icon}
              </div>

              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>

            <a href="#" className="learn-more">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCard;