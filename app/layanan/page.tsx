import { prisma } from "@/lib/prisma";
import { SiteShell } from "@/components/site-shell";
import { ServiceGrid } from "@/components/service-grid";
import { Footer } from "@/components/footer";
import { Sparkles, CalendarDays, Palette, Star } from "lucide-react";

export default async function LayananPage() {
  const services = await prisma.service.findMany({
    orderBy: {
      title: "asc",
    },
  });

  return (
    <SiteShell>
      <section className="cream-pattern relative overflow-hidden px-6 py-28">
        <div className="traditional-pattern" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.35em] text-[#D4AF37]">
              LAYANAN ZUNAMI MRY
            </p>

            <h1 className="mt-5 font-serif text-5xl font-bold text-[#0F3D2E] md:text-7xl">
              Layanan Tari Kreatif Premium
            </h1>

            <div className="mx-auto mt-6 h-[2px] w-28 bg-[#D4AF37]" />

            <p className="mx-auto mt-6 text-lg leading-8 text-[#0F3D2E]/75">
              Zunami Mry menyediakan berbagai layanan pertunjukan tari
              tradisional dan modern untuk wedding, festival budaya, acara
              kampus, penyambutan tamu, corporate event, dan hiburan panggung.
            </p>
          </div>

          <div className="mt-16">
            <ServiceGrid services={services} />
          </div>

          <div className="mx-auto mt-16 max-w-5xl rounded-[2rem] border border-[#D4AF37]/30 bg-[#0F3D2E] px-6 py-8 text-center shadow-xl md:px-10">
            <h2 className="font-serif text-3xl font-bold text-[#F6EAD2]">
              Bisa Request Konsep Tarian Sesuai Acara
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#F6EAD2]/75 md:text-lg">
              Setiap layanan dapat disesuaikan dengan kebutuhan pelanggan,
              mulai dari jenis tarian, jumlah penari, kostum, durasi
              penampilan, hingga konsep panggung. Tim Zunami Mry siap membantu
              menghadirkan pertunjukan yang rapi, elegan, dan berkesan.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Konsep Elegan",
                desc: "Setiap penampilan dirancang agar sesuai dengan tema dan suasana acara.",
              },
              {
                icon: Palette,
                title: "Kostum Menarik",
                desc: "Menggunakan kostum yang mendukung karakter budaya dan visual panggung.",
              },
              {
                icon: CalendarDays,
                title: "Jadwal Fleksibel",
                desc: "Pemesanan dapat disesuaikan dengan tanggal dan kebutuhan acara pelanggan.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#D4AF37]/25 bg-[#FFF7E6] p-7 shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F3D2E] text-[#D4AF37]">
                  <item.icon size={26} />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#0F3D2E]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#0F3D2E]/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[3rem] border border-[#D4AF37]/30 bg-[#0F3D2E] p-8 text-center shadow-2xl md:p-12">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
              <Star size={30} />
            </div>

            <h2 className="font-serif text-4xl font-bold text-[#F6EAD2]">
              Siap Membuat Acaramu Lebih Berkesan?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#F6EAD2]/70">
              Hubungi Zunami Mry untuk konsultasi konsep, jadwal, dan kebutuhan
              pertunjukan tari sesuai acara kamu.
            </p>

            <a
              href="/kontak"
              className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-[#0F3D2E] transition hover:scale-105"
            >
              Booking Sekarang
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </SiteShell>
  );
}