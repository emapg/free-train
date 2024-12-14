import { Line } from '@react-three/drei';
import * as THREE from 'three';

interface OrbitLineProps {
  radius: number;
}

export function OrbitLine({ radius }: OrbitLineProps) {
  const points = [];
  const segments = 64;

  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * radius,
        0,
        Math.sin(theta) * radius
      )
    );
  }

  return (
    <Line
      points={points}
      color="rgba(255,255,255,0.1)"
      lineWidth={0.5}
      dashed={true}
    />
  );
}