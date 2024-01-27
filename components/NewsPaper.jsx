import { openInNewTab } from '@/utils/utils'
import { useEffect, useState } from 'react'
import { LoopOnce } from 'three'

function NewsPaper({ nodes, materials, actions }) {
  const [hovered, hover] = useState(false)

  useEffect(() => {
    actions.BezierCurveAction.clampWhenFinished = true
    actions.BezierCurveAction.setLoop(LoopOnce, 1)
  }, [])

  return (
    <mesh
      name="newspaper"
      onPointerOver={() => {
        hover(true)
        actions.BezierCurveAction.play()
      }}
      onPointerOut={() => hover(false)}
      onClick={() => openInNewTab('https://thenewsjw.netlify.app/')}
      castShadow
      receiveShadow
      geometry={nodes.newspaper.geometry}
      material={materials.newspaper}
      position={[-1.20019758, 1.02019525, -0.00663512]}
      rotation={[-0.77247715, 0, 0]}
    >
      {hovered && (
        <meshStandardMaterial
          color={'white'}
          emissive={'#7FCDF4'}
          emissiveIntensity={hovered ? 5 : 0}
          toneMapped={false}
        />
      )}
    </mesh>
  )
}
export default NewsPaper
