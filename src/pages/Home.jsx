import { useEffect } from "react";
import { StartBackground } from "../compoents/StartBackground";
import { Navbar } from "../compoents/Navbar";
import { MainSection } from "../compoents/MainSection";
import { AboutMeSection } from "../compoents/AboutMeSection";
import { SkillsSections } from "../compoents/SkillsSections";
import { ProjectsSections } from "../compoents/ProjectsSection";
import { ContactSection } from "../compoents/ConstactSection.jsx";
import { EducationSection } from "../compoents/EducationSection.jsx";

export const Home = () => {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    nodes.forEach((node) => {
      node.style.filter = "";
      node.style.opacity = "";
      node.classList.add("is-visible");
    });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const root = document.documentElement;
    root.classList.add("scroll-driven");
    const veil = document.querySelector(".glass-veil");
    const sections = () => [...document.querySelectorAll("main .screen")];

    let raf = 0;
    let driving = false;
    let busyUntil = 0;
    let wheelAcc = 0;
    let consumed = false;
    let idleTimer = 0;
    let touchLastY = 0;
    let windowDelta = 0;
    let startIndex = 0;

    const nearestIndex = () => {
      const list = sections();
      const y = window.scrollY;
      let best = 0;
      let bestDist = Infinity;
      list.forEach((section, index) => {
        const dist = Math.abs(section.offsetTop - y);
        if (dist < bestDist) {
          bestDist = dist;
          best = index;
        }
      });
      return best;
    };

    const hideVeil = () => veil?.classList.remove("is-active");

    const animateTo = (target) => {
      cancelAnimationFrame(raf);
      const start = window.scrollY;
      const dist = target - start;
      if (Math.abs(dist) < 2) {
        window.scrollTo(0, target);
        hideVeil();
        driving = false;
        return;
      }

      driving = true;
      veil?.classList.add("is-active");
      const duration = 460;
      const t0 = performance.now();
      busyUntil = t0 + duration;

      const step = (now) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - (1 - p) ** 3;
        window.scrollTo(0, start + dist * eased);
        if (p > 0.86) hideVeil();
        if (p < 1) {
          raf = requestAnimationFrame(step);
          return;
        }
        window.scrollTo(0, target);
        hideVeil();
        driving = false;
      };

      raf = requestAnimationFrame(step);
    };

    const go = (dir) => {
      if (performance.now() < busyUntil) return;
      const list = sections();
      if (!list.length) return;
      const next = Math.max(0, Math.min(list.length - 1, nearestIndex() + dir));
      animateTo(list[next].offsetTop);
    };

    const innerRoom = (dy) => {
      const body = sections()[nearestIndex()]?.querySelector(".screen-body");
      if (!body || body.scrollHeight <= body.clientHeight + 2) return null;
      if (dy > 0 && body.scrollTop + body.clientHeight < body.scrollHeight - 2) return body;
      if (dy < 0 && body.scrollTop > 2) return body;
      return null;
    };

    const wheelDelta = (event) => {
      if (event.deltaMode === 1) return event.deltaY * 16;
      if (event.deltaMode === 2) return Math.sign(event.deltaY) * window.innerHeight;
      return event.deltaY;
    };

    const menuOpen = () => document.body.style.overflow === "hidden";

    const detailOpen = () => document.querySelector(".tl-pop");

    const onWheel = (event) => {
      if (detailOpen()) {
        event.preventDefault();
        const card = event.target instanceof Element ? event.target.closest(".tl-card-body") : null;
        if (card) card.scrollTop += wheelDelta(event);
        return;
      }
      if (menuOpen()) return;
      const delta = wheelDelta(event);
      const body = innerRoom(delta);
      if (body) {
        event.preventDefault();
        body.scrollTop += delta;
        return;
      }
      event.preventDefault();
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        consumed = false;
        wheelAcc = 0;
      }, 160);
      if (consumed || performance.now() < busyUntil) return;
      wheelAcc += delta;
      if (Math.abs(wheelAcc) < 24) return;
      const dir = wheelAcc > 0 ? 1 : -1;
      wheelAcc = 0;
      consumed = true;
      go(dir);
    };

    const onTouchStart = (event) => {
      if (event.touches.length !== 1) return;
      touchLastY = event.touches[0].clientY;
      windowDelta = 0;
      startIndex = nearestIndex();
    };

    const onTouchMove = (event) => {
      if (detailOpen()) {
        const inCard = event.target instanceof Element && event.target.closest(".tl-card-body");
        if (!inCard) event.preventDefault();
        return;
      }
      if (event.touches.length !== 1 || menuOpen()) return;
      const y = event.touches[0].clientY;
      const dy = touchLastY - y;
      touchLastY = y;
      const body = innerRoom(dy);
      if (body) {
        event.preventDefault();
        body.scrollTop += dy;
        return;
      }
      event.preventDefault();
      windowDelta += dy;
      if (Math.abs(windowDelta) > 2) {
        driving = true;
        veil?.classList.add("is-active");
        window.scrollTo(0, window.scrollY + dy);
      }
    };

    const onTouchEnd = () => {
      if (detailOpen() || menuOpen()) return;
      const list = sections();
      if (!list.length || Math.abs(windowDelta) < 28) {
        hideVeil();
        driving = false;
        windowDelta = 0;
        return;
      }
      const traveled = Math.abs(window.scrollY - (list[startIndex]?.offsetTop ?? 0));
      let index = nearestIndex();
      if (traveled < window.innerHeight * 0.28) {
        index = Math.max(0, Math.min(list.length - 1, startIndex + Math.sign(windowDelta)));
      }
      windowDelta = 0;
      animateTo(list[index].offsetTop);
    };

    const onKey = (event) => {
      const el = document.activeElement;
      if (detailOpen() || menuOpen()) return;
      if (el?.closest("input, textarea, select, button, a") || el?.isContentEditable) return;
      const down = event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ";
      const up = event.key === "ArrowUp" || event.key === "PageUp";
      if (!down && !up && event.key !== "Home" && event.key !== "End") return;
      event.preventDefault();
      if (down) {
        const body = innerRoom(1);
        if (body) {
          body.scrollTop += event.key === " " ? body.clientHeight * 0.8 : 72;
          return;
        }
        go(1);
        return;
      }
      if (up) {
        const body = innerRoom(-1);
        if (body) {
          body.scrollTop -= event.key === "PageUp" ? body.clientHeight * 0.8 : 72;
          return;
        }
        go(-1);
        return;
      }
      const list = sections();
      if (!list.length) return;
      animateTo(event.key === "Home" ? list[0].offsetTop : list[list.length - 1].offsetTop);
    };

    const onClick = (event) => {
      const link = event.target instanceof Element ? event.target.closest("a[href^='#']") : null;
      if (!link) return;
      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      const section = target.closest(".screen") || target;
      history.pushState(null, "", `#${id}`);
      animateTo(section.offsetTop);
    };

    if (location.hash) {
      const hashed = document.getElementById(location.hash.slice(1));
      const section = hashed?.closest(".screen");
      if (section) window.scrollTo(0, section.offsetTop);
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(idleTimer);
      root.classList.remove("scroll-driven");
      hideVeil();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StartBackground />
      <div className="glass-veil" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10">
        <MainSection />
        <AboutMeSection />
        <SkillsSections />
        <ProjectsSections />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
};
