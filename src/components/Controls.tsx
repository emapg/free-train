import { Info } from 'lucide-react';

export function Controls() {
  return (
    <div className="fixed bottom-5 left-5 bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-2">
        <Info size={20} />
        <h3 className="font-bold">Controls</h3>
      </div>
      <ul className="text-sm space-y-1">
        <li>Left Click + Drag: Rotate camera</li>
        <li>Right Click + Drag: Pan camera</li>
        <li>Scroll: Zoom in/out</li>
      </ul>
    </div>
  );
}