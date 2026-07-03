import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import {
  HiOutlineMapPin, HiOutlineArrowDownTray, HiOutlineHomeModern,
  HiOutlineSparkles, HiOutlineBuildingOffice2, HiOutlineAcademicCap,
  HiOutlineShoppingBag, HiOutlineHeart, HiArrowLeft,
} from "react-icons/hi2";
import { projects, site, images } from "@/lib/site";

export const Route = createFileRoute("/property/$id")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.id);
    if (!project) throw notFound();
    return { project };
  },
  component: PropertyPage,
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.project.name} — ${site.name}` : "Property" },
      { name: "description", content: loaderData?.project.description ?? "Luxury residence" },
      { property: "og:title", content: loaderData?.project.name ?? "" },
      { property: "og:image", content: loaderData?.project.image ?? "" },
    ],
    links: [{ rel: "canonical", href: loaderData ? `/property/${loaderData.project.id}` : "/" }],
  }),
});

function PropertyPage() {
  const { project } = Route.useLoaderData();
  const [lb, setLb] = useState(-1);
  const gallery = [project.image, images.i1, images.i2, images.i3, images.pool];

  const amenities = [
    { icon: HiOutlineSparkles, label: "Infinity Pool" },
    { icon: HiOutlineHomeModern, label: "Sky Lounge" },
    { icon: HiOutlineBuildingOffice2, label: "Concierge 24x7" },
    { icon: HiOutlineHeart, label: "Wellness Spa" },
    { icon: HiOutlineAcademicCap, label: "Kids' Play Zone" },
    { icon: HiOutlineShoppingBag, label: "Retail Boulevard" },
  ];

  const nearby = [
    { type: "Schools", items: ["Dhirubhai Ambani Intl. (2.4 km)", "Jamnabai Narsee (3.1 km)"] },
    { type: "Hospitals", items: ["Lilavati Hospital (1.8 km)", "Holy Family (2.6 km)"] },
    { type: "Malls", items: ["Palladium (5.4 km)", "Jio World Drive (4.2 km)"] },
  ];

  return (
    <article className="pt-28">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
          <HiArrowLeft /> Back to all projects
        </Link>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-gold flex items-center gap-2">
              <HiOutlineMapPin /> {project.location}
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05]">{project.name}</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">{project.description}</p>
          </div>
          <div className="rounded-2xl border border-gold/40 bg-gold/5 px-6 py-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Starting</p>
            <p className="mt-1 font-display text-3xl text-gold">{project.price}</p>
            <p className="mt-1 text-xs text-muted-foreground">{project.bhk} • {project.area}</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mt-14 mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2 md:h-[560px]">
          <motion.button
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            onClick={() => setLb(0)}
            className="md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl group"
          >
            <img src={project.image} alt={project.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[300px]" />
          </motion.button>
          {gallery.slice(1).map((src, i) => (
            <button key={i} onClick={() => setLb(i + 1)} className="overflow-hidden rounded-2xl group">
              <img src={src} loading="lazy" alt={`${project.name} ${i + 2}`} className="h-full w-full min-h-[140px] object-cover transition-transform duration-700 group-hover:scale-105" />
            </button>
          ))}
        </div>
        <Lightbox open={lb >= 0} close={() => setLb(-1)} index={Math.max(0, lb)} slides={gallery.map((src) => ({ src }))} />
      </section>

      {/* Body */}
      <section className="mt-24 mx-auto max-w-7xl px-6 md:px-8 grid gap-14 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-16">
          <div>
            <h2 className="font-display text-3xl">Amenities</h2>
            <div className="hairline mt-4" />
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {amenities.map((a) => (
                <div key={a.label} className="flex items-center gap-3 rounded-xl border border-border p-4 hover:border-gold transition-colors">
                  <a.icon className="text-gold shrink-0" size={22} />
                  <span className="text-sm font-medium">{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl">Floor Plan</h2>
            <div className="hairline mt-4" />
            <div className="mt-8 rounded-2xl border border-border bg-card p-8 grid gap-8 md:grid-cols-2 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold">{project.bhk}</p>
                <p className="mt-2 font-display text-2xl">Typical Layout</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Carpet Area — {project.area}</li>
                  <li>Ceiling Height — 10 ft</li>
                  <li>Private Deck — Yes</li>
                  <li>Servant Quarter — Yes</li>
                </ul>
                <a href="#" className="mt-6 inline-flex btn-outline-gold rounded-full px-5 py-2.5 text-sm font-semibold items-center gap-2">
                  <HiOutlineArrowDownTray /> Download Floor Plan
                </a>
              </div>
              <div className="aspect-square rounded-xl border border-dashed border-gold/40 grid place-items-center text-muted-foreground text-sm bg-background">
                Floor Plan Preview
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl">Location & Neighbourhood</h2>
            <div className="hairline mt-4" />
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe title="Map" src={site.mapEmbed} className="h-[380px] w-full" loading="lazy" />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {nearby.map((n) => (
                <div key={n.type} className="rounded-xl border border-border p-5">
                  <h4 className="font-display text-gold text-lg">{n.type}</h4>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {n.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky sidebar */}
        <aside className="lg:sticky lg:top-28 h-fit">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-luxe">
            <p className="text-xs uppercase tracking-widest text-gold">Interested?</p>
            <h3 className="mt-2 font-display text-2xl">Speak to a Concierge</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Get pricing, availability and a private walkthrough of {project.name}.
            </p>
            <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input required placeholder="Your name" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
              <input required type="tel" placeholder="Phone number" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
              <input required type="email" placeholder="Email" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
              <button className="btn-gold w-full rounded-full px-5 py-3 text-sm font-semibold">Request Callback</button>
              <a href="#" className="btn-outline-gold w-full inline-flex justify-center rounded-full px-5 py-3 text-sm font-semibold items-center gap-2">
                <HiOutlineArrowDownTray /> Download Brochure
              </a>
            </form>
            <div className="mt-6 border-t border-border pt-5 text-xs text-muted-foreground space-y-1">
              <p>Status: <span className="text-foreground font-medium">{project.status}</span></p>
              <p>Possession: <span className="text-foreground font-medium">{project.possession}</span></p>
            </div>
          </div>
        </aside>
      </section>

      <div className="h-24" />
    </article>
  );
}
