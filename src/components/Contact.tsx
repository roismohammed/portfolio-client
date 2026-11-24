import { Button, SectionLabel, SocialIcon } from './ui';

const socials = [
  {
    label: 'Instagram',
    handle: '@sela_ecw',
    href: 'https://www.instagram.com/sela_ecw?gwpx=YmVkZGcxMTk3dDZ0',
    icon: 'instagram' as const,
  },
  { label: 'TikTok', handle: '@sela_ecw', href: 'https://www.tiktok.com/@sela_ecw', icon: 'tiktok' as const },
];

export const Contact = () => (
  <section id="contact" className="bg-forest text-white py-20 md:py-28">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionLabel tone="light">Kontak</SectionLabel>
          <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Mau ngobrol? DM saya saja.
          </h2>
          <p className="mt-4 text-white/75 leading-relaxed md:text-lg">
            Saya cek pesan di Instagram dan TikTok. Kalau ada yang mau ditanyakan atau dibahas
            bareng, langsung kirim pesan ya.
          </p>
          <Button href="https://www.instagram.com/sela_ecw?gwpx=YmVkZGcxMTk3dDZ0" target="_blank" variant="sun" className="mt-8">
            Start a Conversation
          </Button>
        </div>

        <div className="space-y-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-xl border border-white/15 p-5 transition-colors hover:bg-white hover:text-forest"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/80 group-hover:border-forest/30 group-hover:text-forest">
                  <SocialIcon name={social.icon} className="h-5 w-5" />
                </span>
                <div>
                  <span className="block text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-white/50 group-hover:text-forest/80">
                    {social.label}
                  </span>
                  <span className="block text-lg font-bold text-white group-hover:text-forest">
                    {social.handle}
                  </span>
                </div>
              </div>
              <span aria-hidden="true" className="text-xl font-bold text-white/50 group-hover:text-forest">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
