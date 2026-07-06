import React from "react";
import { FaTrash } from "react-icons/fa";

function Experience({ formData, setFormData }) {
  const experienceList = formData.experience || [
    {
      id: 1,
      company: "",
      jobTitle: "",
      employmentType: "",
      location: "",
      startDate: "",
      endDate: "",
      isCurrently: false,
      description: ""
    }
  ];

  const handleInputChange = (id, field, value) => {
    const updated = experienceList.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setFormData({ ...formData, experience: updated });
  };

  const handleAddExperience = () => {
    const newId = Math.max(...experienceList.map((e) => e.id), 0) + 1;
    const newExperience = [
      ...experienceList,
      {
        id: newId,
        company: "",
        jobTitle: "",
        employmentType: "",
        location: "",
        startDate: "",
        endDate: "",
        isCurrently: false,
        description: ""
      }
    ];
    setFormData({ ...formData, experience: newExperience });
  };

  const handleDeleteExperience = (id) => {
    if (experienceList.length > 1) {
      const filtered = experienceList.filter((exp) => exp.id !== id);
      setFormData({ ...formData, experience: filtered });
    }
  };

  return (
    <div className="resume-card">
      <div className="section-heading">
        <h3>Experience</h3>
        <p>Add your work experience</p>
      </div>

      <div className="education-entries">
        {experienceList.map((experience) => (
          <div key={experience.id} className="education-card">
            <div className="education-card-header">
              <h4>Experience Entry</h4>
              {experienceList.length > 1 && (
                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => handleDeleteExperience(experience.id)}
                  aria-label="Delete experience entry"
                >
                  <FaTrash />
                </button>
              )}
            </div>

            <div className="resume-grid">
              <div className="full-width-field">
                <label>Company Name</label>
                <input
                  type="text"
                  value={experience.company}
                  onChange={(e) =>
                    handleInputChange(experience.id, "company", e.target.value)
                  }
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label>Job Title</label>
                <input
                  type="text"
                  value={experience.jobTitle}
                  onChange={(e) =>
                    handleInputChange(experience.id, "jobTitle", e.target.value)
                  }
                  placeholder="Software Engineer, Manager, etc."
                />
              </div>

              <div>
                <label>Employment Type</label>
                <select
                  value={experience.employmentType}
                  onChange={(e) =>
                    handleInputChange(
                      experience.id,
                      "employmentType",
                      e.target.value
                    )
                  }
                >
                  <option value="">Select Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label>Location</label>
                <input
                  type="text"
                  value={experience.location}
                  onChange={(e) =>
                    handleInputChange(experience.id, "location", e.target.value)
                  }
                  placeholder="City, Country"
                />
              </div>

              <div>
                <label>Start Date</label>
                <input
                  type="month"
                  value={experience.startDate}
                  onChange={(e) =>
                    handleInputChange(experience.id, "startDate", e.target.value)
                  }
                />
              </div>

              <div>
                <label>End Date</label>
                <input
                  type="month"
                  value={experience.endDate}
                  onChange={(e) =>
                    handleInputChange(experience.id, "endDate", e.target.value)
                  }
                  disabled={experience.isCurrently}
                />
              </div>
            </div>

            <div className="checkbox-field">
              <input
                type="checkbox"
                id={`currently-working-${experience.id}`}
                checked={experience.isCurrently}
                onChange={(e) =>
                  handleInputChange(
                    experience.id,
                    "isCurrently",
                    e.target.checked
                  )
                }
              />
              <label htmlFor={`currently-working-${experience.id}`}>
                Currently Working Here
              </label>
            </div>

            <div className="full-width-field">
              <label>Description (Optional)</label>
              <textarea
                value={experience.description}
                onChange={(e) =>
                  handleInputChange(experience.id, "description", e.target.value)
                }
                rows="4"
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>

            {experienceList.length > 1 &&
              experienceList.indexOf(experience) < experienceList.length - 1 && (
                <div className="education-divider" />
              )}
          </div>
        ))}
      </div>

      <button
        className="btn-add-entry"
        type="button"
        onClick={handleAddExperience}
      >
        + Add Experience
      </button>
    </div>
  );
}

export default Experience;
