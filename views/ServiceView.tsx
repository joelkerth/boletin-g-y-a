import React from 'react';
import { APP_DATA } from '../data';
import { Users, Music, Coffee, HandHeart, Calendar } from '../components/Icons';

export const ServiceView: React.FC = () => {
  return (
    <div className="w-full space-y-8 pb-24 md:pb-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Asignaciones</h2>
          <p className="text-slate-500">Roles de servicio para el mes de {APP_DATA.month}</p>
        </div>
      </div>

      {/* Weekly Rotations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {APP_DATA.assignments.map((week, index) => (
          <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-church-200 transition-colors">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-50">
              <Calendar className="text-church-500" size={18} />
              <h3 className="font-bold text-lg text-slate-800">{week.date}</h3>
            </div>
            
            <div className="space-y-4">
              {week.roles.map((roleItem, rIndex) => (
                <div key={rIndex}>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{roleItem.role}</p>
                  <p className="font-medium text-slate-700">{roleItem.people[0]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Permanent Roles Section */}
      <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Equipos Permanentes</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {APP_DATA.permanentRoles.map((group, idx) => {
            let Icon = Users;
            let color = "bg-slate-100 text-slate-600";
            if (group.role === 'Ujieres') { Icon = HandHeart; color = "bg-orange-100 text-orange-600"; }
            if (group.role === 'Café') { Icon = Coffee; color = "bg-amber-100 text-amber-700"; }
            if (group.role === 'Santa Cena') { Icon = Users; color = "bg-rose-100 text-rose-700"; }

            return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${color}`}>
                        <Icon size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-2">{group.role}</h4>
                        <div className="flex flex-wrap gap-2">
                            {group.people.map((person, pIdx) => (
                                <span key={pIdx} className="inline-block bg-slate-50 px-2 py-1 rounded text-sm text-slate-600 border border-slate-100">
                                    {person}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};