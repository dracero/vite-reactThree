import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from '@react-three/fiber';

export default function App(props) {
  const { nodes, materials } = useGLTF("public/first.glb");
  return (
    <Canvas camera={{ position: [0, 5, 0], fov: 70 }} shadows>
      <gridHelper />
      <directionalLight position={[9, 0, 0]} intensity={1} castShadow />

      <mesh position={[0, 2, 0]} rotation={[2, 0, 0]} receiveShadow>
        <ringBufferGeometry args={[1.2, 2, 50]} />
        <meshStandardMaterial color="red" side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, 2, 0]} rotation={[0, 0, 0]} receiveShadow>
        <sphereBufferGeometry args={[1, 50, 50]} />
        <meshStandardMaterial color="#FF0000" side={THREE.DoubleSide} />
      </mesh>
      <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.001"]}
        position={[1.26, 0.4, -2.07]}
        rotation={[2.63, 1, -1.13]}
        scale={[1.02, 1.77, 1.04]}
      />
    </group>
      <OrbitControls />
    </Canvas>
  );
}

useGLTF.preload("public/first.glb");
