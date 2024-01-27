import { openInNewTab } from "@/utils/utils";
import { useEffect, useState } from "react";
import { LoopOnce } from "three";



function PieChart({ nodes, materials, actions }) {
  const [hovered, hover] = useState(false);

  useEffect(() => {
    actions.pieChartAction.setLoop(LoopOnce, 1);
    actions.pieChartAction.clampWhenFinished = true;
  }, []);

  return (
    <group
      name="pieChart"
      position={[-2.27789855, 1.09064043, 0]}
      rotation={[-0.0233508, -0.40575488, -0.03035608]}
      onPointerOver={() => {
        hover(true);
        actions.pieChartAction.play();
      }}
      onPointerOut={() => hover(false)}
      onClick={() => openInNewTab('https://carbon-data-pie.netlify.app/')}
    >
      <mesh
        name="Mesh"
        castShadow
        receiveShadow
        geometry={nodes.Mesh_7.geometry}
        material={materials.pie1}
      >
        {hovered && (
          <meshStandardMaterial
            color={"green"}
            emissive={"green"}
            emissiveIntensity={hovered ? 5 : 0}
            toneMapped={false}
          />
        )}
      </mesh>
      <mesh
        name="Mesh_4"
        castShadow
        receiveShadow
        geometry={nodes.Mesh_4.geometry}
        material={materials.pie2}
      >
        {hovered && (
          <meshStandardMaterial
            color={"#E67D16"}
            emissive={"#E67D16"}
            emissiveIntensity={hovered ? 5 : 0}
            toneMapped={false}
          />
        )}
      </mesh>
      <mesh
        name="Mesh_5"
        castShadow
        receiveShadow
        geometry={nodes.Mesh_5.geometry}
        material={materials.pie3}
      >
        {hovered && (
          <meshStandardMaterial
            color={"#0C00D4"}
            emissive={"#396CDF"}
            emissiveIntensity={hovered ? 5 : 0}
            toneMapped={false}
          />
        )}
      </mesh>
      <mesh
        name="Mesh_6"
        castShadow
        receiveShadow
        geometry={nodes.Mesh_6.geometry}
        material={materials.pie4}
      >
        {hovered && (
          <meshStandardMaterial
            color={"#B31E14"}
            emissive={"#D94238"}
            emissiveIntensity={hovered ? 5 : 0}
            toneMapped={false}
          />
        )}
      </mesh>
    </group>
  );
}

export default PieChart;
