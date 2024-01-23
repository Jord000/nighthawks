"use client";
import {
  AccumulativeShadows,
  ContactShadows,
  RandomizedLight,
  useHelper,
} from "@react-three/drei";
import { useRef } from "react";
import {
  DirectionalLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { useControls } from "leva";

function Lights() {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, "red");

  return (
    <>
      <AccumulativeShadows
        temporal
        frames={100}
        color="purple"
        colorBlend={0.5}
        opacity={1}
        scale={10}
        alphaTest={0.85}
      >
        <RandomizedLight
          amount={4}
          radius={5}
          ambient={0.5}
          position={[5, 3, 2]}
          bias={0.001}
        />
      </AccumulativeShadows>
      <hemisphereLight args={["#fff", "#333", 3]} />
      <spotLight
        position={[3, 2.2, 3]}
        angle={0.4}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <directionalLight
        position={[-2, 2, 1.5]}
        angle={0.1}
        target-position={[-1, 2, -2]}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    </>
  );
}

export default Lights;
