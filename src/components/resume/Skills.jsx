import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Skills({ formData, setFormData }) {
  const [inputValue, setInputValue] = useState("");
  const skillsList = formData.skills || [];

  const handleAddSkill = () => {
    const trimmedValue = inputValue.trim().toLowerCase();

    if (!trimmedValue) {
      alert("Please enter a skill name");
      return;
    }

    if (skillsList.some((skill) => skill.toLowerCase() === trimmedValue)) {
      alert("This skill already exists");
      setInputValue("");
      return;
    }

    const newSkills = [...skillsList, inputValue.trim()];
    setFormData({ ...formData, skills: newSkills });
    setInputValue("");
  };

  const handleRemoveSkill = (index) => {
    const newSkills = skillsList.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: newSkills });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="resume-card">
      <div className="section-heading">
        <h3>Skills</h3>
        <p>Add your professional skills</p>
      </div>

      <div className="skills-input-section">
        <div className="skills-input-group">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="e.g., React, JavaScript, UI Design..."
          />
          <button
            className="btn-add-skill"
            type="button"
            onClick={handleAddSkill}
          >
            + Add Skill
          </button>
        </div>
      </div>

      {skillsList.length > 0 && (
        <div className="skills-container">
          <p className="skills-label">Skills Added ({skillsList.length})</p>
          <div className="skills-chips">
            {skillsList.map((skill, index) => (
              <div key={index} className="skill-chip">
                <span>{skill}</span>
                <button
                  className="skill-chip-close"
                  type="button"
                  onClick={() => handleRemoveSkill(index)}
                  aria-label={`Remove ${skill}`}
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
