import React from "react";
import { FaTrash } from "react-icons/fa";

function Projects({ formData, setFormData }) {
  const projectsList = formData.projects || [
    {
      id: 1,
      name: "",
      description: "",
      technologies: "",
      githubUrl: "",
      liveUrl: ""
    }
  ];

  const handleInputChange = (id, field, value) => {
    const updated = projectsList.map((project) =>
      project.id === id ? { ...project, [field]: value } : project
    );
    setFormData({ ...formData, projects: updated });
  };

  const handleAddProject = () => {
    const newId = Math.max(...projectsList.map((p) => p.id), 0) + 1;
    const newProject = [
      ...projectsList,
      {
        id: newId,
        name: "",
        description: "",
        technologies: "",
        githubUrl: "",
        liveUrl: ""
      }
    ];
    setFormData({ ...formData, projects: newProject });
  };

  const handleDeleteProject = (id) => {
    if (projectsList.length > 1) {
      const filtered = projectsList.filter((project) => project.id !== id);
      setFormData({ ...formData, projects: filtered });
    }
  };

  return (
    <div className="resume-card">
      <div className="section-heading">
        <h3>Projects</h3>
        <p>Showcase your best projects</p>
      </div>

      <div className="education-entries">
        {projectsList.map((project) => (
          <div key={project.id} className="education-card">
            <div className="education-card-header">
              <h4>Project Entry</h4>
              {projectsList.length > 1 && (
                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => handleDeleteProject(project.id)}
                  aria-label="Delete project entry"
                >
                  <FaTrash />
                </button>
              )}
            </div>

            <div className="resume-grid">
              <div className="full-width-field">
                <label>Project Name</label>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) =>
                    handleInputChange(project.id, "name", e.target.value)
                  }
                  placeholder="Project Name"
                />
              </div>

              <div className="full-width-field">
                <label>Project Description</label>
                <textarea
                  value={project.description}
                  onChange={(e) =>
                    handleInputChange(project.id, "description", e.target.value)
                  }
                  rows="3"
                  placeholder="Describe your project, its purpose, and key features..."
                />
              </div>

              <div className="full-width-field">
                <label>Technologies Used</label>
                <input
                  type="text"
                  value={project.technologies}
                  onChange={(e) =>
                    handleInputChange(project.id, "technologies", e.target.value)
                  }
                  placeholder="e.g., React, Node.js, MongoDB, Firebase"
                />
              </div>

              <div>
                <label>GitHub Repository URL</label>
                <input
                  type="url"
                  value={project.githubUrl}
                  onChange={(e) =>
                    handleInputChange(project.id, "githubUrl", e.target.value)
                  }
                  placeholder="https://github.com/username/project"
                />
              </div>

              <div>
                <label>Live Demo URL</label>
                <input
                  type="url"
                  value={project.liveUrl}
                  onChange={(e) =>
                    handleInputChange(project.id, "liveUrl", e.target.value)
                  }
                  placeholder="https://project-demo.com"
                />
              </div>
            </div>

            {projectsList.length > 1 &&
              projectsList.indexOf(project) < projectsList.length - 1 && (
                <div className="education-divider" />
              )}
          </div>
        ))}
      </div>

      <button
        className="btn-add-entry"
        type="button"
        onClick={handleAddProject}
      >
        + Add Project
      </button>
    </div>
  );
}

export default Projects;
