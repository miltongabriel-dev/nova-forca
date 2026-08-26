export const currentUser = {
  name: "Sarah Bennett",
  role: "guardian" as const,
  beltRank: "blue",
  beltDegree: 2,
};

export const nextClass = {
  name: "BJJ Fundamentals",
  time: "Today · 6:30pm",
  instructor: "Coach Lucas",
};

export const quickActions = [
  { label: "Schedule", href: "/schedule" },
  { label: "My Growth", href: "/growth" },
  { label: "Community", href: "/community" },
  { label: "Membership", href: "/membership" },
];

export const values = [
  {
    id: "respect",
    name: "Respect",
    description: "Treating everyone with courtesy and empathy.",
    score: 4.6,
    icon: "Handshake" as const,
    tone: "neutral" as const,
  },
  {
    id: "discipline",
    name: "Discipline",
    description: "Doing the right thing even when no one's watching.",
    score: 4.2,
    icon: "ShieldCheck" as const,
    tone: "accent" as const,
  },
  {
    id: "self-control",
    name: "Self-Control",
    description: "Managing emotions and acting with composure.",
    score: 4.3,
    icon: "Waves" as const,
    tone: "neutral" as const,
  },
  {
    id: "citizenship",
    name: "Citizenship",
    description: "Contributing to a better community.",
    score: 4.1,
    icon: "Landmark" as const,
    tone: "accent" as const,
  },
  {
    id: "teamwork",
    name: "Team Spirit",
    description: "Supporting and growing alongside your teammates.",
    score: 4.4,
    icon: "Users" as const,
    tone: "neutral" as const,
  },
];

export const valuesAverage = values.reduce((sum, v) => sum + v.score, 0) / values.length;

export const graduationHistory = [
  { id: "g1", rank: "blue", degree: 2, date: "Mar 2026", notes: "Consistent training and leadership on the mats." },
  { id: "g2", rank: "blue", degree: 0, date: "Jun 2024", notes: "Strong progress on guard passing." },
  { id: "g3", rank: "white", degree: 4, date: "Oct 2022", notes: "Solid grounding in the fundamentals." },
];

export const posts = [
  {
    id: "1",
    category: "announcement" as const,
    pinned: true,
    author: "Coach Diego",
    role: "Black belt, 3rd degree",
    title: "Saturday is Family Open Mat",
    body: "This Saturday, 9am — an open session for parents and kids to train together on the mats. No belt required, just come as a family.",
    time: "2 hours ago",
    likes: 34,
    comments: 8,
  },
  {
    id: "2",
    category: "birthday" as const,
    pinned: false,
    author: "NovaForça",
    role: "Birthday",
    title: "Happy Birthday, Miguel! 🎉",
    body: "May your year be as strong as your energy on the mats. The whole NovaForça family is celebrating with you!",
    time: "today",
    likes: 28,
    comments: 5,
  },
  {
    id: "3",
    category: "event" as const,
    pinned: false,
    author: "NovaForça",
    role: "Event",
    title: "NF Family Festival",
    body: "A whole day of games, food and community. 25 May, 9am–1pm at the main gym. 32 families have already confirmed.",
    time: "1 day ago",
    likes: 61,
    comments: 14,
  },
  {
    id: "4",
    category: "action" as const,
    pinned: false,
    author: "NovaForça",
    role: "Community Action",
    title: "Winter Coat Appeal — now through December",
    body: "Students and families, let's collect warm coats for local shelters this winter. Drop-off box at reception. Teaching kids to give back is part of the training too.",
    time: "2 days ago",
    likes: 19,
    comments: 3,
  },
  {
    id: "5",
    category: "wall" as const,
    pinned: false,
    author: "Coach Ana",
    role: "Kids Programme",
    title: "Grading day for our youngest students",
    body: "So proud of this class! Six kids moved up a stripe this week for discipline, respect and technical progress. The mats teach more than technique.",
    time: "3 days ago",
    likes: 51,
    comments: 12,
  },
] as const;

