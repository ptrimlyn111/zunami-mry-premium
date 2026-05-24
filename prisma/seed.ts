import { PrismaClient, Role, ServiceCategory } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const services = [
  {
    title: "Tari Minang",
    description:
      "Menyediakan pertunjukan Tari Minang untuk berbagai acara dengan penampilan profesional dan penuh nuansa budaya. Tersedia Tari Pasambahan dan Tari Piring. Kami juga menerima request tari lainnya sesuai kebutuhan acara Anda.",
    price: 1500000,
    image: "/images/taripiring2.jpeg",
    category: ServiceCategory.TRADITIONAL_DANCE,
  },
  {
    title: "Tari Modern",
    description:
      "Menyediakan pertunjukan Tari Modern untuk berbagai acara dengan penampilan energik dan profesional. Tersedia Flashmob, Indian Dance, Korean Dance, dan Western Dance. Kami juga menerima request konsep tari lainnya sesuai kebutuhan acara Anda.",
    price: 1000000,
    image: "/images/tarimodern.jpeg",
    category: ServiceCategory.MODERN_DANCE,
  },
  {
    title: "Tari Melayu",
    description:
      "Menyediakan pertunjukan Tari Melayu untuk berbagai acara dengan penampilan elegan dan profesional. Tersedia Tari Persembahan, Zapin Pengantin, dan Jodoh Lebaran. Kami juga menerima request tari lainnya sesuai kebutuhan acara Anda",
    price: 1500000,
    image: "/images/tarimelayu.jpeg",
    category: ServiceCategory.TRADITIONAL_DANCE,
  },
  {
    title: "Tari Bugis",
    description:
      "Menyediakan pertunjukan Tari Bugis untuk berbagai acara dengan penampilan profesional dan kostum elegan. Tersedia Tari Paduppa sebagai tarian penyambutan dan Tari Mappadendang yang penuh semangat budaya. Kami juga menerima request tari lainnya sesuai kebutuhan acara Anda.",
    price: 1500000,
    image: "/images/taribugis.jpeg",
    category: ServiceCategory.TRADITIONAL_DANCE,
  },
   {
    title: "Tari Banjar",
    description:
      "Menyediakan pertunjukan Tari Banjar untuk berbagai acara dengan penampilan profesional dan penuh nuansa budaya. Tersedia Tari Japin Paris Berantai dan kami juga menerima request tari lainnya sesuai kebutuhan acara Anda.",
    price: 1500000,
    image: "/images/taribanjar.jpeg",
    category: ServiceCategory.TRADITIONAL_DANCE,
  },
     {
    title: "Tari Batak Mandailing",
    description:
      "Menyediakan pertunjukan Tari Batak Mandailing untuk berbagai acara dengan penampilan profesional dan penuh nuansa budaya. Tersedia Tari Persembahan Batak Mandailing dan Tari Sitogol. Kami juga menerima request tari lainnya sesuai kebutuhan acara Anda.",
    price: 1500000,
    image: "/images/batakmandailing.jpeg",
    category: ServiceCategory.TRADITIONAL_DANCE,
  },
];

const classes = [
  {
    title: "Traditional Foundation",
    schedule: "Jumat & Sabtu, 16.00",
    level: "Beginner",
    quota: 18,
  },
  {
    title: "Private Choreography",
    schedule: "By Appointment",
    level: "All Level",
    quota: 6,
  },
];

async function main() {
  const password = await bcrypt.hash("admin123", 12);

  await prisma.user.upsert({
    where: {
      email: "admin@zunamimry.com",
    },
    update: {
      password,
      role: Role.ADMIN,
    },
    create: {
      email: "admin@zunamimry.com",
      name: "Zunami Mry Admin",
      password,
      role: Role.ADMIN,
    },
  });

  for (const service of services) {
    const id = service.title.toLowerCase().replaceAll(" ", "-");

    await prisma.service.upsert({
      where: {
        id,
      },
      update: {
        title: service.title,
        description: service.description,
        price: service.price,
        image: service.image,
        category: service.category,
      },
      create: {
        id,
        title: service.title,
        description: service.description,
        price: service.price,
        image: service.image,
        category: service.category,
      },
    });
  }

  await prisma.class.createMany({
    data: classes,
    skipDuplicates: true,
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });