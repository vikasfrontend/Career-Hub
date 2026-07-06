import React, { useState } from "react";
import { FaDownload, FaPrint, FaCheck } from "react-icons/fa";

function ResumePreview({ formData }) {
  const [template, setTemplate] = useState("modern");

  const templates = [
    { id: "modern", name: "Modern", description: "Clean and contemporary" },
    { id: "ats", name: "ATS Friendly", description: "Optimized for parsers" },
    { id: "minimal", name: "Minimal", description: "Simple and professional" }
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert("PDF download functionality coming soon!");
  };

  const renderModernTemplate = () => (
    <div className="resume-preview-modern">
      {/* Header */}
      <div className="resume-header-section">
        <div className="resume-header-content">
          <div className="resume-name-title">
            <h1>{formData.fullName || "Your Name"}</h1>
            <p className="resume-title">{formData.title || "Professional Title"}</p>
          </div>
        </div>
        <div className="resume-contact-header">
          {formData.email && <span>{formData.email}</span>}
          {formData.phone && <span>{formData.phone}</span>}
          {formData.address && <span>{formData.address}</span>}
        </div>
      </div>

      {/* About */}
      {formData.about && (
        <div className="resume-section">
          <h3 className="resume-section-title">About</h3>
          <p className="resume-about-text">{formData.about}</p>
        </div>
      )}

      {/* Links */}
      {(formData.linkedin || formData.github || formData.portfolio) && (
        <div className="resume-section">
          <h3 className="resume-section-title">Links</h3>
          <div className="resume-links">
            {formData.linkedin && (
              <a href={formData.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            {formData.github && (
              <a href={formData.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {formData.portfolio && (
              <a href={formData.portfolio} target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            )}
          </div>
        </div>
      )}

      {/* Experience */}
      {formData.experience && formData.experience.length > 0 && (
        <div className="resume-section">
          <h3 className="resume-section-title">Experience</h3>
          {formData.experience.map((exp, idx) => (
            <div key={idx} className="resume-entry">
              <div className="resume-entry-header">
                <h4>{exp.jobTitle}</h4>
                <span className="resume-date">
                  {exp.startDate}
                  {exp.endDate && !exp.isCurrently && ` – ${exp.endDate}`}
                  {exp.isCurrently && " – Present"}
                </span>
              </div>
              <p className="resume-company">{exp.company}</p>
              {exp.location && <p className="resume-location">{exp.location}</p>}
              {exp.description && (
                <p className="resume-description">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {formData.education && formData.education.length > 0 && (
        <div className="resume-section">
          <h3 className="resume-section-title">Education</h3>
          {formData.education.map((edu, idx) => (
            <div key={idx} className="resume-entry">
              <div className="resume-entry-header">
                <h4>{edu.degree}</h4>
                <span className="resume-date">
                  {edu.startYear}
                  {edu.endYear && !edu.isCurrently && ` – ${edu.endYear}`}
                  {edu.isCurrently && " – Present"}
                </span>
              </div>
              <p className="resume-company">{edu.college}</p>
              {edu.field && <p className="resume-location">{edu.field}</p>}
              {edu.cgpa && <p className="resume-cgpa">CGPA: {edu.cgpa}</p>}
              {edu.description && (
                <p className="resume-description">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {formData.skills && formData.skills.length > 0 && (
        <div className="resume-section">
          <h3 className="resume-section-title">Skills</h3>
          <div className="resume-skills-list">
            {formData.skills.map((skill, idx) => (
              <span key={idx} className="resume-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {formData.projects && formData.projects.length > 0 && (
        <div className="resume-section">
          <h3 className="resume-section-title">Projects</h3>
          {formData.projects.map((project, idx) => (
            <div key={idx} className="resume-entry">
              <div className="resume-entry-header">
                <h4>{project.name}</h4>
              </div>
              {project.description && (
                <p className="resume-description">{project.description}</p>
              )}
              {project.technologies && (
                <p className="resume-tech">
                  <strong>Tech:</strong> {project.technologies}
                </p>
              )}
              {(project.githubUrl || project.liveUrl) && (
                <div className="resume-project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Certificates */}
      {formData.certificates && formData.certificates.length > 0 && (
        <div className="resume-section">
          <h3 className="resume-section-title">Certifications</h3>
          {formData.certificates.map((cert, idx) => (
            <div key={idx} className="resume-entry">
              <div className="resume-entry-header">
                <h4>{cert.name}</h4>
                {cert.issueDate && (
                  <span className="resume-date">{cert.issueDate}</span>
                )}
              </div>
              <p className="resume-company">{cert.organization}</p>
              {cert.credentialId && (
                <p className="resume-credential">ID: {cert.credentialId}</p>
              )}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-credential-link"
                >
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="resume-card">
      <div className="section-heading">
        <h3>Resume Preview</h3>
        <p>Review your complete resume</p>
      </div>

      {/* Template Selector */}
      <div className="template-selector">
        <p className="template-label">Choose Template:</p>
        <div className="template-options">
          {templates.map((tmpl) => (
            <button
              key={tmpl.id}
              className={`template-option ${
                template === tmpl.id ? "active" : ""
              }`}
              onClick={() => setTemplate(tmpl.id)}
            >
              {template === tmpl.id && <FaCheck className="template-check" />}
              <span className="template-name">{tmpl.name}</span>
              <span className="template-desc">{tmpl.description}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Preview Actions */}
      <div className="preview-actions">
        <button
          className="btn-secondary"
          type="button"
          onClick={handleDownload}
        >
          <FaDownload /> Download PDF
        </button>
        <button
          className="btn-secondary"
          type="button"
          onClick={handlePrint}
        >
          <FaPrint /> Print Resume
        </button>
      </div>

      {/* Resume Preview */}
      <div className="resume-preview-container">
        {renderModernTemplate()}
      </div>
    </div>
  );
}

export default ResumePreview;