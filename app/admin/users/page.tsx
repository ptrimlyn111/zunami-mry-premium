import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin-shell";
import { ShieldCheck, UserRound, Mail, CalendarDays } from "lucide-react";

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
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
                Manajemen User
              </h1>

              <p className="mt-4 max-w-2xl leading-7 text-[#F6EAD2]/65">
                Kelola data akun pengguna dan admin yang memiliki akses ke
                sistem Zunami Mry.
              </p>
            </div>

            <div className="w-fit rounded-full border border-[#D4AF37]/30 bg-[#0F3D2E] px-6 py-3 text-sm font-medium text-[#D4AF37]">
              {users.length} User Terdaftar
            </div>
          </div>

          <section className="rounded-[32px] border border-[#D4AF37]/20 bg-[#0F3D2E] p-6 shadow-2xl">
            <div className="mb-7 flex items-center gap-3">
              <div className="rounded-2xl bg-[#D4AF37]/15 p-3 text-[#D4AF37]">
                <UserRound size={24} />
              </div>

              <div>
                <h2 className="font-serif text-3xl font-bold">
                  Daftar User
                </h2>
                <p className="text-sm text-[#F6EAD2]/55">
                  Semua akun yang tersimpan pada database.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="rounded-[28px] border border-[#D4AF37]/10 bg-[#06251C] p-5 transition hover:border-[#D4AF37]/40 hover:shadow-[0_0_35px_rgba(212,175,55,0.12)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37]">
                        <UserRound size={24} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#F6EAD2]">
                          {user.name || "User Tanpa Nama"}
                        </h3>

                        <div className="mt-1 flex items-center gap-2 text-sm text-[#F6EAD2]/55">
                          <Mail size={14} />
                          {user.email}
                        </div>
                      </div>
                    </div>

                    <span className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#D4AF37]">
                      {user.role}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-2 rounded-2xl bg-[#0F3D2E] px-4 py-3 text-sm text-[#F6EAD2]/60">
                    <CalendarDays size={16} className="text-[#D4AF37]" />
                    Dibuat pada{" "}
                    {new Date(user.createdAt).toLocaleDateString("id-ID")}
                  </div>

                  {user.role === "ADMIN" && (
                    <div className="mt-4 flex items-center gap-2 rounded-2xl border border-green-400/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                      <ShieldCheck size={16} />
                      Memiliki akses penuh dashboard
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </AdminShell>
  );
}