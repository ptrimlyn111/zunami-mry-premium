import * as React from "react"; import { cn } from "@/lib/utils";
export function Button({className, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) { return <button className={cn("rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black shadow-glow transition hover:scale-[1.02] hover:bg-[#f4d96b] disabled:opacity-50", className)} {...props}/> }
