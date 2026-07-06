import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Stepper from "../components/resume/Stepper";
import PersonalInfo from "../components/resume/PersonalInfo";
import Education from "../components/resume/Education";
import Experience from "../components/resume/Experience";
import Skills from "../components/resume/Skills";
import Projects from "../components/resume/Projects";
import Certificates from "../components/resume/Certificates";
import ResumePreview from "../components/resume/ResumePreview";

const steps = [
  "Personal Info",
  "Education",
  "Experience",
  "Skills",
  "Projects",
  "Certificates",
  "Preview"
];

function ResumeBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    portfolio: "",
    about: "",
    photoUrl: "",
    education: [],
    experience: [],
    skills: [],
    projects: [],
    certificates: []
  });

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDownload = () => {
    alert("Download Resume functionality coming soon!");
  };

  const getNextButtonLabel = () => {
    if (currentStep === steps.length) {
      return "Download Resume";
    }
    return `Next: ${steps[currentStep]} →`;
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
      case 2:
        return <Education formData={formData} setFormData={setFormData} />;
      case 3:
        return <Experience formData={formData} setFormData={setFormData} />;
      case 4:
        return <Skills formData={formData} setFormData={setFormData} />;
      case 5:
        return <Projects formData={formData} setFormData={setFormData} />;
      case 6:
        return <Certificates formData={formData} setFormData={setFormData} />;
      case 7:
        return <ResumePreview formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout activeMenu="Resume Builder">
      <div className="resume-builder-page">
        <div className="resume-header-card">
          <div>
            <h1>Resume Builder</h1>
            <p>Create a professional ATS-friendly resume in minutes.</p>
          </div>
          <button className="btn-outline" type="button">
            Export PDF
          </button>
        </div>

        <Stepper currentStep={currentStep} onStepClick={handleStepClick} />

        <div className="resume-main">
          <div className="resume-form-column">
            <div className="step-content-wrapper">
              {renderStepContent()}
            </div>

            <div className="form-actions">
              <button
                className="btn-secondary"
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                ← Previous
              </button>

              {currentStep === steps.length ? (
                <button
                  className="btn-primary-action"
                  type="button"
                  onClick={handleDownload}
                >
                  Download Resume
                </button>
              ) : (
                <button
                  className="btn-primary-action"
                  type="button"
                  onClick={handleNext}
                >
                  {getNextButtonLabel()}
                </button>
              )}
            </div>
          </div>

          {/* <div className="resume-preview-column">
            <ResumePreview formData={formData} photoUrl={formData.photoUrl} />
          </div> */}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ResumeBuilder;