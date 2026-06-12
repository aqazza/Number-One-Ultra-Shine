import type { HeroProps } from "@/components/site/hero"
import type { TrustBarProps, AboutTeaserProps, WhyUsProps } from "@/components/site/home-sections"
import type { ServicesProps } from "@/components/site/services"
import type { ReviewsProps } from "@/components/site/reviews"
import type { HomeContactProps } from "@/components/site/contact"

// The CURRENT home page content, verbatim — Puck defaults + DB seed source.

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo."

export const HOME_HERO: HeroProps = {
  eyebrow: "Detailing Excellence Since 1995",
  headingTop: "Your car, finished",
  headingMid: "to a",
  headingAccent: "flawless shine.",
  lead: "Thirty years of hand-finished detailing on Route 66 in Glendora, done with care.",
  primaryCta: "Book Today",
  secondaryCta: "View Services",
  videos: [
    { src: "/videos/wash.mp4", poster: "/photos/exterior-wash.webp" },
    { src: "/videos/polish.mp4", poster: "/photos/detailing-station.webp" },
    { src: "/videos/interior.mp4", poster: "/photos/closeup-care-1.webp" },
  ],
  statNumber: "30+",
  statLabel: "Years of craft",
}

export const HOME_TRUST: TrustBarProps = {
  items: [
    { ic: "award", t: "Satisfaction guaranteed" },
    { ic: "sprout", t: "Eco-friendly products" },
    { ic: "spray-can", t: "Hand-finished detail" },
    { ic: "map-pinned", t: "Glendora, CA" },
  ],
}

export const HOME_SERVICES: ServicesProps = {
  eyebrow: "What we do",
  heading: "Services built around your vehicle",
  intro:
    "Four ways we make your car shine. Tap any one to see what's included. Pricing arrives soon.",
  services: [
    {
      icon: "sparkles",
      title: "Interior Detailing",
      img: "/photos/interior-cleanup.webp",
      href: "/services/interior-detailing",
      blurb:
        "A complete cabin reset: vacuumed, shampooed, and hand-wiped until every surface looks and feels new.",
      details: LOREM,
      subs: [
        { nm: "Interior Express", ds: "Vacuum, full wipe-down & glass" },
        { nm: "Seats Shampoo", ds: "Deep shampoo & hot-water extraction" },
        { nm: "Carpet Shampoo", ds: "Carpets, mats & footwells" },
        {
          nm: "Full Interior Detail",
          ds: "Interior Express, Seats Shampoo & Carpet Shampoo combined",
          featured: true,
        },
      ],
    },
    {
      icon: "car",
      title: "Exterior",
      img: "/photos/exterior-wash.webp",
      href: "/services/exterior",
      blurb:
        "Decontaminate, correct, and protect your paint for a deep, mirror-like finish that lasts.",
      details: LOREM,
      subs: [
        { nm: "Clay & Spray Wax", ds: "Decontaminate & quick-protect the paint" },
        { nm: "Clay & Hand Wax", ds: "Clay bar followed by a hand-applied wax" },
        { nm: "Full Exterior Detail", ds: "Wash, clay, polish & protect", featured: true },
        { nm: "Paint Correction (Polishing)", ds: "Multi-stage cut to remove swirls & oxidation", featured: true },
      ],
    },
    {
      icon: "droplets",
      title: "Full Details",
      img: "/photos/detailing-station.webp",
      href: "/services/full-details",
      note: "Interior + Exterior combined, our most complete package.",
      blurb:
        "Everything we do, in one visit. Interior and exterior services combined for the most complete transformation.",
      details: LOREM,
      subs: [
        {
          nm: "Full Interior Detail & Full Exterior Detail",
          ds: "Everything inside and out, fully detailed in one visit.",
        },
      ],
    },
    {
      icon: "shield-check",
      title: "Ceramic Coating",
      img: "/photos/services/ceramic-beading.webp",
      href: "/services/ceramic-coating",
      note: "A long-term coating, not a wax. Lasting gloss & protection.",
      blurb:
        "A durable ceramic layer that bonds to your paint, with years of gloss, water-beading, and easier washes.",
      details: LOREM,
      subs: [
        { nm: "1-Year Protection", ds: "Entry ceramic coating with strong gloss" },
        { nm: "3-Year Protection", ds: "Durable multi-layer coating", featured: true },
        { nm: "4-Year Protection", ds: "Our longest-lasting ceramic protection" },
      ],
    },
  ],
}

