import React from "react";
import { FaTrash } from "react-icons/fa";

function Certificates({ formData, setFormData }) {
  const certificatesList = formData.certificates || [
    {
      id: 1,
      name: "",
      organization: "",
      issueDate: "",
      credentialId: "",
      credentialUrl: ""
    }
  ];

  const handleInputChange = (id, field, value) => {
    const updated = certificatesList.map((cert) =>
      cert.id === id ? { ...cert, [field]: value } : cert
    );
    setFormData({ ...formData, certificates: updated });
  };

  const handleAddCertificate = () => {
    const newId = Math.max(...certificatesList.map((c) => c.id), 0) + 1;
    const newCertificate = [
      ...certificatesList,
      {
        id: newId,
        name: "",
        organization: "",
        issueDate: "",
        credentialId: "",
        credentialUrl: ""
      }
    ];
    setFormData({ ...formData, certificates: newCertificate });
  };

  const handleDeleteCertificate = (id) => {
    if (certificatesList.length > 1) {
      const filtered = certificatesList.filter((cert) => cert.id !== id);
      setFormData({ ...formData, certificates: filtered });
    }
  };

  return (
    <div className="resume-card">
      <div className="section-heading">
        <h3>Certifications & Licenses</h3>
        <p>Add your professional certifications and licenses</p>
      </div>

      <div className="education-entries">
        {certificatesList.map((certificate) => (
          <div key={certificate.id} className="education-card">
            <div className="education-card-header">
              <h4>Certificate Entry</h4>
              {certificatesList.length > 1 && (
                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => handleDeleteCertificate(certificate.id)}
                  aria-label="Delete certificate entry"
                >
                  <FaTrash />
                </button>
              )}
            </div>

            <div className="resume-grid">
              <div className="full-width-field">
                <label>Certificate Name</label>
                <input
                  type="text"
                  value={certificate.name}
                  onChange={(e) =>
                    handleInputChange(certificate.id, "name", e.target.value)
                  }
                  placeholder="e.g., AWS Certified Solutions Architect"
                />
              </div>

              <div>
                <label>Organization</label>
                <input
                  type="text"
                  value={certificate.organization}
                  onChange={(e) =>
                    handleInputChange(
                      certificate.id,
                      "organization",
                      e.target.value
                    )
                  }
                  placeholder="e.g., Amazon Web Services"
                />
              </div>

              <div>
                <label>Issue Date</label>
                <input
                  type="month"
                  value={certificate.issueDate}
                  onChange={(e) =>
                    handleInputChange(certificate.id, "issueDate", e.target.value)
                  }
                />
              </div>

              <div className="full-width-field">
                <label>Credential ID (Optional)</label>
                <input
                  type="text"
                  value={certificate.credentialId}
                  onChange={(e) =>
                    handleInputChange(
                      certificate.id,
                      "credentialId",
                      e.target.value
                    )
                  }
                  placeholder="Your credential ID"
                />
              </div>

              <div className="full-width-field">
                <label>Credential URL</label>
                <input
                  type="url"
                  value={certificate.credentialUrl}
                  onChange={(e) =>
                    handleInputChange(
                      certificate.id,
                      "credentialUrl",
                      e.target.value
                    )
                  }
                  placeholder="https://credentials.example.com/verify/..."
                />
              </div>
            </div>

            {certificatesList.length > 1 &&
              certificatesList.indexOf(certificate) <
                certificatesList.length - 1 && (
                <div className="education-divider" />
              )}
          </div>
        ))}
      </div>

      <button
        className="btn-add-entry"
        type="button"
        onClick={handleAddCertificate}
      >
        + Add Certificate
      </button>
    </div>
  );
}

export default Certificates;
