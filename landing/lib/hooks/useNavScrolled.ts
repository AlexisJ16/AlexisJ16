"use client";
import { useEffect, useState } from "react";

export function useNavScrolled(): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    if (!sentinel || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => setScrolled(!e.isIntersecting),
      { rootMargin: "0px" }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);
  return scrolled;
}
