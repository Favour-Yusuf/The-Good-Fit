export type ClassSlot = {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  time: string;
  className: string;
  location?: string;
  capacity?: number;
  type: "Strength" | "Dance" | "Boxing" | "Pilates" | "Cardio" | "HIIT" | "Stretch";
};

export const DAYS: ClassSlot["day"][] = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

export const CLASS_TYPES: ClassSlot["type"][] = [
  "Strength", "Dance", "Boxing", "Pilates", "Cardio", "HIIT", "Stretch"
];

export const schedule: ClassSlot[] = [
  // Monday
  {
    day: "Monday",
    time: "7:00 AM",
    className: "STRENGTH CIRCUIT",
    type: "Strength",
    location: "Studio",
    capacity: 10,
  },
  {
    day: "Monday",
    time: "1:00 PM",
    className: "DANCE FUSION",
    type: "Dance",
    location: "Studio",
    capacity: 15,
  },
  {
    day: "Monday",
    time: "5:00 PM",
    className: "PILATES FLOW",
    type: "Pilates",
    location: "Studio",
    capacity: 12,
  },

  // Tuesday
  {
    day: "Tuesday",
    time: "9:00 AM",
    className: "BOXING BASICS",
    type: "Boxing",
    location: "Studio",
    capacity: 10,
  },
  {
    day: "Tuesday",
    time: "1:00 PM",
    className: "CARDIO BLAST",
    type: "Cardio",
    location: "Studio",
    capacity: 15,
  },
  {
    day: "Tuesday",
    time: "5:00 PM",
    className: "HIIT STRENGTH",
    type: "HIIT",
    location: "Studio",
    capacity: 12,
  },

  // Wednesday
  {
    day: "Wednesday",
    time: "8:00 AM",
    className: "STRETCH & RECOVER",
    type: "Stretch",
    location: "Studio",
    capacity: 10,
  },
  {
    day: "Wednesday",
    time: "12:00 PM",
    className: "DANCE BURN",
    type: "Dance",
    location: "Studio",
    capacity: 15,
  },
  {
    day: "Wednesday",
    time: "6:00 PM",
    className: "HIIT POWER",
    type: "HIIT",
    location: "Studio",
    capacity: 12,
  },

  // Thursday
  {
    day: "Thursday",
    time: "7:00 AM",
    className: "PILATES CORE",
    type: "Pilates",
    location: "Studio",
    capacity: 10,
  },
  {
    day: "Thursday",
    time: "1:00 PM",
    className: "CARDIO FUNK",
    type: "Cardio",
    location: "Studio",
    capacity: 15,
  },

  // Friday
  {
    day: "Friday",
    time: "9:00 AM",
    className: "BOXING HIIT",
    type: "Boxing",
    location: "Studio",
    capacity: 10,
  },
  {
    day: "Friday",
    time: "5:00 PM",
    className: "DANCE FUSION",
    type: "Dance",
    location: "Studio",
    capacity: 15,
  },

  // Saturday
  {
    day: "Saturday",
    time: "10:00 AM",
    className: "STRENGTH CIRCUIT",
    type: "Strength",
    location: "Studio",
    capacity: 12,
  },
  {
    day: "Saturday",
    time: "12:00 PM",
    className: "STRETCH & FLEX",
    type: "Stretch",
    location: "Studio",
    capacity: 15,
  },

  // Sunday
  {
    day: "Sunday",
    time: "10:00 AM",
    className: "PILATES FLOW",
    type: "Pilates",
    location: "Studio",
    capacity: 12,
  }
];
