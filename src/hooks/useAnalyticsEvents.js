import { useEffect } from "react";

const useAnalyticsEvents = () => {
  useEffect(() => {
    const sendAnalyticsEvent = (sectionId) => {
      window.gtag("event", "section_view", {
        section: sectionId,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sendAnalyticsEvent(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
};

export default useAnalyticsEvents;
