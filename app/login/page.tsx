"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Email atau password salah.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F3D2E] px-6 py-20">
      <div className="traditional-pattern" />

      <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-[120px]" />
      <div className="absolute bottom-[-140px] right-[-100px] h-[420px] w-[420px] rounded-full bg-[#F6EAD2]/20 blur-[130px]" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[3rem] border border-[#D4AF37]/30 bg-[#F6EAD2]/10 shadow-2xl backdrop-blur-xl md:grid-cols-2">
        <section className="relative hidden min-h-[560px] bg-[#06251C] p-10 text-[#F6EAD2] md:block">
          <div className="traditional-pattern opacity-20" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/10 px-4 py-2 text-sm text-[#D4AF37]">
              <Sparkles size={16} />
              Premium Admin Portal
            </div>

            <h1 className="mt-10 font-serif text-5xl font-bold leading-tight">
              Kelola Zunami Mry dengan lebih rapi.
            </h1>

            <p className="mt-6 leading-8 text-[#F6EAD2]/70">
              Dashboard admin untuk mengelola layanan tari, booking pelanggan,
              data user, dan aktivitas website dalam satu tempat.
            </p>
          </div>

          <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-[#D4AF37]/20 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-[#F6EAD2]/60">Akses khusus</p>
            <p className="mt-1 font-semibold text-[#D4AF37]">
              Admin Zunami Mry
            </p>
          </div>
        </section>

        <section className="bg-[#F6EAD2] p-8 md:p-12">
          <div className="mb-10">
            <p className="text-sm font-semibold tracking-[0.3em] text-[#D4AF37]">
              ADMIN LOGIN
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold text-[#0F3D2E]">
              Masuk ke Dashboard
            </h2>

            <p className="mt-3 text-[#0F3D2E]/65">
              Silakan masukkan email dan password admin untuk mengakses panel
              pengelolaan website.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#0F3D2E]">
                Email Admin
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-[#D4AF37]/30 bg-white/60 px-4 py-4">
                <Mail size={20} className="text-[#D4AF37]" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email admin"
                  className="w-full bg-transparent text-[#0F3D2E] outline-none placeholder:text-[#0F3D2E]/40"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#0F3D2E]">
                Password
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-[#D4AF37]/30 bg-white/60 px-4 py-4">
                <Lock size={20} className="text-[#D4AF37]" />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  className="w-full bg-transparent text-[#0F3D2E] outline-none placeholder:text-[#0F3D2E]/40"
                  required
                />
              </div>
            </div>

            {error && (
              <p className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0F3D2E] px-6 py-4 font-semibold text-[#F6EAD2] shadow-xl transition hover:bg-[#D4AF37] hover:text-[#0F3D2E] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Memproses..." : "Login Admin"}
              <ArrowRight size={18} />
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}