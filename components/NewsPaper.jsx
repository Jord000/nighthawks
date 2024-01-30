import { isMobileContext } from "@/contexts/isMobileContext";
import { openInNewTab } from "@/utils/utils";
import { useContext, useEffect, useState } from "react";
import { LoopOnce } from "three";

function NewsPaper({ nodes, materials, actions }) {
  const [hovered, hover] = useState(false);
  const { isMobile } = useContext(isMobileContext);
  const [clicks, setClicks] = useState(0);

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
    }
  };

  useEffect(() => {
    actions.BezierCurveAction.clampWhenFinished = true;
    actions.BezierCurveAction.setLoop(LoopOnce, 1);
  }, []);

  return (
    <mesh
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
          emissiveIntensity={hovered ? 5 : 0}
          toneMapped={false}
        />
      )}
    </mesh>
  );
}
export default NewsPaper;
