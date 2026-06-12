"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HeroBg } from "@/components/HeroBg";
import { AboutSection } from "@/components/AboutSection";
import { WorksSection } from "@/components/WorksSection";
import { ServiceSection } from "@/components/ServiceSection";
import { BlogSection } from "@/components/BlogSection";
import { MemberSection } from "@/components/MemberSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  useEffect(() => {
    const setVwVh = () => {
      const root = document.documentElement;
      root.style.setProperty("--vw", `${root.clientWidth}`);
      root.style.setProperty("--vh", `${root.clientHeight}`);
    };
    setVwVh();
    window.addEventListener("resize", setVwVh);

    document.documentElement.classList.add("_is_loaded");
    if (window.innerWidth >= 1440) {
      document.documentElement.classList.add("_wide_aspect_device");
    }

    const lenis = new Lenis({
      duration: 1.0,
      smoothWheel: true,
    });
    document.documentElement.classList.add("lenis");

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const animeObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("_run");
            animeObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    document
      .querySelectorAll("._Anime, ._Anime_middle, ._Anime_late")
      .forEach((el) => animeObserver.observe(el));

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      animeObserver.disconnect();
      window.removeEventListener("resize", setVwVh);
      document.documentElement.classList.remove(
        "lenis",
        "_is_loaded",
        "_wide_aspect_device",
      );
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HeroBg />
        <AboutSection />
        <WorksSection />
        <ServiceSection />
        <BlogSection />
        <MemberSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