export const postCategoryLabel: Record<(typeof posts)[number]["category"], string> = {
  announcement: "Announcement",
  birthday: "Birthday",
  event: "Event",
  action: "Community Action",
  wall: "Wall",
};

export const albums = [
  { id: "a1", title: "NF Family Festival", date: "25 May 2026", photoCount: 18 },
  { id: "a2", title: "Kids Grading Day", date: "12 May 2026", photoCount: 9 },
  { id: "a3", title: "Family Open Mat", date: "3 May 2026", photoCount: 14 },
  { id: "a4", title: "Winter Coat Appeal", date: "20 Apr 2026", photoCount: 6 },
];

export const dependents = [
  { id: "d1", name: "Peter Bennett", age: 8, beltRank: "white", beltDegree: 3, className: "Juniors (6–9 yrs)", attendanceRate: 92 },
  { id: "d2", name: "Alice Bennett", age: 12, beltRank: "grey", beltDegree: 1, className: "Youth (10–13 yrs)", attendanceRate: 87 },
];

export const weekDays = [
  { key: "mon", label: "MON", date: 20 },
  { key: "tue", label: "TUE", date: 21 },
  { key: "wed", label: "WED", date: 22 },
  { key: "thu", label: "THU", date: 23 },
  { key: "fri", label: "FRI", date: 24 },
  { key: "sat", label: "SAT", date: 25 },
  { key: "sun", label: "SUN", date: 26 },
];

export const weekSchedule: Record<string, { id: string; time: string; name: string; instructor: string; track: "Kids" | "Adults" | "Fundamentals"; vagas: boolean; family?: boolean }[]> = {
  mon: [
    { id: "m1", time: "6:00pm", name: "BJJ Fundamentals", instructor: "Coach Lucas", track: "Fundamentals", vagas: true },
    { id: "m2", time: "7:00pm", name: "Muay Thai", instructor: "Coach Marcus", track: "Adults", vagas: true },
  ],
  tue: [
    { id: "t1", time: "5:00pm", name: "Juniors BJJ (6–9)", instructor: "Coach Julia", track: "Kids", vagas: true },
    { id: "t2", time: "6:00pm", name: "BJJ Fundamentals", instructor: "Coach Lucas", track: "Fundamentals", vagas: true },
    { id: "t3", time: "7:00pm", name: "No-Gi BJJ", instructor: "Coach Marcus", track: "Adults", vagas: true },
    { id: "t4", time: "8:15pm", name: "Open Mat", instructor: "Supervised free rolling", track: "Adults", vagas: true },
    { id: "t5", time: "9:15pm", name: "Family Class", instructor: "Parents and kids on the mats together", track: "Fundamentals", vagas: true, family: true },
  ],
  wed: [
    { id: "w1", time: "6:00pm", name: "BJJ Fundamentals", instructor: "Coach Lucas", track: "Fundamentals", vagas: false },
    { id: "w2", time: "7:00pm", name: "MMA", instructor: "Coach Marcus", track: "Adults", vagas: true },
  ],
  thu: [
    { id: "q1", time: "5:00pm", name: "Youth BJJ (10–13)", instructor: "Coach Julia", track: "Kids", vagas: true },
    { id: "q2", time: "7:00pm", name: "Muay Thai", instructor: "Coach Marcus", track: "Adults", vagas: true },
  ],
  fri: [
    { id: "f1", time: "6:00pm", name: "BJJ Fundamentals", instructor: "Coach Lucas", track: "Fundamentals", vagas: true },
    { id: "f2", time: "7:00pm", name: "Sparring Night", instructor: "Coach Marcus", track: "Adults", vagas: true },
  ],
  sat: [
    { id: "s1", time: "10:00am", name: "Family Class", instructor: "Parents and kids on the mats together", track: "Fundamentals", vagas: true, family: true },
  ],
  sun: [],
};

