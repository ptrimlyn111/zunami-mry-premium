"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { serviceSchema } from "@/lib/validators";
import { revalidatePath } from "next/cache";
async function requireAdmin(){ const session = await auth(); if ((session?.user as any)?.role !== "ADMIN") throw new Error("Unauthorized"); }
export async function createService(formData: FormData){ await requireAdmin(); const parsed = serviceSchema.parse(Object.fromEntries(formData.entries())); await prisma.service.create({ data: parsed }); revalidatePath("/admin/services"); revalidatePath("/layanan"); }
export async function deleteService(id: string){ await requireAdmin(); await prisma.service.delete({ where: { id } }); revalidatePath("/admin/services"); revalidatePath("/layanan"); }
