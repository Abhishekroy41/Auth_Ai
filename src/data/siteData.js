// ─── SITE CONFIGURATION ───────────────────────────────────────────────────────
// Edit this file to update all content across the site.

export const SITE = {
  name: 'AUTH AI',
  tagline: 'AI-Powered Growth for Tier 2 & Tier 3 India',
  description:
    'AUTH AI is a Meta Official Partner delivering AI-first WhatsApp automation, Google presence, content, ads and SEO for Tier 2 and Tier 3 Indian businesses — one team, one invoice.',
  domain: 'authai.space',
  waDesk: 'https://wadesk.authai.space',
  whatsappNumber: '917004668359',
  whatsappLink: (msg = "Hi AUTH AI, I'd like to know more") =>
    `https://wa.me/917004668359?text=${encodeURIComponent(msg)}`,
  email: 'info@authai.space',
  phone: '+91 70046 68359',
  location: 'Dhanbad, Jharkhand',
  hours: 'Mon – Sat, 10am – 7pm',
  year: 2026,
}

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'About', href: '#about' },
]

// ─── WHY CARDS ────────────────────────────────────────────────────────────────
export const WHY_CARDS = [
  {
    id: 'one-team',
    icon: 'Workflow',
    title: 'One team, one invoice',
    body: 'Strategy, AI, content, ads and SEO — handled together so nothing falls through the cracks between vendors.',
  },
  {
    id: 'tier3',
    icon: 'MapPin',
    title: 'We know Tier 3',
    body: 'Your market, your language and how your customers actually search, ask and buy — because we work here too.',
  },
  {
    id: 'always-on',
    icon: 'Bot',
    title: 'Always-on AI',
    body: 'Every enquiry gets an instant reply and a follow-up sequence — 24/7, without you lifting a finger.',
  },
  {
    id: 'numbers',
    icon: 'Target',
    title: 'Numbers, not noise',
    body: 'Every rupee is tracked against real outcomes — leads, bookings, calls and rankings — not vanity metrics.',
  },
]

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const SERVICE_GROUPS = [
  {
    label: 'Visibility & Presence',
    services: [
      {
        icon: 'MapPin',
        title: 'Google Business Profile',
        body: 'Full setup, weekly local-keyword posts, review generation and same-day responses.',
      },
      {
        icon: 'Search',
        title: 'SEO + Vernacular SEO',
        body: 'On-page SEO for 5 pages, 2 blog articles, and local-language SEO content every month.',
      },
      {
        icon: 'Globe',
        title: 'Website Development',
        body: 'A mobile-first site with a WhatsApp button, contact form and basic SEO built in.',
      },
    ],
  },
  {
    label: 'Content & Creative',
    services: [
      {
        icon: 'Film',
        title: 'UGC Content Creation',
        body: 'Videos, reels and social posts every month, scripted in Hindi or your local language.',
      },
      {
        icon: 'Video',
        title: 'Video Editing',
        body: 'Timeline editing, colour grading, music, captions and export in every format you need.',
      },
      {
        icon: 'Radio',
        title: 'WhatsApp Broadcast Campaigns',
        body: 'Strategy, segmentation, broadcasts with media, and a delivery & read-rate report.',
      },
    ],
  },
  {
    label: 'AI & Automation',
    services: [
      {
        icon: 'MessageSquare',
        title: 'AI Chatbot + WhatsApp Automation',
        body: 'Website + WhatsApp bot with a 5-step follow-up sequence, trained on your FAQs and objections.',
      },
      {
        icon: 'Bot',
        title: 'Industry-Specific AI Bot',
        body: 'A bot trained on your exact business, with Hindi support and booking integration. Live in 72 hours.',
      },
      {
        icon: 'Workflow',
        title: 'CRM Automation',
        body: 'Pipeline design, automated follow-ups, lead scoring and a reporting dashboard.',
      },
      {
        icon: 'Settings',
        title: 'Business Automation (Custom)',
        body: 'Process mapping and workflow automation connecting WhatsApp, CRM, sheets and email.',
      },
      {
        icon: 'Layers',
        title: 'White-label AI Systems',
        body: 'Our AI stack under your brand — dashboard access and onboarding docs included.',
      },
    ],
  },
  {
    label: 'Advertising',
    services: [
      {
        icon: 'Megaphone',
        title: 'Meta Ads (Lead Generation)',
        body: 'Facebook & Instagram campaigns, new creatives every month, with A/B testing and weekly optimisation.',
      },
      {
        icon: 'Search',
        title: 'Google Ads',
        body: 'Search & display campaigns with keyword research, conversion tracking and weekly check-ins.',
      },
      {
        icon: 'Tv',
        title: 'OTT / JioHotstar Ads',
        body: 'Account setup, geo-targeting, ad formatting for OTT and post-campaign reporting.',
      },
      {
        icon: 'Clapperboard',
        title: 'Cinema Advertising (PVR/INOX)',
        body: 'Screen selection by city & footfall, slot booking, formatting and proof-of-play reporting.',
      },
    ],
  },
  {
    label: 'Infrastructure',
    services: [
      {
        icon: 'Server',
        title: 'Domain Registration',
        body: 'Availability check, registration, DNS setup, auto-renewal and privacy protection.',
      },
      {
        icon: 'HardDrive',
        title: 'Web Hosting',
        body: 'Hosting setup, SSL, migration if needed, uptime monitoring and weekly backups.',
      },
    ],
  },
]

