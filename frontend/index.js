import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FutureOfWork from '../components/FutureOfWork';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FutureOfWork />
      <Footer />
    </div>
  );
}
