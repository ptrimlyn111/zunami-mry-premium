import { z } from "zod";
export const bookingSchema = z.object({ customerName: z.string().min(3), whatsapp: z.string().min(8), service: z.string().min(2), eventDate: z.string().min(1), location: z.string().min(5), notes: z.string().optional() });
export const serviceSchema = z.object({ title: z.string().min(3), description: z.string().min(10), price: z.coerce.number().positive(), image: z.string().min(1), category: z.enum(["TRADITIONAL_DANCE","MODERN_DANCE","MAKEUP_ARTIST","DANCE_ACADEMY"]) });
