"use client";
import { Canvas } from "@react-three/fiber";
import { NighthawksModel } from "./NighthawksModel";
import {
  Loader,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
  CameraControls,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function BaseCanvas() {
  const moveRef = useRef(null);
  const [isCameraControl, setIsCameraControl] = useState(true)

useEffect(()=>{},[])

  return (
    <div id="canvas-container" className="flex h-[100%] w-[100%]">
      <Canvas shadows>
        <ambientLight intensity={2} />
        <directionalLight color="white" position={[0, 0, 10]} />
        <PerspectiveCamera
          fov={75}
          position={[1.0, 1.8, 2.2]}
          rotation={[
            THREE.MathUtils.degToRad(-10),
            THREE.MathUtils.degToRad(45),
            THREE.MathUtils.degToRad(10),
          ]}
          makeDefault
        />
        <Environment files={"/SPACE-1.hdr"} background />
        <NighthawksModel />
        {/* <PointerLockControls selector="#move-around" /> */}
        <CameraControls
         enabled={isCameraControl}
       />
      </Canvas>
      <Loader />
    </div>
  );
}

export default BaseCanvas;
