'use client';

import Button from '@/components/Button';
import AboutSection from '@/sections/firstEnterPage/AboutSection';
import OfferSection from '@/sections/firstEnterPage/OfferSection';
import StartSection from '@/sections/firstEnterPage/StartSection';
import anime from 'animejs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function StartPage() {
  const SECTIONS = {
    Start: 'start',
    About: 'about',
    Offer: 'offer',
  } as const;
  type Sections = (typeof SECTIONS)[keyof typeof SECTIONS];

  const [currentSection, setCurrentSection] = useState<Sections>(SECTIONS.Start);
  const router = useRouter();
  const animateTransitionToNextSection = (target: string, section?: Sections) => {
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
      case SECTIONS.Start:
        animateTransitionToNextSection('#startSection', SECTIONS.About);
        break;
      case SECTIONS.About:
        animateTransitionToNextSection('#aboutSection', SECTIONS.Offer);
        break;
      case SECTIONS.Offer:
        animateTransitionToNextSection('#offerSection');
    }
  };

  return (
    <div className="flex h-screen flex-col items-center">
      {currentSection === SECTIONS.Start && <StartSection id="startSection" />}
      {currentSection === SECTIONS.About && <AboutSection id="aboutSection" />}
      {currentSection === SECTIONS.Offer && <OfferSection id="offerSection" />}

      <div className="bg-pink flex h-1/3 items-center justify-center self-stretch rounded-t-4xl">
        <Button variant="secondary" onClick={nextSection}>
          {currentSection === SECTIONS.Start ? "Let's start" : 'Next'}
        </Button>
      </div>
    </div>
  );
}
