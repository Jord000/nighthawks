import { Clouds, Cloud } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function SceneClouds() {
  const cloudRef = useRef();
  let movement = 0.02
  useFrame(({ clock }) => {
    cloudRef.current.position.z+=movement
    if(cloudRef.current.position.z >10){movement = -0.02}
    if(cloudRef.current.position.z <-10){movement = 0.02}
    cloudRef.current.rotation.y = Math.cos(clock.elapsedTime / 2) / 2;
    cloudRef.current.rotation.x = Math.sin(clock.elapsedTime / 2) / 2;
  });

  return (
    <group ref={cloudRef}>
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud
          segments={20}
          bounds={[2, 2, 2]}
          scale={0.7}
          volume={2}
          color="white"
          position={[-5,0,0]}
        />
        <Cloud
          seed={1}
          segments={10}
          bounds={[2, 2, 2]}
          scale={0.9}
          volume={1}
          color="white"
          position={[-5,0,0]}
        />
      </Clouds>
    </group>
  );
}
export default SceneClouds;
