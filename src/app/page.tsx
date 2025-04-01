'use client';

import Button from '@/components/Button';
import AboutSection from '@/sections/firstEnterPage/AboutSection';
import OfferSection from '@/sections/firstEnterPage/OfferSection';
import StartSection from '@/sections/firstEnterPage/StartSection';
import anime from 'animejs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function StartPage() {
  const SECTIONS = ['start', 'about', 'offer'] as const;
  const [currentSection, setCurrentSection] = useState<(typeof SECTIONS)[number]>(SECTIONS[0]);
  const router = useRouter();
  const animateTransitionToNextSection = (target: string, section?: (typeof SECTIONS)[number]) => {
    anime({
      targets: target,
      translateX: '-100vw',
      duration: 500,
      easing: 'easeInOutSine',
      complete: () => {
        if (section) {
          setCurrentSection(section);
          return;
        }

        router.push('/auth');
      },
    });
  };

  const nextSection = () => {
    switch (currentSection) {
      case 'start':
        animateTransitionToNextSection('#startSection', SECTIONS[1]);
        break;
      case 'about':
        animateTransitionToNextSection('#aboutSection', SECTIONS[2]);
        break;
      case 'offer':
        animateTransitionToNextSection('#offerSection');
    }
  };

  return (
    <div className="flex h-screen flex-col items-center">
      {currentSection === 'start' && <StartSection id="startSection" />}
      {currentSection === 'about' && <AboutSection id="aboutSection" />}
      {currentSection === 'offer' && <OfferSection id="offerSection" />}

      <div className="bg-pink flex h-1/3 items-center justify-center self-stretch rounded-t-4xl">
        <Button variant="secondary" onClick={nextSection}>
          {currentSection === 'start' ? "Let's start" : 'Next'}
        </Button>
      </div>
    </div>
  );
}
