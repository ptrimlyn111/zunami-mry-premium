import * as React from "react"; import { cn } from "@/lib/utils";
export function Card({className, ...props}: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn("rounded-[2rem] border border-white/10 bg-white/[.055] p-6 shadow-2xl backdrop-blur-xl", className)} {...props}/> }
