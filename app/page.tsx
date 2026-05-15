"use client";

import React from "react";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Terminal,
  Network,
  Eye,
  Target,
} from "lucide-react";

export default function Home() {
 

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.08] blur-2xl" />

        <div className="absolute bottom-[-10%] right-[0%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.05] blur-2xl" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#3b82f633_1px,transparent_1px),linear-gradient(to_bottom,#3b82f633_1px,transparent_1px)] bg-[size:72px_72px]" />

      </div>

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.04] bg-black/20 backdrop-blur-md">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <div className="text-[13px] font-medium uppercase tracking-[0.22em] text-blue-400">
            Dipayan
          </div>

          <div className="hidden items-center gap-10 text-sm text-neutral-500 md:flex">

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen items-center px-6 pt-32 lg:px-10">

        <div className="mx-auto grid w-full max-w-7xl gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          
          {/* Left */}
<div className="-mt-70">

            <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="mb-10"
>

  <div className="relative h-36 w-36 overflow-hidden rounded-full border border-blue-400/20 bg-white/[0.03] p-1 shadow-[0_0_60px_rgba(59,130,246,0.15)]">

    <img
      src="/profile.jpg"
      alt="Dipayan Ghosh"
      className="h-full w-full rounded-full object-cover"
    />

    <div className="absolute inset-0 rounded-full border border-blue-400/10" />

  </div>

</motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 text-sm text-neutral-300 backdrop-blur-xl"
            >

              <div className="h-2 w-2 rounded-full bg-blue-400" />

              Open to Internships & Freelance work

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9 }}
              className="max-w-5xl text-[3.8rem] font-black leading-[0.92] tracking-[-0.07em] md:text-[5.8rem] lg:text-[7rem]"
            >

              Dipayan
              <br />
              Ghosh

            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-10 max-w-2xl text-lg leading-9 text-neutral-500 md:text-xl"
            >

              Aspiring cybersecurity analyst focused on Linux,
              networking, ethical hacking, OSINT, and modern digital security.

            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-14 flex flex-wrap items-center gap-5"
            >

              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-400 px-8 py-4 text-sm font-semibold text-black transition hover:bg-blue-300"
              >

                View Projects

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition hover:border-blue-400/20 hover:bg-white/[0.05]"
              >

                Contact Me

              </a>

            </motion.div>

          </div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="relative"
          >

            <div className="rounded-[36px] border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-md lg:p-10">

              <div className="mb-10 flex items-center justify-between">

                <div>

                  <p className="text-sm text-neutral-500">
                    Current Focus
                  </p>

                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                    Security & Infrastructure
                  </h3>

                </div>

                <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
                  Active
                </div>

              </div>

              <div className="space-y-5">

                <div className="rounded-[28px] border border-white/[0.06] bg-black/20 p-6 transition hover:border-blue-400/15">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">

                    <Shield className="h-5 w-5" />

                  </div>

                  <h4 className="text-xl font-semibold">
                    Cybersecurity
                  </h4>

                  <p className="mt-4 leading-8 text-neutral-500">

                    Security fundamentals, reconnaissance,
                    vulnerability analysis, and ethical hacking.

                  </p>

                </div>

<div className="rounded-[28px] border border-white/[0.06] bg-black/20 p-6 transition hover:border-blue-400/15">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">

                    <Eye className="h-5 w-5" />

                  </div>

                  <h4 className="text-xl font-semibold">
                    OSINT
                  </h4>

                  <p className="mt-4 leading-8 text-neutral-500">

                    Open-source intelligence gathering,
                    reconnaissance, digital footprint analysis,
                    and information discovery.

                  </p>

                </div>

                <div className="rounded-[28px] border border-white/[0.06] bg-black/20 p-6 transition hover:border-blue-400/15">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">

                    <Terminal className="h-5 w-5" />

                  </div>

                  <h4 className="text-xl font-semibold">
                    Linux
                  </h4>

                  <p className="mt-4 leading-8 text-neutral-500">

                    Linux command line, workflows,
                    server operations, and terminal environments.

                  </p>

                </div>

                <div className="rounded-[28px] border border-white/[0.06] bg-black/20 p-6 transition hover:border-blue-400/15">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">

                    <Network className="h-5 w-5" />

                  </div>

                  <h4 className="text-xl font-semibold">
                    Networking
                  </h4>

                  <p className="mt-4 leading-8 text-neutral-500">

                    TCP/IP, routing, protocols,
                    packet flow, and troubleshooting.

                  </p>

                </div>

                

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 px-6 py-36 lg:px-10"
      >

        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">

          <div>

            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-blue-400">
              About
            </p>

            <h2 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-[-0.06em] md:text-6xl">

              Building practical cybersecurity skills.

            </h2>

          </div>

          <div>

            <p className="text-lg leading-10 text-neutral-500 md:text-xl">

              I am focused on learning cybersecurity through hands-on
              practice, Linux systems, networking concepts, ethical
              hacking methodologies, and OSINT workflows while building
              modern security-focused projects.

            </p>

          </div>

        </div>

      </section>

