import Image from "next/image";
import Link from "next/link";
import { Service } from "@prisma/client";

export function ServiceGrid({
  services,
}: {
  services: Service[];
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <div
          key={s.id}
          className="group overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-[#0F3D2E] p-4 shadow-xl transition duration-500 hover:-translate-y-2"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="p-3">
            <h3 className="mt-4 text-2xl font-bold text-[#F6EAD2]">
              {s.title}
            </h3>

            <p className="mt-3 line-clamp-3 leading-7 text-white/65">
              {s.description}
            </p>

            <p className="mt-5 text-lg font-semibold text-[#D4AF37]">
              Rp {s.price.toLocaleString("id-ID")}
            </p>

            <Link
              href="/kontak"
              className="mt-6 inline-flex rounded-full border border-[#D4AF37]/40 px-5 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Booking Sekarang
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}