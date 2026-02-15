import React from 'react';
import { APP_DATA } from '../data';
import { Calendar, MapPin, Clock, Video, ArrowUpRight, User } from 'lucide-react';

export const EventsView: React.FC = () => {
  return (
    <div className="w-full pb-24 md:pb-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-slate-200 pb-8">
        <div>
           <h2 className="text-sm font-bold text-church-600 uppercase tracking-widest mb-3">Agenda Mensual</h2>
           <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
             Eventos de Febrero
           </h3>
        </div>
        <p className="text-slate-500 max-w-sm text-sm md:text-right leading-relaxed">
            "Mirad cuán bueno y cuán delicioso es habitar los hermanos juntos en armonía."
        </p>
      </div>

      {/* Events List */}
      <div className="flex flex-col gap-6">
        {APP_DATA.events.map((event) => {
           const isVirtual = event.type === 'virtual';
           
           return (
            <div key={event.id} className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-church-200 hover:shadow-xl transition-all duration-300">
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    
                    {/* Left Column: Date & Time (Desktop) / Header (Mobile) */}
                    <div className="shrink-0 md:w-48 flex flex-row md:flex-col items-center md:items-start gap-4 md:border-r md:border-slate-100 md:pr-8">
                        
                        {/* Date Icon Box */}
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-church-50 text-church-600 flex items-center justify-center shrink-0 border border-church-100 group-hover:scale-110 group-hover:bg-church-600 group-hover:text-white transition-all duration-300 shadow-sm">
                            <Calendar size={22} strokeWidth={2} />
                        </div>
                        
                        {/* Date Text */}
                        <div className="flex-1 md:mt-2">
                             <p className="font-bold text-lg text-slate-900 leading-tight mb-1 font-serif">
                                {event.date}
                             </p>
                             <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                                <Clock size={14} className="text-church-400" />
                                <span>{event.time}</span>
                             </div>
                        </div>
                    </div>

                    {/* Middle Column: Main Content */}
                    <div className="flex-1 flex flex-col justify-center">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            {isVirtual ? (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100">
                                    <Video size={12} /> Virtual
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100">
                                    <MapPin size={12} /> Presencial
                                </span>
                            )}
                        </div>

                        <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-church-700 transition-colors">
                            {event.title}
                        </h4>
                        
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-5 max-w-2xl">
                            {event.description}
                        </p>

                        {/* Location / Contact */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 border-t border-slate-50 pt-4 mt-auto">
                             <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-church-400"/>
                                <span className="font-medium">{event.location}</span>
                             </div>
                             {event.title.includes('Varones') && (
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-church-400"/>
                                    <span className="font-medium">Contacto: Luis Enrique A.</span>
                                </div>
                             )}
                        </div>
                    </div>

                    {/* Right Column: Action (Desktop) */}
                    <div className="mt-2 md:mt-0 md:self-center shrink-0 flex justify-end">
                         <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-50 text-slate-600 font-bold text-sm hover:bg-church-600 hover:text-white transition-all duration-300 group-hover:shadow-lg">
                            <span>Detalles</span>
                            <ArrowUpRight size={18} />
                         </button>
                    </div>

                </div>
            </div>
           );
        })}
      </div>
    </div>
  );
};