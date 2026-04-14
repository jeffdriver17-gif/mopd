import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    { q: 'How do I prepare for my service?', a: 'Simply secure your pets and ensure our team has access. We bring all premium cleaning supplies and equipment required for your specific service tier.' },
    { q: 'Are your cleaning professionals vetted?', a: 'Yes, all Tidy Touch curators are thoroughly background-checked and rigorously trained to provide absolute peace of mind during our visit.' },
    { q: 'What is your satisfaction guarantee?', a: 'If any area does not meet our high standards of "Luminous Order," notify us within 24 hours and we will return to refine it at no additional cost.' },
    { q: 'Do I need to provide cleaning supplies?', a: 'No, we provide all high-quality, eco-conscious cleaning supplies and state-of-the-art equipment. If you have specific medical/allergy-related products you prefer us to use, we are happy to accommodate.' },
    { q: 'How does access work if I am not home?', a: 'Most of our ongoing clients provide a spare key, lockbox code, or garage code. Keys are kept securely and never hold identifying information.' },
    { q: 'What is the cancellation policy?', a: 'We require 48 hours notice for any rescheduling or cancellations to avoid a late-cancellation fee.' }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface font-headline mb-6 tracking-tight">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="text-lg text-on-surface-variant">Everything you need to know about preparing for your Tidy Touch experience.</p>
      </motion.div>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <motion.div 
            key={faq.q}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-low p-8 rounded-2xl group cursor-pointer hover:bg-surface-container transition-colors"
          >
            <h4 className="text-xl font-bold font-headline text-on-surface mb-4 flex justify-between items-center group-hover:text-primary transition-colors">
              {faq.q}
              <Plus className="text-primary w-5 h-5 shrink-0" />
            </h4>
            <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
