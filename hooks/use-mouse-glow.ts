"use client"; import { useEffect } from "react";
export function useMouseGlow(){ useEffect(()=>{ const el=document.documentElement; const on=(e:MouseEvent)=>{el.style.setProperty("--mx",`${e.clientX}px`); el.style.setProperty("--my",`${e.clientY}px`)}; window.addEventListener("mousemove",on); return()=>window.removeEventListener("mousemove",on)},[]) }
