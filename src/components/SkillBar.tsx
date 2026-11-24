const items = ['Pendidikan Informatika', 'Kerja Tim', 'Belajar Hal Baru', 'Tanggung Jawab', 'FKIP'];

export const SkillBar = () => (
  <section aria-label="Fokus saya" className="border-y border-ink/5 bg-sun py-4">
    <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 md:gap-x-7">
      {items.map((item, i) => (
        <div key={item} className="flex items-center gap-5 md:gap-x-7">
          {i > 0 && (
            <span aria-hidden="true" className="text-[0.7rem] text-ink/45">
              ★
            </span>
          )}
          <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-ink md:text-xs">
            {item}
          </span>
        </div>
      ))}
    </div>
  </section>
);