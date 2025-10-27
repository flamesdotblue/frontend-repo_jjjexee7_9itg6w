import React from 'react';
import HeroCover from './components/HeroCover';
import PillarCards from './components/PillarCards';
import RegulatoryMatrix from './components/RegulatoryMatrix';
import ResourcesStrip from './components/ResourcesStrip';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <HeroCover />
      <PillarCards />
      <RegulatoryMatrix />
      <ResourcesStrip />
      <footer className="mx-auto max-w-6xl px-6 py-10 text-xs text-white/50">
        © {new Date().getFullYear()} Intermodal Regulatory Center — Redesigned layout for clarity and speed.
      </footer>
    </div>
  );
}

export default App;
