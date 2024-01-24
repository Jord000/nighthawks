import { useState } from "react";


function Vinyl({nodes, materials, actions}) {
  const [hovered, hover] = useState(false);
  return (
    <group
      name="vinyl"
      onPointerEnter={() => {
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

export default Vinyl
