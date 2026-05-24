import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin-shell";
import {
  CreditCard,
  CheckCircle2,
  Clock,
  XCircle,
  Wallet,
} from "lucide-react";

export default async function AdminPaymentsPage() {
  const payments = await prisma.payment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalPaid = payments
    .filter((item) => item.status === "PAID")
    .reduce((total, item) => total + item.amount, 0);

  const pendingCount = payments.filter((item) => item.status === "PENDING")
    .length;

  const failedCount = payments.filter((item) => item.status === "FAILED")
    .length;

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
                Status Pembayaran
              </h1>

              <p className="mt-4 max-w-2xl leading-7 text-[#F6EAD2]/65">
                Pantau status pembayaran pelanggan, total transaksi berhasil,
                dan pembayaran yang masih menunggu konfirmasi.
              </p>
            </div>

            <div className="w-fit rounded-full border border-[#D4AF37]/30 bg-[#0F3D2E] px-6 py-3 text-sm font-medium text-[#D4AF37]">
              {payments.length} Transaksi
            </div>
          </div>

          <div className="mb-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-[28px] border border-[#D4AF37]/15 bg-[#0F3D2E] p-6 shadow-2xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37]">
                <Wallet size={26} />
              </div>

              <p className="text-sm text-[#F6EAD2]/55">Total Dibayar</p>
              <h2 className="mt-2 text-3xl font-bold text-[#F6EAD2]">
                Rp {totalPaid.toLocaleString("id-ID")}
              </h2>
            </div>

            <div className="rounded-[28px] border border-yellow-400/15 bg-[#0F3D2E] p-6 shadow-2xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300">
                <Clock size={26} />
              </div>

              <p className="text-sm text-[#F6EAD2]/55">Menunggu</p>
              <h2 className="mt-2 text-3xl font-bold text-[#F6EAD2]">
                {pendingCount}
              </h2>
            </div>

            <div className="rounded-[28px] border border-red-400/15 bg-[#0F3D2E] p-6 shadow-2xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-400/10 text-red-300">
                <XCircle size={26} />
              </div>

              <p className="text-sm text-[#F6EAD2]/55">Gagal</p>
              <h2 className="mt-2 text-3xl font-bold text-[#F6EAD2]">
                {failedCount}
              </h2>
            </div>
          </div>

          <section className="rounded-[32px] border border-[#D4AF37]/20 bg-[#0F3D2E] p-6 shadow-2xl">
            <div className="mb-7 flex items-center gap-3">
              <div className="rounded-2xl bg-[#D4AF37]/15 p-3 text-[#D4AF37]">
                <CreditCard size={24} />
              </div>

              <div>
                <h2 className="font-serif text-3xl font-bold text-[#F6EAD2]">
                  Daftar Pembayaran
                </h2>
                <p className="text-sm text-[#F6EAD2]/55">
                  Riwayat pembayaran yang masuk ke sistem.
                </p>
              </div>
            </div>

            {payments.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-[#D4AF37]/25 bg-[#06251C] px-6 py-20 text-center">
                <div className="mb-5 rounded-full bg-[#D4AF37]/10 p-5 text-[#D4AF37]">
                  <CreditCard size={44} />
                </div>

                <h3 className="text-2xl font-bold text-[#F6EAD2]">
                  Belum Ada Data Pembayaran
                </h3>

                <p className="mt-3 max-w-md text-[#F6EAD2]/55">
                  Data pembayaran akan muncul di sini setelah pelanggan melakukan
                  transaksi atau admin menambahkan data pembayaran.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {payments.map((payment) => (
                  <div
                    key={payment.id}
                    className="flex items-center justify-between gap-5 rounded-3xl border border-[#D4AF37]/10 bg-[#06251C] p-5 transition hover:border-[#D4AF37]/35"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37]">
                        <CreditCard size={24} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#F6EAD2]">
                          Rp {payment.amount.toLocaleString("id-ID")}
                        </h3>

                        <p className="mt-1 text-sm text-[#F6EAD2]/55">
                          {new Date(payment.createdAt).toLocaleDateString(
                            "id-ID"
                          )}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                        payment.status === "PAID"
                          ? "bg-green-500/10 text-green-300"
                          : payment.status === "FAILED"
                          ? "bg-red-500/10 text-red-300"
                          : "bg-yellow-500/10 text-yellow-300"
                      }`}
                    >
                      {payment.status === "PAID" && <CheckCircle2 size={16} />}
                      {payment.status === "FAILED" && <XCircle size={16} />}
                      {payment.status === "PENDING" && <Clock size={16} />}
                      {payment.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </AdminShell>
  );
}