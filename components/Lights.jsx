'use client'
import {
  AccumulativeShadows,
  RandomizedLight,
  SoftShadows,
  useHelper,
} from '@react-three/drei'
import { useRef } from 'react'
import { DirectionalLightHelper } from 'three'

function Lights() {
  const directionalLight = useRef()
  useHelper(directionalLight, DirectionalLightHelper, 1, 'red')

  return (
    <>
      <SoftShadows />
      <ambientLight intensity={1} />
      <hemisphereLight intensity={2} groundColor="white" />
      <spotLight
        color={'#b6a5e8'}
        position={[-3, 2, 1.5]}
        target-position={[-1, 1, 0]}
        penumbra={1}
        intensity={20}
        castShadow
        shadow-mapSize={1024}
      />
      <directionalLight
        color={'#c4b8e6'}
        position={[1.5, 2, 1]}
        angle={0.1}
        target-position={[-1, 1, 0]}
        intensity={4}
        castShadow
        shadow-mapSize={1024}
        // ref={directionalLight}
      />
    </>
  )
}

export default Lights
