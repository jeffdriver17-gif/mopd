import { motion } from 'motion/react';
import { TESTIMONIALS } from '@/src/constants';
import { Star } from 'lucide-react';

export default function ReviewsPage() {
  // Triple the testimonials for the dedicated page layout
  const allReviews = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => ({ ...t, id: `${t.id}-${i}` }));

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface font-headline mb-6 tracking-tight">
          Client <span className="text-primary">Stories</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Don't just take our word for it. Here is what Calgary homeowners are saying about the Tidy Touch standard.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {allReviews.map((t, i) => (
          <motion.div 
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow"
          >
            <div className="flex gap-1 mb-6 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary" />)}
            </div>
            <p className="text-on-surface leading-relaxed italic mb-8">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center font-bold text-primary">{t.initials}</div>
              <div>
                <p className="font-bold text-on-surface font-headline">{t.name}</p>
                <p className="text-sm text-on-surface-variant uppercase tracking-widest text-[10px]">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
