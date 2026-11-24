import { Button } from './ui';
import { Navbar } from './Navbar';
import photo from '../assets/seila.jpeg';

export const Hero = () => (
  <header id="home" className="overflow-hidden bg-paper pt-32 pb-16 md:pt-40 md:pb-24">
    <Navbar />
    <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-muted">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sun" />
            Mahasiswa Pendidikan Informatika
          </p>

          <h1 className="text-[2.25rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-5xl md:text-[3.35rem] lg:text-[3.7rem]">
            <span className="block">Halo, saya Sheila,</span>
            <span className="block text-forest">Mahasiswa Pendidikan Informatika</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Ini portofolio saya untuk menyimpan hal-hal yang sudah saya pelajari. Saya nyaman
            bekerja dalam tim dan selalu berusaha menyelesaikan tugas dengan tanggung jawab.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#about" variant="sun">
              Tentang Saya
            </Button>
            <Button href="#contact" variant="outline">
              Kontak
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[400px] px-4 sm:px-0">
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-6 h-52 w-52 rounded-full bg-sun sm:-right-6 sm:h-60 sm:w-60"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-5 h-36 w-36 rounded-full border border-forest/25"
          />
          <span aria-hidden="true" className="absolute -top-6 left-8 text-2xl text-forest">
            ✦
          </span>

          <div className="relative z-10 rounded-[2rem] border border-line bg-white p-3">
            <img
              src={photo}
              alt="Foto profil Sheila ECW"
              className="aspect-[4/5] w-full rounded-[1.55rem] object-cover object-top"
            />
            <div className="flex items-baseline justify-between px-2 pb-1 pt-3">
              <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                Sheila ECW
              </span>
              <span className="text-[0.68rem] font-medium text-muted">Portofolio</span>
            </div>
          </div>

          <span className="absolute left-0 top-24 z-20 rounded-full border border-line bg-white px-3.5 py-1.5 text-[0.7rem] font-bold text-ink sm:-left-6">
            Mahasiswa FKIP
          </span>
          <span className="absolute bottom-20 right-0 z-20 rounded-full bg-forest px-3.5 py-1.5 text-[0.7rem] font-bold text-white sm:-right-5">
            Kerja tim
          </span>
        </div>
      </div>
    </div>
  </header>
);
