import React, { useState } from "react";
import { Reveal, StampTag, GrainOverlay, Nav, Footer, Field, inputStyle, useGoogleFonts, fontDisplay, fontUtility, fontBody } from "../components/Shared";

const REASONS = ["General Inquiry", "Booking", "Press", "Demo Submission", "Partnership", "Other"];

const initialForm = { name: "", email: "", reason: "General Inquiry", message: "" };

export default function Contact() {
  useGoogleFonts();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#0A0A09", minHeight: "100vh" }}>
      <GrainOverlay />
      <Nav />
      <section className="pt-40 md:pt-52 pb-14 md:pb-20 px-6 md:px-10 max-w-[1600px] mx-auto">
        <Reveal>
          <StampTag>CONTACT</StampTag>
          <h1 className="mt-6 text-[42px] leading-[1.05] md:text-[80px] md:leading-[0.98]" style={{ ...fontDisplay, fontWeight: 500, color: "#F4F1EA" }}>
            Get in
            <br />
            <span style={{ fontStyle: "italic", color: "#B98A2E" }}>Touch</span>
          </h1>
          <p className="mt-6 text-[15px] md:text-[18px] max-w-lg" style={{ ...fontBody, color: "#C7C3B8" }}>
            Booking a specific artist? Use the BOOKING link on their profile instead —
            it routes straight to the agency team. Everything else, start here.
          </p>
        </Reveal>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-10 pb-20 md:pb-28 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <Reveal>
            {submitted ? (
              <div className="border p-8 md:p-10" style={{ borderColor: "#2A2823" }}>
                <StampTag>MESSAGE SENT</StampTag>
                <h3 className="mt-5 text-[26px]" style={{ ...fontDisplay, fontWeight: 500, color: "#F4F1EA" }}>
                  Thank you.
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed max-w-sm" style={{ ...fontBody, color: "#C7C3B8" }}>
                  Your message has been received. The Hidden State team will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Name"><input required style={inputStyle} value={form.name} onChange={update("name")} /></Field>
                  <Field label="Email"><input required type="email" style={inputStyle} value={form.email} onChange={update("email")} /></Field>
                </div>
                <Field label="Reason">
                  <select style={inputStyle} value={form.reason} onChange={update("reason")}>
                    {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </Field>
                <Field label="Message">
                  <textarea required rows={6} style={{ ...inputStyle, resize: "none" }} value={form.message} onChange={update("message")} />
                </Field>
                <button
                  type="submit"
                  className="text-[12px] tracking-[0.16em] px-8 py-4"
                  style={{ ...fontUtility, color: "#0A0A09", background: "#F4F1EA" }}
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="border p-6" style={{ borderColor: "#2A2823" }}>
            <p style={{ ...fontUtility, fontSize: "10.5px", letterSpacing: "0.1em", color: "#8C887E" }}>DIRECT</p>
            <p className="mt-3 text-[14px]" style={{ ...fontBody, color: "#C7C3B8" }}>hello@hiddenstategroup.com</p>
            <p className="mt-6" style={{ ...fontUtility, fontSize: "10.5px", letterSpacing: "0.1em", color: "#8C887E" }}>SOCIAL</p>
            <p className="mt-3 text-[14px]" style={{ ...fontBody, color: "#C7C3B8" }}>Instagram — @hiddenstate</p>
          </div>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
