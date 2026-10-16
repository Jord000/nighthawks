import { openInNewTab } from '@/utils/utils'
import { useContext, useMemo, useRef, useState } from 'react'
import { isMobileContext } from '@/contexts/isMobileContext'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { SRGBColorSpace } from 'three'

function MTGCard() {
  const [hovered, hover] = useState(false)
  const { isMobile } = useContext(isMobileContext)
  const [clicks, setClicks] = useState(0)
  const cardGroup = useRef()
  // Clock for the bob/spin — runs 1.5x faster while hovered
  const animTime = useRef(0)

  // Real card-back image — the source is a square with white margins, so the
  // texture is cropped to the card's portrait bounds via repeat/offset
  const cardTexture = useTexture('/mtg-card-back.webp')
  useMemo(() => {
    cardTexture.colorSpace = SRGBColorSpace
    cardTexture.repeat.set(0.6159, 0.8604)
    cardTexture.offset.set(0.1915, 0.0704)
  }, [cardTexture])

  const handlePointerDown = (e) => {
    if (isMobile) {
      hover(true)
      setClicks(clicks + 1)
    }
  }

  const handlePointerUp = (e) => {
    if (!isMobile || (isMobile && clicks > 1)) {
      openInNewTab('https://github.com/Jord000/MTG-Analytics-Lab#mtg-analytics-lab')
    } else if (isMobile) {
      hover(true)
    }
  }

  useFrame((state, delta) => {
    // Hover only speeds up this same motion — objects never drift away
    animTime.current += Math.min(delta, 0.05) * (hovered ? 1.8 : 1)
    const et = animTime.current

    cardGroup.current.position.y = (Math.sin(et * 1.1) * 1) / 6 + 0.85
    cardGroup.current.rotation.x = Math.sin(et / 3) / 2
    cardGroup.current.rotation.y = Math.cos(et / 2) / 2
    cardGroup.current.rotation.z = Math.sin(et / 3) / 2
  })

  return (
    <group
      ref={cardGroup}
      name="mtgCard"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOver={() => {
        hover(true)
      }}
      onPointerOut={() => hover(false)}
      position={[-3.35, 0.5, 0]}
    >
      <mesh name="mtgCardMesh" castShadow receiveShadow>
        <boxGeometry args={[0.68, 0.95, 0.02]} />
        {/* thin dark card edges */}
        <meshStandardMaterial attach="material-0" color="#0c0c0c" roughness={0.8} />
        <meshStandardMaterial attach="material-1" color="#0c0c0c" roughness={0.8} />
        <meshStandardMaterial attach="material-2" color="#0c0c0c" roughness={0.8} />
        <meshStandardMaterial attach="material-3" color="#0c0c0c" roughness={0.8} />
        {/* both faces show the card back image */}
        <meshStandardMaterial
          attach="material-4"
          map={cardTexture}
          emissive={'#7FCDF4'}
          emissiveIntensity={hovered ? 1.4 : 0}
          toneMapped={false}
        />
        <meshStandardMaterial
          attach="material-5"
          map={cardTexture}
          emissive={'#7FCDF4'}
          emissiveIntensity={hovered ? 1.4 : 0}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

export default MTGCard