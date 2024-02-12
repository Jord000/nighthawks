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
      <hemisphereLight intensity={3} />
      <spotLight
        color={'#7754DA'}
        position={[-3, 2, 1.5]}
        target-position={[-1, 1, 0]}
        penumbra={1}
        intensity={80}
        castShadow
        shadow-mapSize={1024}
      
      />
      <directionalLight
        color={'#7754DA'}
        position={[-2, 2, 1.5]}
        angle={0.1}
        target-position={[-1, 2, -2]}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
        // ref={directionalLight}
      />
    </>
  )
}

export default Lights
