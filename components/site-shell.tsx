"use client";

import Image from "next/image";
import Link from "next/link";
import { useMouseGlow } from "@/hooks/use-mouse-glow";

const nav = [
  ["/", "Beranda"],
  ["/layanan", "Layanan"],
  ["/kelas-tari", "Kelas Tari"],
  ["/portofolio", "Portofolio"],
  ["/tentang", "Tentang Kami"],
  ["/kontak", "Kontak"],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  useMouseGlow();

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 bg-luxury" />

      <div className="pointer-events-none fixed left-[var(--mx)] top-[var(--my)] z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D4AF37]/20 bg-[#0F3D2E]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo zunami.jpeg"
              alt="Logo Zunami Mry"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border border-[#D4AF37]/50 object-cover"
              priority
            />

            <div className="leading-tight">
              <p className="font-serif text-xl font-bold text-[#F6EAD2]">
                Zunami <span className="text-[#D4AF37]">Mry</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#F6EAD2]/60">
                Creative Performance
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#F6EAD2]/75 lg:flex">
            {nav.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="transition hover:text-[#D4AF37]"
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/login"
            className="rounded-full border border-[#D4AF37]/50 px-5 py-2 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0F3D2E]"
          >
            Admin
          </Link>
        </div>
      </header>

      <main className="relative z-20 pt-20">{children}</main>

      <a
        href={`https://wa.me/${
          process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890"
        }`}
        target="_blank"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-black shadow-2xl transition hover:scale-105"
      >
        WhatsApp
      </a>
    </>
  );
}