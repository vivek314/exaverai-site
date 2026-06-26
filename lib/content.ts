/**
 * Central content/config for the site. Edit names, copy, and lists here —
 * every section reads from this file so the brand can be re-themed in one place.
 */

import {
  Bot,
  Workflow,
  Phone,
  Share2,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "Automate Flow",
  email: "hello@automateflow.example",
  bookingUrl: "#contact",
  tagline: "Automate with AI",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About Us", href: "#about" },
];

export const hero = {
  eyebrow: brand.name,
  titleLine1: "Transform Your Business",
  titleLine2: "with AI Automation",
  subtitle:
    "Custom AI systems for businesses ready to cut costs, streamline ops, and scale fast.",
  primaryCta: { label: "Explore Systems", href: "#services" },
  secondaryCta: { label: "Book a Call", href: "#contact" },
};

export const stats = [
  { value: 40, suffix: "+", label: "AI Systems Deployed" },
  { value: 7, suffix: "X", label: "Avg. ROI Per Project" },
  { value: 12, suffix: "+", label: "Verticals Transformed" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const servicesIntro = {
  title: "AI Systems Built for Impact",
  body: "Built for teams ready to move fast, cut waste, and win bigger with AI. Get fully-built, battle-tested AI systems—done right, delivered fast.",
};

export const services: Service[] = [
  {
    title: "Autonomous AI Agents",
    description:
      "The agentic era has begun. These systems don’t just automate—they act. One entry point, one instruction, then wait. Results show up. No micromanaging. They work round the clock—so you don’t have to.",
    icon: Bot,
  },
  {
    title: "Workflow Automations",
    description:
      "No inputs needed. These automations run on their own—daily, weekly, or on triggers. From analysing data and generating reports to sending invoices or onboarding clients—done before Monday.",
    icon: Workflow,
  },
  {
    title: "AI Voice Agents",
    description:
      "Inbound or outbound—AI voice agents talk to your leads and customers in real-time. They answer, qualify, remind, and follow up—so you don’t have to. The standard for modern business communication.",
    icon: Phone,
  },
  {
    title: "Social Media AI Systems",
    description:
      "AI handles your content, comments, and conversations. It writes, schedules, replies, and even reaches out. Your AI system works the platform while you run the business.",
    icon: Share2,
  },
];

export const shiftCta = {
  title: "The Shift to AI Is Happening. Are You In?",
  body: "Our team of AI experts will analyze your business needs and design a customized AI adoption strategy to maximize your ROI — or we tailor around your vision and build fast.",
  cta: { label: "Schedule a Strategy Call", href: "#contact" },
};

export const process = {
  title: "Your Journey With Us",
  steps: [
    {
      badge: "1",
      title: "Initial Consultation",
      body: "Our AI consultants work closely with your team to understand your ideas, assess what’s possible, uncover inefficiencies, and define the best-fit systems for your goals.",
    },
    {
      badge: "2",
      title: "Custom Solution Design",
      body: "A dedicated team of AI experts builds and rigorously tests custom solutions designed to scale with your business.",
    },
    {
      badge: "3",
      title: "Implementation & Training",
      body: "We implement, train, and hand over fully functional AI systems—seamlessly integrated and ready to deliver results.",
    },
  ],
};

export const integrations = {
  eyebrow: "Tools Built for Speed",
  title: "Your team deserves better tools",
  subtitle: "Seamlessly integrate with leading platforms",
  logos: [
    "OpenAI",
    "Slack",
    "Notion",
    "HubSpot",
    "Zapier",
    "Airtable",
    "Make",
    "Stripe",
    "Gmail",
    "Twilio",
  ],
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonialsIntro = {
  title: "What Our Clients Say",
  body: "Hear from business leaders who have transformed their operations with our AI solutions.",
};

export const testimonials: Testimonial[] = [
  {
    name: "Andrew Parker",
    role: "Product Manager",
    quote:
      "I've worked with many people, but this team stands out. Their approach is clear, precise, and always focused on delivering real value.",
  },
  {
    name: "Alfa Peterson",
    role: "Operations Lead",
    quote:
      "The process was very hands-off, yet the impact was huge. They didn't just automate—we saw growth.",
  },
  {
    name: "Marco Alvarez",
    role: "CTO",
    quote:
      "They brought an energy and insight that we needed. The automation implementation was seamless, and the results were immediate. Highly recommended!",
  },
  {
    name: "Terell Harris",
    role: "Head of Operations",
    quote:
      "The team is exceptional. They really took the time to understand our needs and delivered a system that just works, no hassle.",
  },
  {
    name: "Juho Virtanen",
    role: "CEO",
    quote:
      "Their dedication and expertise are unmatched. They made complex AI solutions easy to understand and implement. A true professional team.",
  },
  {
    name: "Kyle Thompson",
    role: "Marketing Director",
    quote:
      "They not only automated our operations but also provided constant support and clarity throughout the journey.",
  },
];

export type AboutCategory = {
  badge: string;
  title: string;
  subtitle: string;
};

export const about = {
  title: "About Us",
  categories: [
    { badge: "1", title: "Direct B2B Projects", subtitle: "Business AI implementation" },
    { badge: "2", title: "Agency Partnerships", subtitle: "Collaborative solutions" },
    { badge: "3", title: "AI Education", subtitle: "Training & workshops" },
    { badge: "4", title: "AI Consulting", subtitle: "Strategic advisory" },
  ] as AboutCategory[],
  prompt: "Click on the one that suits you",
  founderName: "Alex",
  bio: "Hey, it's Alex. I'm the founder of Automate Flow. As the name suggests, we aim to 'Automate with AI'. Automation is nothing new, but AI automation is—think of it as automation on steroids. With this technology you can build a workforce that never sleeps or needs coffee. It works 24/7/365 without demanding a raise. We've automated tiring manual processes that saved businesses hundreds of hours annually. AI isn't about taking jobs—it's about supercharging humans to get more done in less time. A task that took 95 minutes can now be done in 5. The Industrial Revolution transformed production, the Internet revolutionized connectivity, and now the AI Revolution is reshaping how work is automated and scaled. If you understand the value AI and automation bring, let's chat.",
  marqueeText: "BUILT BY ALEX. WATCHED BY THOUSANDS.",
};

export const finalCta = {
  titleLine1: "Transform Your Business",
  titleLine2: "with AI Automation",
  cta: "Get Started Today",
};

export const footer = {
  blurb:
    "Premium AI automation solutions for established businesses seeking to optimize operations and drive growth.",
  columns: [
    {
      heading: "Solutions",
      links: [
        "Autonomous AI Agents",
        "Workflow Automations",
        "AI Voice Agents",
        "Social Media AI Systems",
      ],
    },
    {
      heading: "Company",
      links: ["Home", "Services", "Process", "Testimonials", "About Us"],
    },
  ],
  contactHeading: "Contact",
  copyright: `© ${new Date().getFullYear()} ${brand.name}. All rights reserved.`,
};
