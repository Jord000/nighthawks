import { Clouds, Cloud } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function SceneClouds() {
  const cloudRef1 = useRef();
  const cloudRef2 = useRef();
  let movement = 0.04;
  useFrame(({ clock }) => {
    if (cloudRef1.current.position.z > 7) {
      movement = -0.04;
    }
    if (cloudRef1.current.position.z < -7) {
      movement = 0.04;
    }
    cloudRef1.current.rotation.y = Math.cos(clock.elapsedTime / 4) / 2;
    cloudRef1.current.rotation.x = Math.sin(clock.elapsedTime / 4) / 2;
    cloudRef1.current.position.z += movement / 4;
    cloudRef2.current.rotation.y = Math.cos(clock.elapsedTime / 2) / 2;
    cloudRef2.current.rotation.x = Math.sin(clock.elapsedTime / 2) / 2;
  });

  return (
    <group>
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud
          segments={20}
          bounds={[2, 2, 2]}
          scale={0.7}
          volume={2}
          color="#dac5ed"
          position={[0, 0, 0]}
          ref={cloudRef1}
        />
        <Cloud
          seed={2}
          segments={3}
          bounds={[2, 2, 2]}
          scale={1}
          volume={5}
          color="#d3e9f5"
          position={[-6, -1, 2]}
          ref={cloudRef2}
        />
      </Clouds>
    </group>
  );
}
export default SceneClouds;
