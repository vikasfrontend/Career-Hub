function Stats() {
  const stats = [
    {
      icon: "👥",
      number: "50K+",
      title: "Active Learners",
    },
    {
      icon: "📄",
      number: "10K+",
      title: "Resumes Built",
    },
    {
      icon: "💼",
      number: "5K+",
      title: "Jobs Available",
    },
    {
      icon: "🎯",
      number: "25K+",
      title: "Interview Questions",
    },
    {
      icon: "🧠",
      number: "15K+",
      title: "Quiz Attempts",
    },
    {
      icon: "⭐",
      number: "98%",
      title: "User Satisfaction",
    },
  ];

  return (
    <section className="stats">
      <div className="stats-header">
        <span className="badge">📈 Our Impact</span>

        <h2>
          Empowering Careers,
          <span> One Step at a Time</span>
        </h2>

        <p>
          Join thousands of students and professionals who are
          building their dream careers with Career Hub.
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stats-card" key={index}>
            <div className="stats-icon">
              {item.icon}
            </div>

            <h3>{item.number}</h3>

            <p>{item.title}</p>

            <div className="line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;