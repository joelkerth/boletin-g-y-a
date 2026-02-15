import React from 'react';
import { APP_DATA } from '../data';
import { Gift, BookOpen, Heart, HandHeart, ArrowRight, Sparkles } from 'lucide-react';

export const CommunityView: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-12 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6">
        <div>
           <h2 className="text-sm font-bold text-church-600 uppercase tracking-widest mb-2">Familia</h2>
           <h3 className="text-3xl font-bold text-slate-900">Vida en Comunidad</h3>
        </div>
      </div>

      {/* SECTION 1: PRAYER WALL (Full Width) */}
      <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 p-8 opacity-[0.02] text-rose-500 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <Heart size={400} fill="currentColor" />
         </div>

         <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center border border-rose-100">
                <Heart size={24} fill="currentColor" />
            </div>
            <div>
                <h3 className="font-bold text-xl text-slate-900">Muro de Oración</h3>
                <p className="text-sm text-slate-500">Intercediendo unos por otros en el amor de Cristo</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {APP_DATA.prayerRequests.map((req, idx) => {
                const styles: Record<string, string> = {
                    "Salud": "bg-rose-50 border-rose-100 text-rose-900 hover:bg-rose-100",
                    "Iglesia": "bg-indigo-50 border-indigo-100 text-indigo-900 hover:bg-indigo-100",
                    "Colegio": "bg-amber-50 border-amber-100 text-amber-900 hover:bg-amber-100",
                    "Consuelo": "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                };
                const styleClass = styles[req.category] || "bg-slate-50 border-slate-100";
                const dotColor = req.category === "Salud" ? "bg-rose-400" : req.category === "Iglesia" ? "bg-indigo-400" : req.category === "Colegio" ? "bg-amber-400" : "bg-slate-400";

                return (
                    <div key={idx} className={`p-6 rounded-2xl border ${styleClass} transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col h-full`}>
                        <div className="flex items-center gap-2 mb-4">
                            <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
                            <h4 className="font-bold text-xs uppercase tracking-widest opacity-70">{req.category}</h4>
                        </div>
                        <ul className="space-y-3 flex-1">
                            {req.items.map((item, i) => (
                                <li key={i} className="text-sm font-medium leading-snug opacity-90">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            })}
         </div>
      </section>

      {/* SECTION 2: UNIFIED BANNER (Mana & Library) */}
      <section className="rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row min-h-[400px]">
         
         {/* Left Side: Mana (Action) */}
         <div className="lg:w-2/5 bg-gradient-to-br from-emerald-700 to-teal-900 p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden group">
            {/* Decor */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-emerald-500 rounded-full blur-[60px] opacity-30 group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                    <HandHeart size={24} className="text-emerald-100" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-3">Maná</h3>
                <p className="text-emerald-100 text-sm leading-relaxed mb-6 border-l-2 border-emerald-500/50 pl-4">
                    "Más bienaventurado es dar que recibir". <br/> Únete a nuestra recolección mensual de alimentos.
                </p>
                
                <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-black/20 p-3 rounded-xl border border-white/5">
                         <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs font-bold">1</div>
                         <p className="text-xs font-medium text-emerald-50">Trae alimentos no perecederos</p>
                    </div>
                     <div className="flex items-center gap-3 bg-black/20 p-3 rounded-xl border border-white/5">
                         <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs font-bold">2</div>
                         <p className="text-xs font-medium text-emerald-50">Déjalos en la canasta (Domingos)</p>
                    </div>
                </div>
            </div>

            <button className="mt-8 relative z-10 w-full py-4 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg flex items-center justify-between px-6 text-sm group-hover:shadow-emerald-900/20">
                <span>Ver lista sugerida</span>
                <ArrowRight size={16} />
            </button>
         </div>

         {/* Right Side: Library (Content) */}
         <div className="lg:w-3/5 bg-[#FFFAF5] p-8 md:p-10 relative flex flex-col">
            <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                        <BookOpen size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-slate-900">Biblioteca</h3>
                        <p className="text-xs text-slate-500 font-medium">Lecturas para el alma</p>
                    </div>
                </div>
                <a href="mailto:libros.gyanorte@gmail.com" className="text-xs font-bold text-orange-900 bg-white px-4 py-2 rounded-lg hover:bg-orange-50 transition-all border border-orange-100 shadow-sm hover:shadow">
                    Solicitar Préstamo
                </a>
             </div>

             <div className="flex-1 grid md:grid-cols-2 gap-4 relative z-10">
                {APP_DATA.books.map((book, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-orange-100 hover:border-orange-200 hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                        <div className="flex items-start gap-4 mb-3">
                            {/* Book Cover */}
                            <div className="shrink-0 relative group-hover:scale-105 transition-transform duration-300">
                                {book.image ? (
                                    <img 
                                        src={book.image} 
                                        alt={book.title} 
                                        className="w-16 h-24 rounded shadow-sm object-cover"
                                    />
                                ) : (
                                    <div className={`w-16 h-24 rounded ${book.coverColor} flex items-center justify-center shadow-inner relative overflow-hidden`}>
                                            <div className="absolute inset-y-0 left-0 w-1 bg-black/10"></div>
                                            <BookOpen size={20} className="opacity-40" />
                                    </div>
                                )}
                            </div>
                            
                            <div>
                                <h4 className="font-bold text-slate-900 leading-snug mb-1 font-serif group-hover:text-orange-700 transition-colors line-clamp-2">{book.title}</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{book.author}</p>
                            </div>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mt-auto border-t border-slate-50 pt-3">
                            {book.description}
                        </p>
                    </div>
                ))}
             </div>

             {/* Background Pattern */}
             <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
                 <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" stroke="#F97316" strokeWidth="20" />
                    <circle cx="100" cy="100" r="40" stroke="#F97316" strokeWidth="10" />
                 </svg>
             </div>
         </div>
      </section>

      {/* SECTION 3: BIRTHDAYS (Full Width - Festive Minimalist) */}
      <section className="relative w-full bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 rounded-3xl p-8 md:p-10 overflow-hidden">
        
        {/* Subtle Confetti Decoration (CSS/SVG) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-10 text-purple-200 opacity-50"><Sparkles size={24} /></div>
            <div className="absolute top-20 right-20 text-pink-200 opacity-50"><Sparkles size={32} /></div>
            <div className="absolute bottom-10 left-1/4 text-amber-200 opacity-50"><Sparkles size={20} /></div>
            
            {/* Circles */}
            <div className="absolute top-0 left-1/2 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
        </div>

        <div className="relative z-10 mb-8 flex flex-col items-center justify-center text-center">
             <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-purple-100 flex items-center justify-center text-purple-600 mb-4">
                <Gift size={24} />
             </div>
             <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">Celebraciones</h3>
             <p className="text-slate-500 text-sm">Damos gracias a Dios por la vida de nuestros hermanos</p>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {APP_DATA.birthdays.map((bday, idx) => {
                const [day, ...rest] = bday.date.split(' ');
                const month = rest.join(' ');
                
                // Color cycling for variety but minimalist pastel palette
                const colors = [
                    "hover:border-purple-200 hover:shadow-purple-100",
                    "hover:border-pink-200 hover:shadow-pink-100",
                    "hover:border-blue-200 hover:shadow-blue-100",
                    "hover:border-amber-200 hover:shadow-amber-100"
                ];
                const activeColor = colors[idx % colors.length];

                return (
                    <div key={idx} className={`bg-white p-4 md:p-6 rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-transparent ${activeColor} transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group`}>
                         <div className="mb-3 relative">
                            <span className="text-4xl font-serif font-bold text-slate-800 tracking-tighter group-hover:scale-110 transition-transform block">
                                {day}
                            </span>
                            <span className="absolute -top-1 -right-3 text-[10px] font-bold bg-slate-100 text-slate-500 px-1.5 rounded uppercase">
                                {month}
                            </span>
                         </div>
                         <div className="w-8 h-0.5 bg-slate-100 rounded-full mb-3 group-hover:bg-slate-200 transition-colors"></div>
                         <p className="font-medium text-slate-700 text-sm leading-tight group-hover:text-slate-900">
                            {bday.names.join(', ')}
                         </p>
                    </div>
                )
            })}
        </div>
      </section>

    </div>
  );
};