import { SectionLabel } from './ui';

const items = [
  { id: '01', title: 'Background', desc: 'Mahasiswa FKIP, Program Studi Pendidikan Informatika.' },
  { id: '02', title: 'Kerja tim', desc: 'Mampu bekerja sama dalam tim.' },
  { id: '03', title: 'Belajar hal baru', desc: 'Bertanggung jawab dan mau belajar hal baru.' },
];

export const Skills = () => (
  <section id="skills" className="bg-paper py-20 md:py-28">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
      <div className="text-center mb-16">
        <SectionLabel>Profil singkat</SectionLabel>
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Background & <span className="text-forest">Skill</span>
        </h2>
        <p className="mt-4 max-w-[600px] mx-auto text-muted leading-relaxed">
          Tiga hal yang paling menggambarkan saya saat ini.
        </p>
      </div>

      <div className="space-y-0">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`border-t border-line py-8 md:grid md:grid-cols-[3rem_1fr_2fr] md:gap-8 md:items-baseline ${
              i === items.length - 1 ? 'border-b' : ''
            }`}
          >
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-forest">
              {item.id}
            </span>
            <h3 className="text-xl font-bold md:text-2xl">{item.title}</h3>
            <p className="text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
