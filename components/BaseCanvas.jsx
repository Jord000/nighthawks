"use client";
import { Canvas } from "@react-three/fiber";
import { NighthawksModel } from "./NighthawksModel";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useContext, useEffect, useState } from "react";
import * as THREE from "three";
import Lights from "./Lights";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Noise,
  Vignette,
  ToneMapping,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import SceneClouds from "./SceneClouds";
import LoadingScreen from "./LoadingScreen";
import { LoadedContext } from "@/contexts/LoadedContext";
import FollowMouse from "./FollowMouse";

function BaseCanvas() {
  const { isLoaded } = useContext(LoadedContext);
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
           fov: 70,
          zoom: 1.1,
            }}
 
      >
        <fog attach="fog" args={["#d10000", 8, 35]} />
        <Suspense fallback={null}>
          {isLoaded && (
            <>
              <Lights />
              <SceneClouds />
              <NighthawksModel />
              <Environment files={"/clouds.exr"} background />
            </>
          )}
        </Suspense>
        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={1}
            mipmapBlur
            intensity={0.35 * 4}
            levels={8}
          />
          <DepthOfField
            target={[0, 0, 13]}
            focalLength={0.3}
            bokehScale={15}
            height={700}
          />
          <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.0} />
        </EffectComposer>

        {/* <PointerLockControls selector="#move-around" /> */}
        {isCameraControl && <OrbitControls />}
        <FollowMouse />
      </Canvas>
      <LoadingScreen />
    </div>
  );
}

export default BaseCanvas;
