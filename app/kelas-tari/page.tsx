import { prisma } from "@/lib/prisma";
import { SiteShell } from "@/components/site-shell";
import { Footer } from "@/components/footer";
import {
  CalendarDays,
  GraduationCap,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";

export default async function KelasTariPage() {
  const classes = await prisma.class.findMany({
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
              KELAS TARI ZUNAMI MRY
            </p>

            <h1 className="mt-5 font-serif text-5xl font-bold text-[#0F3D2E] md:text-7xl">
              Belajar Tari dengan Mentor Berpengalaman
            </h1>

            <div className="mx-auto mt-6 h-[2px] w-28 bg-[#D4AF37]" />

            <p className="mx-auto mt-6 text-lg leading-8 text-[#0F3D2E]/75">
              Program kelas tari untuk pemula hingga tingkat lanjut dengan
              materi yang rapi, suasana belajar nyaman, dan konsep latihan yang
              dapat disesuaikan dengan kebutuhan peserta.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {classes.map((item) => (
              <div
                key={item.id}
                className="group rounded-[2rem] border border-[#D4AF37]/30 bg-[#0F3D2E] p-6 shadow-2xl transition duration-500 hover:-translate-y-2"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37]">
                  <GraduationCap size={30} />
                </div>

                <h2 className="font-serif text-3xl font-bold text-[#F6EAD2]">
                  {item.title}
                </h2>

                <p className="mt-4 leading-7 text-[#F6EAD2]/65">
                  Kelas tari ini dirancang untuk membantu peserta memahami dasar
                  gerak, ekspresi, kekompakan, dan kesiapan tampil di panggung.
                </p>

                <div className="mt-7 space-y-4">
                  <div className="flex items-center gap-3 rounded-2xl bg-[#06251C] px-4 py-3">
                    <CalendarDays size={18} className="text-[#D4AF37]" />
                    <span className="text-sm text-[#F6EAD2]/75">
                      {item.schedule}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-[#06251C] px-4 py-3">
                    <Sparkles size={18} className="text-[#D4AF37]" />
                    <span className="text-sm text-[#F6EAD2]/75">
                      Level {item.level}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-[#06251C] px-4 py-3">
                    <Users size={18} className="text-[#D4AF37]" />
                    <span className="text-sm text-[#F6EAD2]/75">
                      Kuota {item.quota} peserta
                    </span>
                  </div>
                </div>

                <a
                  href="/kontak"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-4 font-semibold text-[#0F3D2E] transition hover:scale-105"
                >
                  Daftar Kelas
                  <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-5xl rounded-[2rem] border border-[#D4AF37]/30 bg-[#0F3D2E] px-6 py-8 text-center shadow-xl md:px-10">
            <h3 className="font-serif text-3xl font-bold text-[#F6EAD2]">
              Kelas Privat dan Grup Bisa Request Jadwal
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#F6EAD2]/75 md:text-lg">
              Peserta dapat memilih kelas rutin atau private choreography sesuai
              kebutuhan. Cocok untuk latihan dasar, persiapan lomba, penampilan
              acara kampus, wedding performance, maupun kebutuhan event lainnya.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </SiteShell>
  );
}