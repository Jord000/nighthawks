import React, { useEffect, useRef, useState } from "react";
import {
  useGLTF,
  useAnimations,
  MeshTransmissionMaterial,
  meshPhysicalMaterial,
  useTexture,
} from "@react-three/drei";
import { LoopOnce } from "three";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import Vinyl from "./Vinyl";
import NewsPaper from "./NewsPaper";

export function NighthawksModel(props) {
  const metalMatCap = useTexture("/metalmatcap1.png");
  const group = useRef();

  const { nodes, materials, animations } = useGLTF(
    "/bar-enviro-for-export.glb"
  );
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    console.log(mixer);
    actions.BezierCurveAction.clampWhenFinished = true;
    actions.BezierCurveAction.setLoop(LoopOnce, 1);
    actions.pieChartAction.setLoop(LoopOnce, 1);
    actions.pieChartAction.clampWhenFinished = true;
    actions.CylinderAction.setLoop(LoopOnce, 1);
    actions.CylinderAction.clampWhenFinished = true;

    actions.rigAction.play();
    actions.mariaRigAction.play();
    actions.glassinhandAction.play();
    actions.clothAction.play();
    const glow = (e) => console.log(e, "finished");
    mixer.addEventListener("finished", glow);
  }, [mixer]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="floor"
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={materials.tiledfloor}
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
            material={materials.elm_wood_33_49_4K}
          />
          <mesh
            name="Cube001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials["black plastic"]}
          />
        </group>
        <group name="back_bar">
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.walnut_wood_33_36_4K}
          />
          <mesh
            name="Cube002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials["cabinet metal"]}
          />
        </group>
        <mesh
          name="ceiling"
          castShadow
          receiveShadow
          geometry={nodes.ceiling.geometry}
          material={materials.ceiling}
        />
        <group name="bar" position={[-0.08, 0.526, 0.105]}>
          <mesh
            name="Cube_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.bar1}
          />
          <mesh
            name="Cube_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials.bartop}
          />
          <mesh
            name="Cube_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube_3.geometry}
            material={materials.bar2}
          />
          <mesh
            name="Cube_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube_4.geometry}
            material={materials.bartopLED}
          />
        </group>
        <mesh
          name="curve_wall"
          castShadow
          receiveShadow
          geometry={nodes.curve_wall.geometry}
          material={materials.walnut_wood_33_36_4K}
        />
        <mesh
          name="curve_ceiling"
          castShadow
          receiveShadow
          geometry={nodes.curve_ceiling.geometry}
          material={materials.walnut_wood_33_36_4K}
        />
        <mesh
          name="curve_glass"
          castShadow
          receiveShadow
          geometry={nodes.curve_glass.geometry}
          material={nodes.curve_glass.material}
        >
          <MeshTransmissionMaterial
            metalness={0}
            thickness={0}
            roughness={0}
            clearcoat={1}
            clearcoatRoughness={0}
            transmission={1}
            samples={16}
            anisotropicBlur={0.1}
            iridescenceIOR={1.25}
            envMapIntensity={0}
          />
        </mesh>
        <mesh
          name="barstool"
          castShadow
          receiveShadow
          geometry={nodes.barstool.geometry}
          material={materials.elm_wood_33_49_4K}
          position={[-1.49144232, 0.65327078, 0.56914574]}
        >
          <mesh
            name="barstoollegs"
            castShadow
            receiveShadow
            geometry={nodes.barstoollegs.geometry}
            material={materials.elm_wood_33_49_4K}
            position={[1.7436949, -0.65327078, -0.56914574]}
          />
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.elm_wood_33_49_4K}
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
            material={nodes.Mesh_8.material}
          >
            <meshMatcapMaterial matcap={metalMatCap} flatShading={false} />
          </mesh>
          <mesh
            name="Mesh_9"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_9.geometry}
            material={materials.walnut_wood_33_36_4K}
          />
        </group>
        <mesh
          name="glass01"
          castShadow
          receiveShadow
          geometry={nodes.glass01.geometry}
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
          position={[0.40138745, 1.05877364, -0.24781677]}
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
          name="mariaRig"
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
          position={[-2.27789855, 1.09064043, 0]}
          rotation={[-0.0233508, -0.40575488, -0.03035608]}
          onPointerEnter={() => {
            actions.pieChartAction.play();
          }}
        >
          {/* <mesh
            name="Mesh"
            castShadow
            receiveShadow
            geometry={nodes.Mesh.geometry}
            material={materials.pie1}
          /> */}
          {/* <mesh
            name="Mesh_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials.pie2}
          /> */}
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
   
        <group name="sign" position={[-1.866, 2.27, -1.728]}>
          <mesh
            name="Torus001"
            castShadow
            receiveShadow
            geometry={nodes.Torus001.geometry}
            material={materials.neon2}
          />
          <mesh
            name="Torus001_1"
            castShadow
            receiveShadow
            geometry={nodes.Torus001_1.geometry}
            material={materials.neon1}
          />
        </group>

        <Vinyl nodes={nodes} materials={materials} actions={actions} />
        <NewsPaper nodes={nodes} materials={materials} actions={actions} />
      </group>
    </group>
  );
}

useGLTF.preload("/bar-enviro-for-export.glb");
