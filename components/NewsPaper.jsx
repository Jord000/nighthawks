import { isMobileContext } from '@/contexts/isMobileContext'
import { openInNewTab } from '@/utils/utils'
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useContext, useEffect, useState } from 'react'
import { LoopOnce } from 'three'

function NewsPaper({ nodes, materials, actions }) {
  const [hovered, hover] = useState(false)
  const { isMobile } = useContext(isMobileContext)
  const [clicks, setClicks] = useState(0)
  const [paperPositionX, setPaperPositionX] = useState(-1.20019758)
  const [paperPositionY, setPaperPositionY] = useState(-0.00663512)

  const scrollData = useScroll()

  const handlePointerDown = (e) => {
    if (isMobile) {
      hover(true)
      actions.BezierCurveAction.play()
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

  useEffect(() => {
    actions.BezierCurveAction.clampWhenFinished = true
    actions.BezierCurveAction.setLoop(LoopOnce, 1)
  }, [])

  useFrame(() => {
    setPaperPositionX(-1.20019758 - scrollData.range(1 / 3, 1 / 3, 0.1) * 1.5)
    // setPaperPositionY(0.00542845 + scrollData.range(1 / 3, 1 / 3, 0.1) / 2)
  })

  return (
    <mesh
      name="newspaper"
      onPointerOver={() => {
        hover(true)
        actions.BezierCurveAction.play()
      }}
      onPointerOut={() => hover(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      castShadow
      receiveShadow
      geometry={nodes.newspaper.geometry}
      material={materials.newspaper}
      position={[paperPositionX, 1.02019525, paperPositionY]}
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
