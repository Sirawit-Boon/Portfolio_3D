import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

const HtmlLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/html_logo_3d_model.glb");
  return (
    <Float floatIntensity={1}>
      <group
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        {...props}
        dispose={null}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[24.052, 117.48, 10.526]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials["Material.010"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials["Material.011"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Material.009"]}
            position={[18.962, 117.48, 10.526]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials["Material.012"]}
            position={[42.712, 209.044, 23.565]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/html_logo_3d_model.glb");

export default HtmlLogo;
