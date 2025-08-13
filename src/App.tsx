import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Community } from './components/sections/Community';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;