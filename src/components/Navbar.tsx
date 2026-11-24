import { useEffect, useState } from 'react';
import { Button, LogoMark } from './ui';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      const y = window.scrollY + 160;
      let current = '#home';
      for (const el of sections) if (el.offsetTop <= y) current = `#${el.id}`;
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed left-1/2 top-4 z-50 flex h-[72px] w-[calc(100%-2rem)] max-w-[1200px] -translate-x-1/2 items-center justify-between gap-4 rounded-full border border-line bg-paper px-5 md:px-7">
      <a href="#home" className="flex items-center gap-2.5">
        <LogoMark className="h-8 w-8 text-sm" />
        <span className="text-[0.95rem] font-extrabold tracking-tight md:text-base">Sheila ECW</span>
      </a>

      <ul className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              aria-current={active === link.href ? 'page' : undefined}
              className={`text-[0.8rem] font-semibold transition-colors ${
                active === link.href ? 'text-forest' : 'text-muted hover:text-forest'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <Button href="#contact" variant="forest" className="px-5 py-2 text-[0.8rem]">
          Contact Me
        </Button>
      </div>

      <button
        type="button"
        className="-mr-1 p-2 md:hidden"
        aria-label={open ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <>
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </>
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-2xl border border-line bg-white p-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                active === link.href ? 'bg-sand text-forest' : 'text-ink hover:bg-sand hover:text-forest'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl bg-forest px-4 py-3 text-center text-sm font-bold text-white"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};
