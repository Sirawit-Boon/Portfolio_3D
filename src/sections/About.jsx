import React from "react";
import Globe from "react-globe.gl";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { techStack } from "../constants";

const About = () => {
  const globeRef = useRef();
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    const globe = globeRef.current;
    if (globe) {
      globe.pointOfView({ lat: 13.7563, lng: 100.5018, altitude: 2.5 }, 1000); // Adjust altitude for zoom level
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("sirawit.boonthon@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container relative">
            <img
              src="/assets/tercartoons.png"
              alt="grid-1"
              className="w-full h-[276px] object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Sirawit</p>
              <p className="grid-subtext">
                Although I do not have experience as a Software Developer, I
                have worked hard to hone my skills in both frontend and backend
                development for web applications to prove that I am capable of
                performing well in this position.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="circle-container">
              {techStack.map(({ id, name, path }, index) => {
                const angle = (index / techStack.length) * 360;
                return (
                  <div
                    key={id}
                    className="tech-stack"
                    style={{
                      transform: `rotate(${angle}deg) translate(100px) rotate(-${angle}deg)`,
                    }}
                  >
                    <img src={path} alt={name} />
                  </div>
                );
              })}
            </div>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I have experience in JavaScript, with a focus on React.js and
                Next.js. I am capable of implementing RESTful APIs for the
                backend using Node.js and have a solid understanding of
                relational databases, such as PostgreSQL. Additionally, I can
                effectively integrate the backend with the frontend.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[276px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 13.7563,
                    lng: 100.5018,
                    text: "I'm here!",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">Work Flexibility & Adaptability</p>
              <p className="grid-subtext">
                I am capable of working in various setups, such as onsite,
                hybrid, work-from-home, or remote work. I am based in Bangkok,
                Thailand, but I am also open to working in the Bangkok
                Metropolitan area. I can easily adapt to different work
                environments, quickly learn new tools and technologies, and
                collaborate effectively with diverse teams to achieve shared
                goals. Additionally, I manage my time efficiently to meet
                deadlines and balance multiple priorities in any work setup.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[230px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <div className="grid-subtext flex flex-col gap-2">
                <p>
                  Here goes! If you're reading this, I believe you're might
                  already be interested about me (right?). Let me share my
                  passion for coding and why I decided to leave the stability of
                  being a civil servant to start a career as a software
                  developer.
                </p>
                <p>
                  I started learning to code from scratch in September 2024.
                  Despite the short time, I quickly realized that I had found a
                  profession that truly suits me. Coding makes me genuinely
                  happy, and even though it's challenging and completely new to
                  me, I've never stopped learning and exploring new tech stacks.
                </p>
                <p>
                  If you've made it this far, thank you for considering me. Give
                  me the opportunity to join your software development team, and
                  I'll prove my worth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid4"
              className="w-full md:h-[150px] sm:h-[256px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-lg md:text-xl font-medium text-gray_gradient text-white">
                  sirawit.boonthon@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
