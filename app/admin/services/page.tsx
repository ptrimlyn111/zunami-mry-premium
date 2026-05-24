import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin-shell";
import { ImageIcon, Plus, Sparkles, Trash2 } from "lucide-react";

export default async function AdminServicesPage() {
  const services = await prisma.service.findMany({
    orderBy: {
      title: "asc",
    },
  });

  return (
    <AdminShell>
      <main className="min-h-screen bg-[#061B15] px-6 py-8 text-[#F6EAD2] lg:px-8">
        <div className="w-full max-w-none">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                Admin Management
              </p>

              <h1 className="mt-3 font-serif text-5xl font-bold">
                Kelola Layanan Tari
              </h1>

              <p className="mt-4 max-w-2xl leading-7 text-[#F6EAD2]/65">
                Tambahkan, ubah, dan hapus layanan tari yang akan ditampilkan
                pada halaman utama website Zunami Mry.
              </p>
            </div>

            <div className="w-fit rounded-full border border-[#D4AF37]/30 bg-[#0F3D2E] px-6 py-3 text-sm font-medium text-[#D4AF37]">
              {services.length} Layanan Aktif
            </div>
          </div>

          <div className="grid w-full gap-8 xl:grid-cols-[380px_1fr]">
            <section className="rounded-[32px] border border-[#D4AF37]/20 bg-[#0F3D2E] p-6 shadow-2xl">
              <div className="mb-7 flex items-center gap-3">
                <div className="rounded-2xl bg-[#D4AF37]/15 p-3 text-[#D4AF37]">
                  <Plus size={24} />
                </div>

                <div>
                  <h2 className="font-serif text-3xl font-bold">
                    Tambah Layanan
                  </h2>
                  <p className="text-sm text-[#F6EAD2]/55">
                    Isi data layanan tari baru.
                  </p>
                </div>
              </div>

              <form className="space-y-5">
                <input
                  name="title"
                  placeholder="Judul layanan"
                  className="w-full rounded-2xl border border-[#D4AF37]/20 bg-[#06251C] px-5 py-4 text-[#F6EAD2] outline-none placeholder:text-[#F6EAD2]/35 focus:border-[#D4AF37]/60"
                />

                <textarea
                  name="description"
                  placeholder="Deskripsi layanan"
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-[#D4AF37]/20 bg-[#06251C] px-5 py-4 text-[#F6EAD2] outline-none placeholder:text-[#F6EAD2]/35 focus:border-[#D4AF37]/60"
                />

                <input
                  name="price"
                  placeholder="Harga, contoh: 1500000"
                  className="w-full rounded-2xl border border-[#D4AF37]/20 bg-[#06251C] px-5 py-4 text-[#F6EAD2] outline-none placeholder:text-[#F6EAD2]/35 focus:border-[#D4AF37]/60"
                />

                <div className="flex items-center gap-3 rounded-2xl border border-[#D4AF37]/20 bg-[#06251C] px-5 py-4">
                  <ImageIcon size={20} className="shrink-0 text-[#D4AF37]" />
                  <input
                    name="image"
                    placeholder="/images/tari-minang.jpg"
                    className="w-full bg-transparent text-[#F6EAD2] outline-none placeholder:text-[#F6EAD2]/35"
                  />
                </div>

                <select
                  name="category"
                  className="w-full rounded-2xl border border-[#D4AF37]/20 bg-[#06251C] px-5 py-4 text-[#F6EAD2] outline-none focus:border-[#D4AF37]/60"
                >
                  <option value="TRADITIONAL_DANCE">Tari Tradisional</option>
                  <option value="MODERN_DANCE">Tari Modern</option>
                </select>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] px-6 py-4 font-semibold text-[#06251C] transition hover:scale-[1.02]"
                >
                  <Plus size={18} />
                  Tambah Layanan
                </button>
              </form>
            </section>

            <section className="rounded-[32px] border border-[#D4AF37]/20 bg-[#0F3D2E] p-6 shadow-2xl">
              <div className="mb-7 flex items-center gap-3">
                <div className="rounded-2xl bg-[#D4AF37]/15 p-3 text-[#D4AF37]">
                  <Sparkles size={24} />
                </div>

                <div>
                  <h2 className="font-serif text-3xl font-bold">
                    Daftar Layanan
                  </h2>
                  <p className="text-sm text-[#F6EAD2]/55">
                    Data layanan yang tampil di website.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center justify-between gap-5 rounded-3xl border border-[#D4AF37]/10 bg-[#06251C] p-5 transition hover:border-[#D4AF37]/35"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#0F3D2E]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-lg font-semibold text-[#F6EAD2]">
                          {service.title}
                        </h3>

                        <p className="mt-1 text-sm text-[#F6EAD2]/60">
                          Rp {service.price.toLocaleString("id-ID")}
                        </p>

                        <p className="mt-1 text-xs text-[#D4AF37]">
                          {service.category}
                        </p>
                      </div>
                    </div>

                    <button className="flex shrink-0 items-center gap-2 rounded-full border border-red-400/30 px-4 py-2 text-sm text-red-300 transition hover:bg-red-500 hover:text-white">
                      <Trash2 size={16} />
                      Hapus
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </AdminShell>
  );
}