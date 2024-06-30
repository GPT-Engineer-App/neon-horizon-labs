import React from 'react';
import MicroscopeIcon from '/icons/microscope-icon.png';
import PetriDishIcon from '/icons/petri-dish-icon.png';
import LabTubeIcon from '/icons/lab-tube-icon.png';
import CircularBubblesIcon from '/icons/circular-bubbles-icon.png';

const Services = () => {
  return (
    <div className="relative min-h-screen bg-black text-cyan-500 font-montserrat flex flex-col items-center justify-center">
      <div className="absolute top-10 left-10">
        <img src={MicroscopeIcon} alt="Microscope Icon" className="w-12 h-12" />
      </div>
      <div className="absolute top-10 right-10">
        <img src={PetriDishIcon} alt="Petri Dish Icon" className="w-12 h-12" />
      </div>
      <div className="absolute bottom-10 left-10">
        <img src={LabTubeIcon} alt="Lab Tube Icon" className="w-12 h-12" />
      </div>
      <div className="absolute bottom-10 right-10">
        <img src={CircularBubblesIcon} alt="Circular Bubbles Icon" className="w-12 h-12" />
      </div>
      <div className="bg-neon-blue p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-neon-white">Consultancy and Development Services</h2>
        <ul className="list-disc list-inside text-neon-white mt-4">
          <li>Node Validation</li>
          <li>L2 EVM Tech</li>
          <li>Zero Knowledge Tech</li>
          <li>Data Availability</li>
          <li>Decentralized and Shared Sequencers</li>
          <li>Decentralized AI</li>
          <li>Roll-Ups and Roll-Ups-as-Service</li>
          <li>MEV</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;