import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import {
  HiOutlineMapPin, HiOutlineHomeModern, HiOutlineSparkles, HiOutlineShieldCheck,
  HiOutlineTrophy, HiOutlineBuildingOffice2, HiArrowRight, HiChevronDown,
  HiOutlinePhone, HiOutlineEnvelope,
} from "react-icons/hi2";
import { FaStar, FaWhatsapp } from "react-icons/fa6";
import { Counter } from "@/components/Counter";
import { site, projects, gallery, testimonials, faqs, images } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.tagline}` },
      { name: "description", content: `Explore ongoing, completed and upcoming luxury real estate projects by ${site.name}.` },
      { property: "og:title", content: `${site.name} — Luxury Homes` },
      { property: "og:description", content: `Curated luxury residences by ${site.name}.` },
      { property: "og:image", content: images.heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-gold uppercase text-xs tracking-[0.3em]">
      <span className="h-px w-8 bg-gold" />
      {children}
    </div>
  );
}

function HomePage() {
  return (
    <div id="home">
      <Hero />
      <Marquee />
      <About />
      <Ongoing />
      <Completed />
      <Upcoming />
      <FeaturedProperty />
      <Gallery />
      <Testimonials />
      <Booking />
      <FAQ />
      <Contact />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={images.heroImg} alt="Luxury skyscraper" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/50 to-navy-deep/90" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 md:px-8 pt-28 pb-20">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div className="flex items-center gap-3 text-gold uppercase text-xs tracking-[0.3em]">
            <span className="h-px w-8 bg-gold" /> {site.tagline}
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Find Your <span className="gold-gradient-text italic">Dream</span> Property
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-8 max-w-xl text-base text-white/70 md:text-lg"
        >
          A private collection of landmark residences, penthouses and villas
          curated for those who appreciate quiet luxury and considered design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#ongoing" className="btn-gold rounded-full px-7 py-4 text-sm font-semibold inline-flex items-center gap-2">
            Explore Projects <HiArrowRight />
          </a>
          <a href="#book" className="btn-outline-gold rounded-full px-7 py-4 text-sm font-semibold">
            Book Site Visit
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {[
            { n: 27, s: "+", l: "Years" },
            { n: 48, s: "+", l: "Projects" },
            { n: 12, s: "K+", l: "Families" },
            { n: 15, s: "M+", l: "Sq.Ft Built" },
          ].map((k) => (
            <div key={k.l}>
              <div className="font-display text-3xl text-gold md:text-4xl">
                <Counter to={k.n} suffix={k.s} />
              </div>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/60">{k.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/60 animate-bounce">
        <HiChevronDown size={28} />
      </a>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["RERA Registered", "IGBC Green Certified", "27 Years of Legacy", "Award-Winning Design", "48+ Landmark Projects", "Concierge for Life"];
  return (
    <div className="border-y border-border bg-navy text-white/70 overflow-hidden">
      <div className="flex whitespace-nowrap py-4" style={{ animation: "marquee 30s linear infinite" }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-8 px-8 text-xs uppercase tracking-[0.3em]">
            {t}<span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const pillars = [
    { icon: HiOutlineHomeModern, title: "Considered Design", d: "In-house architecture studio crafting every façade, floor plan and finish." },
    { icon: HiOutlineShieldCheck, title: "Uncompromised Quality", d: "Independent audits and IGBC certification on every project we deliver." },
    { icon: HiOutlineTrophy, title: "Award-Winning Legacy", d: "Recognised by CNBC, IPA and Realty+ as India's premier luxury developer." },
    { icon: HiOutlineSparkles, title: "Concierge for Life", d: "White-glove service that continues long after you receive your keys." },
  ];
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <SectionLabel>About {site.name}</SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Crafting India's most <span className="gold-gradient-text italic">iconic</span> addresses since 1998.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {site.name} is a family-founded developer of ultra-luxury residences.
            For nearly three decades we have partnered with the world's finest
            architects, interior designers and landscape studios to build homes
            that endure and appreciate.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-display text-gold text-xl">Our Vision</h4>
              <p className="mt-2 text-sm text-muted-foreground">To define the next century of Indian luxury living through quiet, considered design.</p>
            </div>
            <div>
              <h4 className="font-display text-gold text-xl">Our Mission</h4>
              <p className="mt-2 text-sm text-muted-foreground">Deliver homes of exceptional craft, on time, with total transparency.</p>
            </div>
          </div>
          <a href="#ongoing" className="mt-10 inline-flex btn-outline-gold rounded-full px-6 py-3 text-sm font-semibold">
            Discover Our Story
          </a>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-7 hover:border-gold hover:shadow-luxe transition-all"
            >
              <p.icon className="text-gold" size={32} />
              <h3 className="mt-5 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECT CARD ---------------- */
function ProjectCard({ p, upcoming = false }: { p: typeof projects[number]; upcoming?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-luxe transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
        <span className={`absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${
          upcoming ? "bg-gold text-navy-deep" :
          p.status === "Completed" ? "bg-white/90 text-navy-deep" : "bg-navy-deep/80 text-gold border border-gold/40"
        }`}>
          {upcoming ? "Coming Soon" : p.status}
        </span>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-xs text-gold uppercase tracking-widest">{p.location}</p>
          <h3 className="mt-1 font-display text-2xl">{p.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-sm">
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-widest">Starting</p>
            <p className="mt-1 font-display text-xl text-gold">{p.price}</p>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-xs uppercase tracking-widest">{p.bhk}</p>
            <p className="mt-1 text-sm">{p.area}</p>
          </div>
        </div>
        <Link
          to="/property/$id"
          params={{ id: p.id }}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
        >
          View Details <HiArrowRight />
        </Link>
      </div>
    </motion.article>
  );
}

/* ---------------- ONGOING ---------------- */
function Ongoing() {
  const list = projects.filter((p) => p.status === "Ongoing");
  return (
    <section id="ongoing" className="py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Ongoing</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Now Selling</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Six residences currently under construction across India's most sought after neighbourhoods.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPLETED (Masonry) ---------------- */
function Completed() {
  const list = projects.filter((p) => p.status === "Completed");
  const extras = [
    { img: images.i1, name: "Alba Residences", loc: "Juhu, Mumbai" },
    { img: images.i2, name: "Skyline 88", loc: "Powai, Mumbai" },
    { img: images.i3, name: "Marine Vista", loc: "Marine Drive" },
  ];
  return (
    <section id="completed" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center">
          <SectionLabel><span className="mx-auto">Delivered</span></SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Landmark Completions</h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            A selection of homes we have delivered — each one an address of its own.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {[...list, ...list.map((p, i) => ({ ...p, id: p.id + "-b", image: extras[i % extras.length].img, name: extras[i % extras.length].name, location: extras[i % extras.length].loc }))].map((p, i) => (
            <motion.div
              key={p.id + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="mb-6 break-inside-avoid group relative overflow-hidden rounded-2xl"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-110 ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-[10px] uppercase tracking-widest text-gold">{p.location}</p>
                <h3 className="mt-1 font-display text-xl">{p.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- UPCOMING ---------------- */
function Upcoming() {
  const list = projects.filter((p) => p.status === "Upcoming");
  return (
    <section id="upcoming" className="relative py-24 md:py-32 overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 20% 30%, oklch(0.78 0.14 80 / 0.3), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.4 0.15 260 / 0.4), transparent 50%)` }} />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center">
          <SectionLabel><span className="mx-auto">Upcoming</span></SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Coming Soon</h2>
          <p className="mt-4 mx-auto max-w-2xl text-white/70">
            Register your interest to receive first access to our upcoming launches.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {list.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              <img src={p.image} alt={p.name} loading="lazy" className="h-[420px] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
              <span className="absolute top-6 right-6 rounded-full bg-gold px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-navy-deep">
                Coming Soon
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs uppercase tracking-widest text-gold">{p.location}</p>
                <h3 className="mt-2 font-display text-3xl">{p.name}</h3>
                <p className="mt-3 max-w-md text-sm text-white/70">{p.description}</p>
                <div className="mt-6 flex items-center gap-6 text-xs uppercase tracking-widest text-white/60">
                  <span>{p.bhk}</span><span className="text-gold">•</span><span>{p.possession}</span>
                </div>
                <Link to="/property/$id" params={{ id: p.id }} className="mt-6 inline-flex btn-gold rounded-full px-5 py-2.5 text-sm font-semibold">
                  Register Interest
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURED PROPERTY DETAILS TEASER ---------------- */
function FeaturedProperty() {
  const amenities = ["Rooftop Infinity Pool", "Private Sky Lounge", "24x7 Concierge", "Landscaped Podium Gardens", "EV Charging", "Wellness Spa & Gym"];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
          className="w-full rounded-3xl overflow-hidden"
        >
          {[images.i1, images.i2, images.i3, images.pool].map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt="Featured interior" className="h-[520px] w-full object-cover" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel>Featured Residence</SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Inside a Sky Home at Azure Heights</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            10-ft ceilings, imported Italian marble, private lift lobby and floor
            to ceiling views of the Arabian Sea. Every home is delivered fully
            fitted with premium German appliances and smart-home automation.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
            {amenities.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/15 text-gold text-[10px]">✦</span>
                {a}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/property/$id" params={{ id: "azure-heights" }} className="btn-gold rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
              View Property <HiArrowRight />
            </Link>
            <a href="#" className="btn-outline-gold rounded-full px-6 py-3 text-sm font-semibold">Download Brochure</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY (Lightbox) ---------------- */
function Gallery() {
  const [index, setIndex] = useState(-1);
  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center">
          <SectionLabel><span className="mx-auto">Gallery</span></SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Behind the Craft</h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Construction progress, model apartments and finished interiors.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              onClick={() => setIndex(i)}
              className={`group relative overflow-hidden rounded-xl ${i === 0 || i === 5 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i === 0 || i === 5 ? "h-full min-h-[400px]" : "h-56"}`}
              />
              <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/40 transition-colors grid place-items-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold text-xs uppercase tracking-widest border border-gold rounded-full px-4 py-1.5">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={Math.max(0, index)} slides={gallery.map((src) => ({ src }))} />
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center">
          <SectionLabel><span className="mx-auto">Voices</span></SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Words from our Residents</h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="mt-14 !pb-14"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 h-full">
                <div className="flex text-gold gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => <FaStar key={s} />)}
                </div>
                <p className="mt-5 text-white/80 leading-relaxed font-display italic text-lg">"{t.quote}"</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-white/50 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ---------------- BOOKING ---------------- */
function Booking() {
  const [sent, setSent] = useState(false);
  return (
    <section id="book" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-0 lg:grid-cols-5 rounded-3xl overflow-hidden shadow-luxe border border-border">
          <div className="lg:col-span-2 relative bg-navy-deep text-white p-10">
            <img src={images.p2} alt="Villa" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" />
            <div className="relative">
              <SectionLabel>Site Visit</SectionLabel>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Book Your Private Tour</h2>
              <p className="mt-4 text-white/70 text-sm">
                Our relationship managers will curate a private visit tailored to
                your requirements — from transport to floor plan walkthroughs.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-white/80">
                <li className="flex gap-3"><HiOutlinePhone className="text-gold" /> {site.phone}</li>
                <li className="flex gap-3"><HiOutlineEnvelope className="text-gold" /> {site.email}</li>
                <li className="flex gap-3"><HiOutlineMapPin className="text-gold" /> {site.address}</li>
              </ul>
            </div>
          </div>
          <form
            className="lg:col-span-3 bg-card p-8 md:p-12 space-y-5"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <h3 className="font-display text-2xl">Tell us about your visit</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              <Field label="Preferred Date" name="date" type="date" required />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea rows={4} placeholder="Any preferences or projects of interest…" className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors" />
            </div>
            <button type="submit" className="btn-gold rounded-full px-8 py-4 text-sm font-semibold w-full sm:w-auto">
              {sent ? "Request Received ✓" : "Request Site Visit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input {...props} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors" />
    </div>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="text-center">
          <SectionLabel><span className="mx-auto">FAQ</span></SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Questions, answered.</h2>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg md:text-xl">{f.q}</span>
                <HiChevronDown className={`shrink-0 text-gold transition-transform ${open === i ? "rotate-180" : ""}`} size={22} />
              </button>
              <div className={`overflow-hidden transition-all ${open === i ? "max-h-40 pb-6" : "max-h-0"}`}>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid gap-14 lg:grid-cols-2">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Visit our experience centre</h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Walk into our flagship experience centre in Bandra West to see
            material samples, model apartments and current inventory.
          </p>
          <div className="mt-10 space-y-5">
            <ContactRow icon={HiOutlineMapPin} label="Address" value={site.address} />
            <ContactRow icon={HiOutlinePhone} label="Phone" value={site.phone} href={`tel:${site.phone}`} />
            <ContactRow icon={HiOutlineEnvelope} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <ContactRow icon={HiOutlineBuildingOffice2} label="Hours" value="Mon – Sat, 10am – 7pm" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-90">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href={`tel:${site.phone}`} className="btn-gold rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
              <HiOutlinePhone /> Call Now
            </a>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden border border-border shadow-luxe min-h-[400px]">
          <iframe
            title="Office location"
            src={site.mapEmbed}
            loading="lazy"
            className="h-full w-full min-h-[400px]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
function ContactRow({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:text-gold transition-colors">{content}</a> : content;
}
