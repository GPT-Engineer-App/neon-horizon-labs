import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-500 font-montserrat">
      <header className="flex justify-between items-center p-6">
        <img src="/icons/sunrise-icon.png" alt="Kotani Labs" className="h-12" />
        <nav className="space-x-4">
          <Button variant="outline">Home</Button>
          <Button variant="outline">Services</Button>
          <Button variant="outline">Internship</Button>
          <Button variant="outline">Contact</Button>
        </nav>
      </header>
      <main className="p-6 space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-neon-blue">Kotani Labs</h1>
          <p className="text-xl text-neon-white">Innovating the Future of Web 3 and Blockchain Technologies</p>
        </section>
        <Separator />
        <section className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Our Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Node Validation</li>
                <li>L2 EVM Tech</li>
                <li>Zero Knowledge Tech</li>
                <li>Data Availability</li>
                <li>Decentralized and Shared Sequencers</li>
                <li>Decentralized AI</li>
                <li>Roll-Ups and Roll-Ups-as-Service</li>
                <li>MEV</li>
              </ul>
            </CardContent>
          </Card>
        </section>
        <Separator />
        <section className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Horizon Hackerhouse Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                In partnership with Aya Labs Collective and Web 3 clubs, we offer a 3-month internship program for beginner and intermediate web 3 developers looking to advance their knowledge in key areas.
              </p>
            </CardContent>
          </Card>
        </section>
        <Separator />
        <section className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Your email" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" />
                </div>
                <Button type="submit">Send</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="text-center p-6">
        <p>&copy; 2023 Kotani Labs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;