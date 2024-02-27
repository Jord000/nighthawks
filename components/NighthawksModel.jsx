import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import Vinyl from "./Vinyl";
import NewsPaper from "./NewsPaper";
import PieChart from "./PieChart";

export function NighthawksModel(props) {
  const group = useRef();

  const { nodes, materials } = useGLTF("/bar-enviro-for-export-condensed.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <Vinyl nodes={nodes} materials={materials} />
        <NewsPaper nodes={nodes} materials={materials} />
        <PieChart nodes={nodes} materials={materials} />
      </group>
    </group>
  );
}

useGLTF.preload("/bar-enviro-for-export-condensed.glb");
