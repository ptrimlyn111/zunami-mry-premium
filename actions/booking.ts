"use server";
import { prisma } from "@/lib/prisma";
import { bookingSchema } from "@/lib/validators";
import { generateOrderId } from "@/lib/utils";
import { revalidatePath } from "next/cache";
export async function createBooking(_: any, formData: FormData) {
  const raw = Object.fromEntries(formData.entries());
  const parsed = bookingSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, message: "Mohon lengkapi form booking dengan benar." };
  const booking = await prisma.booking.create({ data: { ...parsed.data, eventDate: new Date(parsed.data.eventDate), orderId: generateOrderId() } });
  revalidatePath("/admin/bookings");
  return { ok: true, message: `Booking berhasil dibuat. Order ID: ${booking.orderId}`, orderId: booking.orderId };
}
export async function updateBookingStatus(id: string, status: "PENDING"|"CONFIRMED"|"COMPLETED"|"CANCELLED") { await prisma.booking.update({ where: { id }, data: { status } }); revalidatePath("/admin/bookings"); }
