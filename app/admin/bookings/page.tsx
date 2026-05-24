import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { CalendarDays, MapPin, User2 } from "lucide-react";

export default async function AdminBookingPage() {
  const bookings = await prisma.booking.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-[#06251c] p-8 text-white">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#d4af37]">
            Admin Panel
          </p>

          <h1 className="font-serif text-5xl font-bold text-[#f6ead2]">
            Manajemen Booking
          </h1>

          <p className="mt-3 max-w-2xl text-[#d9d2c3]">
            Kelola semua pemesanan pelanggan Zunami Mry dengan tampilan modern
            dan elegan.
          </p>
        </div>

        <Link
          href="/"
          className="rounded-full border border-[#d4af37]/40 bg-[#0b3b2e] px-6 py-3 text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
        >
          Lihat Website
        </Link>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-[#d4af37]/20 bg-[#0b3b2e]/80 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-6 border-b border-white/10 bg-[#072019] px-8 py-5 text-sm font-semibold text-[#d4af37]">
          <div>Pelanggan</div>
          <div>Layanan</div>
          <div>Tanggal</div>
          <div>Lokasi</div>
          <div>Status</div>
          <div>Aksi</div>
        </div>

        {bookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="mb-6 rounded-full bg-[#d4af37]/10 p-6">
              <CalendarDays className="h-14 w-14 text-[#d4af37]" />
            </div>

            <h2 className="mb-3 text-3xl font-bold text-[#f6ead2]">
              Belum Ada Booking
            </h2>

            <p className="max-w-md text-[#d9d2c3]">
              Data booking pelanggan akan muncul di sini setelah ada pemesanan
              dari website.
            </p>
          </div>
        ) : (
          <div>
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="grid grid-cols-6 items-center border-b border-white/5 px-8 py-6 transition hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#d4af37]/10 p-2">
                    <User2 size={18} className="text-[#d4af37]" />
                  </div>

                  <div>
                    <p className="font-semibold text-[#f6ead2]">
                      {booking.customerName}
                    </p>

                    <p className="text-sm text-[#c9c2b3]">
                      {booking.whatsapp}
                    </p>
                  </div>
                </div>

                <div className="text-[#f6ead2]">{booking.service}</div>

                <div className="text-[#d9d2c3]">
                  {new Date(booking.eventDate).toLocaleDateString("id-ID")}
                </div>

                <div className="flex items-center gap-2 text-[#d9d2c3]">
                  <MapPin size={16} />
                  {booking.location}
                </div>

                <div>
                  <span className="rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
                    {booking.status}
                  </span>
                </div>

                <button className="w-fit rounded-full border border-[#d4af37]/30 px-5 py-2 text-sm text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black">
                  Detail
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}