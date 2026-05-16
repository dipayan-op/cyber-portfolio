
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [utc, setUtc] = useState("00:00:00 UTC");

  const [typedText, setTypedText] = useState("");

  useEffect(() => {

  // =========================
  // IST CLOCK
  // =========================

  const updateClock = () => {

    const now = new Date();

    const ist = new Date(
      now.toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      })
    );

    const h = String(ist.getHours()).padStart(2, "0");
    const m = String(ist.getMinutes()).padStart(2, "0");
    const s = String(ist.getSeconds()).padStart(2, "0");

    setUtc(`${h}:${m}:${s} IST`);

  };

  updateClock();

  const clockInterval =
    setInterval(updateClock, 1000);

  // =========================
  // TYPEWRITER
  // =========================

 const phrases = [
  "Securing The Web",
  "Sending Awareness",
  "Stopping Frauds",
  "Protecting Privacy",
  "Maintaining Confidentiality",
  "Ensuring Integrity",
  "Guaranteeing Availability",
  "Secured & Encrypted",
  "Identity Authentication",
  "Access Authorization",
  "Threat Detection Active",
  "Monitoring Attack Surface",
];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {

    const current =
      phrases[phraseIndex];

    if (!isDeleting) {

      setTypedText(
        current.substring(0, charIndex + 1)
      );

      charIndex++;

      if (charIndex === current.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1400);

        return;
      }

    } else {

      setTypedText(
        current.substring(0, charIndex - 1)
      );

      charIndex--;

      if (charIndex === 0) {

        isDeleting = false;

        phraseIndex =
          (phraseIndex + 1) %
          phrases.length;
      }

    }

    setTimeout(
      typeEffect,
      isDeleting ? 45 : 90
    );

  };

  typeEffect();

  // =========================
  // SCROLL REVEAL
  // =========================

  const revealElements =
    document.querySelectorAll(".reveal");

  const revealOnScroll = () => {

    revealElements.forEach((el) => {

      const windowHeight =
        window.innerHeight;

      const elementTop =
        el.getBoundingClientRect().top;

      const revealPoint = 120;

      if (
        elementTop <
        windowHeight - revealPoint
      ) {
        el.classList.add(
          "reveal-visible"
        );
      }

    });

  };

  revealOnScroll();

  window.addEventListener(
    "scroll",
    revealOnScroll
  );

  return () => {

    clearInterval(clockInterval);

    window.removeEventListener(
      "scroll",
      revealOnScroll
    );

  };

}, []);

  // Scroll Reveal



  return (
    <main className="bg-[#050505] text-[#e0e0e0] overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b border-[#1e1e1e] bg-black/90 px-6 backdrop-blur-md md:px-10">
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-sm tracking-wider"
        >
          <span className="text-red-500">&gt;_</span>
          DIPAYAN.SEC
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition">
            About
          </a>
          <a href="#skills" className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition">
            Skills
          </a>
          <a href="#projects" className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition">
            Contact
          </a>
        </div>

        <div className="hidden items-center gap-3 font-mono text-xs text-zinc-500 md:flex">
          <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse" />
          <span>ONLINE</span>
          <span>|</span>
          <span className="text-white">{utc}</span>
        </div>
      </nav>

      {/* HERO */}
<section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-24 md:px-16">

  {/* Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(180,10,20,0.12),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(120,0,0,0.08),transparent_30%)]" />

  {/* Grid */}
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[420px_1fr] lg:items-center">

    {/* LEFT */}
    <div className="flex justify-center lg:justify-start">

      <div className="relative overflow-hidden border border-[#1e1e1e] bg-[#0a0a0a] p-2 shadow-[0_0_50px_rgba(255,0,0,0.08)]">

        <img
          src="/profile.jpg"
          alt="Dipayan Ghosh"
          className="h-[360px] w-[240px] object-cover grayscale contrast-125 sm:h-[420px] sm:w-[280px] md:h-[520px] md:w-[340px]"
        />

        {/* HUD */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#1e1e1e] bg-black/80 px-4 py-4 backdrop-blur-md">

          <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500">
            Identity
          </div>

          <div className="mt-2 text-base font-bold uppercase tracking-wide text-white sm:text-lg">
            Dipayan Ghosh
          </div>

          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:text-xs">
            Cyber Security • OSINT • Pentesting
          </div>

        </div>

      </div>

    </div>

    {/* RIGHT */}
    <div className="text-center lg:text-left">

      <div className="mb-5 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-red-500 lg:justify-start">

        <div className="h-2 w-2 bg-red-500" />

        SYSTEM // CYBER SECURITY SPECIALIST

      </div>

      {/* BIG TITLE */}
      <h1 className="font-black uppercase leading-[0.9] tracking-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-[7rem]">

        <span className="block">
          BREACHING
        </span>

        <span className="block text-red-500">
          THE NOISE,
        </span>

        <span className="block">
          REVEALING
        </span>

        <span className="block text-red-500">
          THE DATA.
        </span>

      </h1>

      {/* Mission */}
      <div className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-red-500 sm:text-sm">

        &gt; ./MISSION.SH

      </div>

      {/* Tagline */}
      <p className="mx-auto mt-4 min-h-[40px] max-w-2xl font-mono text-base leading-8 tracking-[0.08em] text-zinc-300 sm:text-lg md:text-2xl md:leading-10 lg:mx-0">

  {typedText}

  <span className="animate-pulse text-red-500">
    |
  </span>

</p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

        <a
          href="#contact"
          className="bg-red-600 px-8 py-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-white transition hover:bg-red-500"
        >
          INITIATE CONTACT
        </a>

        <a
          href="#projects"
          className="border border-zinc-700 px-8 py-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-zinc-300 transition hover:border-red-500 hover:text-red-500"
        >
          VIEW PROJECTS
        </a>

      </div>

      {/* Stats */}
      <div className="mt-14 grid gap-6 border-t border-[#1e1e1e] pt-8 sm:grid-cols-3">

        {[
          ["STATUS", "Available"],
          ["SPECIALTY", "OSINT / Pentest"],
          ["LOC", "Kolkata, IN"],
        ].map(([label, value], i) => (

          <div
            key={i}
            className="text-center lg:text-left"
          >

            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-red-500">

              {label}

            </div>

            <div className="text-sm font-semibold text-white sm:text-base">

              {value}

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-16">
        <div className="mb-4 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-red-500">
          // ABOUT
          <div className="h-px flex-1 bg-[#1e1e1e]" />
        </div>

        <h2 className="mb-8 text-5xl font-black uppercase text-white md:text-7xl">
          PROFILE
        </h2>

        <p className="max-w-3xl font-mono text-sm leading-9 text-zinc-400 md:text-base">
          Cybersecurity specialist focused on offensive security, reconnaissance,
          vulnerability assessment, and digital intelligence. I analyze attack
          surfaces, identify weaknesses, and build security awareness through
          OSINT and penetration testing workflows.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-[#111111] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-16">
          <div className="mb-4 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-red-500">
            // SKILLS
            <div className="h-px flex-1 bg-[#1e1e1e]" />
          </div>

          <h2 className="mb-12 text-5xl font-black uppercase text-white md:text-7xl">
            CAPABILITIES
          </h2>

          <div className="grid gap-px border border-[#1e1e1e] bg-[#1e1e1e] md:grid-cols-2 lg:grid-cols-3">
            {[
              ["[01]", "Linux", "Advanced Linux operations and security workflows."],
              ["[02]", "OSINT", "Digital reconnaissance and intelligence gathering."],
              ["[03]", "Networking", "Protocols, routing, packet analysis and TCP/IP."],
              ["[04]", "Pentesting", "Web and network penetration testing methodologies."],
              ["[05]", "Vulnerability Scanning", "Reconnaissance and attack surface analysis."],
              ["[06]", "Cybersecurity", "Security monitoring and digital defense."],
            ].map(([num, title, desc], i) => (
              <div
                key={i}
                className="group bg-[#111111] p-8 transition hover:bg-[#151515]"
              >
                <div className="mb-5 font-mono text-2xl text-red-500">
                  {num}
                </div>

                <h3 className="mb-3 text-xl font-bold uppercase tracking-wide text-white">
                  {title}
                </h3>

                <p className="font-mono text-sm leading-8 text-zinc-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
<section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-16">

  <div className="mb-4 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-red-500">

    // ENGAGEMENTS

    <div className="h-px flex-1 bg-[#1e1e1e]" />

  </div>

  <h2 className="mb-16 text-5xl font-black uppercase text-white md:text-7xl">

    PROJECTS

  </h2>

  <div className="grid gap-8 lg:grid-cols-2">

    {/* Project 1 */}
    <a
      href="https://github.com/dipayan-op/nmap-attack-surface-analysis"
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden border border-[#1e1e1e] bg-[#0a0a0a] transition duration-300 hover:border-red-500"
    >

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src="/github-bg.jpg"
          alt="Nmap Analysis"
          className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-5 left-5 border border-red-900 bg-black/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500 backdrop-blur-md">

          Nmap Analysis

        </div>

      </div>

      {/* Content */}
      <div className="p-8">

        <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">

          ENG-001

        </div>

        <h3 className="text-4xl font-black uppercase text-white">

          Attack Surface Analysis

        </h3>

        <p className="mt-6 font-mono text-sm leading-8 text-zinc-500">

          Reconnaissance and vulnerability analysis project using Nmap
          for port discovery, service enumeration, and attack surface mapping.

        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <span className="border border-red-900 bg-red-950/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500">
            Nmap
          </span>

          <span className="border border-red-900 bg-red-950/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500">
            Recon
          </span>

          <span className="border border-red-900 bg-red-950/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500">
            Security
          </span>

        </div>

      </div>

    </a>

    {/* Project 2 */}
    <a
      href="https://github.com/dipayan-op/metasploitable-attack-surface-analysis"
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden border border-[#1e1e1e] bg-[#0a0a0a] transition duration-300 hover:border-red-500"
    >

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src="/github-bg.jpg"
          alt="Metasploitable"
          className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-5 left-5 border border-red-900 bg-black/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500 backdrop-blur-md">

          Metasploitable

        </div>

      </div>

      {/* Content */}
      <div className="p-8">

        <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">

          ENG-002

        </div>

        <h3 className="text-4xl font-black uppercase text-white">

          Vulnerability Assessment

        </h3>

        <p className="mt-6 font-mono text-sm leading-8 text-zinc-500">

          Penetration testing workflow and vulnerability assessment
          performed on Metasploitable environments.

        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <span className="border border-red-900 bg-red-950/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500">
            Pentest
          </span>

          <span className="border border-red-900 bg-red-950/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500">
            Exploitation
          </span>

          <span className="border border-red-900 bg-red-950/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500">
            Security
          </span>

        </div>

      </div>

    </a>

  </div>

</section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#111111] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-16">
          <div className="mb-4 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-red-500">
            // INITIATE
            <div className="h-px flex-1 bg-[#1e1e1e]" />
          </div>

          <h2 className="mb-12 text-5xl font-black uppercase text-white md:text-7xl">
            CONTACT
          </h2>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-10 font-mono text-sm leading-9 text-zinc-500">
                Available for cybersecurity collaborations, penetration testing,
                OSINT research, and vulnerability analysis.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:dipayangta8900@gmail.com"
                  className="border border-[#1e1e1e] p-4 font-mono text-sm text-zinc-300 transition hover:border-red-500 hover:text-red-500"
                >
                  [M] dipayangta8900@gmail.com
                </a>

                <a
                  href="https://github.com/dipayan-op"
                  target="_blank"
                  className="border border-[#1e1e1e] p-4 font-mono text-sm text-zinc-300 transition hover:border-red-500 hover:text-red-500"
                >
                  [G] github.com/dipayan-op
                </a>

                <a
                  href="https://www.linkedin.com/in/dipayan-ghosh-cys0709/"
                  target="_blank"
                  className="border border-[#1e1e1e] p-4 font-mono text-sm text-zinc-300 transition hover:border-red-500 hover:text-red-500"
                >
                  [L] LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your name"
                className="border border-[#1e1e1e] bg-[#0a0a0a] px-5 py-4 font-mono text-sm outline-none transition focus:border-red-500"
              />

              <input
                type="email"
                placeholder="your@email.com"
                className="border border-[#1e1e1e] bg-[#0a0a0a] px-5 py-4 font-mono text-sm outline-none transition focus:border-red-500"
              />

              <textarea
                placeholder="Describe your mission..."
                className="min-h-[160px] border border-[#1e1e1e] bg-[#0a0a0a] px-5 py-4 font-mono text-sm outline-none transition focus:border-red-500"
              />

              <button className="w-fit bg-red-600 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition hover:bg-red-500">
                TRANSMIT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col items-center justify-between gap-4 border-t border-[#1e1e1e] bg-black px-6 py-8 text-center md:flex-row md:px-16">
        <p className="font-mono text-xs tracking-[0.2em] text-zinc-500">
          &gt;_ DIPAYAN<span className="text-red-500">.SEC</span><span className="text-white-500"> All Rights Reserved</span>
        </p>

        <p className="font-mono text-xs tracking-[0.2em] text-zinc-500">
          KOLKATA, IN // <span className="text-red-500">ONLINE</span>
        </p>
      </footer>
    </main>
  );
}

