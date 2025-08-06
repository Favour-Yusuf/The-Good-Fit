// src/components/Timetable.tsx
import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FiFilter, FiUser, FiClock, FiMapPin, FiCalendar, FiZap, FiXCircle } from "react-icons/fi";
import { schedule, DAYS, TRAINERS, type ClassSlot } from "../data/schedule";

type Props = {
  whatsappNumber: string; // e.g. "2348012345678"
  gymName?: string;
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Timetable({ whatsappNumber, gymName = "The Good Fit" }: Props) {
  const [day, setDay] = useState<"All" | ClassSlot["day"]>("All");
  const [trainer, setTrainer] = useState<"All" | string>("All");

  const [open, setOpen] = useState(false);
  const [pendingSlot, setPendingSlot] = useState<ClassSlot | null>(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [toast, setToast] = useState("");

  const filtered = useMemo(() => {
    return schedule.filter(
      (s) => (day === "All" || s.day === day) && (trainer === "All" || s.trainer === trainer)
    );
  }, [day, trainer]);

  const groupedByDay = useMemo(() => {
    const map = new Map<ClassSlot["day"], ClassSlot[]>();
    DAYS.forEach((d) => map.set(d, []));
    filtered.forEach((s) => map.get(s.day)!.push(s));
    for (const d of DAYS) {
      map.get(d)!.sort((a, b) => toMinutes(a.time) - toMinutes(b.time));
    }
    return map;
  }, [filtered]);

  function onBook(slot: ClassSlot) {
    setPendingSlot(slot);
    setOpen(true);
  }

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 3500);
  }

  function alreadyBooked(phone: string) {
    const key = `booked:${phone}`;
    const stored = localStorage.getItem(key);
    if (!stored) return false;
    const date = new Date(stored);
    const now = new Date();
    return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
  }

  function markAsBooked(phone: string) {
    const key = `booked:${phone}`;
    localStorage.setItem(key, new Date().toISOString());
  }

  function continueToWhatsApp() {
    if (!pendingSlot) return;

    const phoneValid = phone.trim().length === 11 && /^[0-9]+$/.test(phone);
    const nameValid = fullName.trim().length > 0;

    if (!nameValid || !phoneValid) {
      showToast("Please enter a valid name and 11-digit phone number.");
      return;
    }

    if (alreadyBooked(phone)) {
      const waitlistMsg = `Hi, my name is ${fullName}. I reached the monthly booking limit. Please add me to the waitlist for next month.`;
      const fallback = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waitlistMsg)}`;
      showToast("You’ve already booked this month. Taking you to the waitlist...");
      window.open(fallback, "_blank");
      setOpen(false);
      return;
    }

    const msg = `Hi, my name is ${fullName.trim()}.
I'd like to book the ${pendingSlot.className} class with ${pendingSlot.trainer} on ${pendingSlot.day} at ${pendingSlot.time} at ${gymName}.
Phone: ${phone}${note ? `\nNote: ${note}` : ""}`;

    const wa = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    markAsBooked(phone);
    window.open(wa, "_blank");

    setOpen(false);
    setFullName("");
    setNote("");
    setPhone("");
  }

  return (
    <section id="timetable" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-8 flex flex-col items-start gap-4 md:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <motion.div variants={item}>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Class Timetable
            </h2>
            <p className="mt-1 text-white/70">
              Tap a class to book instantly on WhatsApp.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            variants={item}
            className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end"
          >
            <div className="flex items-center gap-2">
              <FiFilter className="text-white/60" />
              <span className="text-sm text-white/60">Filters</span>
            </div>
            <select
              value={day}
              onChange={(e) => setDay(e.target.value as any)}
              className="rounded-lg border border-white bg-black px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-white/30"
            >
              <option value="All">All Days</option>
              {DAYS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <select
              value={trainer}
              onChange={(e) => setTrainer(e.target.value)}
              className="rounded-lg border border-white bg-black px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-white/30"
            >
              <option value="All">All Trainers</option>
              {TRAINERS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </motion.div>
        </motion.div>

        {/* Mobile layout */}
        <div className="md:hidden">
          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-4">
            {filtered.map((slot, i) => (
              <motion.div key={`${slot.day}-${slot.time}-${i}`} variants={item}>
                <MobileCard slot={slot} onBook={onBook} />
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-white/60">No classes match your filters.</p>
            )}
          </motion.div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {DAYS.map((d) => {
              const slots = groupedByDay.get(d)!;
              return (
                <div
                  key={d}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-[2px]"
                >
                  <div className="sticky top-0 z-10 rounded-t-2xl border-b border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-semibold uppercase tracking-wider md:text-sm">
                        {d}
                      </h3>
                      <FiCalendar className="text-white/60" />
                    </div>
                  </div>

                  <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="divide-y divide-white/10"
                  >
                    {slots.length === 0 && (
                      <li className="px-4 py-5 text-sm text-white/60">No classes</li>
                    )}
                    {slots.map((slot, i) => (
                      <motion.li key={`${d}-${slot.time}-${i}`} variants={item}>
                        <DesktopRow slot={slot} onBook={onBook} />
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-2xl border border-white/15 bg-black p-6 shadow-xl text-white">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Book Class</h3>
              <button onClick={() => setOpen(false)}>
                <FiXCircle className="text-white/60 hover:text-white" />
              </button>
            </div>

            <p className="mt-1 text-sm text-white/60">You can only book once per month.</p>

            <div className="mt-4 space-y-3">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full name"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                maxLength={11}
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
              />
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Note (optional)"
                rows={2}
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg border border-white/15 px-4 py-2 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={continueToWhatsApp}
                className="flex-1 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg">
          {toast}
        </div>
      )}
    </section>
  );
}

/* ---------- Pieces ---------- */

function DesktopRow({ slot, onBook }: { slot: ClassSlot; onBook: (s: ClassSlot) => void }) {
  return (
    <div className="group flex items-start gap-3 px-4 py-4 transition hover:bg-white/5">
      <div className="mt-0.5 flex min-w-[84px] items-center gap-2 text-sm text-white/80">
        <FiClock className="text-purple-400" />
        <span className="whitespace-nowrap">{slot.time}</span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold md:text-[0.95rem]">
          {slot.className}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-white/60">
          <span className="inline-flex items-center gap-1">
            <FiUser /> {slot.trainer}
          </span>
          {slot.capacity && (
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5">
              {slot.capacity} spots
            </span>
          )}
          {slot.location && (
            <span className="inline-flex items-center gap-1">
              <FiMapPin /> {slot.location}
            </span>
          )}
        </div>
      </div>

      <button
        onClick={() => onBook(slot)}
        className="ml-auto inline-flex items-center gap-2 rounded-lg border border-purple-500 bg-purple-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        <FiZap />
        Book
      </button>
    </div>
  );
}

function MobileCard({ slot, onBook }: { slot: ClassSlot; onBook: (s: ClassSlot) => void }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-[2px]">
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-wider text-white/60">{slot.day}</div>
        <div className="inline-flex items-center gap-1 text-sm text-white/80">
          <FiClock className="text-purple-400" /> {slot.time}
        </div>
      </div>
      <div className="mt-1 text-lg font-bold">{slot.className}</div>
      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-white/70">
        <span className="inline-flex items-center gap-1"><FiUser /> {slot.trainer}</span>
        {slot.capacity && (
          <span className="rounded-md border border-white/10 bg-white/10 px-2 py-0.5">{slot.capacity} spots</span>
        )}
        {slot.location && (
          <span className="inline-flex items-center gap-1"><FiMapPin /> {slot.location}</span>
        )}
      </div>
      <button
        onClick={() => onBook(slot)}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-3 font-semibold text-white transition hover:bg-purple-600 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        <FiZap />
        Book on WhatsApp
      </button>
    </div>
  );
}

/* ---------- Helpers ---------- */

function toMinutes(timeLabel: string) {
  const [time, meridiem] = timeLabel.split(" ");
  const [hStr, mStr] = time.split(":");
  let h = parseInt(hStr, 10);
  const m = parseInt(mStr, 10);
  if (meridiem?.toUpperCase() === "PM" && h !== 12) h += 12;
  if (meridiem?.toUpperCase() === "AM" && h === 12) h = 0;
  return h * 60 + m;
}
