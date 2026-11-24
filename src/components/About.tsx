import { SectionLabel, SocialIcon } from './ui';
import photo from '../assets/seila.jpeg';

const stats = [
  { value: 'FKIP', label: 'Program Studi Pendidikan Informatika' },
  { value: 'Kerja Tim', label: 'Kolaborasi & komunikasi' },
  { value: 'Belajar', label: 'Terbuka hal baru & tanggung jawab' },
];

const socials = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@sela_ecw', icon: 'tiktok' as const },
  { label: 'Instagram', href: 'https://www.instagram.com/sela_ecw?gwpx=YmVkZGcxMTk3dDZ0', icon: 'instagram' as const },
];

export const About = () => (
  <section id="about" className="bg-forest text-white py-20 md:py-28">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative mx-auto max-w-[340px]">
          <div aria-hidden="true" className="absolute -right-4 -top-4 h-40 w-40 rounded-full bg-sun" />
          <div className="relative z-10 rounded-[2rem] border border-white/20 bg-white/5 p-3">
            <img
              src={photo}
              alt="Foto profil Sheila ECW"
              className="aspect-square w-full rounded-[1.55rem] object-cover object-top"
            />
          </div>
        </div>

        <div>
          <SectionLabel tone="light">Tentang Saya</SectionLabel>
          <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
            Sekilas tentang saya
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed md:text-lg">
            Saya Sheila, mahasiswa FKIP di Program Studi Pendidikan Informatika. Saya paling
            nyaman belajar sambil praktik, apalagi kalau bisa kerja bareng tim.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value}>
                <dt className="text-xl font-extrabold text-sun-soft md:text-2xl">{stat.value}</dt>
                <dd className="mt-1 text-[0.8rem] leading-snug text-white/60">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-[0.75rem] font-bold text-white hover:bg-white hover:text-forest transition-colors"
              >
                <SocialIcon name={social.icon} className="h-3.5 w-3.5" />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
