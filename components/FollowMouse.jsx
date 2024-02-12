import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

export default function FollowMouse() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    let mouse3D = new Vector3(pointer.x/2-1.5, 1, -pointer.y/2);
    camera.lookAt(mouse3D);
  });
}
