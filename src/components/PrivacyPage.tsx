import { motion } from 'motion/react';

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-5xl font-extrabold text-on-surface font-headline mb-6 tracking-tight">Privacy Policy</h1>
        <p className="text-on-surface-variant">Effective Date: April 2026</p>
      </motion.div>

      <div className="prose prose-on-surface max-w-none space-y-8 text-on-surface-variant leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">1. Information Collection</h2>
          <p>We collect information that you provide directly to us, including when you create an account, request a quote, or communicate with us. This may include your name, email address, phone number, and physical address for service delivery.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">2. Use of Information</h2>
          <p>We use the information we collect to coordinate and deliver our professional cleaning services, process transactions, send administrative messages, and communicate about services and promotions.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">3. Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. Our payment processing is fully encrypted and PCI compliant.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at support@tidytouch.ca.</p>
        </section>
      </div>
    </div>
  );
}
