import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function NighthawksModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./public/bar-enviro-for-export.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="floor"
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={nodes.floor.material}
        />
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
        <group
          name="bar"
          position={[-0.34193683, 0, 0]}
          scale={[1, 1.06359875, 1]}
        >
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
          position={[0.78591412, 0.25, 0.69292593]}
          scale={[3.59358215, 0.25, 3.59358215]}
        />
        <mesh
          name="barstool"
          castShadow
          receiveShadow
          geometry={nodes.barstool.geometry}
          material={materials.elm}
          position={[-1.49144232, 0.65327078, 0.56914574]}
        >
          <mesh
            name="barstoollegs"
            castShadow
            receiveShadow
            geometry={nodes.barstoollegs.geometry}
            material={materials.elm}
            position={[1.7436949, -0.65327078, -0.56914574]}
          />
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.elm}
            position={[0, -0.65759832, -0.47687781]}
            scale={0.83788347}
          />
        </mesh>
        <group name="dispenser">
          <mesh
            name="Mesh_8"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_8.geometry}
            material={materials.metal}
          />
          <mesh
            name="Mesh_9"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_9.geometry}
            material={materials.walnut}
          />
        </group>
        <mesh
          name="glass01"
          castShadow
          receiveShadow
          geometry={nodes.glass01.geometry}
          material={materials.glass2}
          position={[-0.02226281, 0, 0]}
          scale={[1, 1.06359875, 1]}
        />
        <mesh
          name="glassinhand"
          castShadow
          receiveShadow
          geometry={nodes.glassinhand.geometry}
          material={nodes.glassinhand.material}
          position={[0.34199664, 0, 0]}
        />
        <mesh
          name="backbarglass"
          castShadow
          receiveShadow
          geometry={nodes.backbarglass.geometry}
          material={materials.glass2}
          position={[-1.42833924, -0.06000632, -1.50358546]}
          scale={[1, 1.06359875, 1]}
        />
        <mesh
          name="tablecloth"
          castShadow
          receiveShadow
          geometry={nodes.tablecloth.geometry}
          material={nodes.tablecloth.material}
          position={[0.36609459, 0.9608351, -0.0181783]}
          scale={[0.24352553, 0.27698332, 0.19936426]}
        />
        <group
          name="RIG-mariarig"
          position={[0.14794901, 0, 0.33345735]}
          rotation={[0, 0.24242952, 0]}
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
          position={[0.34199664, 0, 0]}
        />
        <group
          name="pieChart"
          position={[-2.27789855, 1.09064043, 0]}
          rotation={[-0.40312975, -0.40235709, 0.1777791]}
        >
          <mesh
            name="Mesh_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials.pie1}
          />
          <mesh
            name="Mesh_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials.pie2}
          />
          <mesh
            name="Mesh_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={materials.pie3}
          />
          <mesh
            name="Mesh_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_4.geometry}
            material={materials.pie4}
          />
        </group>
        <mesh
          name="BezierCurve"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve.geometry}
          material={materials.newspaper}
          position={[-1.20019758, 1.02019525, -0.00663512]}
          rotation={[-0.77247715, 0, 0]}
        />
        <group name="vinyl" position={[-0.6684292, 0.96610433, 0.00542845]}>
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

useGLTF.preload("./public/bar-enviro-for-export.glb");