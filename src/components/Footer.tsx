import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold text-gold font-display">
              A
            </span>
            <span className="font-display text-lg text-white">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {site.tagline}. Building landmark residences across India since 1998.
          </p>
          <div className="mt-6 flex gap-3">
            {[FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Ongoing", "Completed", "Upcoming", "Gallery"].map((l) => (
              <li key={l}>
                <a href={`/#${l.toLowerCase()}`} className="hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gold">Careers</a></li>
            <li><a href="#" className="hover:text-gold">Press</a></li>
            <li><a href="#" className="hover:text-gold">Investors</a></li>
            <li><a href="#" className="hover:text-gold">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold">Terms</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><HiOutlineMapPin className="text-gold shrink-0 mt-0.5" /> {site.address}</li>
            <li className="flex gap-3"><HiOutlinePhone className="text-gold shrink-0 mt-0.5" /> {site.phone}</li>
            <li className="flex gap-3"><HiOutlineEnvelope className="text-gold shrink-0 mt-0.5" /> {site.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 md:px-8 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>RERA Registered • Made with care in India</p>
        </div>
      </div>
    </footer>
  );
}
