import { useState } from "react";

function NewsPaper({ nodes, materials, actions }) {
  const [hovered, hover] = useState(false);
  return (
    <mesh
      name="newspaper"
      onPointerEnter={() => {
        hover(true);
        actions.BezierCurveAction.play();
      }}
      onPointerOut={() => hover(false)}
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
