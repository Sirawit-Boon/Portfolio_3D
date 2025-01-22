import React, { useRef, useState } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const JavascriptLogo = (props) => {
  const javascriptRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { nodes, materials } = useGLTF("/models/javascript_1.glb");

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(javascriptRef.current.rotation, {
        y: hovered ? "+=2" : `+=${Math.PI * 2}`,
        x: hovered ? "+=2" : `-=${Math.PI * 2}`,
        duration: 5,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={javascriptRef}
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.mat_3220964}
        onPointerEnter={() => setHovered(true)}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload("/models/javascript_1.glb");

export default JavascriptLogo;
