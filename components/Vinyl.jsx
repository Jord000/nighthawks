import { openInNewTab } from '@/utils/utils'
import { useContext, useRef, useState } from 'react'
import { isMobileContext } from '@/contexts/isMobileContext'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'

function Vinyl({ nodes, materials }) {
  const [hovered, hover] = useState(false)
  const { isMobile } = useContext(isMobileContext)
  const [clicks, setClicks] = useState(0)
  const vinylGroup = useRef()
  // Clock for the bob/spin — runs 1.5x faster while hovered
  const animTime = useRef(0)

  const handlePointerDown = (e) => {
    if (isMobile) {
      hover(true)
      setClicks(clicks + 1)
    }
  }

  const handlePointerUp = (e) => {
    if (!isMobile || (isMobile && clicks > 1)) {
      openInNewTab(
        'https://github.com/GatefoldWax/wax-frontend/blob/main/README.md'
      )
    } else if (isMobile) {
      hover(true)
    }
  }

  useFrame((state, delta) => {
    // Hover only speeds up this same motion — objects never drift away
    animTime.current += Math.min(delta, 0.05) * (hovered ? 1.8 : 1)
    const et = animTime.current

    vinylGroup.current.position.y = (Math.sin(et * 1.2) * 1) / 6 + 1
    vinylGroup.current.rotation.x = Math.sin(et / 3)
    vinylGroup.current.rotation.y = Math.cos((et * 2) / 3) / 2
    vinylGroup.current.rotation.z = Math.sin(et / 3)
  })

  return (
    <group
      ref={vinylGroup}
      name="vinyl"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOver={() => {
        hover(true)
      }}
      onPointerOut={() => hover(false)}
      position={[-0.6684292, 0.5, 0.00542845]}
      scale={1.15}
    >
      <mesh
        name="Cylinder010"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
      >
        <MeshTransmissionMaterial
          resolution={1024}
          distortion={0.25}
          color="#E3E3E3"
          thickness={1}
          anisotropy={1}
          emissive={'hotpink'}
          emissiveIntensity={hovered ? 5 : 0.01}
          toneMapped={false}
        />
      </mesh>
      <mesh
        name="Cylinder010_1"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010_1.geometry}
        material={materials.paper}
      />
      <mesh
        name="Cylinder010_2"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010_2.geometry}
        material={materials.vinyllabel}
      />
    </group>
  )
}

export default Vinyl
