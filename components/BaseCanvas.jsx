import { NighthawksModel } from './NighthawksModel'


function BaseCanvas() {
    return (
      <div id="canvas-container">
        <Canvas>
        <ambientLight intensity={0.1} />
        <PerspectiveCamera fov={75} position={[0, 0, 0]} makeDefault />
        <Environment files={'./public/bar-enviro-for-export.glb'} background />
            <NighthawksModel/>
        </Canvas>
      </div>
    )
  }

  export default BaseCanvas