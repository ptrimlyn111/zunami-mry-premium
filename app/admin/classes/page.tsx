import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin-shell";
import {
  CalendarDays,
  GraduationCap,
  Plus,
  Sparkles,
  Trash2,
  Users,
} from "lucide-react";

export default async function AdminClassesPage() {
  const classes = await prisma.class.findMany({
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

              <h1 className="mt-3 font-serif text-5xl font-bold text-[#F6EAD2]">
                Jadwal Kelas Tari
              </h1>

              <p className="mt-4 max-w-2xl leading-7 text-[#F6EAD2]/65">
                Kelola jadwal kelas, level peserta, dan kuota kelas tari
                Zunami Mry dengan tampilan admin yang rapi dan premium.
              </p>
            </div>

            <div className="w-fit rounded-full border border-[#D4AF37]/30 bg-[#0F3D2E] px-6 py-3 text-sm font-medium text-[#D4AF37]">
              {classes.length} Jadwal Aktif
            </div>
          </div>

          <div className="grid w-full gap-8 xl:grid-cols-[380px_1fr]">
            <section className="rounded-[32px] border border-[#D4AF37]/20 bg-[#0F3D2E] p-6 shadow-2xl">
              <div className="mb-7 flex items-center gap-3">
                <div className="rounded-2xl bg-[#D4AF37]/15 p-3 text-[#D4AF37]">
                  <Plus size={24} />
                </div>

                <div>
                  <h2 className="font-serif text-3xl font-bold text-[#F6EAD2]">
                    Tambah Kelas
                  </h2>
                  <p className="text-sm text-[#F6EAD2]/55">
                    Isi data jadwal kelas baru.
                  </p>
                </div>
              </div>

              <form className="space-y-5">
                <input
                  name="title"
                  placeholder="Nama kelas"
                  className="w-full rounded-2xl border border-[#D4AF37]/20 bg-[#06251C] px-5 py-4 text-[#F6EAD2] outline-none placeholder:text-[#F6EAD2]/35 focus:border-[#D4AF37]/60"
                />

                <div className="flex items-center gap-3 rounded-2xl border border-[#D4AF37]/20 bg-[#06251C] px-5 py-4">
                  <CalendarDays size={20} className="shrink-0 text-[#D4AF37]" />
                  <input
                    name="schedule"
                    placeholder="Contoh: Jumat & Sabtu, 16.00"
                    className="w-full bg-transparent text-[#F6EAD2] outline-none placeholder:text-[#F6EAD2]/35"
                  />
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-[#D4AF37]/20 bg-[#06251C] px-5 py-4">
                  <GraduationCap size={20} className="shrink-0 text-[#D4AF37]" />
                  <input
                    name="level"
                    placeholder="Level, contoh: Beginner"
                    className="w-full bg-transparent text-[#F6EAD2] outline-none placeholder:text-[#F6EAD2]/35"
                  />
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-[#D4AF37]/20 bg-[#06251C] px-5 py-4">
                  <Users size={20} className="shrink-0 text-[#D4AF37]" />
                  <input
                    name="quota"
                    placeholder="Kuota, contoh: 18"
                    className="w-full bg-transparent text-[#F6EAD2] outline-none placeholder:text-[#F6EAD2]/35"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] px-6 py-4 font-semibold text-[#06251C] transition hover:scale-[1.02]"
                >
                  <Plus size={18} />
                  Tambah Kelas
                </button>
              </form>
            </section>

            <section className="rounded-[32px] border border-[#D4AF37]/20 bg-[#0F3D2E] p-6 shadow-2xl">
              <div className="mb-7 flex items-center gap-3">
                <div className="rounded-2xl bg-[#D4AF37]/15 p-3 text-[#D4AF37]">
                  <Sparkles size={24} />
                </div>

                <div>
                  <h2 className="font-serif text-3xl font-bold text-[#F6EAD2]">
                    Daftar Kelas
                  </h2>
                  <p className="text-sm text-[#F6EAD2]/55">
                    Jadwal kelas yang tersedia untuk peserta.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {classes.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-6 rounded-3xl border border-[#D4AF37]/10 bg-[#06251C] p-5 transition hover:border-[#D4AF37]/35 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-[#F6EAD2]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-[#F6EAD2]/55">
                        {item.schedule}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-3">
                        <span className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#D4AF37]">
                          {item.level}
                        </span>

                        <span className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#D4AF37]">
                          Kuota {item.quota} Peserta
                        </span>
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