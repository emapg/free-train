import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { Ring } from '@react-three/drei';

interface PlanetRingsProps {
  radius: number;
  rotation?: number;
}

export function PlanetRings({ radius, rotation = 0 }: PlanetRingsProps) {
  const ringsRef = useRef<Mesh>(null);

  useFrame(() => {
    if (ringsRef.current) {
      ringsRef.current.rotation.x = -0.5;
    }
  });

  return (
    <Ring ref={ringsRef} args={[radius * 1.4, radius * 2, 64]}>
      <meshBasicMaterial
        attach="material"
        color="#A48566"
        opacity={0.7}
        transparent
        side={2}
      />
    </Ring>
  );
}