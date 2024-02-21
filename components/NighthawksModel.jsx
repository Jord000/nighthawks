import React, { useEffect, useRef } from 'react'
import {
  useGLTF,
  useAnimations,
  MeshTransmissionMaterial,
  useTexture,
  ScrollControls,
  Scroll,
  useScroll,
} from '@react-three/drei'

import Vinyl from './Vinyl'
import NewsPaper from './NewsPaper'
import PieChart from './PieChart'

export function NighthawksModel(props) {
  const metalMatCap = useTexture('/metalmatcap1.png')
  const group = useRef()

  const { nodes, materials, animations } = useGLTF('/bar-enviro-for-export.glb')
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {}, [mixer])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <ScrollControls>
    
          <Vinyl nodes={nodes} materials={materials} actions={actions} />
          <NewsPaper nodes={nodes} materials={materials} actions={actions} />
          <PieChart nodes={nodes} materials={materials} actions={actions} />

        </ScrollControls>
      </group>
    </group>
  )
}

useGLTF.preload('/bar-enviro-for-export.glb')
