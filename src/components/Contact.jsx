function Contact() {
  return (
    <section className="contact">
      <div className="contact-header">
        <span className="contact-badge">📩 Contact Us</span>

        <h2>
          Get In <span>Touch</span>
        </h2>

        <p>
          Have questions about Career Hub? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        
        <div className="contact-info">
          <div className="info-card">
            <h3>📧 Email</h3>
            <p>vikaspatidar828@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>📱 Phone</h3>
            <p>+91 8109836169</p>
          </div>

          <div className="info-card">
            <h3>📍 Location</h3>
            <p>Indore, Madhya Pradesh</p>
          </div>
        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="5"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;