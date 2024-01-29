import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

export default function FollowMouse() {
  const { camera, pointer } = useThree();
    camera.lookAt(-3,0.6,-3)
  useFrame(() => {
    let mouse3D = new Vector3(pointer.x/2-2, 0.8, -pointer.y/2);
    camera.lookAt(mouse3D);
  });
}
