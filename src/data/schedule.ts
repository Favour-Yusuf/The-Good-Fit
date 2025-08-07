export type ClassSlot = {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  time: string;
  className: string;
  location?: string;
  capacity?: number;
  type: "Strength" | "Dance" | "Boxing" | "Pilates" | "Cardio" | "HIIT" | "Stretch"| "Aerobics"| "Conditioning";
};

export const DAYS: ClassSlot["day"][] = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

export const CLASS_TYPES: ClassSlot["type"][] = [
  "Strength", "Aerobics", "Dance", "Boxing", "Pilates", "Cardio", "HIIT", "Stretch"
];

export const schedule: ClassSlot[] = [
 // Monday
{ day: "Monday", time: "7am", className: "Aerobics", type: "Aerobics", location: "Studio", capacity: 20 },
{ day: "Monday", time: "7am", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "8am", className: "Aerobics", type: "Aerobics", location: "Studio", capacity: 20 },
{ day: "Monday", time: "8am", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "9am", className: "Aerobics", type: "Aerobics", location: "Studio", capacity: 20 },
{ day: "Monday", time: "9am", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "10am", className: "Aerobics", type: "Aerobics", location: "Studio", capacity: 20 },
{ day: "Monday", time: "10am", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "11am", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "11am", className: "Conditioning", type: "Conditioning", location: "Studio", capacity: 20 },
{ day: "Monday", time: "12am", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "12am", className: "Conditioning", type: "Conditioning", location: "Studio", capacity: 20 },
{ day: "Monday", time: "1pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 20 },
{ day: "Monday", time: "1pm", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "2pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 20 },
{ day: "Monday", time: "2pm", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "3pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 20 },
{ day: "Monday", time: "3pm", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "4pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 20 },
{ day: "Monday", time: "4pm", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "5pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 20 },
{ day: "Monday", time: "5pm", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "6-7pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 20 },

// Tuesday
{ day: "Tuesday", time: "9am", className: "Boxing", type: "Boxing", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "1pm", className: "Cardio", type: "Cardio", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "5pm", className: "HIIT", type: "HIIT", location: "Studio", capacity: 15 },

// Wednesday
{ day: "Wednesday", time: "8am", className: "Stretch", type: "Stretch", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "12am", className: "Dance", type: "Dance", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "6Pm", className: "HIIT", type: "HIIT", location: "Studio", capacity: 15 },

// Thursday
{ day: "Thursday", time: "7am", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Thursday", time: "1pm", className: "Cardio", type: "Cardio", location: "Studio", capacity: 15 },

// Friday
{ day: "Friday", time: "9am", className: "Boxing", type: "Boxing", location: "Studio", capacity: 15 },
{ day: "Friday", time: "5pm", className: "Dance", type: "Dance", location: "Studio", capacity: 15 },

// Saturday
{ day: "Saturday", time: "10am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "12am", className: "Stretch", type: "Stretch", location: "Studio", capacity: 15 },

// Sunday
{ day: "Sunday", time: "12am", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "12am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "1pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "1pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "2pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "2pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "3pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "3pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "4pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "4pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "5pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "5pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "6pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Sunday", time: "6pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
];