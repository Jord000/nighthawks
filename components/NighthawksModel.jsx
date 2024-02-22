import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'

import Vinyl from './Vinyl'
import NewsPaper from './NewsPaper'
import PieChart from './PieChart'

export function NighthawksModel(props) {
  const metalMatCap = useTexture('/metalmatcap1.png')
  const group = useRef()

  const { nodes, materials, animations } = useGLTF('/bar-enviro-for-export.glb')
  const { actions, mixer } = useAnimations(animations, group)



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <Vinyl nodes={nodes} materials={materials} actions={actions} mixer={mixer}/>
        <NewsPaper nodes={nodes} materials={materials} actions={actions} mixer={mixer}/>
        <PieChart nodes={nodes} materials={materials} actions={actions} mixer={mixer}/>
      </group>
    </group>
  )
}

useGLTF.preload('/bar-enviro-for-export.glb')
