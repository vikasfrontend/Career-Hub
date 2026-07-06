import React from "react";

function ResumeBuilderForm({ formData, onChange, onUpload }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <div className="resume-card">
      <div className="section-heading">
        <h3>Personal Information</h3>
        <p>Tell us a bit about yourself so your resume can stand out.</p>
      </div>

      <div className="resume-grid">
        <div>
          <label>Full Name</label>
          <input name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Ava Thompson" />
        </div>
        <div>
          <label>Professional Title</label>
          <input name="title" value={formData.title} onChange={handleInputChange} placeholder="Product Designer" />
        </div>
        <div>
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleInputChange} placeholder="ava@email.com" />
        </div>
        <div>
          <label>Phone</label>
          <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 234 567 890" />
        </div>
        <div>
          <label>Address</label>
          <input name="address" value={formData.address} onChange={handleInputChange} placeholder="San Francisco, CA" />
        </div>
        <div>
          <label>LinkedIn</label>
          <input name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="linkedin.com/in/ava" />
        </div>
        <div>
          <label>GitHub</label>
          <input name="github" value={formData.github} onChange={handleInputChange} placeholder="github.com/ava" />
        </div>
        <div>
          <label>Portfolio</label>
          <input name="portfolio" value={formData.portfolio} onChange={handleInputChange} placeholder="ava.dev" />
        </div>
      </div>

      <div className="full-width">
        <label>About Me</label>
        <textarea name="about" value={formData.about} onChange={handleInputChange} rows="5" placeholder="Describe your experience, strengths, and career goals." />
      </div>

      <div className="upload-box">
        <label>Profile Photo Upload</label>
        <input type="file" accept="image/*" onChange={onUpload} />
        <span>PNG, JPG, or WEBP up to 5MB</span>
      </div>

      <div className="form-actions">
        <button className="btn-secondary" type="button">
          Save & Exit
        </button>
        <button className="btn-primary-action" type="button">
          Next: Education →
        </button>
      </div>
    </div>
  );
}

export default ResumeBuilderForm;
