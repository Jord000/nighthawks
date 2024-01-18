"use client";
import { Canvas } from "@react-three/fiber";
import { NighthawksModel } from "./NighthawksModel";
import {
  Environment,
  PerspectiveCamera,
  PointerLockControls,
} from "@react-three/drei";

function BaseCanvas() {
  return (
    <div id="canvas-container" className="w-[90%] h-[90%]">
      <Canvas className="flex h-20 w-20">
        <ambientLight intensity={0.1} />
        <PerspectiveCamera fov={75} position={[0, 0, 0]} makeDefault />
        <Environment files={'/hdr.hdr'} background />
        <NighthawksModel />
        <PointerLockControls selector="#move-around" />
      </Canvas>
    </div>
  );
}

export default BaseCanvas;
