"use client";
import { Canvas } from "@react-three/fiber";
import { NighthawksModel } from "./NighthawksModel";
import { Environment, OrbitControls, Loader } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Lights from "./Lights";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Noise,
  Vignette
} from "@react-three/postprocessing";

function BaseCanvas() {
  const moveRef = useRef(null);

  const [isCameraControl, setIsCameraControl] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyO") {
        setIsCameraControl(!isCameraControl);
      }
    });
  });

  return (
    <div id="canvas-container" className="flex h-[100%] w-[100%]">
      <Canvas
        shadows
        camera={{
          position: [1.2, 1.8, 3],
          rotation: [
            THREE.MathUtils.degToRad(-20),
            THREE.MathUtils.degToRad(42),
            THREE.MathUtils.degToRad(15),
          ],
          fov: 70,
          zoom: 1.1,
        }}
      >
     <Suspense fallback={null}>
          <fog attach="fog" args={["#d10000", 8, 35]} />
          <Lights />

          <Environment files={"/clouds.exr"} background />
          <NighthawksModel />
          {/* <PointerLockControls selector="#move-around" /> */}
          {isCameraControl && <OrbitControls />}
          <EffectComposer disableNormalPass>
            <Bloom
              luminanceThreshold={0}
              mipmapBlur
              luminanceSmoothing={0.0}
              intensity={0.7}
            />
            <DepthOfField
              target={[0, 0, 13]}
              focalLength={0.3}
              bokehScale={15}
              height={700}
            />
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.1} darkness={1.0} />
          </EffectComposer>
          </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

export default BaseCanvas;
