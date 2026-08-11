"use client";

import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("js");

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let revealObserver: IntersectionObserver | undefined;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12%", threshold: 0.12 },
      );
      revealNodes.forEach((node) => revealObserver?.observe(node));
    }

    const header = document.querySelector<HTMLElement>(".site-header");
    const themedSections = Array.from(document.querySelectorAll<HTMLElement>("[data-header-theme]"));
    const parallaxNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    const updateScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (header) {
        const active = themedSections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= 52 && rect.bottom > 52;
        });
        header.dataset.theme = active?.dataset.headerTheme ?? "dark";
        header.dataset.scrolled = scrollY > 48 ? "true" : "false";
      }

      if (!reduceMotion) {
        parallaxNodes.forEach((node) => {
          const rect = node.getBoundingClientRect();
          if (rect.bottom < -120 || rect.top > viewportHeight + 120) return;
          const speed = Number(node.dataset.speed ?? 0.06);
          const offset = (viewportHeight / 2 - (rect.top + rect.height / 2)) * speed;
          node.style.setProperty("--parallax-y", `${Math.max(-42, Math.min(42, offset))}px`);
        });
      }

      frame = 0;
    };

    const requestScrollUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate, { passive: true });

    const cleanups: Array<() => void> = [];

    document.querySelectorAll<HTMLDetailsElement>(".mobile-menu").forEach((menu) => {
      menu.querySelectorAll("a").forEach((link) => {
        const close = () => menu.removeAttribute("open");
        link.addEventListener("click", close);
        cleanups.push(() => link.removeEventListener("click", close));
      });
    });

    return () => {
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      revealObserver?.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      root.classList.remove("js");
    };
  }, []);

  return null;
}
