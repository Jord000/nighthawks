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
          <Bloom
            luminanceThreshold={1}
            mipmapBlur
            intensity={0.35 * 4}
            levels={8}
          />
          <DepthOfField
            target={[0, 0, 13]}
            focalLength={0.3}
            bokehScale={15}
            height={700}
          />
          <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
          <Noise opacity={0.04} />
        </EffectComposer>
        {isMobile && (
          <OrbitControls
            minAzimuthAngle={Math.PI / 5.9}
            maxAzimuthAngle={Math.PI / 3.2}
            minPolarAngle={Math.PI / 2.4}
            maxPolarAngle={Math.PI - Math.PI / 2}
            target={[-4, 0.6, -3]}
            dampingFactor={0.07}
            rotateSpeed={0.25}
          />
        )}
        {!isMobile && <FollowMouse />}
       
      <OrbitControls/>
      </Canvas>
      <LoadingScreen />
    </div>
  )
}

export default BaseCanvas
