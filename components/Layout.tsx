import React, { useState, useEffect } from 'react';
import { TopNav, MobileNav } from './Navigation';
import { Logo } from './Logo';
import { HomeView } from '../views/HomeView';
import { ReflectionsView } from '../views/ReflectionsView';
import { EventsView } from '../views/EventsView';
import { ServiceView } from '../views/ServiceView';
import { CommunityView } from '../views/CommunityView';

type Tab = 'home' | 'reflections' | 'events' | 'services' | 'community';

export const Layout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  // Scroll Spy logic to update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'reflections', 'events', 'services', 'community'];

      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within the viewport (with some offset for the header)
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveTab(section as Tab);
            break;
          } else if (rect.top < 0 && rect.bottom > 100) {
            // Case where the section takes up most of the screen but top is scrolled past
            setActiveTab(section as Tab);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: Tab) => {
    // Immediate state update for responsiveness
    setActiveTab(tab);
    // Smooth scroll is handled in Navigation component via ID, 
    // but we can also ensure logic consistency here if needed.
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navigation for Desktop */}
      <TopNav activeTab={activeTab} setActiveTab={handleNavClick} />

      {/* Mobile Top Header */}
      <div className="md:hidden px-4 py-4 flex items-center justify-between bg-white border-b border-slate-100 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 flex items-center justify-center p-1">
            <Logo className="w-full h-full" />
          </div>
          <span className="font-bold text-slate-800">Gracia y Amor</span>
        </div>
        <div className="text-xs font-bold text-church-600 bg-church-50 px-2 py-1 rounded border border-church-100">
          FEB 2026
        </div>
      </div>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8">

        {/* Sections Stacked Vertically with whitespace instead of borders */}

        <section id="home" className="pt-6 md:pt-10 scroll-mt-24 min-h-[50vh]">
          <HomeView />
        </section>

        <div className="my-12 md:my-24" />

        <section id="reflections" className="scroll-mt-24 min-h-[50vh]">

          <ReflectionsView />
        </section>

        <div className="my-12 md:my-24" />

        <section id="events" className="scroll-mt-24">
          <EventsView />
        </section>

        <div className="my-12 md:my-24" />

        <section id="services" className="scroll-mt-24">
          <ServiceView />
        </section>

        <div className="my-12 md:my-24" />

        <section id="community" className="scroll-mt-24 pb-24">
          <CommunityView />
        </section>

      </main>

      {/* Bottom Navigation for Mobile */}
      <MobileNav activeTab={activeTab} setActiveTab={handleNavClick} />
    </div>
  );
};