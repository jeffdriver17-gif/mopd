import { motion } from 'motion/react';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-5xl font-extrabold text-on-surface font-headline mb-6 tracking-tight">Terms of Service</h1>
        <p className="text-on-surface-variant">Effective Date: April 2026</p>
      </motion.div>

      <div className="prose prose-on-surface max-w-none space-y-8 text-on-surface-variant leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">1. Services</h2>
          <p>Tidy Touch agrees to provide professional residential and/or commercial cleaning services according to the tier and specifications selected during your booking. We reserve the right to refuse service if conditions are deemed unsafe or unsanitary beyond reasonable scope.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">2. Cancellations & Rescheduling</h2>
          <p>We require a minimum of 48 hours notice for any cancellations or schedule changes. Cancellations made within 48 hours of the scheduled service window will be subject to a cancellation fee equal to 50% of the service cost.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">3. Payment Terms</h2>
          <p>Payment is due at the time of service completion unless previously established on an invoice account. We accept major credit cards. Late payments may be subject to interest fees.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">4. Liability</h2>
          <p>While we treat every home with absolute care, accidents occasionally happen. We stand behind our work. Any claims for damages must be reported within 48 hours of service completion.</p>
        </section>
      </div>
    </div>
  );
}
