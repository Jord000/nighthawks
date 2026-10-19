import { isMobileContext } from '@/contexts/isMobileContext'
import { openInNewTab } from '@/utils/utils'
import { useFrame } from '@react-three/fiber'
import { useContext, useMemo, useRef, useState } from 'react'
import { BoxGeometry, Vector3 } from 'three'

function NewsPaper({ nodes, materials }) {
  const [hovered, hover] = useState(false)
  const { isMobile } = useContext(isMobileContext)
  const [clicks, setClicks] = useState(0)
  const newsGroup = useRef()
  // Clock for the bob/spin — runs 1.5x faster while hovered
  const animTime = useRef(0)

  // Invisible box padded around the paper 
  const hitGeometry = useMemo(() => {
    const geometry = nodes.newspaper.geometry
    geometry.computeBoundingBox()
    const size = geometry.boundingBox.getSize(new Vector3())
    const center = geometry.boundingBox.getCenter(new Vector3())
    const box = new BoxGeometry(size.x + 0.4, size.y + 0.4, size.z + 0.4)
    box.translate(center.x, center.y, center.z)
    return box
  }, [nodes])

  // Rest and hover share this material — the glow is purely emissive
  const paperMaterial = useMemo(() => {
    const material = materials.newspaper.clone()
    material.color.set('#c9c4b8')
    material.roughness = 0.85
    material.metalness = 0
    material.emissive.set('#7FCDF4')
    material.emissiveIntensity = 0
    return material
  }, [materials])

  const handlePointerDown = (e) => {
    if (isMobile) {
      hover(true)
      setClicks(clicks + 1)
    }
  }

  const handlePointerUp = (e) => {
    if (!isMobile || (isMobile && clicks > 1)) {
      openInNewTab('https://thenewsjw.netlify.app/')
    } else if (isMobile) {
      hover(true)
    }
  }

  useFrame((state, delta) => {
    paperMaterial.emissiveIntensity = hovered ? 0.8 : 0
    // Hover only speeds up this same motion — objects never drift away
    animTime.current += Math.min(delta, 0.04) * (hovered ? 1.68 : 1)
    const et = animTime.current

    newsGroup.current.position.y = (Math.sin(et * 1.3) * 1) / 6 + 0.9
    newsGroup.current.rotation.x = Math.sin(et / 3)
    newsGroup.current.rotation.y = Math.cos((et * 2.2) / 3) / 2
    newsGroup.current.rotation.z = Math.sin(et / 3)
  })

  return (
    <group
      ref={newsGroup}
      name="newspaper"
      onPointerOver={() => {
        hover(true)
      }}
      onPointerOut={() => hover(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      position={[-1.21, 0.5, -0.006]}
      rotation={[-0.78, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.newspaper.geometry}
        material={paperMaterial}
      />
      {/* Invisible, oversized hit target */}
      <mesh name="newspaperHitbox" geometry={hitGeometry}>
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
    </group>
  )
}
export default NewsPaper
