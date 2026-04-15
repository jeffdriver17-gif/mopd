import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Sparkles, title: 'Uncompromising Standards', desc: 'We deliver a meticulous, boutique cleaning experience that goes far beyond surface-level.' },
    { icon: Heart, title: 'Eco-Conscious Care', desc: 'Our products are carefully selected to be tough on dirt but perfectly safe for your family and pets.' },
    { icon: ShieldCheck, title: 'Absolute Trust', desc: 'Every member of our team is thoroughly vetted, background-checked, and shares our passion for luminous order.' },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface font-headline mb-6 tracking-tight">
          Beyond Cleaning.<br />We Curate <span className="text-primary">Sanctuaries.</span>
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Mopd was born from a simple observation: most cleaning services scrub floors, but very few restore peace of mind. We aim to transform your living environments into spaces of absolute clarity and comfort, serving the greater Calgary area with unparalleled dedication.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {values.map((v, i) => (
          <motion.div 
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-low p-10 rounded-[2.5rem]"
          >
            <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-6">
              <v.icon className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-headline mb-4">{v.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
