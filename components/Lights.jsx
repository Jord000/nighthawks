"use client";
import {
  AccumulativeShadows,
  RandomizedLight,
  SoftShadows,
  useHelper,
} from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

function Lights() {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");

  return (
    <>
    <SoftShadows/>
      <AccumulativeShadows
        temporal
        frames={100}
        color="black"
        colorBlend={0.5}
        opacity={1}
        scale={8}
        alphaTest={0.85}
        position={[0,0.01,0]}
      >
        <RandomizedLight
          amount={4}
          radius={5}
          ambient={0.5}
          position={[3, 1, 2]}
          bias={0.001}
        />
      </AccumulativeShadows>
      <hemisphereLight args={["#E3DAFC", "#333", 3]} />
      <spotLight
        color={"#7754DA"}
        position={[3, 2.2, 3]}
        angle={0.4}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <directionalLight
        color={"#7754DA"}
        position={[-2, 2, 1.5]}
        angle={0.1}
        target-position={[-1, 2, -2]}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
        // ref={directionalLight}
      />
    </>
  );
}

export default Lights;
