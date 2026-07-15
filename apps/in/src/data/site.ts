/** Content for the Indiefluence 2026 redesign. Copy sourced from DESIGN.md + indiefluence-v2.html. */

export const CONTACT = {
  email: "venu@indiefluence.in",
  phone: "+91 98177 42069",
  phoneHref: "tel:+919817742069",
  whatsapp: "https://wa.me/919817742069",
  address: "Plot 151, Sector-2 Industrial Area, Kurukshetra, Haryana, 136118",
  countries: "India · UK · US · Canada · UAE · Australia · Singapore",
  calUrl: "https://cal.com/venugopalsinghal",
  timesUrl: "https://times.indiefluence.in/",
  socials: {
    instagram: "https://www.instagram.com/indiefluence/",
    linkedin: "https://www.linkedin.com/company/indiefluence-in/",
    youtube: "https://www.youtube.com/channel/UCC7A-hWxioKtSav0j6C2u1A",
    facebook: "https://www.facebook.com/indiefluence/",
  },
};

export const CAPABILITIES = [
  "Social media",
  "Influencer marketing",
  "Content studio",
  "Performance",
  "Brand strategy",
  "Web & software",
  "Gen-AI production",
  "B2B growth",
];

export type Audience = {
  key: string;
  label: string;
  kicker: string;
  title: string;
  body: string;
  tags: string[];
};

export const WHO_WE_HELP: Audience[] = [
  {
    key: "d2c",
    label: "A D2C brand",
    kicker: "For direct-to-consumer",
    title: "You've built something people love. Let's build the demand.",
    body: "We turn a good product into a growth system: brand, content, creators and performance working as one, so every rupee of spend compounds instead of leaking.",
    tags: ["Brand", "Content studio", "Influencer", "Performance"],
  },
  {
    key: "startup",
    label: "Building a startup brand",
    kicker: "For founders",
    title: "From a blank page to a brand people believe in.",
    body: "Naming, identity, story, website and launch. We give early-stage companies the clarity and credibility that make customers, and investors, lean in.",
    tags: ["Brand strategy", "Identity", "Website", "Launch campaign"],
  },
  {
    key: "intl",
    label: "Going international",
    kicker: "For expansion",
    title: "Take your story into new markets, properly.",
    body: "Expanding into the UK, US, UAE, Canada, Australia or Singapore? We localise the message and run the growth, so you land like a local, not a tourist.",
    tags: ["Go-to-market", "Localised content", "Performance", "PR"],
  },
  {
    key: "influencer",
    label: "Hyperlocal influencer marketing",
    kicker: "For reach with trust",
    title: "The right local voices, measured on trust.",
    body: "City-level creator campaigns from a vetted database across Haryana and beyond. We match brands to voices their audience actually believes, and prove the effect.",
    tags: ["Creator sourcing", "Campaign management", "UGC", "Reporting"],
  },
  {
    key: "software",
    label: "Need custom software",
    kicker: "For product & web",
    title: "Design and engineering, under one roof.",
    body: "From a marketing site that converts to a full product or an internal tool that saves your team hours a week. We design it, build it, and stand behind it.",
    tags: ["Web development", "Product", "AI tools", "UX"],
  },
  {
    key: "b2b",
    label: "A B2B company",
    kicker: "For long sales cycles",
    title: "Patient, precise marketing that builds pipeline.",
    body: "Complex sales need positioning that lands and outreach that respects people's time. We build demand for businesses that sell to businesses.",
    tags: ["Positioning", "Outbound", "Content", "Account-based"],
  },
  {
    key: "genai",
    label: "Gen-AI videos & campaigns",
    kicker: "For volume & speed",
    title: "AI-native production, at a pace shoots can't match.",
    body: "Concepts, scripts and campaign-ready video produced with generative tools and a human editor's judgement. Test more angles, in more markets, for less.",
    tags: ["AI video", "Concepts", "Campaigns", "Localisation"],
  },
];

export const SERVICES = [
  {
    n: "01",
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    desc: "Building visibility and engagement across the platforms that matter, with creative, data-informed strategy.",
  },
  {
    n: "02",
    title: "Influencer Marketing",
    slug: "influencer-marketing",
    desc: "Matching brands to creators their audience trusts, and giving those creators what they need to represent you well.",
  },
  {
    n: "03",
    title: "Content Creation",
    slug: "content-creation",
    desc: "An in-house studio for reels, voiceovers and creative that's made to be watched, not scrolled past.",
  },
  {
    n: "04",
    title: "Outbound Marketing",
    slug: "outbound-marketing",
    desc: "Ads, cold outreach and direct campaigns that reach the right people, without wasting theirs or your time.",
  },
  {
    n: "05",
    title: "Website Development",
    slug: "website-development",
    desc: "Intuitive, well-made websites that improve how people experience, and remember, your brand.",
  },
  {
    n: "06",
    title: "B2B Marketing",
    slug: "b2b-marketing",
    desc: "Analytics and considered content for the longer, more complex sales that define business-to-business.",
  },
  {
    n: "07",
    title: "Graphic Designing",
    slug: "graphic-designing",
    desc: "Designers and editors who show your brand online in its best possible light, consistently.",
  },
  {
    n: "08",
    title: "Brand Management",
    slug: "brand-management",
    desc: "Consultation and stewardship to keep your brand's ideology and its collateral pulling in the same direction.",
  },
];

