import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-500 font-montserrat flex flex-col items-center justify-center">
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