// ─── INDUSTRIES ───────────────────────────────────────────────────────────────
export const INDUSTRIES = [
  'Clinic / Doctor', 'Dental Clinic', 'Coaching Institute', 'School Admissions',
  'Real Estate Broker', 'Builder / Developer', 'Car Showroom', 'Auto Service Centre',
  'Salon / Parlour', 'Spa & Wellness', 'Gym / Fitness', 'Restaurant',
  'Cloud Kitchen', 'Jewellery Shop', 'Clothing / Retail', 'Electronics Shop',
  'CA / Tax Consultant', 'Insurance Agent', 'Travel Agent', 'Event Planner',
  'Plumber / Electrician', 'Packers & Movers', 'Lawyer / Advocate', 'Diagnostic Lab',
]

// ─── PROCESS STEPS ────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discover',
    body: 'We learn about your business, customers and current online presence on a quick WhatsApp or call.',
  },
  {
    num: '02',
    title: 'Set Up',
    body: 'We configure your Google profile, AI bot, content calendar and ad accounts — tailored to your industry.',
  },
  {
    num: '03',
    title: 'Launch',
    body: 'Your AI assistant goes live on WhatsApp and your website, replying to enquiries within seconds.',
  },
  {
    num: '04',
    title: 'Optimise',
    body: 'We track leads, bookings and rankings, and refine campaigns and content every month.',
  },
]

// ─── RESULTS ──────────────────────────────────────────────────────────────────
export const RESULTS = [
  { figure: '24/7', label: 'AI replies to every WhatsApp enquiry' },
  { figure: '<1 min', label: 'Average first-response time' },
  { figure: '5-step', label: 'Automated follow-up on every lead' },
  { figure: '1 dashboard', label: 'Conversations, leads & reports in one place' },
]

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    initial: 'R',
    quote:
      'Our WhatsApp used to pile up overnight. Now every enquiry gets an instant reply, even at midnight, and we wake up to confirmed bookings.',
    name: 'Dental Clinic Owner',
    location: 'Dhanbad, Jharkhand',
  },
  {
    initial: 'S',
    quote:
      'We finally stopped juggling five different freelancers. AUTH AI handles our Google profile, ads and content as one team with one report.',
    name: 'Coaching Institute Director',
    location: 'Ranchi, Jharkhand',
  },
  {
    initial: 'M',
    quote:
      'The AI bot speaks to our customers in Hindi exactly the way our staff would. It books appointments before we even pick up the phone.',
    name: 'Auto Service Centre Owner',
    location: 'Bokaro, Jharkhand',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    q: 'How quickly can my business go live?',
    a: 'Most setups — Google profile, AI bot and initial content — go live within 48–72 hours of onboarding, depending on the services chosen.',
  },
  {
    q: 'Do you only work with businesses in Jharkhand?',
    a: "No — we're based in Dhanbad, Jharkhand, but we serve Tier 2 and Tier 3 businesses across India. Everything is managed remotely through WhatsApp and our WA Desk dashboard.",
  },
  {
    q: 'What languages does the AI bot support?',
    a: 'Our AI bots support Hindi and regional languages alongside English, trained on your specific services, FAQs and pricing.',
  },
  {
    q: 'Can I track everything in one place?',
    a: 'Yes — every plan runs on WA Desk, our own WhatsApp CRM, where you can see conversations, leads and reports anytime.',
  },
  {
    q: 'How do I get started?',
    a: "Message us on WhatsApp with a short description of your business, and we'll get back to you within the hour with a recommendation.",
  },
]

// ─── ABOUT STATS ──────────────────────────────────────────────────────────────
export const ABOUT_STATS = [
  {
    icon: 'ShieldCheck',
    title: 'Meta Official Partner',
    body: 'Verified to manage WhatsApp, Facebook & Instagram for your business',
  },
  {
    icon: 'Workflow',
    title: '17 services, one team',
    body: 'One invoice, no juggling multiple vendors or freelancers',
  },
  {
    icon: 'Bot',
    title: '24/7 AI replies',
    body: 'Every WhatsApp enquiry answered instantly, even at midnight',
  },
  {
    icon: 'MapPin',
    title: 'Built for Bharat',
    body: 'Hindi & regional language support across content, SEO and bots',
  },
]
