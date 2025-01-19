import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

const CssLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/css_logo_3d_model.glb");
  return (
    <Float floatIntensity={1}>
      <group {...props} dispose={null}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group position={[326.27, 35.487, 1926.616]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials["Material.003"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials["Material.005"]}
              position={[-142.941, -32.748, -5922.869]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials["Material.001"]}
              position={[-182.684, 35.487, 1926.616]}
            />
          </group>
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/css_logo_3d_model.glb");

export default CssLogo;
