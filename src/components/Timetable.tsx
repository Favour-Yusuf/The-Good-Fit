import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FiCalendar, FiClock, FiMapPin, FiFilter } from "react-icons/fi";
import { schedule, DAYS, CLASS_TYPES, type ClassSlot } from "../data/schedule";
import { useClassCart } from "../context/ClassCartContext";
import CartModal from "./CartModal";
// import { toast } from "react-hot-toast";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item: Variants = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Timetable({ whatsappNumber, gymName = "The Good Fit" }: { whatsappNumber: string; gymName?: string }) {
  const [day, setDay] = useState<"All" | ClassSlot["day"]>("All");
  const [type, setType] = useState<"All" | string>("All");
  const [expandedDay, setExpandedDay] = useState<string | null>(DAYS[0]); // Default: Monday

  const filtered = useMemo(() => {
    return schedule.filter((slot) =>
      (day === "All" || slot.day === day) &&
      (type === "All" || slot.className === type)
    );
  }, [day, type]);

  const groupedByDay = useMemo(() => {
    const map = new Map<ClassSlot["day"], ClassSlot[]>();
    DAYS.forEach((d) => map.set(d, []));
    filtered.forEach((s) => map.get(s.day)!.push(s));
    for (const d of DAYS) {
      map.get(d)!.sort((a, b) => toMinutes(a.time) - toMinutes(b.time));
    }
    return map;
  }, [filtered]);

  const { addClass, removeClass, isClassSelected, maxReached } = useClassCart();

  return (
    <section id="timetable" className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-8 flex flex-col items-start gap-4 md:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <motion.div variants={item}>
            <h2 className="text-3xl font-extrabold md:text-4xl">Class Timetable</h2>
            <p className="mt-1 text-white/70">Tap a class to add to cart. Max 5 per user.</p>
          </motion.div>

          <motion.div variants={item} className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
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
              {DAYS.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-lg border border-white bg-black px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-white/30"
            >
              <option value="All">All Classes</option>
              {CLASS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </motion.div>
        </motion.div>

        {/* Mobile collapsible timetable */}
        <div className="md:hidden space-y-4">
          {DAYS.map((d) => {
            const slots = groupedByDay.get(d)!;
            return (
              <div key={d} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <button
                  onClick={() => setExpandedDay(expandedDay === d ? null : d)}
                  className="w-full px-4 py-3 flex justify-between items-center text-sm font-bold uppercase"
                >
                  {d}
                  <span>{expandedDay === d ? "−" : "+"}</span>
                </button>
                {expandedDay === d && (
                  <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="divide-y divide-white/10 px-2 pb-2"
                  >
                    {slots.length === 0 && (
                      <li className="px-2 py-4 text-sm text-white/60">No classes</li>
                    )}
                    {slots.map((slot, i) => (
                      <motion.li key={`${d}-${slot.time}-${i}`} variants={item}>
                        <MobileCard
                          slot={slot}
                          selected={isClassSelected(slot)}
                          disabled={!isClassSelected(slot) && maxReached}
                          onToggle={() =>
                            isClassSelected(slot)
                              ? removeClass(slot)
                              : addClass(slot)
                          }
                        />
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {DAYS.map((d) => {
            const slots = groupedByDay.get(d)!;
            return (
              <div key={d} className="flex flex-col rounded-2xl border border-white/10 bg-white/5">
                <div className="sticky top-0 z-10 rounded-t-2xl border-b border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-semibold uppercase tracking-wider">{d}</h3>
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
                      <DesktopRow
                        slot={slot}
                        selected={isClassSelected(slot)}
                        disabled={!isClassSelected(slot) && maxReached}
                        onToggle={() =>
                          isClassSelected(slot)
                            ? removeClass(slot)
                            : addClass(slot)
                        }
                      />
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            );
          })}
        </div>

        <CartModal whatsappNumber={whatsappNumber} gymName={gymName} />
      </div>
    </section>
  );
}

/* ---------- Components ---------- */

function DesktopRow({ slot, selected, disabled, onToggle }: {
  slot: ClassSlot;
  selected: boolean;
  disabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="group flex items-start gap-3 px-4 py-4 transition hover:bg-white/5">
      <div className="mt-0.5 flex min-w-[84px] items-center gap-2 text-sm text-white/80">
        <FiClock className="text-white/60" />
        <span>{slot.time}</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate font-semibold">{slot.className}</div>
        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-white/60">
          {slot.capacity && <span>{slot.capacity} spots</span>}
          {slot.location && <span className="inline-flex items-center gap-1"><FiMapPin /> {slot.location}</span>}
        </div>
      </div>
      <button
        onClick={onToggle}
        disabled={disabled}
        className={`ml-auto px-3 py-2 text-xs font-semibold rounded-lg border transition
          ${selected ? "bg-purple-600 text-white border-purple-600" :
            disabled ? "text-white/40 bg-white/10 border-white/20 cursor-not-allowed" :
              "bg-white text-black border-white hover:bg-white/90"}
        `}
      >
        {selected ? "✓ Added" : "+ Add"}
      </button>
    </div>
  );
}

function MobileCard({ slot, selected, disabled, onToggle }: {
  slot: ClassSlot;
  selected: boolean;
  disabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-2">
      <div className="flex justify-between text-xs text-white/60">
        <span>{slot.day}</span>
        <span className="inline-flex items-center gap-1"><FiClock /> {slot.time}</span>
      </div>
      <div className="text-lg font-bold">{slot.className}</div>
      <div className="text-xs text-white/60 flex flex-wrap gap-2">
        {slot.capacity && <span>{slot.capacity} spots</span>}
        {slot.location && <span className="inline-flex items-center gap-1"><FiMapPin /> {slot.location}</span>}
      </div>
      <button
        onClick={onToggle}
        disabled={disabled}
        className={`w-full py-2 text-sm font-semibold rounded-xl transition
          ${selected ? "bg-purple-600 text-white" :
            disabled ? "bg-white/10 text-white/30 cursor-not-allowed" :
              "bg-white text-black hover:bg-white/90"}
        `}
      >
        {selected ? "✓ Added" : "+ Add to Cart"}
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
