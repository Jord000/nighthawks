'use client'
import { Canvas } from '@react-three/fiber'
import { NighthawksModel } from './NighthawksModel'
import { Suspense, useContext, useEffect, useState } from 'react'
import Lights from './Lights'
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Noise,
  ToneMapping,
} from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'
import SceneClouds from './SceneClouds'
import LoadingScreen from './LoadingScreen'
import { LoadedContext } from '@/contexts/LoadedContext'
import FollowMouse from './FollowMouse'
import { isMobileContext } from '@/contexts/isMobileContext'
import ScrollComponent from './ScrollComponent'
import { ScrollControls } from '@react-three/drei'

function BaseCanvas() {
  const { isLoaded } = useContext(LoadedContext)
  const { isMobile, setIsMobile } = useContext(isMobileContext)
  const [cameraPosition, setCameraPosition] = useState([-1.2, 2.2, 1.8])

  useEffect(() => {
    if (window.innerWidth < 800) {
      setIsMobile(true)
      setCameraPosition([-3, 2, 2])
    }
  }, [isLoaded])

  return (
    <div id="canvas-container" className="flex h-[100%] w-[100%]">
      <Canvas
        shadows
        camera={{
          position: cameraPosition,
          fov: 70,
          zoom: 1.1,
        }}
      >
        <ScrollControls>
          <ScrollComponent cameraPosition={cameraPosition} />
          <FollowMouse />
        </ScrollControls>
        <fog attach="fog" args={['#f5c3bf', 50, 190]} />
        <Suspense fallback={null}>
          {isLoaded && (
            <>
              <Lights />
              <SceneClouds />
              <NighthawksModel />
              <color attach="background" args={['black']} />
            </>
          )}
        </Suspense>
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={5} levels={8} />
          <DepthOfField focusDistance={0} focalLength={0.9} bokehScale={2} />
          <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
          <Noise opacity={0.02} />
        </EffectComposer>

        {/* <OrbitControls /> */}
      </Canvas>
      <LoadingScreen />
    </div>
  )
}

export default BaseCanvas
