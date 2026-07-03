import { o as __toESM } from "../_runtime.mjs";
import { a as site, r as images } from "./site-Ds5-h1oK.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./property._id-aHyhErG8.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { E as HiOutlineSparkles, S as HiOutlineMapPin, T as HiOutlineShoppingBag, _ as HiOutlineArrowDownTray, b as HiOutlineHeart, f as HiArrowLeft, g as HiOutlineAcademicCap, v as HiOutlineBuildingOffice2, x as HiOutlineHomeModern } from "../_libs/react-icons.mjs";
import { t as Lightbox } from "../_libs/yet-another-react-lightbox.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/property._id-BZjhzKzD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PropertyPage() {
	const { project } = Route.useLoaderData();
	const [lb, setLb] = (0, import_react.useState)(-1);
	const gallery = [
		project.image,
		images.i1,
		images.i2,
		images.i3,
		images.pool
	];
	const amenities = [
		{
			icon: HiOutlineSparkles,
			label: "Infinity Pool"
		},
		{
			icon: HiOutlineHomeModern,
			label: "Sky Lounge"
		},
		{
			icon: HiOutlineBuildingOffice2,
			label: "Concierge 24x7"
		},
		{
			icon: HiOutlineHeart,
			label: "Wellness Spa"
		},
		{
			icon: HiOutlineAcademicCap,
			label: "Kids' Play Zone"
		},
		{
			icon: HiOutlineShoppingBag,
			label: "Retail Boulevard"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-6 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiArrowLeft, {}), " Back to all projects"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-widest text-gold flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineMapPin, {}),
								" ",
								project.location
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl md:text-6xl leading-[1.05]",
							children: project.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-muted-foreground",
							children: project.description
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-gold/40 bg-gold/5 px-6 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Starting"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-3xl text-gold",
								children: project.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [
									project.bhk,
									" • ",
									project.area
								]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14 mx-auto max-w-7xl px-6 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-4 md:grid-rows-2 md:h-[560px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						onClick: () => setLb(0),
						className: "md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl group",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.image,
							alt: project.name,
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[300px]"
						})
					}), gallery.slice(1).map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setLb(i + 1),
						className: "overflow-hidden rounded-2xl group",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							loading: "lazy",
							alt: `${project.name} ${i + 2}`,
							className: "h-full w-full min-h-[140px] object-cover transition-transform duration-700 group-hover:scale-105"
						})
					}, i))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
					open: lb >= 0,
					close: () => setLb(-1),
					index: Math.max(0, lb),
					slides: gallery.map((src) => ({ src }))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-24 mx-auto max-w-7xl px-6 md:px-8 grid gap-14 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 space-y-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: "Amenities"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-6 sm:grid-cols-3",
								children: amenities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-xl border border-border p-4 hover:border-gold transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, {
										className: "text-gold shrink-0",
										size: 22
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: a.label
									})]
								}, a.label))
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: "Floor Plan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 rounded-2xl border border-border bg-card p-8 grid gap-8 md:grid-cols-2 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-widest text-gold",
										children: project.bhk
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-display text-2xl",
										children: "Typical Layout"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-4 space-y-2 text-sm text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Carpet Area — ", project.area] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ceiling Height — 10 ft" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Private Deck — Yes" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Servant Quarter — Yes" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#",
										className: "mt-6 inline-flex btn-outline-gold rounded-full px-5 py-2.5 text-sm font-semibold items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineArrowDownTray, {}), " Download Floor Plan"]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-square rounded-xl border border-dashed border-gold/40 grid place-items-center text-muted-foreground text-sm bg-background",
									children: "Floor Plan Preview"
								})]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: "Location & Neighbourhood"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 overflow-hidden rounded-2xl border border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									title: "Map",
									src: site.mapEmbed,
									className: "h-[380px] w-full",
									loading: "lazy"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-6 sm:grid-cols-3",
								children: [
									{
										type: "Schools",
										items: ["Dhirubhai Ambani Intl. (2.4 km)", "Jamnabai Narsee (3.1 km)"]
									},
									{
										type: "Hospitals",
										items: ["Lilavati Hospital (1.8 km)", "Holy Family (2.6 km)"]
									},
									{
										type: "Malls",
										items: ["Palladium (5.4 km)", "Jio World Drive (4.2 km)"]
									}
								].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-gold text-lg",
										children: n.type
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 space-y-1 text-sm text-muted-foreground",
										children: n.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
									})]
								}, n.type))
							})
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:sticky lg:top-28 h-fit",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-7 shadow-luxe",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-gold",
								children: "Interested?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl",
								children: "Speak to a Concierge"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: [
									"Get pricing, availability and a private walkthrough of ",
									project.name,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-6 space-y-3",
								onSubmit: (e) => e.preventDefault(),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										placeholder: "Your name",
										className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "tel",
										placeholder: "Phone number",
										className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "email",
										placeholder: "Email",
										className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "btn-gold w-full rounded-full px-5 py-3 text-sm font-semibold",
										children: "Request Callback"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#",
										className: "btn-outline-gold w-full inline-flex justify-center rounded-full px-5 py-3 text-sm font-semibold items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineArrowDownTray, {}), " Download Brochure"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 border-t border-border pt-5 text-xs text-muted-foreground space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Status: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: project.status
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Possession: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: project.possession
								})] })]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24" })
		]
	});
}
//#endregion
export { PropertyPage as component };
