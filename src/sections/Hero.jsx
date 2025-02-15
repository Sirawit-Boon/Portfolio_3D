import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import ReactLogo from "../components/ReactLogo";
import HtmlLogo from "../components/HtmlLogo";
import CssLogo from "../components/CssLogo";
import JavascriptLogo from "../components/JavascriptLogo";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Sirawit<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Full Stack Developer</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.2, 0, 0]}
              />
            </HeroCamera>
            <group>
              <ReactLogo
                position={sizes.reactLogoPosition}
                scale={sizes.reactScale}
              />
              <HtmlLogo
                position={sizes.HtmlPosition}
                rotation={sizes.HtmlRotation}
                scale={sizes.HtmlScale}
              />
              <CssLogo
                position={sizes.CssPosition}
                rotation={sizes.CssRotation}
                scale={sizes.CssScale}
              />
              <JavascriptLogo
                position={sizes.javascriptPosition}
                rotation={sizes.javascriptRotation}
                scale={sizes.javascriptScale}
              />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={6} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
