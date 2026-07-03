import { o as __toESM } from "../_runtime.mjs";
import { a as site, i as projects, n as gallery, o as testimonials, r as images, t as faqs } from "./site-Ds5-h1oK.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { C as HiOutlinePhone, D as HiOutlineTrophy, E as HiOutlineSparkles, S as HiOutlineMapPin, a as FaStar, h as HiChevronDown, o as FaWhatsapp, p as HiArrowRight, v as HiOutlineBuildingOffice2, w as HiOutlineShieldCheck, x as HiOutlineHomeModern, y as HiOutlineEnvelope } from "../_libs/react-icons.mjs";
import { t as Lightbox } from "../_libs/yet-another-react-lightbox.mjs";
import { i as SwiperSlide, n as Pagination, r as Swiper, t as Autoplay } from "../_libs/swiper.mjs";
import { t as useInView } from "../_libs/react-intersection-observer.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BCxgBWkt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Counter({ to, suffix = "", duration = 2 }) {
	const [val, setVal] = (0, import_react.useState)(0);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: .4
	});
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!inView || started.current) return;
		started.current = true;
		const start = performance.now();
		const step = (t) => {
			const p = Math.min((t - start) / (duration * 1e3), 1);
			const eased = 1 - Math.pow(1 - p, 3);
			setVal(Math.floor(eased * to));
			if (p < 1) requestAnimationFrame(step);
		};
		requestAnimationFrame(step);
	}, [
		inView,
		to,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [val, suffix]
	});
}
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 text-gold uppercase text-xs tracking-[0.3em]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold" }), children]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "home",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ongoing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Completed, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upcoming, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProperty, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Booking, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-screen w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.heroImg,
					alt: "Luxury skyscraper",
					className: "h-full w-full object-cover",
					width: 1920,
					height: 1280
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/50 to-navy-deep/90" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 md:px-8 pt-28 pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: "hidden",
						animate: "show",
						variants: fadeUp,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-gold uppercase text-xs tracking-[0.3em]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold" }),
								" ",
								site.tagline
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 40
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .15
						},
						className: "mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl",
						children: [
							"Find Your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gold-gradient-text italic",
								children: "Dream"
							}),
							" Property"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .35
						},
						className: "mt-8 max-w-xl text-base text-white/70 md:text-lg",
						children: "A private collection of landmark residences, penthouses and villas curated for those who appreciate quiet luxury and considered design."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .5
						},
						className: "mt-10 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#ongoing",
							className: "btn-gold rounded-full px-7 py-4 text-sm font-semibold inline-flex items-center gap-2",
							children: ["Explore Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiArrowRight, {})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							className: "btn-outline-gold rounded-full px-7 py-4 text-sm font-semibold",
							children: "Book Site Visit"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: 1 },
						className: "mt-20 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4",
						children: [
							{
								n: 27,
								s: "+",
								l: "Years"
							},
							{
								n: 48,
								s: "+",
								l: "Projects"
							},
							{
								n: 12,
								s: "K+",
								l: "Families"
							},
							{
								n: 15,
								s: "M+",
								l: "Sq.Ft Built"
							}
						].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl text-gold md:text-4xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: k.n,
								suffix: k.s
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs uppercase tracking-widest text-white/60",
							children: k.l
						})] }, k.l))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#about",
				className: "absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/60 animate-bounce",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiChevronDown, { size: 28 })
			})
		]
	});
}
function Marquee() {
	const items = [
		"RERA Registered",
		"IGBC Green Certified",
		"27 Years of Legacy",
		"Award-Winning Design",
		"48+ Landmark Projects",
		"Concierge for Life"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-border bg-navy text-white/70 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex whitespace-nowrap py-4",
			style: { animation: "marquee 30s linear infinite" },
			children: [
				...items,
				...items,
				...items
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-8 px-8 text-xs uppercase tracking-[0.3em]",
				children: [t, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: "✦"
				})]
			}, i))
		})
	});
}
function About() {
	const pillars = [
		{
			icon: HiOutlineHomeModern,
			title: "Considered Design",
			d: "In-house architecture studio crafting every façade, floor plan and finish."
		},
		{
			icon: HiOutlineShieldCheck,
			title: "Uncompromised Quality",
			d: "Independent audits and IGBC certification on every project we deliver."
		},
		{
			icon: HiOutlineTrophy,
			title: "Award-Winning Legacy",
			d: "Recognised by CNBC, IPA and Realty+ as India's premier luxury developer."
		},
		{
			icon: HiOutlineSparkles,
			title: "Concierge for Life",
			d: "White-glove service that continues long after you receive your keys."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-8 grid gap-16 lg:grid-cols-2 lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .3
				},
				variants: fadeUp,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionLabel, { children: ["About ", site.name] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]",
						children: [
							"Crafting India's most ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gold-gradient-text italic",
								children: "iconic"
							}),
							" addresses since 1998."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-muted-foreground leading-relaxed",
						children: [site.name, " is a family-founded developer of ultra-luxury residences. For nearly three decades we have partnered with the world's finest architects, interior designers and landscape studios to build homes that endure and appreciate."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-gold text-xl",
							children: "Our Vision"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "To define the next century of Indian luxury living through quiet, considered design."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-gold text-xl",
							children: "Our Mission"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Deliver homes of exceptional craft, on time, with total transparency."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#ongoing",
						className: "mt-10 inline-flex btn-outline-gold rounded-full px-6 py-3 text-sm font-semibold",
						children: "Discover Our Story"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .6,
						delay: i * .1
					},
					className: "group rounded-2xl border border-border bg-card p-7 hover:border-gold hover:shadow-luxe transition-all",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
							className: "text-gold",
							size: 32
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-xl",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: p.d
						})
					]
				}, p.title))
			})]
		})
	});
}
function ProjectCard({ p, upcoming = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .2
		},
		transition: { duration: .6 },
		className: "group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-luxe transition-all",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: p.name,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${upcoming ? "bg-gold text-navy-deep" : p.status === "Completed" ? "bg-white/90 text-navy-deep" : "bg-navy-deep/80 text-gold border border-gold/40"}`,
					children: upcoming ? "Coming Soon" : p.status
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-4 left-4 right-4 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-gold uppercase tracking-widest",
						children: p.location
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-2xl",
						children: p.name
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-xs uppercase tracking-widest",
					children: "Starting"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-xl text-gold",
					children: p.price
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs uppercase tracking-widest",
						children: p.bhk
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						children: p.area
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/property/$id",
				params: { id: p.id },
				className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all",
				children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiArrowRight, {})]
			})]
		})]
	});
}
function Ongoing() {
	const list = projects.filter((p) => p.status === "Ongoing");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "ongoing",
		className: "py-24 md:py-32 bg-secondary/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Ongoing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl md:text-5xl",
					children: "Now Selling"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-muted-foreground",
					children: "Six residences currently under construction across India's most sought after neighbourhoods."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { p }, p.id))
			})]
		})
	});
}
function Completed() {
	const list = projects.filter((p) => p.status === "Completed");
	const extras = [
		{
			img: images.i1,
			name: "Alba Residences",
			loc: "Juhu, Mumbai"
		},
		{
			img: images.i2,
			name: "Skyline 88",
			loc: "Powai, Mumbai"
		},
		{
			img: images.i3,
			name: "Marine Vista",
			loc: "Marine Drive"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "completed",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto",
						children: "Delivered"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl",
						children: "Landmark Completions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 mx-auto max-w-2xl text-muted-foreground",
						children: "A selection of homes we have delivered — each one an address of its own."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]",
				children: [...list, ...list.map((p, i) => ({
					...p,
					id: p.id + "-b",
					image: extras[i % extras.length].img,
					name: extras[i % extras.length].name,
					location: extras[i % extras.length].loc
				}))].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .2
					},
					transition: {
						duration: .6,
						delay: i % 3 * .08
					},
					className: "mb-6 break-inside-avoid group relative overflow-hidden rounded-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: p.name,
							loading: "lazy",
							className: `w-full object-cover transition-transform duration-[900ms] group-hover:scale-110 ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-widest text-gold",
								children: p.location
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-xl",
								children: p.name
							})]
						})
					]
				}, p.id + i))
			})]
		})
	});
}
function Upcoming() {
	const list = projects.filter((p) => p.status === "Upcoming");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "upcoming",
		className: "relative py-24 md:py-32 overflow-hidden bg-navy-deep text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-30",
			style: { backgroundImage: `radial-gradient(circle at 20% 30%, oklch(0.78 0.14 80 / 0.3), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.4 0.15 260 / 0.4), transparent 50%)` }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto",
						children: "Upcoming"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl",
						children: "Coming Soon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 mx-auto max-w-2xl text-white/70",
						children: "Register your interest to receive first access to our upcoming launches."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-2",
				children: list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .7,
						delay: i * .1
					},
					className: "group relative overflow-hidden rounded-3xl border border-white/10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: p.name,
							loading: "lazy",
							className: "h-[420px] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-6 right-6 rounded-full bg-gold px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-navy-deep",
							children: "Coming Soon"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 left-0 right-0 p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-gold",
									children: p.location
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-3xl",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-md text-sm text-white/70",
									children: p.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center gap-6 text-xs uppercase tracking-widest text-white/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.bhk }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gold",
											children: "•"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.possession })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/property/$id",
									params: { id: p.id },
									className: "mt-6 inline-flex btn-gold rounded-full px-5 py-2.5 text-sm font-semibold",
									children: "Register Interest"
								})
							]
						})
					]
				}, p.id))
			})]
		})]
	});
}
function FeaturedProperty() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-8 grid gap-14 lg:grid-cols-2 lg:gap-20 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swiper, {
				modules: [Autoplay, Pagination],
				autoplay: { delay: 4e3 },
				pagination: { clickable: true },
				loop: true,
				className: "w-full rounded-3xl overflow-hidden",
				children: [
					images.i1,
					images.i2,
					images.i3,
					images.pool
				].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwiperSlide, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "Featured interior",
					className: "h-[520px] w-full object-cover",
					loading: "lazy"
				}) }, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: "hidden",
				whileInView: "show",
				viewport: { once: true },
				variants: fadeUp,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Featured Residence" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl",
						children: "Inside a Sky Home at Azure Heights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground leading-relaxed",
						children: "10-ft ceilings, imported Italian marble, private lift lobby and floor to ceiling views of the Arabian Sea. Every home is delivered fully fitted with premium German appliances and smart-home automation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid grid-cols-2 gap-3 text-sm",
						children: [
							"Rooftop Infinity Pool",
							"Private Sky Lounge",
							"24x7 Concierge",
							"Landscaped Podium Gardens",
							"EV Charging",
							"Wellness Spa & Gym"
						].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-6 w-6 place-items-center rounded-full bg-gold/15 text-gold text-[10px]",
								children: "✦"
							}), a]
						}, a))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/property/$id",
							params: { id: "azure-heights" },
							className: "btn-gold rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2",
							children: ["View Property ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiArrowRight, {})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "btn-outline-gold rounded-full px-6 py-3 text-sm font-semibold",
							children: "Download Brochure"
						})]
					})
				]
			})]
		})
	});
}
function Gallery() {
	const [index, setIndex] = (0, import_react.useState)(-1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "py-24 md:py-32 bg-secondary/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto",
						children: "Gallery"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl",
						children: "Behind the Craft"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 mx-auto max-w-2xl text-muted-foreground",
						children: "Construction progress, model apartments and finished interiors."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: gallery.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					initial: {
						opacity: 0,
						scale: .95
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i % 4 * .06
					},
					onClick: () => setIndex(i),
					className: `group relative overflow-hidden rounded-xl ${i === 0 || i === 5 ? "sm:col-span-2 sm:row-span-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: `Gallery ${i + 1}`,
						loading: "lazy",
						className: `w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i === 0 || i === 5 ? "h-full min-h-[400px]" : "h-56"}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/40 transition-colors grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "opacity-0 group-hover:opacity-100 transition-opacity text-gold text-xs uppercase tracking-widest border border-gold rounded-full px-4 py-1.5",
							children: "View"
						})
					})]
				}, i))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			open: index >= 0,
			close: () => setIndex(-1),
			index: Math.max(0, index),
			slides: gallery.map((src) => ({ src }))
		})]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 bg-navy text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-auto",
					children: "Voices"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl md:text-5xl",
					children: "Words from our Residents"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swiper, {
				modules: [Autoplay, Pagination],
				autoplay: { delay: 5e3 },
				pagination: { clickable: true },
				spaceBetween: 30,
				slidesPerView: 1,
				breakpoints: {
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 }
				},
				className: "mt-14 !pb-14",
				children: [...testimonials, ...testimonials].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwiperSlide, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex text-gold gap-0.5",
							children: Array.from({ length: t.rating }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaStar, {}, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-white/80 leading-relaxed font-display italic text-lg",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 border-t border-white/10 pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-white/50 uppercase tracking-widest",
								children: t.role
							})]
						})
					]
				}) }, i))
			})]
		})
	});
}
function Booking() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "book",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-6 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-0 lg:grid-cols-5 rounded-3xl overflow-hidden shadow-luxe border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 relative bg-navy-deep text-white p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.p2,
						alt: "Villa",
						className: "absolute inset-0 h-full w-full object-cover opacity-30",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Site Visit" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl md:text-4xl",
								children: "Book Your Private Tour"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-white/70 text-sm",
								children: "Our relationship managers will curate a private visit tailored to your requirements — from transport to floor plan walkthroughs."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-8 space-y-3 text-sm text-white/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlinePhone, { className: "text-gold" }),
											" ",
											site.phone
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineEnvelope, { className: "text-gold" }),
											" ",
											site.email
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineMapPin, { className: "text-gold" }),
											" ",
											site.address
										]
									})
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "lg:col-span-3 bg-card p-8 md:p-12 space-y-5",
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: "Tell us about your visit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Name",
									name: "name",
									placeholder: "Your full name",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									name: "phone",
									type: "tel",
									placeholder: "+91 ...",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									name: "email",
									type: "email",
									placeholder: "you@example.com",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Preferred Date",
									name: "date",
									type: "date",
									required: true
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							placeholder: "Any preferences or projects of interest…",
							className: "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-gold rounded-full px-8 py-4 text-sm font-semibold w-full sm:w-auto",
							children: sent ? "Request Received ✓" : "Request Site Visit"
						})
					]
				})]
			})
		})
	});
}
function Field({ label, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs uppercase tracking-widest text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
	})] });
}
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 bg-secondary/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-auto",
					children: "FAQ"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl md:text-5xl",
					children: "Questions, answered."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 divide-y divide-border border-y border-border",
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(open === i ? null : i),
					className: "flex w-full items-center justify-between gap-6 py-6 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg md:text-xl",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiChevronDown, {
						className: `shrink-0 text-gold transition-transform ${open === i ? "rotate-180" : ""}`,
						size: 22
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `overflow-hidden transition-all ${open === i ? "max-h-40 pb-6" : "max-h-0"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm leading-relaxed",
						children: f.a
					})
				})] }, i))
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-8 grid gap-14 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Contact" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl md:text-5xl",
					children: "Visit our experience centre"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground max-w-md",
					children: "Walk into our flagship experience centre in Bandra West to see material samples, model apartments and current inventory."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: HiOutlineMapPin,
							label: "Address",
							value: site.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: HiOutlinePhone,
							label: "Phone",
							value: site.phone,
							href: `tel:${site.phone}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: HiOutlineEnvelope,
							label: "Email",
							value: site.email,
							href: `mailto:${site.email}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: HiOutlineBuildingOffice2,
							label: "Hours",
							value: "Mon – Sat, 10am – 7pm"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://wa.me/${site.whatsapp}`,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, {}), " WhatsApp"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${site.phone}`,
						className: "btn-gold rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlinePhone, {}), " Call Now"]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl overflow-hidden border border-border shadow-luxe min-h-[400px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Office location",
					src: site.mapEmbed,
					loading: "lazy",
					className: "h-full w-full min-h-[400px]",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})]
		})
	});
}
function ContactRow({ icon: Icon, label, value, href }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm",
			children: value
		})] })]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "block hover:text-gold transition-colors",
		children: content
	}) : content;
}
//#endregion
export { HomePage as component };
