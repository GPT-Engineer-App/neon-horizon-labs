import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-black text-cyan-500 font-montserrat flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-neon-blue">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <div>
          <Label htmlFor="name" className="text-neon-white">Name</Label>
          <Input id="name" {...register('name', { required: true })} className="mt-1" />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="email" className="text-neon-white">Email</Label>
          <Input id="email" {...register('email', { required: true })} className="mt-1" />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="message" className="text-neon-white">Message</Label>
          <textarea id="message" {...register('message', { required: true })} className="mt-1 w-full h-32 p-2 bg-black text-neon-white border border-neon-blue rounded-md"></textarea>
          {errors.message && <span className="text-red-500">This field is required</span>}
        </div>
        <Button type="submit" variant="outline">Submit</Button>
      </form>
    </div>
  );
};

export default ContactUs;