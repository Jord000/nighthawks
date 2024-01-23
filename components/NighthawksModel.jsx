import React, { useEffect, useRef } from "react";
import {
  useGLTF,
  useAnimations,
  MeshTransmissionMaterial,
  meshPhysicalMaterial,
  useTexture,
} from "@react-three/drei";

export function NighthawksModel(props) {
  const metalMatCap = useTexture('/metalmatcap1.png')
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/bar-enviro-for-export.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);
    actions.rigAction.play();
    actions.mariaRigAction.play();
    actions.glassinhandAction.play();
    actions.clothAction.play()
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="floor"
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={nodes.floor.material}
        >
          <meshPhysicalMaterial
            color={"#F0EFE5"}
            metalness={0.2}
            roughness={4}
            clearcoat={0.8}
          />
        </mesh>
        <group name="walls1">
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials["wall paint"]}
          />
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials.elm}
          />
        </group>
        <group name="back_bar">
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.walnut}
          />
          <mesh
            name="Cube002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.metal}
          />
        </group>
        <mesh
          name="ceiling"
          castShadow
          receiveShadow
          geometry={nodes.ceiling.geometry}
          material={materials["wall paint"]}
        />
        <group name="bar">
          <mesh
            name="Cube_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.bar}
          />
          <mesh
            name="Cube_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials.bartop}
          />
        </group>
        <mesh
          name="curve_wall"
          castShadow
          receiveShadow
          geometry={nodes.curve_wall.geometry}
          material={materials.walnut}
        />
        <mesh
          name="curve_ceiling"
          castShadow
          receiveShadow
          geometry={nodes.curve_ceiling.geometry}
          material={materials.walnut}
        />
        <mesh
          name="curve_glass"
          castShadow
          receiveShadow
          geometry={nodes.curve_glass.geometry}
          material={materials.glass}
          position={[0.786, 0.25, 0.693]}
          scale={[3.594, 0.25, 3.594]}
        >
          <MeshTransmissionMaterial
            thickness={0}
            roughness={0}
            clearcoat={1}
            clearcoatRoughness={0}
            transmission={1}
            samples={16}
            anisotropicBlur={0.1}
            iridescence={1}
            iridescenceIOR={1.25}
            iridescenceThicknessRange={[0, 1400]}
            envMapIntensity={1}
          />
        </mesh>
        <mesh
          name="barstool"
          castShadow
          receiveShadow
          geometry={nodes.barstool.geometry}
          material={materials.elm}
          position={[-1.491, 0.653, 0.569]}
        >
          <mesh
            name="barstoollegs"
            castShadow
            receiveShadow
            geometry={nodes.barstoollegs.geometry}
            material={materials.elm}
            position={[1.744, -0.653, -0.569]}
          />
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.elm}
            position={[0, -0.658, -0.477]}
            scale={0.838}
          />
        </mesh>
        <group name="dispenser">
          <mesh
            name="Mesh_7"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_7.geometry}

          >
            <meshMatcapMaterial matcap={metalMatCap} flatShading={false}/>
          </mesh>
          <mesh
            name="Mesh_8"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_8.geometry}
            material={materials.walnut}
          />
        </group>
        <mesh
          name="glass01"
          castShadow
          receiveShadow
          geometry={nodes.glass01.geometry}
          position={[-0.022, 0, 0]}
          scale={[1, 1.064, 1]}
        >
          <MeshTransmissionMaterial
            color={"#DDEDF5"}
            thickness={0.8}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.99}
            samples={16}
            anisotropicBlur={0.1}
            iridescence={1}
            iridescenceIOR={1.15}
            iridescenceThicknessRange={[0, 1400]}
            envMapIntensity={1}
          />
        </mesh>
        <mesh
          name="glassinhand"
          castShadow
          receiveShadow
          geometry={nodes.glassinhand.geometry}
          material={nodes.glassinhand.material}
          position={[0.401, 1.059, -0.248]}
        >
          <MeshTransmissionMaterial
            color={"#DDEDF5"}
            thickness={0.8}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.99}
            samples={16}
            anisotropicBlur={0.1}
            iridescence={1}
            iridescenceIOR={1.15}
            iridescenceThicknessRange={[0, 1400]}
            envMapIntensity={1}
          />
        </mesh>
        <mesh
          name="backbarglass"
          castShadow
          receiveShadow
          geometry={nodes.backbarglass.geometry}
          material={materials.glass2}
          position={[-1.428, -0.06, -1.504]}
          scale={[1, 1.064, 1]}
        >
          <MeshTransmissionMaterial
            color={"#DDEDF5"}
            thickness={0.8}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.99}
            samples={16}
            anisotropicBlur={0.1}
            iridescence={1}
            iridescenceIOR={1.15}
            iridescenceThicknessRange={[0, 1400]}
            envMapIntensity={1}
          />
        </mesh>
        <mesh
          name="tablecloth"
          castShadow
          receiveShadow
          geometry={nodes.tablecloth.geometry}
          material={nodes.tablecloth.material}
        >
          <meshPhysicalMaterial
            color={"#F3F4CF"}
            metalness={0.2}
            roughness={0}
            clearcoat={0.8}
          />
        </mesh>
        <group
          name="RIG-mariarig"
          position={[0.148, 0, 0.333]}
          rotation={[0, 0.242, 0]}
        >
          <skinnedMesh
            name="Maria1"
            geometry={nodes.Maria1.geometry}
            material={materials.maria}
            skeleton={nodes.Maria1.skeleton}
          />
          <primitive object={nodes.root} />
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes["MCH-hand_ikparentL"]} />
          <primitive object={nodes["MCH-upper_arm_ik_targetparentL"]} />
          <primitive object={nodes["MCH-hand_ikparentR"]} />
          <primitive object={nodes["MCH-upper_arm_ik_targetparentR"]} />
          <primitive object={nodes["MCH-foot_ikparentL"]} />
          <primitive object={nodes["MCH-thigh_ik_targetparentL"]} />
          <primitive object={nodes["MCH-foot_ikparentR"]} />
          <primitive object={nodes["MCH-thigh_ik_targetparentR"]} />
        </group>
        <group name="rig">
          <skinnedMesh
            name="tex"
            geometry={nodes.tex.geometry}
            material={materials.tex}
            skeleton={nodes.tex.skeleton}
          />
          <primitive object={nodes.root_1} />
          <primitive object={nodes["MCH-torsoparent_1"]} />
          <primitive object={nodes["MCH-hand_ikparentL_1"]} />
          <primitive object={nodes["MCH-upper_arm_ik_targetparentL_1"]} />
          <primitive object={nodes["MCH-hand_ikparentR_1"]} />
          <primitive object={nodes["MCH-upper_arm_ik_targetparentR_1"]} />
          <primitive object={nodes["MCH-foot_ikparentL_1"]} />
          <primitive object={nodes["MCH-thigh_ik_targetparentL_1"]} />
          <primitive object={nodes["MCH-foot_ikparentR_1"]} />
          <primitive object={nodes["MCH-thigh_ik_targetparentR_1"]} />
        </group>
        <mesh
          name="cloth"
          castShadow
          receiveShadow
          geometry={nodes.cloth.geometry}
          material={nodes.cloth.material}
          position={[0.385, 1.085, -0.263]}
        >
          <meshPhysicalMaterial
            color={"white"}
            metalness={0.2}
            roughness={0}
            clearcoat={0.8}
          />
        </mesh>
        <group
          name="pieChart"
          position={[-2.278, 1.091, 0]}
          rotation={[-0.403, -0.402, 0.178]}
        >
          {/* <mesh
            name="Mesh"
            castShadow
            receiveShadow
            geometry={nodes.Mesh.geometry}
            material={materials.pie1}
          />
          <mesh
            name="Mesh_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials.pie2}
          />
          <mesh
            name="Mesh_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials.pie3}
          /> */}
          {/* <mesh
            name="Mesh_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={materials.pie4}
          /> */}
        </group>
        <mesh
          name="BezierCurve"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve.geometry}
          material={materials.newspaper}
          position={[-1.2, 1.02, -0.007]}
          rotation={[-0.772, 0, 0]}
        />
        <group
          name="vinyl"
          onPointerEnter={() => {
            actions.CylinderAction.play();
          }}
          position={[-0.668, 0.966, 0.005]}
        >
          <mesh
            name="Cylinder010"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials["black plastic"]}
          />
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
            material={materials.label}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/bar-enviro-for-export.glb");
