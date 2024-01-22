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
  const [isCameraControl, setIsCameraControl] = useState(false)

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyO') {
        setIsCameraControl(!isCameraControl)
      }
    })
  })

  return (
    <div id="canvas-container" className="flex h-[100%] w-[100%]">
      <Canvas shadows>
        <ambientLight intensity={2} />
        <directionalLight color="white" position={[0, 0, 10]} />
        <PerspectiveCamera
          fov={76}
          zoom={1.1}
          position={[1.0, 1.6, 3]}
          rotation={[
            THREE.MathUtils.degToRad(-20),
            THREE.MathUtils.degToRad(40),
            THREE.MathUtils.degToRad(15),
          ]}
          makeDefault
        />
        <Environment files={"/SPACE-1.hdr"} background />
        <NighthawksModel />
        {/* <PointerLockControls selector="#move-around" /> */}
        {/* <OrbitControls
         target={[10,10,10]}
         enabled={isCameraControl}
       /> */}
      </Canvas>
      <Loader />
    </div>
  );
}

export default BaseCanvas;
