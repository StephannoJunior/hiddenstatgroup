import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal, StampTag, GrainOverlay, DoubleRule, Wordmark, Nav, Footer, useGoogleFonts, fontDisplay, fontUtility, fontBody, CATEGORIES, CategoryBar, ArticleCard, spanClasses } from "../components/Shared";
import { MARK_SJ, MARK_SEAL, MARK_NOPROBLEM } from "../lib/marks";
import { HERO, ARTICLES } from "../lib/data";

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="pt-28 md:pt-36 pb-14 md:pb-20 px-0"
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* Masthead band — the same 5-cell arrangement as the print poster:
          SJ | seal | big blackletter title | seal | No Problem — using the
          real marks, not redrawn. */}
      <div className="border-y flex items-stretch" style={{ borderColor: "#2A2823" }}>
        <div className="flex-1 flex items-center justify-center border-r p-3 md:p-5" style={{ borderColor: "#2A2823" }}>
          <img src={MARK_SJ} alt="SJ" className="w-9 md:w-14" />
        </div>
        <div className="flex-1 flex items-center justify-center border-r p-2 md:p-4" style={{ borderColor: "#2A2823" }}>
          <img src={MARK_SEAL} alt="Hidden State seal" className="w-11 md:w-20 opacity-90" />
        </div>
        <div className="flex-[2.4] flex items-center justify-center border-r px-2 py-4 md:py-6" style={{ borderColor: "#2A2823" }}>
          <Wordmark size="text-2xl md:text-5xl" />
        </div>
        <div className="flex-1 flex items-center justify-center border-r p-2 md:p-4" style={{ borderColor: "#2A2823" }}>
          <img src={MARK_SEAL} alt="Hidden State seal" className="w-11 md:w-20 opacity-90" />
        </div>
        <div className="flex-1 flex items-center justify-center p-3 md:p-5">
          <img src={MARK_NOPROBLEM} alt="No Problem" className="w-11 md:w-16" />
        </div>
      </div>

      {/* Dateline / issue row */}
      <div
        className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1 py-3 md:py-4 border-b"
        style={{ borderColor: "#2A2823" }}
      >
        <span style={{ ...fontUtility, fontSize: "10.5px", letterSpacing: "0.14em", color: "#8C887E" }}>VOL. 01, NO. 1</span>
        <span style={{ color: "#4A3B1C" }}>·</span>
        <span style={{ ...fontUtility, fontSize: "10.5px", letterSpacing: "0.14em", color: "#B98A2E" }}>{HERO.category}</span>
        <span style={{ color: "#4A3B1C" }}>·</span>
        <span style={{ ...fontUtility, fontSize: "10.5px", letterSpacing: "0.14em", color: "#8C887E" }}>{HERO.date}</span>
      </div>

      {/* Headline block — the "Breaking News" moment */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center pt-12 md:pt-16 pb-10 md:pb-14">
        <p style={{ ...fontUtility, fontSize: "11px", letterSpacing: "0.2em", color: "#B98A2E" }}>BREAKING</p>
        <h1
          className="mx-auto max-w-4xl mt-4 text-[36px] leading-[1.08] md:text-[64px] md:leading-[1.04]"
          style={{ ...fontDisplay, fontStyle: "italic", fontWeight: 500, color: "#F4F1EA" }}
        >
          {HERO.headline}
        </h1>
        <p className="mx-auto max-w-xl mt-5 text-[14px] md:text-[16px] leading-relaxed" style={{ ...fontBody, color: "#C7C3B8" }}>
          {HERO.excerpt}
        </p>
      </div>

      {/* Story image + stamped "read story" box — echoes the poster's
          photo + boxed ticket-QR pairing at the foot of the page. */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-stretch">
          <div className="relative overflow-hidden aspect-[16/8] md:aspect-auto md:h-44">
            <img src={HERO.image} alt="" className="w-full h-full object-cover" style={{ filter: "grayscale(15%)" }} />
          </div>
          <Link
            to="/news/afro-tech-session"
            className="group flex flex-col items-center justify-center gap-2 border px-10 py-6 md:py-0 shrink-0 text-center"
            style={{ borderColor: "#2A2823" }}
          >
            <span style={{ ...fontUtility, fontSize: "12px", letterSpacing: "0.18em", color: "#F4F1EA" }} className="flex items-center gap-2">
              READ STORY
              <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span style={{ ...fontUtility, fontSize: "10.5px", letterSpacing: "0.1em", color: "#8C887E" }}>{HERO.readTime}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function LatestNews({ activeCategory }) {
  const filtered =
    activeCategory === "ALL" ? ARTICLES : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <DoubleRule className="mb-6" />
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div>
          <span style={{ ...fontUtility, fontSize: "10px", letterSpacing: "0.16em", color: "#8C887E" }}>
            ISSUE 001
          </span>
          <h2
            style={{ ...fontDisplay, fontStyle: "italic", fontWeight: 500 }}
            className="text-[28px] md:text-[38px] mt-1"
          >
            <span style={{ color: "#F4F1EA" }}>Latest From </span>
            <span style={{ color: "#B98A2E" }}>Hidden State</span>
          </h2>
        </div>
        <Link
          to="/news"
          className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.14em] pb-1 border-b shrink-0"
          style={{ ...fontUtility, color: "#F4F1EA", borderColor: "#2A2823" }}
        >
          ALL STORIES
          <ArrowRight size={13} strokeWidth={1.5} />
        </Link>
      </div>

      {filtered.length === 0 ? (
        <div className="py-24 text-center border-t" style={{ borderColor: "#2A2823" }}>
          <p style={{ ...fontUtility, letterSpacing: "0.14em", fontSize: "12px", color: "#8C887E" }}>
            NO STORIES YET
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[210px] gap-4 md:gap-5">
          {filtered.map((article, i) => (
            <Reveal key={article.id} delay={i * 70} className={spanClasses[article.span]}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

export default function Home() {
  useGoogleFonts();
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div style={{ background: "#0A0A09", minHeight: "100vh" }}>
      <GrainOverlay />
      <Nav />
      <Hero />
      <CategoryBar active={activeCategory} setActive={setActiveCategory} />
      <LatestNews activeCategory={activeCategory} />
      <Footer />
    </div>
  );
}
