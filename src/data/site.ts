import {
  BookOpen,
  Code2,
  Megaphone,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = 'home' | 'about' | 'services' | 'work' | 'process' | 'contact';

export const NAV_ITEMS: NavItem[] = [
  'home',
  'about',
  'services',
  'work',
  'process',
  'contact',
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  accent: 'sun' | 'ink' | 'savanna' | 'emerald';
};

export const SERVICES: Service[] = [
  {
    icon: BookOpen,
    title: 'Training & Facilitation',
    description:
      'Workshops that engage your team to discover, create, and apply learning that sticks long after we leave the room.',
    highlights: ['Leadership labs', 'Capacity building', 'Soft-skills sprints'],
    accent: 'sun',
  },
  {
    icon: MessageSquare,
    title: 'Marketing & Sales',
    description:
      'We craft unified brand environments that convert browsers into buyers and customers into evangelists.',
    highlights: ['Brand storytelling', 'Campaign design', 'Sales enablement'],
    accent: 'ink',
  },
  {
    icon: Megaphone,
    title: 'Event Organising',
    description:
      'Distinctly Namibian events — from intimate launches to large activations — produced end to end.',
    highlights: ['Activations', 'Conferences', 'Brand experiences'],
    accent: 'savanna',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    description:
      'Custom platforms, dashboards and websites that streamline operations and tell your story online.',
    highlights: ['Web platforms', 'Internal tools', 'Automation'],
    accent: 'emerald',
  },
];

export type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  details: { label: string; value: string }[];
  tag: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: 'Training at Carel Auto Repairs',
    description:
      'Hands-on training sessions that lifted technical confidence and day-to-day productivity on the shop floor.',
    image: '/carel.jpg',
    tag: 'Training',
    details: [
      { label: 'Client', value: 'Carel Auto Repairs' },
      { label: 'Duration', value: '4 days' },
      { label: 'Service', value: 'Training' },
      { label: 'Outcome', value: 'Improved employee performance' },
    ],
  },
  {
    title: 'Marketing for Cubita Guest House',
    description:
      'Strategy, content and channel mix that turned a quiet calendar into a 30% bookings lift.',
    image: '/cubita.jpg',
    tag: 'Marketing',
    details: [
      { label: 'Client', value: 'Cubita Guest House' },
      { label: 'Duration', value: '5 days' },
      { label: 'Service', value: 'Marketing' },
      { label: 'Outcome', value: 'Bookings +30%' },
    ],
  },
  {
    title: 'Team Building at Pupkewitz Mega-build',
    description:
      'A three-month engagement designed to align teams, sharpen communication and build trust at scale.',
    image: '/pupkewitz.jpg',
    tag: 'Facilitation',
    details: [
      { label: 'Client', value: 'Pupkewitz Mega-build' },
      { label: 'Duration', value: '3 months' },
      { label: 'Service', value: 'Team Building' },
      { label: 'Outcome', value: 'Stronger collaboration' },
    ],
  },
  {
    title: 'Capacity Building at Oniipa Town Council',
    description:
      'Capacity-building facilitation strengthening governance, planning and team cohesion across departments.',
    image: '/oniipa.jpg',
    tag: 'Capacity',
    details: [
      { label: 'Client', value: 'Oniipa Town Council' },
      { label: 'Duration', value: '1 month' },
      { label: 'Service', value: 'Capacity Building' },
      { label: 'Outcome', value: 'Enhanced collaboration' },
    ],
  },
  {
    title: 'Training for Oshana LRC 2019',
    description:
      'Leadership and representation training equipping learner reps with the tools to lead with conviction.',
    image: '/oshanalrc.jpg',
    tag: 'Leadership',
    details: [
      { label: 'Client', value: 'Oshana LRC' },
      { label: 'Duration', value: '3 days' },
      { label: 'Service', value: 'Training' },
      { label: 'Outcome', value: 'Stronger LRC leadership' },
    ],
  },
  {
    title: 'Training for AMTA Ongwediva',
    description:
      'Sector-specific training built around AMTA\'s operational realities and growth ambitions.',
    image: '/amta.jpg',
    tag: 'Training',
    details: [
      { label: 'Client', value: 'AMTA Ongwediva' },
      { label: 'Duration', value: '3 days' },
      { label: 'Service', value: 'Training' },
      { label: 'Outcome', value: 'Improved performance' },
    ],
  },
];

export type SocialLink = {
  Icon: LucideIcon;
  url: string;
  label: string;
};

export const SOCIALS: readonly SocialLink[] = [
  {
    Icon: Facebook,
    url: 'https://www.facebook.com/share/1EEge1wkj4/',
    label: 'Facebook',
  },
  {
    Icon: Instagram,
    url: 'https://www.instagram.com/blessinginfotainment?igsh=MXVkaWFmbG1odnpibw==',
    label: 'Instagram',
  },
  { Icon: Linkedin, url: '#', label: 'LinkedIn' },
  { Icon: Twitter, url: '#', label: 'Twitter' },
];

export const STATS = [
  { value: 50, suffix: '+', label: 'Engagements delivered' },
  { value: 12, suffix: '+', label: 'Years on the ground' },
  { value: 30, suffix: '%', label: 'Avg. client uplift' },
  { value: 4, suffix: '', label: 'Core capabilities' },
];

export const PROCESS_STEPS = [
  {
    title: 'Discover',
    body: 'We listen first. Workshops, interviews and audits to understand the real problem behind the brief.',
  },
  {
    title: 'Design',
    body: 'We co-create a strategy and creative direction that fits Namibia and your unique market reality.',
  },
  {
    title: 'Deliver',
    body: 'We execute — training rooms, brand systems, software releases, on-the-ground activations.',
  },
  {
    title: 'Develop',
    body: 'We measure outcomes and iterate, leaving teams stronger and capabilities more durable.',
  },
];

export const VALUES = [
  'Integrity',
  'Curiosity',
  'Craft',
  'Partnership',
  'Joy',
  'Excellence',
  'Namibian-rooted',
  'Globally-minded',
];
