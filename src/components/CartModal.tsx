"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useClassCart } from "../context/ClassCartContext";
import toast from "react-hot-toast";
import { FiZap, FiX } from "react-icons/fi";

export default function CartModal({ whatsappNumber, gymName }: { whatsappNumber: string; gymName: string }) {
  const { selectedClasses, clearCart } = useClassCart();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const sendBooking = () => {
    if (name.trim().length < 2) {
      toast.error("Please enter your name.");
      return;
    }
    if (!/^\d{11}$/.test(phone)) {
      toast.error("Phone number must be 11 digits.");
      return;
    }

    const classList = selectedClasses
      .map((cls, i) => `${i + 1}. ${cls.className} on ${cls.day} at ${cls.time}`)
      .join("\n");

    const msg = `Hi, I’d like to book the following classes at ${gymName}:\n\n${classList}\n\nName: ${name}\nPhone: ${phone}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

    clearCart();
    window.open(url, "_blank");
  };

  if (selectedClasses.length === 0) return null;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <FiZap />
          Review & Book ({selectedClasses.length})
        </button>
      </div>

      {/* Modal */}
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto text-white">
            <div className="flex min-h-full items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-xl bg-black p-6 shadow-xl transition-all border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title className="text-lg font-bold">Review Your Classes</Dialog.Title>
                  <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">
                    <FiX size={20} />
                  </button>
                </div>

                <ul className="mb-4 space-y-2 text-sm">
                  {selectedClasses.map((cls, i) => (
                    <li key={i} className="rounded-md bg-white/5 px-3 py-2">
                      {cls.className} — {cls.day} @ {cls.time}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (11 digits)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <button
                    onClick={sendBooking}
                    className="mt-2 w-full rounded-lg bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
                  >
                    Send Booking via WhatsApp
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
