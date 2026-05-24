# Zunami Mry — Premium Fullstack Creative Agency Website

Fullstack Next.js App Router untuk agensi kreatif **Zunami Mry** dengan tampilan luxury cinematic, sistem booking digital, login admin, dashboard, CRUD layanan, manajemen booking, payment status, jadwal kelas, Prisma ORM, PostgreSQL, dan Auth.js.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Prisma ORM + PostgreSQL
- Auth.js / NextAuth v5 + Prisma Adapter + JWT session
- Framer Motion + GSAP
- Lucide React
- Shadcn-style UI components

## Instalasi

```bash
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run seed
npm run dev
```

Buka `http://localhost:3000`.

## Admin Default

- Email: `admin@zunamimry.com`
- Password: `admin123`

> Segera ganti password setelah deploy production.

## Struktur

```txt
/app            App Router pages, route handlers, admin area
/actions        Server actions untuk booking, services, admin updates
/components     UI sections dan reusable components
/hooks          Client hooks
/lib            Prisma, auth helpers, validators, utilities
/prisma         Prisma schema dan seed
/types          TypeScript shared types
/public         Static assets
```

## Fitur

- Website publik: beranda, layanan, kelas tari, portofolio, tentang kami, kontak
- Booking form dengan validasi Zod, Order ID otomatis, notifikasi sukses, simpan database
- Login admin cinematic glassmorphism
- Route protection `/admin/*`
- Role-based access ADMIN/USER
- Dashboard statistik premium ala Spotify
- CRUD layanan
- Update status booking dan status payment
- Kelola kelas tari
- Dark luxury theme, mouse glow, particles, scroll animation, hover premium
- SEO metadata, FAQ, contact form, floating WhatsApp

## Catatan Production

1. Gunakan password admin kuat dan secret unik.
2. Pasang PostgreSQL managed database.
3. Set `AUTH_URL` ke domain production.
4. Tambahkan storage image nyata seperti S3/Cloudinary untuk upload gambar.
5. Tambahkan payment gateway resmi bila pembayaran ingin otomatis.
