import { openInNewTab } from "@/utils/utils";
import { LoopOnce } from "three";
import { useContext, useEffect, useRef, useState } from "react";
import { isMobileContext } from "@/contexts/isMobileContext";
import { useFrame } from "@react-three/fiber";

function Vinyl({ nodes, materials, actions }) {
  const [hovered, hover] = useState(false);
  const { isMobile } = useContext(isMobileContext);
  const [clicks, setClicks] = useState(0);
  const vinylGroup = useRef();

  const handlePointerDown = (e) => {
    if (isMobile) {
      hover(true);
      actions.CylinderAction.play();
      setClicks(clicks + 1);
    }
  };

  const handlePointerUp = (e) => {
    if (!isMobile || (isMobile && clicks > 1)) {
      openInNewTab(
        "https://github.com/Jord000/wax-frontend/blob/main/README.md"
      );
    } else if (isMobile) {
      hover(true);
    }
  };

  useEffect(() => {
    actions.CylinderAction.setLoop(LoopOnce, 1);
    actions.CylinderAction.clampWhenFinished = true;
  }, []);

  useFrame((state) => {
    const et = state.clock.elapsedTime;
    vinylGroup.current.position.y = (Math.sin(et * 1.2) * 1) / 6 + 1;
    vinylGroup.current.rotation.x = Math.sin(et / 3);
    vinylGroup.current.rotation.y = Math.cos((et * 2) / 3) / 2;
    vinylGroup.current.rotation.z = Math.sin(et / 3);
  });

  return (
    <group
      ref={vinylGroup}
      name="vinyl"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOver={() => {
        actions.CylinderAction.play();
        hover(true);
      }}
      onPointerOut={() => hover(false)}
      position={[-0.6684292, 0.96610433, 0.00542845]}
    >
      <mesh
        name="Cylinder010"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
      >
        <meshStandardMaterial
          color={"black"}
          emissive={"hotpink"}
          emissiveIntensity={hovered ? 5 : 0}
          toneMapped={false}
        />
      </mesh>
      <mesh
        name="Cylinder010_1"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010_1.geometry}
        material={materials.paper}
      />
      <mesh
        name="Cylinder010_2"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010_2.geometry}
        material={materials.vinyllabel}
      />
    </group>
  );
}

export default Vinyl;
