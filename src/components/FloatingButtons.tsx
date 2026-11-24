import { useEffect, useState } from 'react';
import { SocialIcon } from './ui';

const WA_NUMBER = '';

export const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waHref = WA_NUMBER ? `https://wa.me/${WA_NUMBER}` : '#contact';

  return (
    <>
      <a
        href={waHref}
        target={WA_NUMBER ? '_blank' : undefined}
        rel={WA_NUMBER ? 'noopener noreferrer' : undefined}
        aria-label="Hubungi lewat WhatsApp"
        className="fixed bottom-5 left-5 z-50 w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center hover:bg-moss transition-colors"
      >
        <SocialIcon name="whatsapp" className="h-6 w-6" />
      </a>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Kembali ke atas"
        className={`fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-white border border-line text-ink flex items-center justify-center hover:bg-sand transition-all ${
          showTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M12 4l-7 7 1.41 1.41L11 7.83V20h2V7.83l4.59 4.58L19 11l-7-7z" />
        </svg>
      </button>
    </>
  );
};
