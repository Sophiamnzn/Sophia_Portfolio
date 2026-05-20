"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Moon,
  Sun,
  ExternalLink,
  Copy,
  Phone,
  Menu,
  X,
} from "lucide-react";

const skills = [
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "Java", icon: "/icons/java.png" },
  { name: "Tailwind", icon: "/icons/tailwind.png" },
  { name: "VS Code", icon: "/icons/vs.png" },
  { name: "Figma", icon: "/icons/figma.png" },
  { name: "Canva", icon: "/icons/canva.png" },
];

const projects = [
  {
    title: "ORDERING SYSTEM",
    category: "Software Development",
    image: "/projects/coffee.png",
  },

  {
    title: "OFFICE OF STUDENT AFFAIRS SYSTEM",
    category: "Live Web Application",
    image: "/projects/osa.png",
    link: "https://tupcosa.online",
  },

  {
    title: "FILM BOOKING",
    category: "Software Development",
    image: "/projects/sinesindak.png",
  },
];

const certificates = [
  "/certificates/canvacert.png",
  "/certificates/cybercert.png",
  "/certificates/ethicalcert.png",
  "/certificates/ipcert.png",
  "/certificates/literacycert.png",
  "/certificates/networkdefcert.png",
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedCertificate, setSelectedCertificate] =
    useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(
      "sophiamnzn48@gmail.com"
    );
    alert("Email copied!");
  };

  return (
    <main
      className={`overflow-x-hidden transition-all duration-700 ${
        darkMode ? "bg-[#111111]" : "bg-[#f48bc4]"
      }`}
    >
      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 w-full z-[999] px-5 md:px-10 py-5 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <h1 className="text-[#ff4da6] font-extrabold text-[22px] md:text-[28px] italic">

          </h1>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            <ul
              className={`flex gap-10 font-extrabold text-[18px] tracking-wide ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <button
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="hover:text-[#ff4da6] transition duration-300"
              >
                ABOUT ME
              </button>

              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="hover:text-[#ff4da6] transition duration-300"
              >
                PROJECTS
              </button>

              <button
                onClick={() => {
                  document
                    .getElementById("certificates")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="hover:text-[#ff4da6] transition duration-300"
              >
                CERTIFICATES
              </button>

              <button
                onClick={() => {
                  document
                    .getElementById("contacts")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="hover:text-[#ff4da6] transition duration-300"
              >
                CONTACTS
              </button>
            </ul>

            {/* DARK MODE */}
            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className={`p-3 rounded-full transition-all duration-500 ${
                darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              {darkMode ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className={`p-3 rounded-full transition-all duration-500 ${
                darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className={`p-3 rounded-full ${
                darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              {menuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className={`lg:hidden mt-5 rounded-3xl p-6 flex flex-col gap-6 font-bold ${
              darkMode
                ? "bg-[#1b1b1b] text-white"
                : "bg-white text-black"
            }`}
          >
            <button
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });

                setMenuOpen(false);
              }}
            >
              ABOUT ME
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });

                setMenuOpen(false);
              }}
            >
              PROJECTS
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("certificates")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });

                setMenuOpen(false);
              }}
            >
              CERTIFICATES
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("contacts")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });

                setMenuOpen(false);
              }}
            >
              CONTACTS
            </button>
          </div>
        )}
      </nav>

      {/* ================= HOME SECTION ================= */}

      <section className="relative w-full min-h-screen overflow-hidden pt-16 md:pt-24 lg:pt-0">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full blur-3xl ${
              darkMode
                ? "bg-pink-500/10"
                : "bg-pink-200/40"
            }`}
          />

          <div
            className={`absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full blur-3xl ${
              darkMode
                ? "bg-pink-400/10"
                : "bg-pink-300/30"
            }`}
          />
        </div>

        {/* MAIN CONTENT */}
        <section className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen px-6 md:px-12 lg:px-24">
          {/* LEFT TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -150,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="z-20 w-full lg:w-[350px] text-center lg:text-left"
          >
            <h2 className="text-[#ff4da6] text-[30px] md:text-[42px] font-extrabold">
              HELLO, I’M
            </h2>

            <h1
              className={`font-extrabold text-[48px] md:text-[72px] leading-[0.9] mt-2 ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              SOPHIA RAE
              <br />
              MONZON
            </h1>
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: -300,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.3,
            }}
            className="relative z-10 mt-5 lg:mt-0"
          >
            <Image
              src="/images/sophia.png"
              alt="Sophia"
              width={500}
              height={500}
              priority
              className="w-auto h-[360px] md:h-[500px] lg:h-[700px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 150,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="z-20 w-full lg:w-[420px] text-center lg:text-right mt-8 lg:mt-0"
          >
            <h1 className="text-[#ff4da6] font-extrabold text-[38px] md:text-[50px]">
              SOFTWARE
            </h1>

            <h2
              className={`font-extrabold text-[38px] md:text-[50px] ${
                darkMode
                  ? "text-gray-300"
                  : "text-[#4f3d47]"
              }`}
            >
              ENGINEER
            </h2>

            <p
              className={`italic font-bold text-[22px] md:text-[27px] ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              – Creative Developer –
            </p>
          </motion.div>
        </section>
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section
        id="about"
        className="relative w-full min-h-screen"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full blur-3xl ${
              darkMode
                ? "bg-pink-500/10"
                : "bg-pink-200/40"
            }`}
          />

          <div
            className={`absolute bottom-[-120px] right-[-100px] w-[500px] h-[500px] rounded-full blur-3xl ${
              darkMode
                ? "bg-pink-400/10"
                : "bg-pink-300/30"
            }`}
          />
        </div>

        {/* ABOUT CONTENT */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-14 h-full px-6 md:px-12 lg:px-24">
          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <a href="/">
              <Image
                src="/images/sophia.png"
                alt="Sophia"
                width={700}
                height={700}
                className="w-auto h-[350px] md:h-[500px] lg:h-[720px] object-contain cursor-pointer hover:scale-105 transition duration-300"
              />
            </a>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 150,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
            }}
            className="max-w-[700px]"
          >
            <h1 className="text-[#ff1493] italic font-extrabold text-[40px] md:text-[60px] text-center lg:text-left">
              Passionate
            </h1>

            <h2
              className={`font-extrabold text-[45px] md:text-[70px] text-center lg:text-right ${
                darkMode
                  ? "text-gray-300"
                  : "text-[#6e4b60]"
              }`}
            >
              Developer
            </h2>

            <p
              className={`mt-6 text-[15px] md:text-[17px] leading-[1.8] font-semibold text-center lg:text-left ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              As a front-end developer and aspiring software engineer,
              my goal is to create cutting-edge, responsive, and
              eye-catching online experiences. As I constantly study
              new technologies and develop my programming abilities,
              I enjoy transforming innovative concepts into useful
              interfaces.
            </p>

            {/* RESUME BUTTON */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="YOUR_GOOGLE_DRIVE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 rounded-full bg-[#ff1493] text-white font-bold hover:scale-105 hover:bg-[#ff4da6] transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* SKILLS CAROUSEL */}
        <div className="lg:mt-16 w-full overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
            className="flex gap-10 md:gap-16 w-max"
          >
            {[...skills, ...skills].map(
              (skill, index) => (
                <div
                  key={index}
                  className={`w-[65px] h-[65px] md:w-[70px] md:h-[65px] rounded-3xl flex items-center justify-center ${
                    darkMode
                      ? "bg-white/5 border border-white/10"
                      : "bg-white/10 border border-white/20"
                  }`}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={50}
                    height={50}
                  />
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}

      <section
        id="projects"
        className="relative w-full min-h-screen py-24 overflow-hidden"
      >
        <h1 className="text-center text-[#ff1493] text-[38px] md:text-[45px] font-extrabold italic mb-14">
          Projects
        </h1>

        {/* PROJECTS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 md:px-10">
          {projects.map(
            (project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                  y: -10,
                }}
                className={`relative rounded-[35px] p-6 ${
                  darkMode
                    ? "bg-white/5 border border-white/10"
                    : "bg-white/20 border border-white/20"
                }`}
              >
                {/* LIVE BADGE */}
                {project.link && (
                  <div className="absolute top-5 right-5 bg-[#ff1493] text-white px-4 py-1 rounded-full text-[12px] font-bold shadow-lg animate-pulse">
                    LIVE WEBSITE
                  </div>
                )}

                <h2 className="text-[#b1006e] text-[18px] italic font-extrabold text-center mb-4">
                  {project.category}
                </h2>

                {/* IMAGE */}
                <div className="overflow-hidden rounded-2xl">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={450}
                        height={300}
                        className="w-full h-[220px] object-cover hover:scale-110 transition duration-500 cursor-pointer"
                      />
                    </a>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={450}
                      height={300}
                      className="w-full h-[220px] object-cover hover:scale-110 transition duration-500"
                    />
                  )}
                </div>

                {/* TITLE */}
                <div className="flex items-center justify-center gap-2 mt-5">
                  <h1 className="text-center text-[#b1006e] font-extrabold italic text-[24px] md:text-[28px]">
                    {project.title}
                  </h1>

                  {project.link && (
                    <ExternalLink
                      size={22}
                      className="text-[#ff1493]"
                    />
                  )}
                </div>

                {/* LIVE WEBSITE TEXT */}
                {project.link && (
                  <p className="text-center text-[#ff69b4] text-[13px] mt-2 font-semibold">
                    Click image to visit live website
                  </p>
                )}
              </motion.div>
            )
          )}
        </div>

        {/* CERTIFICATES */}
        <div id="certificates" className="mt-40 px-6 md:px-10">
          <h1 className="text-center text-[#ff1493] text-[38px] md:text-[40px] font-extrabold italic mb-14">
            Certificates
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map(
              (certificate, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                  }}
                  onClick={() =>
                    setSelectedCertificate(
                      certificate
                    )
                  }
                  className={`overflow-hidden rounded-[28px] border-4 cursor-pointer shadow-xl ${
                    darkMode
                      ? "bg-white/5 border-white/10"
                      : "bg-white/20 border-[#b57b95]"
                  }`}
                >
                  <Image
                    src={certificate}
                    alt="Certificate"
                    width={450}
                    height={400}
                    className="w-full h-[300px] object-cover hover:scale-110 transition duration-500"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= CONTACTS SECTION ================= */}

      <section
        id="contacts"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 py-24 overflow-hidden"
      >
        {/* GLOW */}
        <div className="absolute top-32 left-40 w-[120px] h-[120px] rounded-full bg-[#ff4da6]/40 blur-3xl" />

        {/* TITLE */}
        <motion.h1
          initial={{
            opacity: 0,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className={`text-[40px] md:text-[50px] font-extrabold text-center ${
            darkMode
              ? "text-white"
              : "text-black"
          }`}
        >
          Contact Me
        </motion.h1>

        {/* COPY EMAIL BUTTON */}
        <button
          onClick={copyEmail}
          className="mt-12 flex items-center gap-3 px-6 md:px-10 py-4 md:py-5 rounded-full border-2 border-[#ff4da6] text-white text-[20px] md:text-[28px] font-bold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(255,77,166,0.4)]"
        >
          Copy Email
          <Copy size={28} />
        </button>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mt-24 w-full max-w-7xl">
          {/* EMAIL */}
          <div>
            <h1 className="text-[#ff4da6] font-extrabold text-[30px] mb-6">
              Email
            </h1>

            <p
              className={`text-[20px] md:text-[25px] break-all ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              sophiamnzn48@gmail.com
            </p>

            <h1 className="text-[#ff4da6] font-extrabold text-[30px] mt-20 mb-6">
              Location
            </h1>

            <p
              className={`text-[20px] md:text-[25px] ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              Dasmariñas City, Cavite, Philippines
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h1 className="text-[#ff4da6] font-extrabold text-[30px] mb-6">
              Social Media
            </h1>

            <div className="flex flex-col gap-5">
              <a
                href="https://www.linkedin.com/in/sophia-monzon-8566973a4"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 text-[20px] hover:text-[#ff4da6] transition ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              >
                LinkedIn
                <ExternalLink size={24} />
              </a>

              <a
                href="https://github.com/Sophiamnzn"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 text-[20px] hover:text-[#ff4da6] transition ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              >
                GitHub
                <ExternalLink size={24} />
              </a>

              <a
                href="https://www.facebook.com/sophia.mnznn"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 text-[20px] hover:text-[#ff4da6] transition ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              >
                Facebook
                <ExternalLink size={24} />
              </a>
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h1 className="text-[#ff4da6] font-extrabold text-[40px] mb-6">
              Get In Touch
            </h1>

            <div className="flex flex-col gap-6">
              <div
                className={`flex items-center gap-4 text-[22px] md:text-[28px] ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              >
                <Phone size={24} />
                09760281064
              </div>

              <a
                href="https://m.me/sophia.mnznn"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 text-[20px] hover:text-[#ff4da6] transition ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              >
                Messenger
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATE MODAL ================= */}

      {selectedCertificate && (
        <div
          onClick={() =>
            setSelectedCertificate(null)
          }
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-5 md:p-10"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="max-w-5xl w-full"
          >
            <Image
              src={selectedCertificate}
              alt="Certificate"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-3xl object-contain"
            />
          </motion.div>
        </div>
      )}
    </main>
  );
}