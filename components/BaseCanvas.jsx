'use client'
import { Canvas } from '@react-three/fiber'
import { NighthawksModel } from './NighthawksModel'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useContext, useEffect } from 'react'
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

function BaseCanvas() {
  const { isLoaded } = useContext(LoadedContext)
  const { isMobile, setIsMobile } = useContext(isMobileContext)

  useEffect(() => {
    if (window.innerWidth < 800) {
      setIsMobile(true)
    }
  }, [isLoaded])

  return (
    <div id="canvas-container" className="flex h-[100%] w-[100%]">
      <Canvas
        shadows
        camera={{
          position: [-1.2, 2, 1.8],
          fov: 70,
          zoom: 1.1,
        }}
      >
        <fog attach="fog" args={['#d10000', 8, 35]} />
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
          <Bloom luminanceThreshold={1} mipmapBlur intensity={6} levels={8} />
          <DepthOfField
            focusDistance={0} 
            focalLength={0.9} 
            bokehScale={2} 
          />
          <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
          <Noise opacity={0.02} />
        </EffectComposer>
        {!isMobile && <FollowMouse />}

        {/* <OrbitControls /> */}
      </Canvas>
      <LoadingScreen />
    </div>
  )
}

export default BaseCanvas
