function PieChart({ nodes, materials, actions }) {
  return (
    <group
      name="pieChart"
      position={[-2.27789855, 1.09064043, 0]}
      rotation={[-0.0233508, -0.40575488, -0.03035608]}
      onPointerEnter={() => {
        actions.pieChartAction.play();
      }}
    >
      <mesh
      name="Mesh"
      castShadow
      receiveShadow
      geometry={nodes.Mesh_5.geometry}
      material={materials.pie1}
    />
      <mesh
      name="Mesh_4"
      castShadow
      receiveShadow
      geometry={nodes.Mesh_4.geometry}
      material={materials.pie2}
    />
      <mesh
        name="Mesh_2"
        castShadow
        receiveShadow
        geometry={nodes.Mesh_2.geometry}
        material={materials.pie3}
      />
      <mesh
        name="Mesh_3"
        castShadow
        receiveShadow
        geometry={nodes.Mesh_3.geometry}
        material={materials.pie4}
      />
    </group>
  );
}

export default PieChart;
