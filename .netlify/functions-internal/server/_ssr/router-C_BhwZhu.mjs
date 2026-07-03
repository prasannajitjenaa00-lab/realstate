import { o as __toESM } from "../_runtime.mjs";
import { a as site, r as images } from "./site-Ds5-h1oK.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./property._id-aHyhErG8.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { C as HiOutlinePhone, S as HiOutlineMapPin, c as HiOutlineMenu, d as HiOutlineX, i as FaPhone, l as HiOutlineMoon, m as HiArrowUp, n as FaInstagram, o as FaWhatsapp, r as FaLinkedinIn, s as FaYoutube, t as FaFacebookF, u as HiOutlineSun, y as HiOutlineEnvelope } from "../_libs/react-icons.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C_BhwZhu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-dYlgSEYC.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var NAV = [
	{
		label: "Home",
		to: "/#home"
	},
	{
		label: "About",
		to: "/#about"
	},
	{
		label: "Ongoing",
		to: "/#ongoing"
	},
	{
		label: "Completed",
		to: "/#completed"
	},
	{
		label: "Upcoming",
		to: "/#upcoming"
	},
	{
		label: "Gallery",
		to: "/#gallery"
	},
	{
		label: "Contact",
		to: "/#contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [dark, setDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = localStorage.getItem("theme");
		const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const isDark = stored ? stored === "dark" : prefers;
		setDark(isDark);
		document.documentElement.classList.toggle("dark", isDark);
	}, []);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const toggleTheme = () => {
		const next = !dark;
		setDark(next);
		document.documentElement.classList.toggle("dark", next);
		localStorage.setItem("theme", next ? "dark" : "light");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-full border border-gold text-gold font-display text-lg",
						children: "A"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg tracking-wide",
						children: site.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-8",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.to,
						className: "text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggleTheme,
							"aria-label": "Toggle theme",
							className: "grid h-10 w-10 place-items-center rounded-full border border-border hover:border-gold hover:text-gold transition-colors",
							children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineSun, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineMoon, { size: 18 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#book",
							className: "hidden md:inline-flex btn-gold rounded-full px-5 py-2.5 text-sm font-semibold",
							children: "Book a Visit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border",
							onClick: () => setOpen(!open),
							"aria-label": "Menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineX, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineMenu, { size: 20 })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			className: "lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col px-6 py-4 gap-3",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.to,
					onClick: () => setOpen(false),
					className: "py-2 text-sm font-medium border-b border-border/60",
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#book",
					onClick: () => setOpen(false),
					className: "btn-gold rounded-full px-5 py-3 text-center text-sm font-semibold mt-2",
					children: "Book a Visit"
				})]
			})
		}) })]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy-deep text-white/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-16 md:px-8 grid gap-12 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-full border border-gold text-gold font-display",
								children: "A"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg text-white",
								children: site.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm leading-relaxed text-white/60",
							children: [site.tagline, ". Building landmark residences across India since 1998."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex gap-3",
							children: [
								FaInstagram,
								FaFacebookF,
								FaLinkedinIn,
								FaYoutube
							].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 14 })
							}, i))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white text-sm uppercase tracking-widest mb-4",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2 text-sm",
					children: [
						"Home",
						"About",
						"Ongoing",
						"Completed",
						"Upcoming",
						"Gallery"
					].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `/#${l.toLowerCase()}`,
						className: "hover:text-gold transition-colors",
						children: l
					}) }, l))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white text-sm uppercase tracking-widest mb-4",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Careers"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Press"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Investors"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Privacy Policy"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Terms"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white text-sm uppercase tracking-widest mb-4",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineMapPin, { className: "text-gold shrink-0 mt-0.5" }),
								" ",
								site.address
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlinePhone, { className: "text-gold shrink-0 mt-0.5" }),
								" ",
								site.phone
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineEnvelope, { className: "text-gold shrink-0 mt-0.5" }),
								" ",
								site.email
							]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-5 md:px-8 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					site.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "RERA Registered • Made with care in India" })]
			})
		})]
	});
}
function FloatingActions() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 500);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 right-5 z-40 flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `https://wa.me/${site.whatsapp}`,
				target: "_blank",
				rel: "noreferrer",
				className: "grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-110 transition-transform",
				"aria-label": "WhatsApp",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { size: 22 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `tel:${site.phone}`,
				className: "grid h-12 w-12 place-items-center rounded-full bg-gold text-navy-deep shadow-gold hover:scale-110 transition-transform",
				"aria-label": "Call",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaPhone, { size: 16 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				initial: {
					opacity: 0,
					scale: .6
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .6
				},
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				className: "grid h-12 w-12 place-items-center rounded-full bg-navy text-white hover:bg-navy-deep transition-colors",
				"aria-label": "Back to top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiArrowUp, { size: 18 })
			}) })
		]
	});
}
function Loading() {
	const [show, setShow] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setShow(false), 900);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		exit: { opacity: 0 },
		transition: { duration: .6 },
		className: "fixed inset-0 z-[100] grid place-items-center bg-navy-deep",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: {
					scale: .6,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				transition: { duration: .5 },
				className: "grid h-16 w-16 place-items-center rounded-full border border-gold text-gold font-display text-3xl",
				children: "A"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-px w-40 bg-white/10 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { x: "-100%" },
					animate: { x: "100%" },
					transition: {
						repeat: Infinity,
						duration: 1.2,
						ease: "easeInOut"
					},
					className: "h-full w-1/2 bg-gold"
				})
			})]
		})
	}) });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl gold-gradient-text",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "mt-6 inline-flex btn-gold rounded-full px-6 py-3 text-sm font-semibold",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Please refresh or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-gold rounded-full px-5 py-2 text-sm font-semibold",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-outline-gold rounded-full px-5 py-2 text-sm font-semibold",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${site.name} — ${site.tagline}` },
			{
				name: "description",
				content: `${site.name} builds landmark luxury residences across India — ongoing, completed and upcoming projects.`
			},
			{
				name: "author",
				content: site.name
			},
			{
				property: "og:title",
				content: `${site.name} — ${site.tagline}`
			},
			{
				property: "og:description",
				content: `Discover luxury residences by ${site.name}.`
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: site.name
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			// href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
		]
	});
}
var $$splitComponentImporter = () => import("./routes-BCxgBWkt.mjs");
var rootRouteChildren = {
	IndexRoute: createFileRoute("/")({
		component: lazyRouteComponent($$splitComponentImporter, "component"),
		head: () => ({
			meta: [
				{ title: `${site.name} — ${site.tagline}` },
				{
					name: "description",
					content: `Explore ongoing, completed and upcoming luxury real estate projects by ${site.name}.`
				},
				{
					property: "og:title",
					content: `${site.name} — Luxury Homes`
				},
				{
					property: "og:description",
					content: `Curated luxury residences by ${site.name}.`
				},
				{
					property: "og:image",
					content: images.heroImg
				}
			],
			links: [{
				rel: "canonical",
				href: "/"
			}]
		})
	}).update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$1
	}),
	PropertyIdRoute: Route.update({
		id: "/property/$id",
		path: "/property/$id",
		getParentRoute: () => Route$1
	})
};
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
