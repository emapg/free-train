import { useRef } from 'react';
import { Sphere, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PlanetProps {
  position: [number, number, number];
  size: number;
  textureUrl: string;
  rotationSpeed?: number;
  orbitSpeed?: number;
  orbitRadius?: number;
}

export function Planet({
  position,
  size,
  textureUrl,
  rotationSpeed = 0.01,
  orbitSpeed = 0.005,
  orbitRadius = 0,
}: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(textureUrl);
  
  useFrame((_state, delta) => {
    if (planetRef.current) {
      // Self rotation
      planetRef.current.rotation.y += rotationSpeed * delta;
      
      // Orbit around the sun
      if (orbitRadius > 0) {
        const time = Date.now() * orbitSpeed * 0.001;
        planetRef.current.position.x = Math.cos(time) * orbitRadius;
        planetRef.current.position.z = Math.sin(time) * orbitRadius;
      }
    }
  });

  return (
    <Sphere ref={planetRef} position={position} args={[size, 32, 32]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}