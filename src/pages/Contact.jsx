import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-500 font-montserrat flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-neon-blue">Contact Us</h1>
      <p className="text-xl text-neon-white mt-4">Feel free to reach out to us at contact@kotanilabs.com.</p>
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-neon-blue">Internship Program</h2>
        <p className="text-xl text-neon-white mt-4">Horizon Hackerhouse Program in partnership with Aya Labs Collective and Web 3 clubs.</p>
      </div>
    </div>
  );
};

export default Contact;