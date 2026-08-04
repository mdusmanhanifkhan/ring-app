import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "../../3d-model/Model";

const RingModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={5} />
      <pointLight position={[-10, -10, -10]} intensity={5} />
      {/* <Environment preset="city" /> */}
      <CameraControls
        autoRotate
        autoRotateSpeed={2}
        dollySpeed={0}
        enabled={false}
      />
      <Model scale={0.8} dispose={null} />
    </Canvas>
  );
};

export default RingModel;
