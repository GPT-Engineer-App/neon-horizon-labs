import React from 'react';
import TransparentDesert from '../../public/images/transparent-desert.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-500 font-montserrat flex flex-col items-center justify-center">
      <img src={TransparentDesert} alt="Transparent Desert" className="max-w-full h-auto mb-8 bg-black p-2 rounded-md w-3/4" />
      <h1 className="text-5xl font-bold text-neon-blue">Kotani Labs</h1>
      <p className="text-xl text-neon-white mt-4">We are an open source research and development lab focused on web 3 and blockchain technologies</p>
    </div>
  );
};

export default Index;