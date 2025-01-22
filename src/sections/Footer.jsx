import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p className="">Terms & Conditions</p>
        <p className="">|</p>
        <p className="">Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          className="social-icon cursor-pointer"
          href="https://github.com/Sirawit-Boon"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          className="social-icon cursor-pointer"
          href="https://www.linkedin.com/in/sirawit-boonthon/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/linkedin1.svg"
            alt="linkedin"
            className="w-2/3 h-2/3"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
