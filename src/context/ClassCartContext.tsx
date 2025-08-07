"use client";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { ClassSlot } from "../data/schedule";
import toast from "react-hot-toast";

type CartContextType = {
  selectedClasses: ClassSlot[];
  addClass: (cls: ClassSlot) => void;
  removeClass: (cls: ClassSlot) => void;
  isClassSelected: (cls: ClassSlot) => boolean;
  clearCart: () => void;
  maxReached: boolean;
};

const ClassCartContext = createContext<CartContextType | null>(null);

const MAX_SELECTION = 5;

export function ClassCartProvider({ children }: { children: ReactNode }) {
  const [selectedClasses, setSelectedClasses] = useState<ClassSlot[]>([]);

  const addClass = (cls: ClassSlot) => {
    if (isClassSelected(cls)) {
      toast("Class already selected.", { icon: "⚠️" });
      return;
    }

    if (selectedClasses.length >= MAX_SELECTION) {
      toast.error("You can only select up to 5 classes.");
      return;
    }

    setSelectedClasses((prev) => [...prev, cls]);
    toast.success("Class added!");
  };

  const removeClass = (cls: ClassSlot) => {
    setSelectedClasses((prev) =>
      prev.filter(
        (c) => !(c.day === cls.day && c.time === cls.time && c.className === cls.className)
      )
    );
    toast("Class removed", { icon: "🗑️" });
  };

  const isClassSelected = (cls: ClassSlot) => {
    return selectedClasses.some(
      (c) => c.day === cls.day && c.time === cls.time && c.className === cls.className
    );
  };

  const clearCart = () => {
    setSelectedClasses([]);
  };

  const value: CartContextType = {
    selectedClasses,
    addClass,
    removeClass,
    isClassSelected,
    clearCart,
    maxReached: selectedClasses.length >= MAX_SELECTION,
  };

  return (
    <ClassCartContext.Provider value={value}>
      {children}
    </ClassCartContext.Provider>
  );
}

export const useClassCart = () => {
  const ctx = useContext(ClassCartContext);
  if (!ctx) throw new Error("useClassCart must be used within ClassCartProvider");
  return ctx;
};
