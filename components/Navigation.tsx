import React from 'react';
import { Home, BookOpen, Calendar, Users, Heart, Download } from './Icons';
import { Logo } from './Logo';

type Tab = 'home' | 'reflections' | 'events' | 'services' | 'community';

interface NavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const navItems = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'reflections', label: 'Reflexiones', icon: BookOpen },
  { id: 'events', label: 'Eventos', icon: Calendar },
  { id: 'services', label: 'Servicios', icon: Users },
  { id: 'community', label: 'Comunidad', icon: Heart },
] as const;

const handleScroll = (id: string, setActiveTab: (tab: Tab) => void) => {
  const element = document.getElementById(id);
  if (element) {
    // Update state immediately for visual feedback
    setActiveTab(id as Tab);
    // Scroll to element
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const TopNav: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="hidden md:block sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleScroll('home', setActiveTab)}
        >
          <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform p-1">
            <Logo className="w-full h-full" />
          </div>
          <div>
            <h1 className="font-bold text-slate-800 leading-tight">Gracia y Amor</h1>
            <p className="text-xs text-church-600 font-medium tracking-widest uppercase">Norte</p>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-xl border border-slate-100">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id, setActiveTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${isActive
                  ? 'bg-white text-church-700 shadow-sm ring-1 ring-slate-200 scale-105'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
              >
                <Icon size={18} className={isActive ? 'text-church-600' : ''} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Action */}
        <button
          onClick={() => alert("Simulando descarga de PDF...")}
          className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-200"
        >
          <Download size={18} />
          <span>PDF</span>
        </button>
      </div>
    </nav>
  );
};

export const MobileNav: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 pb-safe z-50 px-4 py-2 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id, setActiveTab)}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${isActive ? 'text-church-600 bg-church-50' : 'text-slate-400'
              }`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};