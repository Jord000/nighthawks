import { isMobileContext } from '@/contexts/isMobileContext'
import { openInNewTab } from '@/utils/utils'
import { useFrame } from '@react-three/fiber'
import { useContext, useRef, useState } from 'react'

function NewsPaper({ nodes, materials }) {
  const [hovered, hover] = useState(false)
  const { isMobile } = useContext(isMobileContext)
  const [clicks, setClicks] = useState(0)
  const newsGroup = useRef()
  const [isAnimating, setIsAnimating] = useState(false)
  let step = 0.01

  const handlePointerDown = (e) => {
    if (isMobile) {
      hover(true)
      setIsAnimating(true)
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

  const customPaperAnimation = (position) => {
    if (position >= 1.8) {
      step = -0.01
    } else if (position <= 0.7) {
      setIsAnimating(false)
    }
    return (position += step)
  }

  useFrame((state) => {
    const et = state.clock.elapsedTime

    if (isAnimating) {
      newsGroup.current.position.y = customPaperAnimation(
        newsGroup.current.position.y
      )
      newsGroup.current.rotation.x = Math.sin(et * 1.5)
      newsGroup.current.rotation.y = Math.cos(et * 3) / 2
      newsGroup.current.rotation.z = Math.sin(et * 1.5)
    } else {
      newsGroup.current.position.y = (Math.sin(et * 1.3) * 1) / 6 + 0.9
      newsGroup.current.rotation.x = Math.sin(et / 3)
      newsGroup.current.rotation.y = Math.cos((et * 2.2) / 3) / 2
      newsGroup.current.rotation.z = Math.sin(et / 3)
    }
  })

  return (
    <mesh
      ref={newsGroup}
      name="newspaper"
      onPointerOver={() => {
        hover(true)
        setIsAnimating(true)
      }}
      onPointerOut={() => hover(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      castShadow
      receiveShadow
      geometry={nodes.newspaper.geometry}
      material={materials.newspaper}
      position={[-1.20019758, 0.5, -0.00663512]}
      rotation={[-0.77247715, 0, 0]}
    >
      {hovered && (
        <meshStandardMaterial
          color={'white'}
          emissive={'#7FCDF4'}
          emissiveIntensity={hovered ? 2 : 0}
          toneMapped={false}
        />
      )}
    </mesh>
  )
}
export default NewsPaper