export const HOME_ABOUT_TEASER: AboutTeaserProps = {
  imgs: [
    { src: "/photos/interior-cleanup.webp" },
    { src: "/photos/closeup-care-1.webp" },
    { src: "/photos/closeup-care-2.webp" },
    { src: "/photos/detailing-station.webp" },
  ],
  badgeNumber: "30+",
  badgeLabel: "Years experience",
  eyebrow: "Our story",
  heading: "Three decades of detailing, one family.",
  para1:
    "Founded in 1995, Number One Ultra Shine has kept Glendora's vehicles looking their best for over thirty years. We take pride in our attention to detail and our commitment to every customer who pulls in.",
  para2:
    "Our experienced team uses only high-quality products and equipment, so your vehicle gets the careful, hand-finished work it deserves.",
  primaryCta: "More about us",
  secondaryCta: "View gallery",
}

export const HOME_WHY: WhyUsProps = {
  eyebrow: "The #1 Ultra Shine difference",
  heading: "Why choose us",
  intro: "Three decades of craft, real care, and a guarantee that backs every detail.",
  cards: [
    {
      ic: "eco-drop",
      n: "01",
      t: "Eco-Friendly",
      p: "Biodegradable, environmentally safe products and water-reclamation practices that minimize our impact.",
      stat: "100% biodegradable",
      accent: "var(--success)",
    },
    {
      ic: "buff-swirl",
      n: "02",
      t: "Careful Craft",
      p: "We take the time to do it right, hand-finished work with honest turnaround, never rushed.",
      stat: "30 yrs hand-finished",
      accent: "var(--shine-cyan)",
    },
    {
      ic: "guard-seal",
      n: "03",
      t: "Satisfaction Guaranteed",
      p: "If you're not completely happy with the result, we'll make it right. Your satisfaction comes first.",
      stat: "100% satisfaction",
      accent: "var(--warning)",
    },
  ],
}

export const HOME_REVIEWS: ReviewsProps = {
  eyebrow: "Kind words",
  heading: "Loved by Glendora drivers",
  intro: "Real results, real reviews, three decades of happy customers.",
  ratingValue: "4.6",
  ratingNote: "Based on 381 reviews",
  reviews: [
    { q: "I'm a new monthly member and have been really impressed with this car wash. It's efficient, never overly crowded, and always gets the job done well. The staff is friendly, and the vacuum areas are consistently clean.", nm: "M C", when: "5 days ago", av: "MC", c: "#8d6e63" },
    { q: "Come here at least once a week. The free vacuum for customers is a big plus!", nm: "Joshua Casper", when: "10 months ago", av: "JC", c: "#1a73e8" },
    { q: "All is good here. Friendly and reasonable. Get the all-you-can-wash deal!", nm: "Kousha Zarnegar", when: "2 months ago", av: "KZ", c: "#0b8043" },
    { q: "Awesome price after 5pm, $6 to wash your vehicle. They have other services too.", nm: "Jesse B Butanda", when: "2 months ago", av: "JB", c: "#c5221f" },
    { q: "Nice place to wash your car, pay by the month. Good price too.", nm: "Pedro Ontiveros", when: "10 months ago", av: "PO", c: "#e37400" },
    { q: "Great customer service 💯", nm: "Jane Marquez McCaleb", when: "11 months ago", av: "JM", c: "#9334e6" },
    { q: "Nice and affordable!", nm: "Martin", when: "10 months ago", av: "M", c: "#1a73e8" },
    { q: "Am new here, so far so good.", nm: "Sal Medina", when: "10 months ago", av: "SM", c: "#c5221f" },
  ],
}

export const HOME_CONTACT: HomeContactProps = {
  eyebrow: "Let's connect",
  heading: "Book your detail",
  intro: "Drop by, give us a call, or send a message. We'd love to help your vehicle shine.",
  infoTitle: "Visit or reach out",
  formTitle: "Send a message",
  details: {
    phone: "(626) 629-4916",
    address: "525 E Route 66, Glendora, CA 91740",
    email: "1ultrashine@gmail.com",
  },
}
