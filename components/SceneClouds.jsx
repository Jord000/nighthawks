import { Clouds, Cloud, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function SceneClouds() {
  const cloudRef1 = useRef()
  const cloudRef2 = useRef()
  let movement = 0.04
  useFrame(({ clock }) => {
    if (cloudRef1.current.position.z > 2) {
      movement = -0.04
    }
    if (cloudRef1.current.position.z < -2) {
      movement = 0.04
    }
    cloudRef1.current.rotation.y = Math.cos(clock.elapsedTime / 4) / 1
    cloudRef1.current.rotation.x = Math.sin(clock.elapsedTime / 4) / 1
    cloudRef1.current.position.z += movement / 4
    cloudRef2.current.rotation.y = Math.cos(clock.elapsedTime / 2) / 1
    cloudRef2.current.rotation.x = Math.sin(clock.elapsedTime / 2) / 1
  })

  return (
    <group>
      <Clouds material={THREE.MeshBasicMaterial} texture={"cloud.png"}>
        <Cloud
          segments={20}
          bounds={[3, 3, 3]}
          scale={0.7}
          volume={2}
          color="#0c0d36"
          position={[-2, 1, 0]}
          ref={cloudRef1}
        />
        <Cloud
          seed={2}
          segments={5}
          bounds={[2, 2, 2]}
          scale={1}
          volume={5}
          color="#47334f"
          position={[-1,1, 0]}
          ref={cloudRef2}
        />
      </Clouds>
    </group>
  )
}
export default SceneClouds
