import React from "react";

const steps = [
  "Personal Info",
  "Education",
  "Experience",
  "Skills",
  "Projects",
  "Certificates",
  "Preview"
];

function Stepper({ currentStep = 1, onStepClick }) {
  const normalizedStep = Math.max(1, Math.min(steps.length, currentStep));

  return (
    <div className="resume-stepper" aria-label="Resume progress steps">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === normalizedStep;
        const isCompleted = stepNumber < normalizedStep;

        return (
          <div
            key={step}
            className={`step-item ${isActive ? "active" : ""} ${
              isCompleted ? "completed" : ""
            }`}
            onClick={() => onStepClick && onStepClick(stepNumber)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onStepClick && onStepClick(stepNumber);
              }
            }}
          >
            <span className="step-circle">
              {isCompleted ? "✓" : stepNumber}
            </span>
            <span className="step-label">{step}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Stepper;