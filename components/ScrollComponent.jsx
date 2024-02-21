import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'

export default function ScrollComponent({ cameraPosition }) {
  const scroll = useScroll()

  useFrame((state, delta) => {
    const offset = scroll.offset
    state.camera.position.set(
      cameraPosition[0] + offset * 1.5,
      cameraPosition[1],
      cameraPosition[2] - offset
    )

  })

  return <></>
}
