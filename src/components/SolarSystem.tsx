import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Planet } from './Planet';

export function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 20, 50], fov: 60 }}>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={2} color="white" />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} />
      
      {/* Sun */}
      <Planet
        position={[0, 0, 0]}
        size={5}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/sun.jpg"
        rotationSpeed={0.004}
      />
      
      {/* Mercury */}
      <Planet
        position={[10, 0, 0]}
        size={0.8}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/mercury.jpg"
        orbitRadius={10}
        orbitSpeed={0.04}
      />
      
      {/* Venus */}
      <Planet
        position={[15, 0, 0]}
        size={1.2}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/venus.jpg"
        orbitRadius={15}
        orbitSpeed={0.015}
      />
      
      {/* Earth */}
      <Planet
        position={[20, 0, 0]}
        size={1.5}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg"
        orbitRadius={20}
        orbitSpeed={0.01}
      />
      
      {/* Mars */}
      <Planet
        position={[25, 0, 0]}
        size={1}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/mars.jpg"
        orbitRadius={25}
        orbitSpeed={0.008}
      />
      
      {/* Jupiter */}
      <Planet
        position={[35, 0, 0]}
        size={3.5}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/jupiter.jpg"
        orbitRadius={35}
        orbitSpeed={0.002}
      />
      
      {/* Saturn */}
      <Planet
        position={[45, 0, 0]}
        size={3}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/saturn.jpg"
        orbitRadius={45}
        orbitSpeed={0.0009}
      />
      
      {/* Uranus */}
      <Planet
        position={[55, 0, 0]}
        size={2}
        textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/uranus.jpg"
        orbitRadius={55}
        orbitSpeed={0.0004}
      />
      
      {/* Neptune */}
      <Planet
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