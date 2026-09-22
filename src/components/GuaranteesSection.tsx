import React from 'react';
import { WRITTEN_GUARANTEES } from '../data/villasData';

export const GuaranteesSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <span className="text-xs text-[#F2CA50] uppercase font-bold tracking-wider">
          Nos engagements
        </span>
        <h2 className="font-serif text-xl sm:text-2xl text-[#E1E2EB] mt-1 font-bold">
          Six garanties écrites
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {WRITTEN_GUARANTEES.map((item) => (
          <div
            key={item.num}
            className="p-4 rounded-xl bg-[#1D2026] subtle-border flex gap-3.5 hover:border-[#D4AF37]/50 transition-colors shadow-md"
          >
            <span className="font-serif text-2xl sm:text-3xl text-[#F2CA50]/50 font-bold leading-none select-none">
              {item.num}
            </span>
            <div>
              <h4 className="text-sm font-bold text-[#E1E2EB]">
                {item.title}
              </h4>
              <p className="text-xs text-[#D0C5AF] mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
