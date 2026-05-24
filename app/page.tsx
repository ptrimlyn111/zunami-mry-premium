import { prisma } from "@/lib/prisma";
import { SiteShell } from "@/components/site-shell";
import { Hero } from "@/components/hero";
import { ServiceGrid } from "@/components/service-grid";
import { Footer } from "@/components/footer";

export default async function Home() {
  const services = await prisma.service.findMany({
    take: 6,
  });

  return (
    <SiteShell>
      <Hero />

      {/* SERVICES */}
      <section className="cream-pattern relative overflow-hidden px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="tracking-[0.3em] text-[#D4AF37]">
              LAYANAN KAMI
            </p>

            <h2 className="mt-5 font-serif text-5xl font-bold text-[#0F3D2E]">
              Layanan Tarian Zunami Mry
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#0F3D2E]/70">
              Menghadirkan pengalaman seni dan kreativitas dengan sentuhan modern,
              luxury, dan tradisional Indonesia.
            </p>
          </div>

          <div className="mt-16">
            <ServiceGrid services={services} />
          </div>
          <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-[#D4AF37]/30 bg-[#0F3D2E] px-6 py-8 text-center shadow-xl md:px-10">
  <h3 className="font-serif text-3xl font-bold text-[#F6EAD2]">
    Siap Menampilkan Pertunjukan Terbaik untuk Acaramu
  </h3>

  <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#F6EAD2]/75 md:text-lg">
    Jika Ingin Mendapatkan Diskon atau Paketan Tarian yang Murah Bisa Konsultasi ke Admin via Whatsapp
  </p>
</div>
        </div>
      </section>

      {/* STATISTIC */}
      <section className="bg-[#0F3D2E] px-6 py-20">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-6 rounded-[3rem] border border-[#D4AF37]/25 bg-[#06251C] p-8 shadow-2xl md:grid-cols-3 md:p-12">
      {[
        ["250+", "Klien Puas"],
        ["100+", "Project Sukses"],
        ["1+", "Tahun Pengalaman"],
      ].map(([number, label]) => (
        <div
          key={label}
          className="rounded-[2rem] border border-[#D4AF37]/15 bg-white/5 px-6 py-8 text-center"
        >
          <h3 className="text-5xl font-bold text-[#D4AF37] md:text-6xl">
            {number}
          </h3>

          <p className="mt-4 text-base font-medium text-[#F6EAD2]/75">
            {label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* ABOUT */}
      <section className="cream-pattern px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="tracking-[0.3em] text-[#D4AF37]">
              TENTANG KAMI
            </p>

            <h2 className="mt-5 font-serif text-5xl font-bold leading-tight text-[#0F3D2E]">
              Melestarikan Tradisi,
              <span className="block text-[#D4AF37]">
                Menginspirasi Generasi.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#0F3D2E]/75">
              Zunami Mry hadir sebagai agensi kreatif premium yang
              memadukan seni tradisional, performance modern,
                dan dance academy dalam satu pengalaman digital yang elegan.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[3rem] border border-[#D4AF37]/30 bg-[#0F3D2E] p-5 shadow-2xl">
              <img
                src="images/tentang-kami.jpeg"
                className="h-[500px] w-full rounded-[2rem] object-cover"
              />

              <div className="absolute bottom-10 left-10 rounded-3xl bg-[#F6EAD2] p-5 shadow-2xl">
                <p className="text-4xl font-bold text-[#0F3D2E]">
                  100%
                </p>

                <p className="mt-1 text-[#0F3D2E]/70">
                  Premium Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </SiteShell>
  );
}