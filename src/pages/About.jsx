import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-500 font-montserrat flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-neon-blue">About Us</h1>
      <p className="text-xl text-neon-white mt-4">We are an open source research and development lab focused on web 3 and blockchain technologies.</p>
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-neon-blue">Consultancy and Development Services</h2>
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

export default About;