import Link from "next/link";
import {
  LayoutDashboard,
  CalendarCheck,
  Layers,
  Users,
  GraduationCap,
  CreditCard,
  Home,
} from "lucide-react";

const menu = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/bookings", label: "Booking", icon: CalendarCheck },
  { href: "/admin/services", label: "Layanan", icon: Layers },
  { href: "/admin/users", label: "User", icon: Users },
  { href: "/admin/classes", label: "Kelas", icon: GraduationCap },
  { href: "/admin/payments", label: "Pembayaran", icon: CreditCard },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#061B15] text-[#F6EAD2]">
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-[#D4AF37]/20 bg-[#0F3D2E] p-6 lg:block">
        <div className="mb-10">
          <h1 className="font-serif text-3xl font-bold">
            Zunami <span className="text-[#D4AF37]">Mry</span>
          </h1>
          <p className="mt-1 text-sm text-[#F6EAD2]/55">
            Admin Management
          </p>
        </div>

        <nav className="space-y-3">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-[#F6EAD2]/75 transition hover:bg-[#D4AF37]/15 hover:text-[#D4AF37]"
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/40 px-8 py-3 text-sm text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0F3D2E]"
        >
          <Home size={18} />
          Lihat Website
        </Link>
      </aside>

      <section className="lg:ml-72">
        {children}
      </section>
    </main>
  );
}