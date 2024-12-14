import { useStore } from '../../store/useStore';
import { planetData } from '../../data/planetData';
import { X } from 'lucide-react';

export function PlanetInfo() {
  const selectedPlanet = useStore((state) => state.selectedPlanet);
  const setSelectedPlanet = useStore((state) => state.setSelectedPlanet);

  if (!selectedPlanet) return null;

  const planet = planetData[selectedPlanet];

  return (
    <div className="fixed right-5 top-5 bg-black/80 text-white p-6 rounded-lg backdrop-blur-md w-80">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{planet.name}</h2>
        <button
          onClick={() => setSelectedPlanet(null)}
          className="hover:bg-white/20 p-1 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-gray-400 text-sm">Distance from Sun</h3>
          <p>{planet.distanceFromSun}</p>
        </div>
        <div>
          <h3 className="text-gray-400 text-sm">Diameter</h3>
          <p>{planet.diameter}</p>
        </div>
        <div>
          <h3 className="text-gray-400 text-sm">Day Length</h3>
          <p>{planet.dayLength}</p>
        </div>
        <div>
          <h3 className="text-gray-400 text-sm">Description</h3>
          <p className="text-sm leading-relaxed">{planet.description}</p>
        </div>
      </div>
    </div>
  );
}