export const team = [
  { id: "t1", name: "Coach Lucas", role: "Head Coach", belt: "black", specialty: "BJJ Fundamentals" },
  { id: "t2", name: "Coach Julia", role: "Kids Programme", belt: "purple", specialty: "Juniors & Youth BJJ" },
  { id: "t3", name: "Coach Marcus", role: "Striking & MMA", belt: "black", specialty: "Muay Thai / MMA" },
  { id: "t4", name: "Coach Diego Martins", role: "Competition Team", belt: "black", specialty: "No-Gi / Competition" },
];

export const instructors = [
  { id: "i1", name: "Coach Diego Martins", specialties: ["Muay Thai", "Competition"], price: 65, avatarSeed: "Diego Martins" },
  { id: "i2", name: "Coach Ana Ribeiro", specialties: ["Kids BJJ", "Fundamentals"], price: 55, avatarSeed: "Ana Ribeiro" },
];

export const availableSlots = [
  { id: "s1", instructorId: "i1", weekday: "Tuesday", time: "4:00pm" },
  { id: "s2", instructorId: "i1", weekday: "Thursday", time: "4:00pm" },
  { id: "s3", instructorId: "i2", weekday: "Saturday", time: "10:00am" },
];

export const myBookings = [
  { id: "b1", instructor: "Coach Diego Martins", date: "Thu, 21 Aug", time: "4:00pm", status: "confirmed" as const },
];

export const liveSessions = [
  {
    id: "l1",
    className: "Juniors BJJ (6–9)",
    scheduledAt: "Today, 5:00pm",
    status: "scheduled" as const,
  },
  {
    id: "l2",
    className: "BJJ Fundamentals",
    scheduledAt: "Yesterday, 6:00pm",
    status: "ended" as const,
  },
];

export const pendingApprovals = [
  { id: "p1", name: "Claire Nunes", relation: "Guardian of 1 dependant", requestedAt: "3 hours ago" },
  { id: "p2", name: "Ralph Costa", relation: "Adult student", requestedAt: "1 day ago" },
];

export const members = [
  { id: "m1", name: "Sarah Bennett", role: "Guardian", status: "active" as const, belt: "blue" },
  { id: "m2", name: "Peter Bennett", role: "Dependant", status: "active" as const, belt: "white" },
  { id: "m3", name: "Ralph Costa", role: "Adult student", status: "pending" as const, belt: "—" },
  { id: "m4", name: "Coach Diego Martins", role: "Instructor", status: "active" as const, belt: "black" },
];

export const pillars = [
  { title: "Discipline", desc: "Routine and consistency that carry over from the mats to school and work." },
  { title: "Respect", desc: "Hierarchy, courtesy and listening — the foundation of healthy relationships." },
  { title: "Family", desc: "Parents and kids training, cheering each other on, and growing in the same space." },
  { title: "Resilience", desc: "Every belt is proof that consistent effort changes lives." },
];

export const membership = {
  plan: "Family Plan — 2 members",
  status: "up to date" as const,
  nextCharge: "05/09/2026",
  amount: "£85.00",
  method: "Card ending 4821",
};

export const disciplines = [
  { name: "Brazilian Jiu-Jitsu", desc: "Gi and no-gi, from white belt fundamentals to advanced competition prep." },
  { name: "Muay Thai", desc: "Striking, clinch work and pad rounds for every fitness level." },
  { name: "MMA", desc: "Blending the ground game and the stand-up game into one complete skill set." },
];

export const aboutUs = {
  quote: "Victory is reserved for those willing to pay the price.",
  quoteAuthor: "Sun Tzu",
  body: "We train in BJJ (Brazilian Jiu-Jitsu), Muay Thai and MMA. There are a number of locations and regular classes — see the schedule for whereabouts and times. Beginners to advanced are all welcome: every class varies slightly depending on its focus, whether that's sparring, BJJ with or without the gi, or MMA. Interested in learning more or developing your skills further? Get in touch.",
};
