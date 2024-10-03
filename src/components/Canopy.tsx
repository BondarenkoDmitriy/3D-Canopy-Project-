import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 50, 100], fov: 75 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={2} />

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}
