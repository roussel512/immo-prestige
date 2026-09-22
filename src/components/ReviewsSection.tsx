import React from 'react';
import { Star } from 'lucide-react';
import { CLIENT_REVIEWS } from '../data/villasData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-[#F2CA50] uppercase font-bold tracking-wider">
            Avis clients
          </span>
          <h2 className="font-serif text-xl sm:text-2xl text-[#E1E2EB] mt-1 font-bold">
            Ils nous ont fait confiance
          </h2>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-[#F2CA50] justify-end">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-bold text-base text-[#E1E2EB]">4,9 / 5</span>
          </div>
          <span className="text-[10px] text-[#D0C5AF]">Note certifiée</span>
        </div>
      </div>

      {/* Testimonials Horizontal Scroller */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-4 px-4 pb-2 snap-x">
        {CLIENT_REVIEWS.map((review, idx) => (
          <div
            key={idx}
            className="shrink-0 w-72 sm:w-80 snap-center p-4 rounded-2xl bg-[#1D2026] subtle-border flex flex-col justify-between shadow-lg"
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex text-[#F2CA50]">
                {Array.from({ length: review.stars }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#D0C5AF] italic leading-relaxed">
                {review.text}
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-3 border-t border-[#4D4635]/40 mt-3">
              <div className="w-8 h-8 rounded-full bg-[#F2CA50]/20 text-[#F2CA50] font-bold text-xs flex items-center justify-center border border-[#D4AF37]/30">
                {review.avatar}
              </div>
              <div>
                <p className="text-xs font-bold text-[#E1E2EB]">
                  {review.author}
                </p>
                <p className="text-[10px] text-[#D0C5AF]">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
