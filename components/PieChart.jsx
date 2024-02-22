import { isMobileContext } from "@/contexts/isMobileContext";
import { openInNewTab } from "@/utils/utils";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { LoopOnce } from "three";

function PieChart({ nodes, materials, actions, mixer }) {
  const [hovered, hover] = useState(false);
  const { isMobile } = useContext(isMobileContext);
  const [clicks, setClicks] = useState(0);
  const pieGroup = useRef();

  const handlePointerDown = (e) => {
    if (isMobile) {
      hover(true);
      actions.pieChartAction.play();
      setClicks(clicks + 1);
    }
  };

  const handlePointerUp = (e) => {
    if (!isMobile || (isMobile && clicks > 1)) {
      openInNewTab("https://carbon-data-pie.netlify.app/");
    } else if (isMobile) {
      hover(true);
    }
  };

  useEffect(() => {
    actions.pieChartAction.setLoop(LoopOnce, 1);
  }, []);

  useFrame((state) => {
    const et = state.clock.elapsedTime;
    if (mixer.stats.actions.inUse === 0) {
      pieGroup.current.position.y = (Math.sin(et) * 1) / 6 + 0.8;
      pieGroup.current.rotation.x = Math.sin(et / 3) / 2;
      pieGroup.current.rotation.y = Math.cos(et / 2) / 2;
      pieGroup.current.rotation.z = Math.sin(et / 3) / 2;
    }
  });

  useEffect(() => {
    const fn = (e) => actions.pieChartAction.stop()
    mixer.addEventListener("finished", fn);
    return () => {
      mixer.removeEventListener("finished", fn);
    };
  },[mixer]);

  return (
    <group
      ref={pieGroup}
      onPointerDown={handlePointerDown}
      name="pieChart"
      position={[-2.27789855, 1.09064043, 0]}
      rotation={[-0.0233508, -0.40575488, -0.03035608]}
      onPointerOver={() => {
        hover(true);
        actions.pieChartAction.play();
      }}
      onPointerOut={() => hover(false)}
      onPointerUp={handlePointerUp}
    >
      <mesh
        name="Mesh_2"
        castShadow
        receiveShadow
        geometry={nodes.Mesh_6 ? nodes.Mesh_6.geometry : nodes.Mesh_2.geometry}
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
        name="Mesh_3"
        castShadow
        receiveShadow
        geometry={nodes.Mesh_7 ? nodes.Mesh_7.geometry : nodes.Mesh_3.geometry}
        material={materials.pie2}
      >
        {hovered && (
          <meshStandardMaterial
            color={"#E67D16"}
            emissive={"#E67D16"}
            emissiveIntensity={hovered ? 3 : 0}
            toneMapped={false}
          />
        )}
      </mesh>
      <mesh
        name="Mesh_4"
        castShadow
        receiveShadow
        geometry={nodes.Mesh_4 ? nodes.Mesh_4.geometry : nodes.Mesh.geometry}
        material={materials.pie3}
      >
        {hovered && (
          <meshStandardMaterial
            color={"#0C00D4"}
            emissive={"#396CDF"}
            emissiveIntensity={hovered ? 6 : 0}
            toneMapped={false}
          />
        )}
      </mesh>
      <mesh
        name="Mesh_5"
        castShadow
        receiveShadow
        geometry={nodes.Mesh_5 ? nodes.Mesh_5.geometry : nodes.Mesh_1.geometry}
        material={materials.pie4}
      >
        {hovered && (
          <meshStandardMaterial
            color={"#B31E14"}
            emissive={"#D94238"}
            emissiveIntensity={hovered ? 4 : 0}
            toneMapped={false}
          />
        )}
      </mesh>
    </group>
  );
}

export default PieChart;
