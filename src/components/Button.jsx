import React from "react";

const Button = ({ name, isBeam = false, containerClass }) => {
  const handleNavigate = (sectionName) => {
    const targetSection = document.querySelector(sectionName);
    if (targetSection) {
      targetSection.scrollIntoView();
    }

    window.gtag("event", "navigation_click", {
      event_category: "navigation",
      event_label: sectionName,
    });
  };

  return (
    <button
      className={`btn ${containerClass}`}
      onClick={() => handleNavigate("#contact")}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
