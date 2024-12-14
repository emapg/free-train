import { Stars, useHelper } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export function Environment() {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade
        speed={1}
      />
      <ambientLight intensity={0.1} />
      <directionalLight
        ref={directionalLightRef}
        position={[10, 10, 5]}
        intensity={1}
        castShadow
      />
      <pointLight position={[0, 0, 0]} intensity={2} color="white" />
      <fog attach="fog" args={['black', 30, 200]} />
    </>
  );
}