/** Services regrouped around business outcomes for the /services index (DESIGN.md). */
export const SERVICE_GROUPS: {
  n: string;
  title: string;
  desc: string;
  slugs: string[];
  href?: string;
}[] = [
  {
    n: "01",
    title: "Social & influencer marketing",
    desc: "Visibility where your audience actually spends time, from platform strategy to the local voices they trust.",
    slugs: ["social-media-marketing", "influencer-marketing"],
  },
  {
    n: "02",
    title: "Content, creative & brand systems",
    desc: "An in-house studio and design team that keeps everything you publish coherent, watchable and unmistakably yours.",
    slugs: ["content-creation", "graphic-designing", "brand-management"],
  },
  {
    n: "03",
    title: "Web, software & product builds",
    desc: "Websites and products designed and engineered under one roof, built to convert and made to last.",
    slugs: ["website-development"],
  },
  {
    n: "04",
    title: "B2B growth & outbound",
    desc: "Positioning, content and outreach for the longer, more considered sales that define business-to-business.",
    slugs: ["b2b-marketing", "outbound-marketing"],
  },
  {
    n: "05",
    title: "Gen-AI campaigns & automation",
    desc: "AI-native video, campaigns and custom software, applied where the technology earns its place.",
    href: "/ai-solutions",
    slugs: [],
  },
];

const CDN = "https://res.cloudinary.com/dy47yif3w/image/upload/";

export const CLIENT_LOGOS = [
  ["Royal Enfield", "v1756287206/indiefluence/assets/client-logo/royal-enfield_qdxn0l.svg"],
  ["Renault", "v1756285537/indiefluence/assets/client-logo/renault_qx7xyu.svg"],
  ["LG", "v1756285508/indiefluence/assets/client-logo/lg_tfut4a.svg"],
  ["Myro", "v1756285522/indiefluence/assets/client-logo/myro_t3vuzq.svg"],
  ["Pawgloo", "v1758343027/indiefluence/assets/client-logo/pawgloo_gzq4bg.png"],
  ["Genesis Classes", "v1756285583/indiefluence/assets/client-logo/genesis-classes_gh5qbl.svg"],
  ["Genesis School", "v1756285585/indiefluence/assets/client-logo/Genesis-school_h6rogk.svg"],
  ["Diplast", "v1756285574/indiefluence/assets/client-logo/Diplast_uva00n.svg"],
  ["Sqilco", "v1756285553/indiefluence/assets/client-logo/Sqilco_rdw146.svg"],
  ["Krossfix", "v1756285506/indiefluence/assets/client-logo/krossfix_euw32h.svg"],
  ["Modvak", "v1756285514/indiefluence/assets/client-logo/modvak_uqufew.svg"],
  ["Padama Energy", "v1756285527/indiefluence/assets/client-logo/padama-energy_ldk9r9.svg"],
  ["Nidas Pure", "v1756285530/indiefluence/assets/client-logo/nidas-pure_tqyxx2.svg"],
  ["Rabbit", "v1756285533/indiefluence/assets/client-logo/rabbit_bpwfkb.svg"],
  ["Resdac", "v1756285541/indiefluence/assets/client-logo/resdac_ufwur2.svg"],
  ["Ananthagram", "v1756285559/indiefluence/assets/client-logo/ananthagram_dutjbk.svg"],
  ["Chalet", "v1756287205/indiefluence/assets/client-logo/chalet_jqizr4.svg"],
  ["Gold Star", "v1756285585/indiefluence/assets/client-logo/goldstar_ibjhzj.svg"],
  ["Pratham", "v1756285530/indiefluence/assets/client-logo/Pratham_kutsm7.svg"],
  ["Indie Garage", "v1756287079/indiefluence/assets/client-logo/Garage_-1_jwaoag.svg"],
].map(([name, path]) => ({ name, src: `${CDN}${path}` }));

/** Real Instagram reel previews produced by the in-house studio (Cloudinary MP4s). */
export const STUDIO_REELS = [
  "https://res.cloudinary.com/dy47yif3w/video/upload/v1756294286/indiefluence/assets/mute-box-mp4/Coffeelelo_trjeha.mp4",
  "https://res.cloudinary.com/dy47yif3w/video/upload/v1756294267/indiefluence/assets/mute-box-mp4/NoHumanswere_kqbgiy.mp4",
  "https://res.cloudinary.com/dy47yif3w/video/upload/v1756294250/indiefluence/assets/mute-box-mp4/IntroducingPMC_e2hk4n.mp4",
  "https://res.cloudinary.com/dy47yif3w/video/upload/v1756294287/indiefluence/assets/mute-box-mp4/MeetMYRO_hlrdau.mp4",
  "https://res.cloudinary.com/dy47yif3w/video/upload/v1756294318/indiefluence/assets/mute-box-mp4/Vandey_xbfowk.mp4",
  "https://res.cloudinary.com/dy47yif3w/video/upload/v1756294392/indiefluence/assets/mute-box-mp4/10Xfaster_efc2nm.mp4",
  "https://res.cloudinary.com/dy47yif3w/video/upload/v1756294255/indiefluence/assets/mute-box-mp4/Honored_zlwgjg.mp4",
  "https://res.cloudinary.com/dy47yif3w/video/upload/v1756294297/indiefluence/assets/mute-box-mp4/Savdhaan_vrgshm.mp4",
  "https://res.cloudinary.com/dy47yif3w/video/upload/v1756294308/indiefluence/assets/mute-box-mp4/GenesisClass_neohtc.mp4",
  "https://res.cloudinary.com/dy47yif3w/video/upload/v1756294258/indiefluence/assets/mute-box-mp4/BuilttoHold_cwyr7g.mp4",
];

export const NAV_LINKS = [
  { label: "Who we help", href: "/#who" },
  { label: "Work", href: "/work" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
