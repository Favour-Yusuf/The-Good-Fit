export type ClassSlot = {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  time: string;
  className: string;
  location?: string;
  capacity?: number;
  type: "Strength" | "Dance" | "Boxing" | "Pilates" | "Cardio" | "HIIT" | "Stretch"| "Aerobics"| "Conditioning"|"StepClass"| "BeginnerGroup";
};

export const DAYS: ClassSlot["day"][] = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

export const CLASS_TYPES: ClassSlot["type"][] = [
  "Strength", "Aerobics", "Dance", "Boxing", "Pilates", "Cardio", "HIIT", "Stretch", "StepClass", "BeginnerGroup"
];

export const schedule: ClassSlot[] = [
 // Monday
{ day: "Monday", time: "7am", className: "Aerobics", type: "Aerobics", location: "Studio", capacity: 20 },
{ day: "Monday", time: "8am", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "8am", className: "Aerobics", type: "Aerobics", location: "Studio", capacity: 20 },
{ day: "Monday", time: "9am", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "9am", className: "Aerobics", type: "Aerobics", location: "Studio", capacity: 20 },
{ day: "Monday", time: "10am", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "10am", className: "Aerobics", type: "Aerobics", location: "Studio", capacity: 20 },
{ day: "Monday", time: "10am", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "11am", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "11am", className: "Conditioning", type: "Conditioning", location: "Studio", capacity: 20 },
{ day: "Monday", time: "12pm", className: "Strength", type: "Strength", location: "Studio", capacity: 20 },
{ day: "Monday", time: "12pm", className: "Conditioning", type: "Conditioning", location: "Studio", capacity: 20 },
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
{ day: "Tuesday", time: "7am", className: "StepClass", type: "StepClass", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "8am", className: "StepClass", type: "StepClass", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "9am", className: "StepClass", type: "StepClass", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "10am", className: "StepClass", type: "StepClass", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "11am", className: "StepClass", type: "StepClass", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "12pm", className: "StepClass", type: "StepClass", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "1pm", className: "Dance", type: "Dance", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "2pm", className: "Dance", type: "Dance", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "3pm", className: "Dance", type: "Dance", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "4pm", className: "Dance", type: "Dance", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "5pm", className: "Dance", type: "Dance", location: "Studio", capacity: 15 },
{ day: "Tuesday", time: "6-7pm", className: "Dance", type: "Dance", location: "Studio", capacity: 15 },
// { day: "Tuesday", time: "1pm", className: "Dance", type: "Cardio", location: "Studio", capacity: 15 },
// { day: "Tuesday", time: "5pm", className: "HIIT", type: "HIIT", location: "Studio", capacity: 15 },

// Wednesday
{ day: "Wednesday", time: "7am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "8am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "9am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "10am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "11am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "12pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "12pm", className: "Dance", type: "Dance", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "1pm", className: "HIIT", type: "HIIT", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "1pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "2pm", className: "HIIT", type: "HIIT", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "2pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "3pm", className: "HIIT", type: "HIIT", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "3pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "4pm", className: "HIIT", type: "HIIT", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "4pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "5pm", className: "HIIT", type: "HIIT", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "5pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "6-7pm", className: "HIIT", type: "HIIT", location: "Studio", capacity: 15 },
{ day: "Wednesday", time: "6-7pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },


// Thursday
{ day: "Thursday", time: "7am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Thursday", time: "7am", className: "Conditioning", type: "Conditioning", location: "Studio", capacity: 15 },
{ day: "Thursday", time: "8am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Thursday", time: "8am", className: "Conditioning", type: "Conditioning", location: "Studio", capacity: 15 },
{ day: "Thursday", time: "9am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Thursday", time: "9am", className: "Conditioning", type: "Conditioning", location: "Studio", capacity: 15 },

// Friday
{ day: "Friday", time: "8am", className: "BeginnerGroup", type: "BeginnerGroup", location: "Studio", capacity: 15 },
{ day: "Friday", time: "9am", className: "BeginnerGroup", type: "BeginnerGroup", location: "Studio", capacity: 15 },
{ day: "Friday", time: "10am", className: "BeginnerGroup", type: "BeginnerGroup", location: "Studio", capacity: 15 },
{ day: "Friday", time: "11am", className: "BeginnerGroup", type: "BeginnerGroup", location: "Studio", capacity: 15 },
{ day: "Friday", time: "12pm", className: "BeginnerGroup", type: "BeginnerGroup", location: "Studio", capacity: 15 },
// { day: "Friday", time: "5pm", className: "Dance", type: "Dance", location: "Studio", capacity: 15 },

// Saturday
{ day: "Saturday", time: "7am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "8am", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "8am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "9am", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "9am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "10am", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "10am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "11am", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "11am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "12pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "12pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "1pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
{ day: "Saturday", time: "1pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "8am", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
// { day: "Saturday", time: "8am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },

// { day: "Saturday", time: "12am", className: "Stretch", type: "Stretch", location: "Studio", capacity: 15 },

// Sunday
// { day: "Sunday", time: "12am", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "12am", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "1pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "1pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "2pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "2pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "3pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "3pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "4pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "4pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "5pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "5pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "6pm", className: "Pilates", type: "Pilates", location: "Studio", capacity: 15 },
// { day: "Sunday", time: "6pm", className: "Strength", type: "Strength", location: "Studio", capacity: 15 },
];