import { LogoMark, SocialIcon } from './ui';

const links = ['Home', 'About', 'Skills', 'Contact'];

const socials = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@sela_ecw', icon: 'tiktok' as const },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sela_ecw?gwpx=YmVkZGcxMTk3dDZ0',
    icon: 'instagram' as const,
  },
];

export const Footer = () => (
  <footer className="bg-forest border-t border-white/10 text-white/70 py-20">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] pb-10 border-b border-white/10">
        <div>
          <a href="#home" className="flex items-center gap-3 font-extrabold text-white text-lg mb-4">
            <LogoMark className="h-9 w-9 text-sm" />
            Sheila ECW
          </a>
          <p className="leading-relaxed max-w-xs">
            Mahasiswa FKIP, Program Studi Pendidikan Informatika.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Navigasi</h4>
          <ul className="space-y-3">
            {links.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-sun transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Sosial</h4>
          <ul className="space-y-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-sun transition-colors">
                  <SocialIcon name={social.icon} className="h-4 w-4" />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-8 text-center text-sm text-white/60">
        <p>&copy; 2026 Sheila ECW. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
