import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Planet } from '../planets/Planet';
import { Environment } from './Environment';

export function SolarSystem() {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[0, 30, 80]} fov={60} />
      <Environment />
      
      {/* Sun */}
      <Planet
        name="Sun"
        position={[0, 0, 0]}
        size={5}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/sun.jpg"
        rotationSpeed={0.004}
      />
      
      {/* Mercury */}
      <Planet
        name="Mercury"
        position={[10, 0, 0]}
        size={0.8}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/mercury.jpg"
        orbitRadius={10}
        orbitSpeed={0.04}
      />
      
      {/* Venus */}
      <Planet
        name="Venus"
        position={[15, 0, 0]}
        size={1.2}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/venus.jpg"
        orbitRadius={15}
        orbitSpeed={0.015}
        hasAtmosphere={true}
        atmosphereColor="#ffaa00"
      />
      
      {/* Earth */}
      <Planet
        name="Earth"
        position={[20, 0, 0]}
        size={1.5}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg"
        orbitRadius={20}
        orbitSpeed={0.01}
        hasAtmosphere={true}
        atmosphereColor="#4444ff"
      />
      
      {/* Mars */}
      <Planet
        name="Mars"
        position={[25, 0, 0]}
        size={1}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/mars.jpg"
        orbitRadius={25}
        orbitSpeed={0.008}
        hasAtmosphere={true}
        atmosphereColor="#ff4444"
      />
      
      {/* Jupiter */}
      <Planet
        name="Jupiter"
        position={[35, 0, 0]}
        size={3.5}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/jupiter.jpg"
        orbitRadius={35}
        orbitSpeed={0.002}
      />
      
      {/* Saturn */}
      <Planet
        name="Saturn"
        position={[45, 0, 0]}
        size={3}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/saturn.jpg"
        orbitRadius={45}
        orbitSpeed={0.0009}
        hasRings={true}
      />
      
      {/* Uranus */}
      <Planet
        name="Uranus"
        position={[55, 0, 0]}
        size={2}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/uranus.jpg"
        orbitRadius={55}
        orbitSpeed={0.0004}
      />
      
      {/* Neptune */}
      <Planet
        name="Neptune"
        position={[65, 0, 0]}
        size={2}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/neptune.jpg"
        orbitRadius={65}
        orbitSpeed={0.0001}
      />
      
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={10}
        maxDistance={200}
      />
    </Canvas>
  );
}