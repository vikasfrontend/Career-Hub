function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      text: "Career Hub helped me build a professional resume and land my first internship."
    },
    {
      name: "Priya Patel",
      role: "Computer Science Student",
      text: "The aptitude quizzes and interview questions improved my confidence a lot."
    },
    {
      name: "Aman Verma",
      role: "MERN Stack Developer",
      text: "I found amazing job opportunities and learning resources all in one place."
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonial-header">
        <h2>What Our Users Say</h2>
        <p>Success stories from students and professionals.</p>
      </div>

      <div className="testimonial-grid">
        {reviews.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">⭐⭐⭐⭐⭐</div>

            <p className="review-text">
              "{item.text}"
            </p>

            <div className="user-info">
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;