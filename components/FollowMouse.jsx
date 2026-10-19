import { isMobileContext } from "@/contexts/isMobileContext";
import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useContext } from "react";
import { Vector3 } from "three";

export default function FollowMouse() {
  const { isMobile } = useContext(isMobileContext);
  const { camera, pointer } = useThree();
  const scroll = useScroll();
  useFrame((state) => {
    const offset = scroll.offset;
    let mouse3D = new Vector3(pointer.x * 0.35 - 2, 1, -pointer.y * 0.35);
    isMobile
      ? camera.lookAt(-2 + offset, 1, 0 - (scroll.offset/3))
      : camera.lookAt(mouse3D);
  });
}
