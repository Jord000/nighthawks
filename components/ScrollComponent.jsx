import { isMobileContext } from '@/contexts/isMobileContext'
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useContext } from 'react'

export default function ScrollComponent({ cameraPosition }) {
  const { isMobile, setIsMobile } = useContext(isMobileContext)
  const scroll = useScroll()

  useFrame((state, delta) => {
    const offset = scroll.offset

    isMobile
      ? state.camera.position.set(
          cameraPosition[0] + offset*3.5,
          cameraPosition[1],
          cameraPosition[2]-offset
        )
      : state.camera.position.set(
          cameraPosition[0] + offset * 1.5,
          cameraPosition[1],
          cameraPosition[2] - offset
        )
  })

  return <></>
}