{/* Skills Section */}
<section
  id="skills"
  className="relative z-10 px-6 py-36 lg:px-10"
>

  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-20">

      <p className="mb-6 text-sm uppercase tracking-[0.2em] text-blue-400">
        Skills
      </p>

      <h2 className="max-w-4xl text-5xl font-bold tracking-[-0.06em] md:text-6xl">

        Technical expertise & security domains.

      </h2>

    </div>

    {/* Grid */}
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {/* Linux */}
      <motion.div
        whileHover={{ y: -6 }}
        className="rounded-[32px] border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-md transition hover:border-blue-400/20"
      >

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">

          <Terminal className="h-6 w-6" />

        </div>

        <h3 className="text-2xl font-semibold">
          Linux
        </h3>

        <p className="mt-5 leading-8 text-neutral-500">

          Linux command line, server workflows,
          package management, and terminal operations.

        </p>

      </motion.div>

      {/* OSINT */}
      <motion.div
        whileHover={{ y: -6 }}
        className="rounded-[32px] border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-md transition hover:border-blue-400/20"
      >

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">

          <Eye className="h-6 w-6" />

        </div>

        <h3 className="text-2xl font-semibold">
          OSINT
        </h3>

        <p className="mt-5 leading-8 text-neutral-500">

          Open-source intelligence gathering,
          reconnaissance, and digital footprint analysis.

        </p>

      </motion.div>

      {/* Networking */}
      <motion.div
        whileHover={{ y: -6 }}
        className="rounded-[32px] border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-md transition hover:border-blue-400/20"
      >

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">

          <Network className="h-6 w-6" />

        </div>

        <h3 className="text-2xl font-semibold">
          Networking
        </h3>

        <p className="mt-5 leading-8 text-neutral-500">

          TCP/IP, routing, protocols,
          packet flow, and troubleshooting fundamentals.

        </p>

      </motion.div>

      

      {/* Vulnerability Scanning */}
      <motion.div
        whileHover={{ y: -6 }}
        className="rounded-[32px] border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-md transition hover:border-blue-400/20"
      >

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">

          <Shield className="h-6 w-6" />

        </div>

        <h3 className="text-2xl font-semibold">
          Vulnerability Scanning
        </h3>

        <p className="mt-5 leading-8 text-neutral-500">

          Reconnaissance, service enumeration,
          attack surface analysis, and vulnerability assessment.

        </p>

      </motion.div>

      {/* Penetration Testing */}
      <motion.div
        whileHover={{ y: -6 }}
        className="rounded-[32px] border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-md transition hover:border-blue-400/20"
      >

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">

          <Target className="h-6 w-6" />

        </div>

        <h3 className="text-2xl font-semibold">
          Penetration Testing
        </h3>

        <p className="mt-5 leading-8 text-neutral-500">

          Ethical hacking methodologies,
          exploitation concepts, and security testing workflows.

        </p>

      </motion.div>

    </div>

  </div>

</section>

{/* Projects */}
<section
  id="projects"
  className="relative z-10 px-6 py-36 lg:px-10"
