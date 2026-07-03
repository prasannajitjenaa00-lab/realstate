import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { site } from "@/lib/site";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>
      <a
        href={`tel:${site.phone}`}
        className="grid h-12 w-12 place-items-center rounded-full bg-gold text-navy-deep shadow-gold hover:scale-110 transition-transform"
        aria-label="Call"
      >
        <FaPhone size={16} />
      </a>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white hover:bg-navy-deep transition-colors"
            aria-label="Back to top"
          >
            <HiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
