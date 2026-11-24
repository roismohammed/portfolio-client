import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'sun' | 'forest' | 'outline' | 'outline-light';
  className?: string;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = ({ children, variant = 'sun', className = '', href, ...props }: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors duration-200 cursor-pointer';
  const variants = {
    sun: 'bg-sun text-ink hover:bg-sun-soft',
    forest: 'bg-forest text-white hover:bg-moss',
    outline: 'border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.03]',
    'outline-light': 'border border-white/30 text-white hover:bg-white/10',
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export const SectionLabel = ({
  children,
  tone = 'dark',
  className = '',
}: {
  children: React.ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}) => (
  <span
    className={`mb-4 inline-flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] ${
      tone === 'light' ? 'text-sun-soft' : 'text-muted'
    } ${className}`}
  >
    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sun" />
    {children}
  </span>
);

/** Stylised "S" lettermark used in the navbar and footer. */
export const LogoMark = ({ className = '' }: { className?: string }) => (
  <span className={`relative inline-flex items-center justify-center rounded-full bg-sun ${className}`}>
    <span
      aria-hidden="true"
      className="flex items-center justify-center rounded-full border border-forest/30"
      style={{ width: '78%', height: '78%' }}
    >
      <span className="font-extrabold leading-none text-forest select-none" style={{ fontSize: '0.85em' }}>
        S
      </span>
    </span>
    <span aria-hidden="true" className="absolute right-1 top-1 h-1 w-1 rounded-full bg-forest" />
  </span>
);

type SocialName = 'instagram' | 'tiktok' | 'whatsapp' | 'mail' | 'github';

export const SocialIcon = ({
  name,
  className = 'h-4 w-4',
}: {
  name: SocialName;
  className?: string;
}) => {
  const common = {
    className,
    viewBox: '0 0 24 24',
    'aria-hidden': true as const,
    focusable: 'false' as const,
  };
  switch (name) {
    case 'instagram':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.8}>
          <rect x={3} y={3} width={18} height={18} rx={5} />
          <circle cx={12} cy={12} r={4} />
          <circle cx={17.2} cy={6.8} r={1.1} fill="currentColor" stroke="none" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg {...common} fill="currentColor">
          <path d="M16.5 3c.3 2.1 1.7 3.5 3.6 3.8v2.7a7 7 0 0 1-3.6-1.1v6.6a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.8a2.8 2.8 0 1 0 2 2.7V3h2.6z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.5-.5.3-.4c.1-.1.1-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 3.9 3.4 1.5.6 2 .6 2.7.5.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.3z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <rect x={3} y={5} width={18} height={14} rx={2} />
          <path d="m3.5 7 8.5 6 8.5-6" />
        </svg>
      );
    case 'github':
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.4 6.8 9.8.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.3 10.3 0 0 0 22 12.3C22 6.6 17.5 2 12 2z" />
        </svg>
      );
  }
};
