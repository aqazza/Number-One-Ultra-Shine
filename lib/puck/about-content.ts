import type {
  AboutHeroProps,
  StatsBandProps,
  StandardsProps,
  TimelineProps,
  FamilyNoteProps,
} from "@/components/about/sections"

// The CURRENT About page content, verbatim. Single source of truth used for:
//  1. Puck defaultProps (what a freshly inserted block contains)
//  2. The database seed, so the live page is pixel-identical pre/post Puck.

export const ABOUT_HERO: AboutHeroProps = {
  eyebrow: "Family-owned since 1995",
  heading: "A family shop that treats every car",
  headingAccent: "like its own.",
  para1:
    "Number One Ultra Shine opened its doors in Glendora in 1995. More than thirty years later, we're still here, same care, same standards, the same belief that a properly detailed car is worth doing right.",
  para2:
    "We're not a conveyor wash. Every vehicle is washed, clayed, polished and protected by hand, by people who take pride in the finish.",
  signName: "The Ultra Shine family",
  signRole: "Owners & detailers, Glendora CA",
  mainImg: "/photos/detailing-station.webp",
  mainImgAlt: "Detailer hand-finishing a car in the Glendora shop",
  subImg: "/photos/closeup-care-1.webp",
  subImgAlt: "Close-up of hand polishing work",
  badgeNumber: "30+",
  badgeLabel: "Years on Route 66",
  ghostYear: "1995",
}

export const STATS_BAND: StatsBandProps = {
  stats: [
    { n: "30+", l: "Years detailing" },
    { n: "10,000+", l: "Cars hand-finished" },
    { n: "5.0★", l: "Customer rating" },
    { n: "1", l: "Family, since day one" },
  ],
}

export const STANDARDS: StandardsProps = {
  eyebrow: "What we stand for",
  heading: "Our standards",
  intro: "Three commitments that have kept customers coming back for thirty years.",
  cards: [
    {
      t: "Done by hand",
      p: "No automated tunnels. Every wash, polish and coating is applied by an experienced detailer who treats your paint like their own.",
      stat: "0 automated tunnels",
      img: "/photos/closeup-care-1.webp",
    },
    {
      t: "Eco-conscious",
      p: "Biodegradable products and water-reclamation practices that respect Glendora, its water, and its people.",
      stat: "100% biodegradable",
      img: "/photos/exterior-wash.webp",
    },
    {
      t: "Premium products",
      p: "Only high-quality compounds, waxes and ceramic coatings, the stuff that actually lasts past the first rain.",
      stat: "5-yr ceramic protection",
      img: "/photos/closeup-care-2.webp",
    },
  ],
}

export const TIMELINE: TimelineProps = {
  eyebrow: "Our story",
  heading: "Three decades on Route 66",
  items: [
    {
      yr: "1995",
      t: "Where it all started",
      p: "We opened on Route 66 with one bay, a few buckets, and a simple promise: treat every car that rolls in like it's our own. Three decades later, that promise hasn't changed.",
      img: "/photos/detailing-station.webp",
      hl: "Founded on Route 66 in Glendora, California.",
    },
    {
      yr: "2000s",
      t: "Our regulars became family",
      p: "Folks started bringing us their daily drivers, their weekend toys, and the cars they'd had since high school. They trusted us to keep them looking their best, and we've never taken that for granted.",
      img: "/photos/exterior-wash.webp",
      hl: "A reputation built entirely on word of mouth.",
    },
    {
      yr: "2010s",
      t: "We grew with you",
      p: "As you asked for more, we learned more, adding paint correction and long-lasting ceramic coatings so your car stays protected and shining long after you leave our shop.",
      img: "/photos/closeup-care-2.webp",
      hl: "Added paint correction and ceramic coatings.",
    },
    {
      yr: "Today",
      t: "Still the same family",
      p: "You'll still find us behind the buffer, finishing every car by hand. We know most of our customers by name, and there's no better feeling than handing back the keys to a car that looks brand new. We'd love to add you to the family.",
      img: "/photos/interior-cleanup.webp",
      hl: "Still 100% family-run, three decades on.",
    },
  ],
}

export const FAMILY_NOTE: FamilyNoteProps = {
  photo: "/photos/family-detailing.webp",
  photoAlt:
    "A Number One Ultra Shine detailer cleaning a luxury car seat with a detailing brush and foam",
  quote: "When a car leaves our bay, it leaves the way we'd want our own to:",
  quoteAccent: "nothing rushed, nothing skipped.",
  copy:
    "Two generations have worked these bays on Route 66. We learned the trade from the people who started it, and we still hand-finish every car the way they taught us. Hand us your keys and you're trusting family. We don't take that lightly.",
  signName: "From our team",
}
