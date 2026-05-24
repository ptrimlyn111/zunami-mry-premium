import Link from "next/link";
import {
  CalendarDays,
  Play,
  Sparkles,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export function Hero() {
  return (
    <section className="luxury-pattern relative min-h-screen overflow-hidden text-white">
      <div className="traditional-pattern" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div className="z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-white/10 px-5 py-2 text-sm text-[#F6EAD2] backdrop-blur">
            <Sparkles size={16} />
            Luxury Creative Agency & Performance
          </div>

          <h1 className="font-serif text-5xl font-bold leading-tight text-[#F6EAD2] md:text-7xl">
            Zunami Mry
            <span className="block text-white">Seni, Tradisi &</span>
            <span className="block italic text-[#D4AF37]">Kreativitas.</span>
          </h1>

          <p className="mt-7 max-w-xl border-l-4 border-[#D4AF37] pl-5 text-lg leading-8 text-white/80">
            Agensi kreatif premium untuk tari tradisional, tari modern,
            dan dance academy dengan pengalaman digital yang elegan.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 rounded-full bg-[#F6EAD2] px-8 py-4 font-semibold text-[#0F3D2E] shadow-2xl transition hover:bg-[#D4AF37]"
            >
              <CalendarDays size={18} />
              Booking Sekarang
            </Link>

            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/60 bg-white/10 px-8 py-4 font-semibold text-[#F6EAD2] backdrop-blur transition hover:bg-[#D4AF37]/20"
            >
              <Play size={18} />
              Lihat Portofolio
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              [ShieldCheck, "Profesional"],
              [Users, "Tim Berpengalaman"],
              [Star, "Hasil Premium"],
            ].map(([Icon, text]: any) => (
              <div
                key={text}
                className="rounded-3xl border border-[#D4AF37]/25 bg-white/10 p-5 backdrop-blur"
              >
                <Icon className="mb-3 text-[#D4AF37]" size={28} />
                <p className="font-medium text-[#F6EAD2]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="rounded-[3rem] border border-[#D4AF37]/40 bg-[#F6EAD2]/10 p-4 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-[#F6EAD2]">
              <img
                src="/images/taripring1.jpeg"
                alt="Zunami Mry Performance"
                className="h-[560px] w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-8 -left-6 rounded-3xl bg-[#F6EAD2] p-6 text-[#0F3D2E] shadow-2xl">
            <p className="text-4xl font-bold">250+</p>
            <p className="text-sm">Klien Puas</p>
          </div>
        </div>
      </div>
    </section>
  );
}