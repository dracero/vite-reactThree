import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from '@react-three/fiber';

export default function App(props) {
  const { nodes, materials } = useGLTF("/first.glb");
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
      <group dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          rotation={[0.08, 0.18, -0.13]}
          scale={[1, 1.37, 3.09]}
        />
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.001"]}
          position={[-0.19, 3.76, -2.19]}
          rotation={[-3.14, -0.2, -1.46]}
          scale={[1.02, 1.77, 1.04]}
        />
      </group>
    </group>
      <OrbitControls />
    </Canvas>
  );
}