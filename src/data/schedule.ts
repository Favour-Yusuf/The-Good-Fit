export type ClassSlot = {
  day: Day;
  time: string;
  className: string;
  trainer: string;
  location?: string;
  capacity?: number;
};

export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export type Day = (typeof DAYS)[number];

export const TRAINERS = [
  "Timi", "Dee", "Rose", "Lucy", "Ruth", "Precious", "Vicky"
];

export const schedule: ClassSlot[] = [
  // --- Monday ---
  { day: "Monday", time: "7:00 AM", className: "Aerobics", trainer: "Timi" },
  { day: "Monday", time: "8:00 AM", className: "Strength", trainer: "Dee" },
  { day: "Monday", time: "8:00 AM", className: "Aerobics", trainer: "Timi" },
  { day: "Monday", time: "9:00 AM", className: "Strength", trainer: "Dee" },
  { day: "Monday", time: "9:00 AM", className: "Aerobics", trainer: "Timi" },
  { day: "Monday", time: "10:00 AM", className: "Strength", trainer: "Dee" },
  { day: "Monday", time: "10:00 AM", className: "Strength", trainer: "Timi" },
  { day: "Monday", time: "11:00 AM", className: "Strength & Conditioning", trainer: "Timi" },
  { day: "Monday", time: "11:00 AM", className: "Strength", trainer: "Dee" },
  { day: "Monday", time: "12:00 PM", className: "Strength & Conditioning", trainer: "Timi" },
  { day: "Monday", time: "12:00 PM", className: "Strength", trainer: "Dee" },
  { day: "Monday", time: "1:00 PM", className: "Pilates", trainer: "Ruth" },
  { day: "Monday", time: "1:00 PM", className: "Strength", trainer: "Rose" },
  { day: "Monday", time: "2:00 PM", className: "Pilates", trainer: "Ruth" },
  { day: "Monday", time: "2:00 PM", className: "Strength", trainer: "Rose" },
  { day: "Monday", time: "3:00 PM", className: "Pilates", trainer: "Ruth" },
  { day: "Monday", time: "3:00 PM", className: "Strength", trainer: "Rose" },
  { day: "Monday", time: "4:00 PM", className: "Pilates", trainer: "Ruth" },
  { day: "Monday", time: "4:00 PM", className: "Strength", trainer: "Rose" },
  { day: "Monday", time: "5:00 PM", className: "Pilates", trainer: "Ruth" },
  { day: "Monday", time: "5:00 PM", className: "Strength", trainer: "Rose" },
  { day: "Monday", time: "6:00 PM", className: "Pilates", trainer: "Ruth" },
  { day: "Monday", time: "6:00 PM", className: "Strength", trainer: "Rose" },

  // --- Tuesday ---
  { day: "Tuesday", time: "7:00 AM", className: "Step Class", trainer: "Timi" },
  { day: "Tuesday", time: "8:00 AM", className: "Step Class", trainer: "Timi" },
  { day: "Tuesday", time: "9:00 AM", className: "Step Class", trainer: "Timi" },
  { day: "Tuesday", time: "10:00 AM", className: "Step Class", trainer: "Timi" },
  { day: "Tuesday", time: "10:00 AM", className: "Strength", trainer: "Lucy" },
  { day: "Tuesday", time: "11:00 AM", className: "Step Class", trainer: "Timi" },
  { day: "Tuesday", time: "11:00 AM", className: "Strength", trainer: "Lucy" },
  { day: "Tuesday", time: "12:00 PM", className: "Step Class", trainer: "Timi" },
  { day: "Tuesday", time: "12:00 PM", className: "Strength", trainer: "Lucy" },
  { day: "Tuesday", time: "1:00 PM", className: "Dance", trainer: "Precious" },
  { day: "Tuesday", time: "2:00 PM", className: "Dance", trainer: "Precious" },
  { day: "Tuesday", time: "3:00 PM", className: "Dance", trainer: "Precious" },
  { day: "Tuesday", time: "4:00 PM", className: "Dance", trainer: "Precious" },
  { day: "Tuesday", time: "5:00 PM", className: "Dance", trainer: "Precious" },
  { day: "Tuesday", time: "6:00 PM", className: "Dance", trainer: "Precious" },

  // --- Wednesday ---
  { day: "Wednesday", time: "7:00 AM", className: "Strength Group", trainer: "Rose" },
  { day: "Wednesday", time: "8:00 AM", className: "Strength PT", trainer: "Dee" },
  { day: "Wednesday", time: "8:00 AM", className: "Strength Group", trainer: "Rose" },
  { day: "Wednesday", time: "9:00 AM", className: "Strength PT", trainer: "Dee" },
  { day: "Wednesday", time: "9:00 AM", className: "Strength Group", trainer: "Rose" },
  { day: "Wednesday", time: "10:00 AM", className: "Strength PT", trainer: "Dee" },
  { day: "Wednesday", time: "10:00 AM", className: "Strength Group", trainer: "Rose" },
  { day: "Wednesday", time: "11:00 AM", className: "Strength PT", trainer: "Dee" },
  { day: "Wednesday", time: "11:00 AM", className: "Strength Group", trainer: "Rose" },
  { day: "Wednesday", time: "12:00 PM", className: "Strength PT", trainer: "Dee" },
  { day: "Wednesday", time: "12:00 PM", className: "Strength Group", trainer: "Rose" },
  { day: "Wednesday", time: "1:00 PM", className: "Strength PT", trainer: "Rose" },
  { day: "Wednesday", time: "2:00 PM", className: "Strength PT", trainer: "Rose" },
  { day: "Wednesday", time: "3:00 PM", className: "Strength PT", trainer: "Rose" },
  { day: "Wednesday", time: "4:00 PM", className: "Strength PT", trainer: "Rose" },
  { day: "Wednesday", time: "5:00 PM", className: "Strength PT", trainer: "Rose" },
  { day: "Wednesday", time: "6:00 PM", className: "Strength PT", trainer: "Rose" },

  // --- Thursday ---
  { day: "Thursday", time: "7:00 AM", className: "Strength & Conditioning", trainer: "Timi" },
  { day: "Thursday", time: "8:00 AM", className: "Strength & Conditioning", trainer: "Timi" },
  { day: "Thursday", time: "9:00 AM", className: "Strength & Conditioning", trainer: "Timi" },

  // --- Friday ---
  { day: "Friday", time: "7:00 AM", className: "Strength", trainer: "Rose" },
  { day: "Friday", time: "8:00 AM", className: "Beginner Group Class", trainer: "Vicky" },
  { day: "Friday", time: "9:00 AM", className: "Beginner Group Class", trainer: "Vicky" },
  { day: "Friday", time: "10:00 AM", className: "Beginner Group Class", trainer: "Vicky" },
  { day: "Friday", time: "11:00 AM", className: "Beginner Group Class", trainer: "Vicky" },
  { day: "Friday", time: "12:00 PM", className: "Beginner Group Class", trainer: "Vicky" },
  { day: "Friday", time: "1:00 PM", className: "Beginner Group Class", trainer: "Vicky" },
  { day: "Friday", time: "2:00 PM", className: "Beginner Group Class", trainer: "Vicky" },
  { day: "Friday", time: "3:00 PM", className: "Beginner Group Class", trainer: "Vicky" },
  { day: "Friday", time: "4:00 PM", className: "Beginner Group Class", trainer: "Vicky" },
  { day: "Friday", time: "5:00 PM", className: "Beginner Group Class", trainer: "Vicky" },
  { day: "Friday", time: "6:00 PM", className: "Beginner Group Class", trainer: "Vicky" },

  // --- Saturday ---
  { day: "Saturday", time: "8:00 AM", className: "Pilates", trainer: "Ruth" },
  { day: "Saturday", time: "8:00 AM", className: "Strength PT", trainer: "Dee" },
  { day: "Saturday", time: "8:00 AM", className: "Strength", trainer: "Rose" },
  { day: "Saturday", time: "9:00 AM", className: "Pilates", trainer: "Ruth" },
  { day: "Saturday", time: "9:00 AM", className: "Strength PT", trainer: "Dee" },
  { day: "Saturday", time: "9:00 AM", className: "Strength", trainer: "Rose" },
  { day: "Saturday", time: "10:00 AM", className: "Pilates", trainer: "Ruth" },
  { day: "Saturday", time: "10:00 AM", className: "Strength PT", trainer: "Dee" },
  { day: "Saturday", time: "10:00 AM", className: "Strength", trainer: "Rose" },
  { day: "Saturday", time: "11:00 AM", className: "Strength PT", trainer: "Dee" },
  { day: "Saturday", time: "11:00 AM", className: "Pilates", trainer: "Ruth" },
  { day: "Saturday", time: "11:00 AM", className: "Strength", trainer: "Rose" },

  // --- Sunday ---
  { day: "Sunday", time: "12:00 PM", className: "Strength", trainer: "Rose" },
  { day: "Sunday", time: "12:00 PM", className: "Pilates", trainer: "Ruth" },
  { day: "Sunday", time: "12:00 PM", className: "Dance", trainer: "Precious" },
  { day: "Sunday", time: "1:00 PM", className: "Strength", trainer: "Rose" },
  { day: "Sunday", time: "1:00 PM", className: "Pilates", trainer: "Ruth" },
  { day: "Sunday", time: "1:00 PM", className: "Dance", trainer: "Precious" },
  { day: "Sunday", time: "2:00 PM", className: "Dance", trainer: "Precious" },
  { day: "Sunday", time: "3:00 PM", className: "Dance", trainer: "Precious" },
  { day: "Sunday", time: "4:00 PM", className: "Dance", trainer: "Precious" },
  { day: "Sunday", time: "5:00 PM", className: "Dance", trainer: "Precious" },
  { day: "Sunday", time: "6:00 PM", className: "Dance", trainer: "Precious" },
];
