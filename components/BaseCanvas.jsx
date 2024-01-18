import { Canvas } from '@react-three/fiber'
import { NighthawksModel } from './NighthawksModel'


function BaseCanvas() {
    return (
      <div id="canvas-container">
        <Canvas>
            <NighthawksModel/>
        </Canvas>
      </div>
    )
  }

  export default BaseCanvas