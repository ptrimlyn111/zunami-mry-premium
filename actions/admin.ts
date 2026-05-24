"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
async function requireAdmin(){ const session = await auth(); if ((session?.user as any)?.role !== "ADMIN") throw new Error("Unauthorized"); }
export async function createClass(formData: FormData){ await requireAdmin(); await prisma.class.create({ data: { title: String(formData.get('title')), schedule: String(formData.get('schedule')), level: String(formData.get('level')), quota: Number(formData.get('quota') || 0) } }); revalidatePath('/admin/classes'); revalidatePath('/kelas-tari'); }
export async function deleteClass(id: string){ await requireAdmin(); await prisma.class.delete({ where: { id } }); revalidatePath('/admin/classes'); revalidatePath('/kelas-tari'); }
export async function upsertPayment(formData: FormData){ await requireAdmin(); const bookingId=String(formData.get('bookingId')); await prisma.payment.upsert({ where:{ bookingId }, update:{ amount:Number(formData.get('amount')||0), status: String(formData.get('status')) as any, paymentMethod: String(formData.get('paymentMethod')||'Manual') }, create:{ bookingId, amount:Number(formData.get('amount')||0), status: String(formData.get('status')) as any, paymentMethod: String(formData.get('paymentMethod')||'Manual') } }); revalidatePath('/admin/payments'); revalidatePath('/admin'); }
