import { isMobileContext } from '@/contexts/isMobileContext'
import { useFrame, useThree } from '@react-three/fiber'
import { useContext } from 'react'
import { Vector3 } from 'three'

export default function FollowMouse() {
  const { isMobile } = useContext(isMobileContext)
  const { camera, pointer } = useThree()
  useFrame(() => {
    let mouse3D = new Vector3(pointer.x / 2 - 1.5, 1, -pointer.y / 2)
    isMobile ? camera.lookAt(-2, 1, 0) : camera.lookAt(mouse3D)
  })
}
