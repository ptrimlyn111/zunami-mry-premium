import {
  ArrowUpRight,
  CalendarCheck,
  DollarSign,
  Layers3,
  Users,
} from "lucide-react";

import { AdminShell } from "@/components/admin-shell";

const stats = [
  {
    title: "Total Booking",
    value: "4",
    icon: CalendarCheck,
  },
  {
    title: "Pendapatan",
    value: "Rp 500rb",
    icon: DollarSign,
  },
  {
    title: "Total User",
    value: "8",
    icon: Users,
  },
  {
    title: "Total Layanan",
    value: "5",
    icon: Layers3,
  },
];

const bookings = [
  {
    name: "Aulia",
    service: "Tari Minang",
    date: "12 Mei 2026",
    status: "Selesai",
    statusClass: "bg-green-500/15 text-green-400",
  },
  {
    name: "Rina",
    service: "Tari Melayu",
    date: "15 Mei 2026",
    status: "Pending",
    statusClass: "bg-yellow-500/15 text-yellow-400",
  },
];

const quickMenus = ["Kelola Booking", "Kelola Layanan", "Kelola User"];

export default function AdminPage() {
  return (
    <AdminShell>
      <div className="min-h-screen bg-[#061B15] bg-[url('/pattern.svg')] bg-cover bg-fixed p-6 lg:p-10">
        <div className="mx-auto max-w-[1400px]">
          <section className="rounded-[32px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#06251D] to-[#0B3B2E] p-6 shadow-2xl md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Admin Dashboard
                </p>

                <h1 className="font-serif text-4xl font-bold text-[#F6EAD2] md:text-5xl">
                  Zunami Mry Panel
                </h1>

                <p className="mt-4 max-w-3xl leading-7 text-[#F6EAD2]/65">
                  Kelola booking, layanan tari, pelanggan, dan aktivitas website
                  dalam satu dashboard modern dengan nuansa tradisional.
                </p>
              </div>

              <div className="w-fit rounded-full border border-[#D4AF37]/30 px-6 py-3 text-sm font-medium text-[#D4AF37]">
                Premium Admin System
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-[#D4AF37]/15 bg-[#0B4A37] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-[#D4AF37]/10 p-4 text-[#D4AF37]">
                      <item.icon size={26} />
                    </div>

                    <ArrowUpRight className="text-[#D4AF37]" size={20} />
                  </div>

                  <p className="mt-6 text-sm text-[#F6EAD2]/60">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-[#F6EAD2]">
                    {item.value}
                  </h2>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-3">
              <section className="rounded-[32px] bg-[#0B4A37] p-6 xl:col-span-2">
                <h2 className="font-serif text-3xl font-bold text-[#F6EAD2]">
                  Booking Terbaru
                </h2>

                <p className="mt-2 text-[#F6EAD2]/60">
                  Data pelanggan terbaru yang melakukan booking.
                </p>

                <div className="mt-6 overflow-hidden rounded-2xl border border-[#D4AF37]/10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#06251D] text-[#D4AF37]">
                      <tr>
                        <th className="px-5 py-4">Nama</th>
                        <th className="px-5 py-4">Layanan</th>
                        <th className="px-5 py-4">Tanggal</th>
                        <th className="px-5 py-4">Status</th>
                      </tr>
                    </thead>

                    <tbody className="text-[#F6EAD2]/80">
                      {bookings.map((booking) => (
                        <tr
                          key={`${booking.name}-${booking.service}`}
                          className="border-t border-white/5"
                        >
                          <td className="px-5 py-4">{booking.name}</td>
                          <td className="px-5 py-4">{booking.service}</td>
                          <td className="px-5 py-4">{booking.date}</td>
                          <td className="px-5 py-4">
                            <span
                              className={`rounded-full px-3 py-1 text-xs ${booking.statusClass}`}
                            >
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 rounded-[28px] bg-[#06251D] p-6">
                  <h3 className="text-2xl font-bold text-[#F6EAD2]">
                    Aktivitas Booking
                  </h3>

                  <div className="mt-6 flex h-52 items-center justify-center rounded-2xl border border-dashed border-[#D4AF37]/20 text-[#F6EAD2]/40">
                    Grafik booking bulanan
                  </div>
                </div>
              </section>

              <section className="rounded-[32px] bg-[#0B4A37] p-6">
                <h2 className="font-serif text-3xl font-bold text-[#F6EAD2]">
                  Akses Cepat
                </h2>

                <p className="mt-2 text-sm text-[#F6EAD2]/55">
                  Navigasi cepat untuk mengelola data utama.
                </p>

                <div className="mt-6 space-y-4">
                  {quickMenus.map((menu) => (
                    <button
                      key={menu}
                      className="flex w-full items-center justify-between rounded-2xl bg-[#06251D] px-5 py-4 text-left text-[#F6EAD2] transition hover:bg-[#0E3529] hover:text-[#D4AF37]"
                    >
                      {menu}
                      <ArrowUpRight size={18} />
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </AdminShell>
  );
}