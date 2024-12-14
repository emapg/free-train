import { Sphere } from '@react-three/drei';

interface PlanetAtmosphereProps {
  size: number;
  color: string;
}

export function PlanetAtmosphere({ size, color }: PlanetAtmosphereProps) {
  return (
    <Sphere args={[size * 1.05, 32, 32]}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.2}
        side={1}
      />
    </Sphere>
  );
}