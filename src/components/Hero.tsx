// src/components/Hero.tsx
import { motion, type Variants } from "framer-motion";
import { FiChevronDown, FiPlay, FiPhoneCall } from "react-icons/fi";

type HeroProps = {
  bgImageUrl: string;          // your hero image path
  logoUrl: string;             // your logo image path (PNG/SVG/WEBP)
  whatsappNumber: string;      // e.g. "2348012345678"
  gymName?: string;            // optional
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 18,mass: 0.8} },
};



export default function Hero({
  bgImageUrl,
  logoUrl,
  whatsappNumber,
  gymName = "Dee Good Fit",
}: HeroProps) {
  const message = `Hi, I’d like to book a class at ${gymName}.`;
  const wa = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white"
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
        role="img"
        aria-label={`${gymName} training background`}
      />

      {/* Black gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

      {/* Top bar with logo */}
      <div className="pointer-events-none  absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-5 py-5 md:px-10">
        <img
          src={logoUrl}
          alt={`${gymName} logo`}
          className="pointer-events-auto h-14 w-14 md:h-12"
        />
        {/* Optional top-right quick call */}
        <a
          href={wa}
          className="pointer-events-auto hidden items-center gap-2 text-[#8200db] bg-white rounded-full border border-[#8300db84] px-4 py-2 text-sm font-medium hover:bg-white hover:text-black md:flex"
        >
          <FiPhoneCall className="text-lg" />
          Book on WhatsApp
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center md:items-start md:text-left">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          <motion.h1
            variants={item}
            className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:mx-0 md:text-6xl"
          >
            Your <span className="inline-block border-b-4 border-white">Next Level</span> Starts Now
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:mx-0 md:text-lg"
          >
            Fun, effective classes designed to meet you where you are.
Coaches who care. A community that keeps you consistent .

          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-4 md:flex-row md:items-stretch"
          >
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#8200db] transition hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <FiPlay className="text-lg" />
              Book Your Class
            </a>

            <a
              href="#timetable"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3 font-medium text-[#8200db] transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              View Timetable
              <FiChevronDown className="text-lg" />
            </a>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            variants={item}
            className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-4"
          >
            <Badge label="Strength" value="Unleashed" />
            <Badge label="Coaches" value="Elite" />
            <Badge label="Classes/Week" value="40+" />
            <Badge label="Community" value="Relentless" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <motion.div
          initial={{ y: 0, opacity: 0.5 }}
          animate={{ y: [0, 6, 0], opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="flex items-center gap-2 text-white/80"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <FiChevronDown />
        </motion.div>
      </div>

      {/* Subtle vignette edges (extra punch on black) */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.7)]" />
    </section>
  );
}

function Badge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-left backdrop-blur-[2px]">
      <div className="text-[10px] uppercase tracking-widest text-white/60">
        {label}
      </div>
      <div className="text-sm font-semibold">{value}</div>
    </div>
  );
}