>

  <div className="mx-auto max-w-7xl">

    <p className="mb-6 text-sm uppercase tracking-[0.2em] text-blue-400">
      Projects
    </p>

    <h2 className="max-w-4xl text-5xl font-bold tracking-[-0.06em] md:text-6xl">

      Security research & attack surface analysis.

    </h2>

    <div className="mt-24 grid gap-8 lg:grid-cols-2">

      {/* Project 1 */}
      <motion.a
        href="https://github.com/dipayan-op/nmap-attack-surface-analysis"
        target="_blank"
        whileHover={{ y: -6 }}
        className="group overflow-hidden rounded-[36px] border border-white/[0.06] bg-white/[0.03] backdrop-blur-md transition hover:border-blue-400/20"
      >

        <div className="relative h-72 overflow-hidden">

          <img
            src="/github-bg.jpg"
            alt="GitHub Background"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />

          <div className="absolute inset-0 bg-blue-500/10" />

          <div className="absolute bottom-6 left-6 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-xl">
            Nmap Analysis
          </div>

        </div>

        <div className="p-8 lg:p-10">

          <h3 className="text-3xl font-semibold tracking-[-0.04em] transition group-hover:text-blue-300">

            Nmap Attack Surface Analysis

          </h3>

          <p className="mt-5 leading-8 text-neutral-500">

            Attack surface analysis project using Nmap for reconnaissance,
            port discovery, service enumeration, and vulnerability assessment workflows.

          </p>

        </div>

      </motion.a>

      {/* Project 2 */}
      <motion.a
        href="https://github.com/dipayan-op/metasploitable-attack-surface-analysis"
        target="_blank"
        whileHover={{ y: -6 }}
        className="group overflow-hidden rounded-[36px] border border-white/[0.06] bg-white/[0.03] backdrop-blur-md transition hover:border-blue-400/20"
      >

        <div className="relative h-72 overflow-hidden">

          <img
            src="/github-bg.jpg"
            alt="GitHub Background"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />

          <div className="absolute inset-0 bg-blue-500/10" />

          <div className="absolute bottom-6 left-6 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-xl">
            Metasploitable
          </div>

        </div>

        <div className="p-8 lg:p-10">

          <h3 className="text-3xl font-semibold tracking-[-0.04em] transition group-hover:text-blue-300">

            Metasploitable Attack Surface Analysis

          </h3>

          <p className="mt-5 leading-8 text-neutral-500">

            Vulnerability assessment and attack surface analysis performed
            on Metasploitable environments using penetration testing workflows.

          </p>

        </div>

      </motion.a>

    </div>

  </div>

</section>
{/* Contact */}
<section
  id="contact"
  className="relative z-10 px-6 py-36 lg:px-10"
>

  <div className="mx-auto max-w-7xl rounded-[40px] border border-white/[0.06] bg-white/[0.03] p-10 backdrop-blur-md md:p-16 lg:p-20">

    <div className="grid gap-20 lg:grid-cols-2">

      {/* Left */}
      <div>

        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-blue-400">
          Contact
        </p>

        <h2 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-[-0.06em] md:text-6xl">

          Let’s connect.

        </h2>

        <p className="mt-8 max-w-xl text-lg leading-9 text-neutral-500">

          Open to cybersecurity internships,
          networking opportunities, collaborations,
          and security-focused projects.

        </p>

      </div>

      {/* Right */}
      <div className="space-y-8">

        {/* Phone */}
        <div className="rounded-[28px] border border-white/[0.06] bg-black/20 p-6">

          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Mobile
          </p>

          <a
            href="tel:+918910448490"
            className="mt-3 block text-2xl font-semibold transition hover:text-blue-400"
          >
            +91 8910448490
          </a>

        </div>

        {/* Gmail */}
        <div className="rounded-[28px] border border-white/[0.06] bg-black/20 p-6">

          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Gmail
          </p>

          <a
            href="mailto:dipayangta8900@gmail.com"
            className="mt-3 block text-2xl font-semibold break-all transition hover:text-blue-400"
          >
            dipayangta8900@gmail.com
          </a>

        </div>

        {/* LinkedIn */}
        <div className="rounded-[28px] border border-white/[0.06] bg-black/20 p-6">

          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            LinkedIn
          </p>

          <a
            href="https://www.linkedin.com/in/dipayan-ghosh-cys0709/"
            target="_blank"
            className="mt-3 block text-2xl font-semibold transition hover:text-blue-400"
          >
            View Profile
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
    </main>
  );
}