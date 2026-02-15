import React from 'react';
import { APP_DATA } from '../data';
import { User, BookOpen } from '../components/Icons';

export const ReflectionsView: React.FC = () => {
  const { mainReflection, sundaySchool } = APP_DATA;

  return (
    <div className="w-full space-y-12 pb-24 md:pb-8 animate-fade-in">
      
      {/* Main Sermon */}
      <article className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="h-64 md:h-80 bg-[url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
            <div className="flex items-center gap-2 text-sm font-medium text-church-200 mb-2">
              <span className="bg-church-600 px-2 py-1 rounded">Reflexión Mensual</span>
              <span>•</span>
              <span>{APP_DATA.month}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-4">
              {mainReflection.title}
            </h1>
            <div className="flex items-center gap-2 text-white/80">
              <User size={16} />
              <span>{mainReflection.author}</span>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3">
              <div className="bg-slate-50 border-l-4 border-church-500 p-4 rounded-r-lg">
                <p className="font-serif italic text-slate-700 text-lg mb-2">
                  "{mainReflection.mainQuote}"
                </p>
                <p className="text-sm font-bold text-slate-500 uppercase">{mainReflection.scripture}</p>
              </div>
            </div>
            <div className="md:w-2/3 prose prose-slate prose-lg max-w-none">
               <p className="lead text-xl text-slate-600 mb-6">{mainReflection.excerpt}</p>
               {mainReflection.content.map((paragraph, idx) => (
                 <p key={idx} className="mb-4 text-slate-700 leading-relaxed">{paragraph}</p>
               ))}
            </div>
          </div>
          
          <div className="bg-church-50 rounded-xl p-6">
            <h3 className="font-bold text-church-800 mb-3">Conclusiones Clave</h3>
            <ul className="space-y-2">
              <li className="flex gap-2 text-church-900">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-church-500 shrink-0"></div>
                <span>La fe cristiana se fundamenta en la resurrección.</span>
              </li>
              <li className="flex gap-2 text-church-900">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-church-500 shrink-0"></div>
                <span>Sin ella, el cristianismo son solo enseñanzas morales sin poder.</span>
              </li>
               <li className="flex gap-2 text-church-900">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-church-500 shrink-0"></div>
                <span>Garantiza nuestra esperanza eterna.</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* Sunday School & Bible Study Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sunday School */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Escuela Dominical</h3>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Doctrina Reformada</p>
            </div>
          </div>
          <h4 className="text-xl font-serif font-bold text-slate-800 mb-2">{sundaySchool.title}</h4>
          <p className="text-sm text-slate-500 mb-4">Por: {sundaySchool.author}</p>
          <div className="text-slate-600 space-y-3 leading-relaxed">
            {sundaySchool.content.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        {/* Bible Study */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Estudios Bíblicos</h3>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Preguntas a través de la Biblia</p>
            </div>
          </div>
          <h4 className="text-xl font-serif font-bold text-slate-800 mb-4">Libros de los Reyes</h4>
          <p className="text-slate-600 mb-4">
            La historia del pueblo de Dios no avanza al azar, sino bajo el gobierno justo y soberano del Señor. La idolatría es la raíz de la ruina.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg">
             <p className="font-medium text-slate-800 text-sm">Enfoque Central:</p>
             <p className="text-slate-600 text-sm italic">"Reconocer la fragilidad del gobierno humano y esperar al Rey fiel y eterno."</p>
          </div>
        </div>
      </div>

    </div>
  );
};