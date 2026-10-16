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

  // Invisible box padded around the paper so the thin model still has a
  // comfortable hover/click target
  const hitGeometry = useMemo(() => {
    const geometry = nodes.newspaper.geometry
    geometry.computeBoundingBox()
    const size = geometry.boundingBox.getSize(new Vector3())
    const center = geometry.boundingBox.getCenter(new Vector3())
    const box = new BoxGeometry(size.x + 0.4, size.y + 0.4, size.z + 0.4)
    box.translate(center.x, center.y, center.z)
    return box
  }, [nodes])

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
      position={[-1.20019758, 0.5, -0.00663512]}
      rotation={[-0.77247715, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.newspaper.geometry}
        material={materials.newspaper}
      >
        {hovered && (
          <meshStandardMaterial
            color={'white'}
            emissive={'#7FCDF4'}
            emissiveIntensity={hovered ? 1.4 : 0}
            toneMapped={false}
          />
        )}
      </mesh>
      {/* Invisible, oversized hit target */}
      <mesh name="newspaperHitbox" geometry={hitGeometry}>
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
    </group>
  )
}
export default NewsPaper
