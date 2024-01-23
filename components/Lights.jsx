import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { PointLightHelper, SpotLightHelper } from "three";



function Lights() {
    const spotLight = useRef();
//   useHelper(spotLight, SpotLightHelper, "cyan");
  return (
    <>
      <ambientLight intensity={0.1} />
      <hemisphereLight args={["#fff", "#333", 3]} />
      <spotLight ref={spotLight} position={[0,3,0]} intensity={1} castShadow/>
    </>
  );
}

export default Lights;
