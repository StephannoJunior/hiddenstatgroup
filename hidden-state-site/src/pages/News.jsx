import React, { useState } from "react";
import {
  Reveal,
  StampTag,
  GrainOverlay,
  DoubleRule,
  Nav,
  Footer,
  useGoogleFonts,
  fontDisplay,
  fontBody,
  CategoryBar,
  ArticleCard,
  spanClasses,
} from "../components/Shared";
import { ARTICLES } from "../lib/data";

function NewsHero() {
  return (
    <section className="pt-40 md:pt-52 pb-14 md:pb-20 px-6 md:px-10 max-w-[1600px] mx-auto">
      <Reveal>
        <StampTag>NEWS</StampTag>
        <h1 className="mt-6 text-[48px] leading-[1.02] md:text-[96px] md:leading-[0.98]" style={{ ...fontDisplay, fontWeight: 500, color: "#F4F1EA" }}>
          Music &amp;
          <br />
          <span style={{ fontStyle: "italic", color: "#B98A2E" }}>Culture</span>
        </h1>
        <p className="mt-6 text-[15px] md:text-[18px] max-w-lg" style={{ ...fontBody, color: "#C7C3B8" }}>
          Dispatches, interviews and notes from inside Hidden State.
        </p>
      </Reveal>
    </section>
  );
}

export default function News() {
  useGoogleFonts();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const filtered = activeCategory === "ALL" ? ARTICLES : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <div style={{ background: "#0A0A09", minHeight: "100vh" }}>
      <GrainOverlay />
      <Nav />
      <NewsHero />
      <CategoryBar active={activeCategory} setActive={setActiveCategory} />
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <DoubleRule className="mb-10" />
        {filtered.length === 0 ? (
          <div className="py-24 text-center border-t" style={{ borderColor: "#2A2823" }}>
            <p style={{ ...fontBody, color: "#8C887E" }}>No stories in this category yet.</p>
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
      <Footer />
    </div>
  );
}
