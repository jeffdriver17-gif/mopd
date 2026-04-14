/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ServicesPage from './components/ServicesPage';
import BookingPage from './components/BookingPage';
import AboutPage from './components/AboutPage';
import ReviewsPage from './components/ReviewsPage';
import FAQPage from './components/FAQPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';

type View = 'home' | 'services' | 'booking' | 'about' | 'reviews' | 'faq' | 'privacy' | 'terms';

export default function App() {
  const [currentView, setCurrentView] = React.useState<View>('home');

  // Scroll to top on view change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <LandingPage 
            onBookNow={() => setCurrentView('booking')} 
            onViewServices={() => setCurrentView('services')} 
          />
        );
      case 'services':
        return <ServicesPage onBookNow={() => setCurrentView('booking')} onNavigate={(view) => setCurrentView(view as View)} />;
      case 'booking':
        return <BookingPage />;
      case 'about':
        return <AboutPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'faq':
        return <FAQPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return <LandingPage onBookNow={() => setCurrentView('booking')} onViewServices={() => setCurrentView('services')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar 
        currentView={currentView} 
        onNavigate={(view) => setCurrentView(view as View)} 
        onBookNow={() => setCurrentView('booking')} 
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={(view) => setCurrentView(view as View)} />
    </div>
  );
}
