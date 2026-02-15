import React from 'react';
import { APP_DATA } from '../data';
import { Clock, ArrowRight, Video } from 'lucide-react';

export const HomeView: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-24 md:pb-8">
      
      {/* 1. Hero Section with Background Image & Horizontal Schedule Footer */}
      <section className="relative min-h-[600px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl group flex flex-col">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        ></div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-church-900 via-church-900/60 to-church-900/30"></div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-center px-6 md:px-12 py-12 pb-40">
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Boletín Digital
              </span>
              <span className="text-church-200 text-sm font-medium tracking-wider uppercase">
                {APP_DATA.month}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-sm">
              Creciendo en gracia <br/> y conocimiento.
            </h1>
            
            <p className="text-lg md:text-xl text-church-100 mb-8 leading-relaxed max-w-xl border-l-2 border-church-400 pl-6">
              "Antes bien, creced en la gracia y el conocimiento de nuestro Señor y Salvador Jesucristo."
              <span className="block text-sm mt-2 text-church-300 font-sans not-italic">— 2 Pedro 3:18</span>
            </p>

            <button 
                onClick={() => document.getElementById('verse-card')?.scrollIntoView({ behavior: 'smooth' })} 
                className="px-8 py-4 bg-white text-church-900 rounded-xl font-bold hover:bg-church-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 group/btn"
             >
              Leer Reflexión <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform"/>
            </button>
          </div>

        </div>

        {/* Horizontal Schedule Bar (Bottom of Hero) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/40 backdrop-blur-xl border-t border-white/10 text-white">
            <div className="flex flex-col md:flex-row">
                
                {/* Header/Label Section */}
                <div className="px-8 py-4 md:py-6 bg-church-900/80 md:w-64 flex items-center gap-4 shrink-0 border-b md:border-b-0 md:border-r border-white/10">
                    <div className="p-3 bg-church-500 rounded-xl shadow-lg shadow-church-900/50">
                        <Clock size={24} className="text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-widest text-church-200">Horarios</h3>
                        <p className="text-lg font-serif font-bold leading-none mt-1">Nuestros Cultos</p>
                    </div>
                </div>

                {/* Times Horizontal Grid */}
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 p-6 items-center">
                    
                    {/* Sunday 1 */}
                    <div className="flex flex-col border-l-2 border-church-500/50 pl-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-church-200 mb-1">Domingos</span>
                        <span className="text-xs text-white/70 mb-0.5">Escuela Dominical</span>
                        <span className="text-xl font-bold text-white">10:00 AM</span>
                    </div>

                    {/* Sunday 2 */}
                    <div className="flex flex-col border-l-2 border-church-500/50 pl-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-church-200 mb-1">Domingos</span>
                        <span className="text-xs text-white/70 mb-0.5">Culto General</span>
                        <span className="text-xl font-bold text-white">11:00 AM</span>
                    </div>

                    {/* Sunday 3 */}
                    <div className="flex flex-col border-l-2 border-church-500/50 pl-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-church-200 mb-1">Domingos</span>
                        <span className="text-xs text-white/70 mb-0.5">Culto Vespertino</span>
                        <span className="text-xl font-bold text-white">03:00 PM</span>
                    </div>

                    {/* Wednesday */}
                    <div className="flex flex-col border-l-2 border-blue-500/50 pl-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 mb-1 flex items-center gap-2">
                             Miércoles <Video size={10} />
                        </span>
                        <span className="text-xs text-white/70 mb-0.5">Reunión Zoom</span>
                        <span className="text-xl font-bold text-white">ID: 237 199</span>
                    </div>

                </div>
            </div>
        </div>
      </section>

      {/* 2. Verse Card (Full Width) */}
      <section>
        <div id="verse-card" className="w-full bg-white rounded-3xl p-8 md:p-12 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:gap-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 text-church-900 pointer-events-none transform group-hover:scale-110 transition-transform duration-700">
             <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor"><path d="M10 2c-1.7 0-3 1.3-3 3v2.6c-1.7.3-3 1.7-3 3.4 0 2.4 2.3 3.9 4.3 6.6.6.8 1.4 2.2 1.4 3.4h2.5c0-1.8-1.1-3.6-1.9-4.8-1.5-2.1-2.3-3.1-2.3-4.2 0-.6.4-1 1-1s1 .4 1 1h2.5c0-1.9-1.5-3.5-3.4-3.5V5c0-.6.4-1 1-1s1 .4 1 1h2.5c0-1.7-1.3-3-3-3z"/></svg>
          </div>
          
          <div className="flex-1 text-center md:text-left z-10">
            <h3 className="text-church-600 font-bold uppercase tracking-widest text-xs mb-6 flex items-center justify-center md:justify-start gap-2">
                <span className="w-8 h-[2px] bg-church-600"></span>
                Versículo del Mes
            </h3>
            
            <blockquote className="text-3xl md:text-5xl font-serif text-slate-800 leading-tight mb-8">
                "Vuestra tristeza se <span className="text-church-600 italic">convertirá en gozo</span>."
            </blockquote>
            
            <div className="flex items-center justify-center md:justify-start gap-4">
                <cite className="not-italic font-bold text-slate-600 tracking-wide text-lg">Juan 16:20</cite>
                <span className="text-slate-300">|</span>
                <div className="text-slate-400 text-sm">Esperanza • Promesa • Fe</div>
            </div>
          </div>

          {/* Decorative Divider on Desktop */}
          <div className="hidden md:block w-px h-32 bg-slate-100"></div>

           <div className="md:w-1/3 text-center md:text-left z-10">
                <p className="text-slate-500 italic text-sm leading-relaxed">
                    "Esta promesa nos recuerda que ninguna aflicción presente es eterna. En Cristo, toda lágrima tiene fecha de caducidad y todo dolor es la semilla de un gozo imperecedero."
                </p>
           </div>
        </div>
      </section>

    </div>
  );
};