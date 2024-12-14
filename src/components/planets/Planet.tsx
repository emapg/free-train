import { useRef, useState } from 'react';
import { Sphere, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PlanetAtmosphere } from './PlanetAtmosphere';
import { PlanetRings } from './PlanetRings';
import { OrbitLine } from './OrbitLine';
import { useStore } from '../../store/useStore';

interface PlanetProps {
  name: string;
  position: [number, number, number];
  size: number;
  textureUrl: string;
  rotationSpeed?: number;
  orbitSpeed?: number;
  orbitRadius?: number;
  hasRings?: boolean;
  hasAtmosphere?: boolean;
  atmosphereColor?: string;
}

export function Planet({
  name,
  position,
  size,
  textureUrl,
  rotationSpeed = 0.01,
  orbitSpeed = 0.005,
  orbitRadius = 0,
  hasRings = false,
  hasAtmosphere = false,
  atmosphereColor = '#4444ff',
}: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(textureUrl);
  const [hovered, setHovered] = useState(false);
  const setSelectedPlanet = useStore((state) => state.setSelectedPlanet);
  
  useFrame((_state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += rotationSpeed * delta;
      
      if (orbitRadius > 0) {
        const time = Date.now() * orbitSpeed * 0.001;
        planetRef.current.position.x = Math.cos(time) * orbitRadius;
        planetRef.current.position.z = Math.sin(time) * orbitRadius;
      }
    }
  });

  return (
    <group>
      {orbitRadius > 0 && <OrbitLine radius={orbitRadius} />}
      <group position={position}>
        <Sphere
          ref={planetRef}
          args={[size, 32, 32]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => setSelectedPlanet(name)}
        >
          <meshStandardMaterial
            map={texture}
            emissive={hovered ? 'white' : 'black'}
            emissiveIntensity={hovered ? 0.1 : 0}
          />
        </Sphere>
        {hasAtmosphere && (
          <PlanetAtmosphere size={size} color={atmosphereColor} />
        )}
        {hasRings && <PlanetRings radius={size} />}
      </group>
    </group>
  );
}