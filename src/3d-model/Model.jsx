import { useRef } from "react";
import {
  MeshTransmissionMaterial,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes } = useGLTF("/model/diamond_engagement_ring.glb");

  const ref = useRef();
  const isInteracting = useRef(false);

  // Auto rotate (only when NOT interacting)
  useFrame(() => {
    if (ref.current && !isInteracting.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <PresentationControls
      enabled={true}
      speed={1.5}
      zoom={1}
      global
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
      onStart={() => (isInteracting.current = true)}
      onEnd={() => (isInteracting.current = false)}
    >
      <group ref={ref} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          {/* Diamond */}
          <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry}>
            <MeshTransmissionMaterial
              transmission={1}
              thickness={1.5}
              roughness={0}
              ior={2.4}
              chromaticAberration={0.03}
              backside={true}
              samples={16}
              resolution={512}
            />
          </mesh>

          {/* Ring */}
          <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry}>
            <meshStandardMaterial
              color="#ffffff"
              metalness={1}
              roughness={0.2}
            />
          </mesh>
        </group>
        {/* rgba(0, 0, 0, 1) */}
      </group>
    </PresentationControls>
  );
}

useGLTF.preload("/diamond_engagement_ring.glb");
