import { isMobileContext } from "@/contexts/isMobileContext";
import { openInNewTab } from "@/utils/utils";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { LoopOnce } from "three";

function NewsPaper({ nodes, materials, actions }) {
  const [hovered, hover] = useState(false);
  const { isMobile } = useContext(isMobileContext);
  const [clicks, setClicks] = useState(0);
  const newsGroup = useRef();
  const scrollData = useScroll();

  const handlePointerDown = (e) => {
    if (isMobile) {
      hover(true);
      actions.BezierCurveAction.play();
      setClicks(clicks + 1);
    }
  };

  const handlePointerUp = (e) => {
    if (!isMobile || (isMobile && clicks > 1)) {
      openInNewTab("https://thenewsjw.netlify.app/");
    } else if (isMobile) {
      hover(true);
    }
  };

  useEffect(() => {
    actions.BezierCurveAction.clampWhenFinished = true;
    actions.BezierCurveAction.setLoop(LoopOnce, 1);
  }, []);

  useFrame((state) => {
    const et = state.clock.elapsedTime;
    newsGroup.current.position.y = (Math.sin(et * 1.3) * 1) / 6 + 0.9;
    newsGroup.current.rotation.x = Math.sin(et / 3);
    newsGroup.current.rotation.y = Math.cos((et * 2.2) / 3) / 2;
    newsGroup.current.rotation.z = Math.sin(et / 3);
  });
console.log(actions.BezierCurveAction)
  return (
    <mesh
      ref={newsGroup}
      name="newspaper"
      onPointerOver={() => {
        hover(true);
        actions.BezierCurveAction.play();
      }}
      onPointerOut={() => hover(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      castShadow
      receiveShadow
      geometry={nodes.newspaper.geometry}
      material={materials.newspaper}
      position={[-1.20019758, 1.02019525, -0.00663512]}
      rotation={[-0.77247715, 0, 0]}
    >
      {hovered && (
        <meshStandardMaterial
          color={"white"}
          emissive={"#7FCDF4"}
          emissiveIntensity={hovered ? 2 : 0}
          toneMapped={false}
        />
      )}
    </mesh>
  );
}
export default NewsPaper;
