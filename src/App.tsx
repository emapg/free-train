import React from 'react';
import { SolarSystem } from './components/SolarSystem';
import { Controls } from './components/Controls';

function App() {
  return (
    <div className="w-full h-screen bg-black">
      <SolarSystem />
      <Controls />
      <div className="fixed top-5 left-5 text-white">
        <h1 className="text-4xl font-bold">Solar System Explorer</h1>
        <p className="text-gray-300">An interactive 3D visualization of our solar system</p>
      </div>
    </div>
  );
}

export default App;