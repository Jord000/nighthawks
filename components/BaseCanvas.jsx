"use client";
import { Canvas } from "@react-three/fiber";
import { NighthawksModel } from "./NighthawksModel";
import {
  Loader,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
} from "@react-three/drei";
import { useRef } from "react";


function BaseCanvas() {
  const moveRef = useRef(null);

  return (
    <div id="canvas-container" className="flex h-[100%] w-[100%]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <PerspectiveCamera fov={75} position={[0, 0, 10]} makeDefault />
        <Environment files={"/hdrhalved.png"} background />
        <NighthawksModel />
        {/* <PointerLockControls selector="#move-around" /> */}
        <OrbitControls ref={moveRef} />
      </Canvas>
      <Loader />
    </div>
  );
}

export default BaseCanvas;
