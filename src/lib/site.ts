import heroImg from "@/assets/hero.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import i1 from "@/assets/interior-1.jpg";
import i2 from "@/assets/interior-2.jpg";
import i3 from "@/assets/interior-3.jpg";
import pool from "@/assets/amenity-pool.jpg";
import construction from "@/assets/construction.jpg";

export const site = {
  name: "Aurelia Estates",
  tagline: "Curated Luxury Residences",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "concierge@aureliaestates.com",
  address: "12 Marine Drive, Bandra West, Mumbai 400050, India",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6087345636195!2d72.826!3d19.055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c1a1a1a1a1%3A0x0!2sBandra%20West!5e0!3m2!1sen!2sin!4v1700000000000",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },
};

export const images = { heroImg, p1, p2, p3, p4, i1, i2, i3, pool, construction };

export type Project = {
  id: string;
  name: string;
  location: string;
  price: string;
  status: "Ongoing" | "Completed" | "Upcoming";
  image: string;
  bhk: string;
  area: string;
  possession: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "azure-heights",
    name: "Azure Heights",
    location: "Bandra West, Mumbai",
    price: "₹ 4.8 Cr",
    status: "Ongoing",
    image: p1,
    bhk: "3 & 4 BHK",
    area: "1850 - 2650 sq.ft",
    possession: "Dec 2026",
    description:
      "A collection of 48 sky-residences with private sundecks, hotel-grade concierge and uninterrupted sea views.",
  },
  {
    id: "villa-solene",
    name: "Villa Solène",
    location: "Alibaug, Maharashtra",
    price: "₹ 12.5 Cr",
    status: "Completed",
    image: p2,
    bhk: "5 BHK Villas",
    area: "6200 sq.ft",
    possession: "Ready to Move",
    description:
      "Ten limited edition beachfront villas with private pools, courtyards and coconut groves.",
  },
  {
    id: "meridian-tower",
    name: "The Meridian",
    location: "Lower Parel, Mumbai",
    price: "₹ 6.9 Cr",
    status: "Ongoing",
    image: p3,
    bhk: "3, 4 & 5 BHK",
    area: "2100 - 3800 sq.ft",
    possession: "Jun 2027",
    description:
      "A 62-storey landmark tower with sky-lounge, infinity pool and a private members' club on the 40th floor.",
  },
  {
    id: "the-grove",
    name: "The Grove Townhomes",
    location: "Whitefield, Bangalore",
    price: "₹ 3.2 Cr",
    status: "Completed",
    image: p4,
    bhk: "4 BHK Duplexes",
    area: "2900 sq.ft",
    possession: "Ready to Move",
    description:
      "Low-rise, gated community of 36 duplex homes wrapped around a two-acre central green.",
  },
  {
    id: "coastal-mirage",
    name: "Coastal Mirage",
    location: "Goa",
    price: "On Request",
    status: "Upcoming",
    image: pool,
    bhk: "2 & 3 BHK Suites",
    area: "1400 - 2200 sq.ft",
    possession: "Launch 2026",
    description:
      "Beachfront branded residences with a rooftop infinity pool overlooking the Arabian Sea.",
  },
  {
    id: "regent-park",
    name: "Regent Park",
    location: "Golf Course Road, Gurugram",
    price: "On Request",
    status: "Upcoming",
    image: i1,
    bhk: "4 & 5 BHK",
    area: "3200 - 4500 sq.ft",
    possession: "Launch 2027",
    description:
      "A limited release of 24 mansion-floor residences with private lift lobbies and a members-only clubhouse.",
  },
];

export const gallery = [i1, i2, i3, pool, construction, p1, p2, p4];

export const testimonials = [
  {
    name: "Ananya Mehta",
    role: "Homeowner, Azure Heights",
    quote:
      "From the first site visit to handover, Aurelia delivered on every promise. The finishes are truly world class.",
    rating: 5,
  },
  {
    name: "Rohan Kapoor",
    role: "Investor",
    quote:
      "I have invested in three Aurelia projects. The construction quality and appreciation have exceeded expectations.",
    rating: 5,
  },
  {
    name: "Priya & Arjun Nair",
    role: "Homeowners, The Grove",
    quote:
      "Our townhome feels like a bespoke home rather than a project unit. The design team listened to every detail.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "How do I book a site visit?",
    a: "Use the booking form on this page or call our concierge. A relationship manager will accompany you and arrange transport if required.",
  },
  {
    q: "Are your projects RERA registered?",
    a: "Yes. Every Aurelia project is RERA registered. Certificates and approvals are shared during your first consultation.",
  },
  {
    q: "Do you offer home loan assistance?",
    a: "We partner with leading private and nationalised banks to offer pre-approved loans at preferential rates for our residents.",
  },
  {
    q: "What is included in the maintenance?",
    a: "24x7 concierge, valet, security, landscaping, clubhouse access and periodic facade upkeep are all covered under the maintenance charge.",
  },
];
