import { prisma } from "@/lib/prisma";
import { SiteShell } from "@/components/site-shell";
import { Footer } from "@/components/footer";
import {
  CalendarDays,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

export default async function KontakPage() {
  const services = await prisma.service.findMany({
    orderBy: {
      title: "asc",
    },
  });

  return (
    <SiteShell>
      <section className="luxury-pattern relative min-h-screen overflow-hidden px-6 py-28 text-[#F6EAD2]">
        <div className="traditional-pattern" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-white/10 px-5 py-2 text-sm text-[#D4AF37] backdrop-blur">
              <Sparkles size={16} />
              Booking Digital Zunami Mry
            </div>

            <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
              Booking Tari
              <span className="block text-[#D4AF37]">Lebih Mudah.</span>
            </h1>

            <p className="mt-6 max-w-xl border-l-4 border-[#D4AF37] pl-5 text-lg leading-8 text-[#F6EAD2]/75">
              Isi form pemesanan, lalu tim Zunami Mry akan menghubungi kamu
              melalui WhatsApp untuk konfirmasi jadwal, konsep, dan kebutuhan
              acara.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-[#D4AF37]/25 bg-white/10 p-5 backdrop-blur">
                <Phone className="mb-3 text-[#D4AF37]" size={28} />
                <h3 className="font-semibold">Respon Cepat</h3>
                <p className="mt-2 text-sm leading-6 text-[#F6EAD2]/60">
                  Admin akan menghubungi pelanggan setelah data booking dikirim.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#D4AF37]/25 bg-white/10 p-5 backdrop-blur">
                <CalendarDays className="mb-3 text-[#D4AF37]" size={28} />
                <h3 className="font-semibold">Jadwal Fleksibel</h3>
                <p className="mt-2 text-sm leading-6 text-[#F6EAD2]/60">
                  Tanggal acara dapat disesuaikan dengan ketersediaan tim.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#D4AF37]/25 bg-white/10 p-5 backdrop-blur">
                <MapPin className="mb-3 text-[#D4AF37]" size={28} />
                <h3 className="font-semibold">Lokasi Acara</h3>
                <p className="mt-2 text-sm leading-6 text-[#F6EAD2]/60">
                  Dapat digunakan untuk wedding, festival, kampus, dan event.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#D4AF37]/25 bg-white/10 p-5 backdrop-blur">
                <MessageCircle className="mb-3 text-[#D4AF37]" size={28} />
                <h3 className="font-semibold">Konfirmasi WhatsApp</h3>
                <p className="mt-2 text-sm leading-6 text-[#F6EAD2]/60">
                  Detail booking akan dikonfirmasi langsung melalui WhatsApp.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[3rem] border border-[#D4AF37]/30 bg-[#F6EAD2] p-6 text-[#0F3D2E] shadow-2xl md:p-8">
            <div className="mb-8">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#D4AF37]">
                FORM BOOKING
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold">
                Kirim Pemesanan
              </h2>

              <p className="mt-3 text-[#0F3D2E]/65">
                Lengkapi data berikut agar admin dapat memproses booking kamu
                dengan lebih cepat.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="customerName"
                  placeholder="Nama pelanggan"
                  className="rounded-2xl border border-[#D4AF37]/30 bg-white/70 px-5 py-4 text-[#0F3D2E] outline-none placeholder:text-[#0F3D2E]/45 focus:border-[#D4AF37]"
                />

                <input
                  name="whatsapp"
                  placeholder="Nomor WhatsApp"
                  className="rounded-2xl border border-[#D4AF37]/30 bg-white/70 px-5 py-4 text-[#0F3D2E] outline-none placeholder:text-[#0F3D2E]/45 focus:border-[#D4AF37]"
                />
              </div>

              <select
                name="service"
                className="w-full rounded-2xl border border-[#D4AF37]/30 bg-white/70 px-5 py-4 text-[#0F3D2E] outline-none focus:border-[#D4AF37]"
              >
                <option value="">Pilih layanan tari</option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>

              <input
                type="date"
                name="eventDate"
                className="w-full rounded-2xl border border-[#D4AF37]/30 bg-white/70 px-5 py-4 text-[#0F3D2E] outline-none focus:border-[#D4AF37]"
              />

              <input
                name="location"
                placeholder="Lokasi acara"
                className="w-full rounded-2xl border border-[#D4AF37]/30 bg-white/70 px-5 py-4 text-[#0F3D2E] outline-none placeholder:text-[#0F3D2E]/45 focus:border-[#D4AF37]"
              />

              <textarea
                name="notes"
                placeholder="Catatan tambahan"
                rows={5}
                className="w-full resize-none rounded-2xl border border-[#D4AF37]/30 bg-white/70 px-5 py-4 text-[#0F3D2E] outline-none placeholder:text-[#0F3D2E]/45 focus:border-[#D4AF37]"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0F3D2E] px-6 py-4 font-semibold text-[#F6EAD2] shadow-xl transition hover:bg-[#D4AF37] hover:text-[#0F3D2E]"
              >
                Kirim Booking
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </SiteShell>
  );
}