import { AccumulativeShadows, RandomizedLight, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { PointLightHelper, SpotLightHelper } from "three";


function Lights() {
    const spotLight = useRef();
//   useHelper(spotLight, SpotLightHelper, "cyan");
  return (
    <>
      <ambientLight intensity={0.1} />
      <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
          <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
        </AccumulativeShadows>
       <hemisphereLight args={["#fff", "#333", 3]} />
      <spotLight ref={spotLight} position={[0,3,0]} intensity={1} castShadow/>
    </>
  );
}

export default Lights;
