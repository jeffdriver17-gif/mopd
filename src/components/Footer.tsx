

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-surface-container-low w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-8 md:px-12 py-16 w-full max-w-7xl mx-auto">
        <div className="mb-12 md:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 flex items-center justify-center overflow-hidden mix-blend-multiply shrink-0 -ml-1">
              <img src="/logo.png" alt="Tidy Touch Logo" className="w-full h-full object-contain scale-[1.8]" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-extrabold text-on-surface font-headline leading-[0.9]">Tidy Touch</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-on-surface-variant mt-1">Cleaning Solutions</span>
            </div>
          </div>
          <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant max-w-xs">
            © 2024 Tidy Touch. Luminous Order in Every Corner.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-outline-variant">Navigation</span>
            <button onClick={() => onNavigate('services')} className="font-body text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all text-left">Services</button>
            <button onClick={() => onNavigate('about')} className="font-body text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all text-left">About Us</button>
            <button onClick={() => onNavigate('reviews')} className="font-body text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all text-left">Reviews</button>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-outline-variant">Legal</span>
            <button onClick={() => onNavigate('privacy')} className="font-body text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all text-left">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="font-body text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all text-left">Terms of Service</button>
          </div>
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <span className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-outline-variant">Location</span>
            <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant">
              Serving Greater Calgary & <br />Surrounding Areas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
