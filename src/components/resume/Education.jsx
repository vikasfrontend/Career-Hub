import React from "react";
import { FaTrash } from "react-icons/fa";

function Education({ formData, setFormData }) {
  const educationList = formData.education || [
    {
      id: 1,
      college: "",
      degree: "",
      field: "",
      cgpa: "",
      startYear: "",
      endYear: "",
      isCurrently: false,
      description: ""
    }
  ];

  const handleInputChange = (id, field, value) => {
    const updated = educationList.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    setFormData({ ...formData, education: updated });
  };

  const handleAddEducation = () => {
    const newId = Math.max(...educationList.map((e) => e.id), 0) + 1;
    const newEducation = [
      ...educationList,
      {
        id: newId,
        college: "",
        degree: "",
        field: "",
        cgpa: "",
        startYear: "",
        endYear: "",
        isCurrently: false,
        description: ""
      }
    ];
    setFormData({ ...formData, education: newEducation });
  };

  const handleDeleteEducation = (id) => {
    if (educationList.length > 1) {
      const filtered = educationList.filter((edu) => edu.id !== id);
      setFormData({ ...formData, education: filtered });
    }
  };

  return (
    <div className="resume-card">
      <div className="section-heading">
        <h3>Education</h3>
        <p>Add your academic qualifications</p>
      </div>

      <div className="education-entries">
        {educationList.map((education) => (
          <div key={education.id} className="education-card">
            <div className="education-card-header">
              <h4>Education Entry</h4>
              {educationList.length > 1 && (
                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => handleDeleteEducation(education.id)}
                  aria-label="Delete education entry"
                >
                  <FaTrash />
                </button>
              )}
            </div>

            <div className="resume-grid">
              <div className="full-width-field">
                <label>College / University Name</label>
                <input
                  type="text"
                  value={education.college}
                  onChange={(e) =>
                    handleInputChange(education.id, "college", e.target.value)
                  }
                  placeholder="Your University Name"
                />
              </div>

              <div>
                <label>Degree</label>
                <input
                  type="text"
                  value={education.degree}
                  onChange={(e) =>
                    handleInputChange(education.id, "degree", e.target.value)
                  }
                  placeholder="B.Tech, B.A., M.B.A., etc."
                />
              </div>

              <div>
                <label>Field of Study / Branch</label>
                <input
                  type="text"
                  value={education.field}
                  onChange={(e) =>
                    handleInputChange(education.id, "field", e.target.value)
                  }
                  placeholder="Computer Science, Marketing, etc."
                />
              </div>

              <div>
                <label>CGPA / Percentage</label>
                <input
                  type="text"
                  value={education.cgpa}
                  onChange={(e) =>
                    handleInputChange(education.id, "cgpa", e.target.value)
                  }
                  placeholder="8.5 / 10"
                />
              </div>

              <div>
                <label>Start Year</label>
                <input
                  type="number"
                  value={education.startYear}
                  onChange={(e) =>
                    handleInputChange(education.id, "startYear", e.target.value)
                  }
                  placeholder="2020"
                  min="1950"
                  max={new Date().getFullYear()}
                />
              </div>

              <div>
                <label>End Year</label>
                <input
                  type="number"
                  value={education.endYear}
                  onChange={(e) =>
                    handleInputChange(education.id, "endYear", e.target.value)
                  }
                  placeholder="2024"
                  min="1950"
                  max={new Date().getFullYear() + 10}
                />
              </div>
            </div>

            <div className="checkbox-field">
              <input
                type="checkbox"
                id={`currently-${education.id}`}
                checked={education.isCurrently}
                onChange={(e) =>
                  handleInputChange(education.id, "isCurrently", e.target.checked)
                }
              />
              <label htmlFor={`currently-${education.id}`}>Currently Studying</label>
            </div>

            <div className="full-width-field">
              <label>Description (Optional)</label>
              <textarea
                value={education.description}
                onChange={(e) =>
                  handleInputChange(education.id, "description", e.target.value)
                }
                rows="4"
                placeholder="Add any additional details about your education..."
              />
            </div>

            {educationList.length > 1 && educationList.indexOf(education) < educationList.length - 1 && (
              <div className="education-divider" />
            )}
          </div>
        ))}
      </div>

      <button className="btn-add-entry" type="button" onClick={handleAddEducation}>
        + Add Education
      </button>
    </div>
  );
}

export default Education;
