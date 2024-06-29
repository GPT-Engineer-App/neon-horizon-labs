import React from 'react';
import { Button } from "@/components/ui/button";

const Internship = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-500 font-montserrat flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-neon-blue">Internship Program</h1>
      <p className="text-xl text-neon-white mt-4">
        As a member of the Aya Collective we run a 3 month internship program at the Horizon Hackerhouse in partnership with web 3 clubs for beginner and intermediate developers who want to upskill in key areas of focus.
      </p>
      <Button className="mt-8 text-lg p-4" variant="outline">Join</Button>
    </div>
  );
};

export default Internship;