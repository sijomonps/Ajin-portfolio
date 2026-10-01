export interface PersonalInfo {
  name: string;
  surname: string;
  givenName: string;
  monogram: string;
  role: string;
  roles: string[];
  location: string;
  email: string;
  phone: string;
  kapsMembership: string;
  statusBadge: string;
  headline: string;
  tagline: string;
  heroPillars: string[];
  summary: string;
  vision: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface Pillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  points: string[];
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  department?: string;
  accreditation?: string;
  regNo?: string;
  period: string;
  duration: string;
  type: "Internship" | "Fieldwork" | "Clinical";
  scope: string;
  highlights: string[];
}

export interface Initiative {
  id: string;
  title: string;
  category: string;
  role: string;
  period: string;
  tagline: string;
  description: string;
  url?: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
  affiliation?: string;
  details: string;
}

export interface VolunteerItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period?: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer?: string;
  details?: string;
}

export const personalInfo: PersonalInfo = {
  name: "AJIN SHIBU",
  givenName: "AJIN",
  surname: "SHIBU",
  monogram: "AS",
  role: "Social Work Professional & Founder",
  roles: [
    "MSW Scholar — Medical & Psychiatry",
    "Founder & Chairman, AMDG Group",
    "Founder, YUVA Manass Campaign",
    "Professional Social Worker (KAPS)"
  ],
  location: "Kerala, India",
  email: "ajinshibuofficial@gmail.com",
  phone: "+91 85905 27277",
  kapsMembership: "KAPS/SM/581/2024-25",
  statusBadge: "MSW Scholar • Medical & Psychiatry • Marian College Kuttikkanam",
  headline: "Building meaningful impact through people, ideas, and innovation.",
  tagline: "Social Work. Mental Health. Entrepreneurship. Creativity.",
  heroPillars: [
    "SOCIAL WORK.",
    "MENTAL HEALTH.",
    "ENTREPRENEURSHIP.",
    "CREATIVITY."
  ],
  summary:
    "Social work practitioner and MSW scholar specializing in Medical & Psychiatry at Marian College Kuttikkanam. Working across clinical casework, youth mental health advocacy, and purposeful entrepreneurship.",
  vision:
    "To integrate clinical social work, youth mental health promotion, and purposeful digital innovation into sustainable community impact.",

  links: [
    { label: "Email", href: "mailto:ajinshibuofficial@gmail.com" },
    { label: "Phone", href: "tel:+918590527277" },
    { label: "AMDG Group", href: "https://www.amdgmedia.co.in/" },
    { label: "YUVA Manass", href: "https://instagram.com" }
  ]
};

export const pillars: Pillar[] = [
  {
    id: "social-work",
    number: "01",
    tag: "Core Discipline",
    title: "Social Work & Clinical Healthcare",
    subtitle: "Medical & Psychiatric Fieldwork, Community Welfare & Rehabilitation",
    description:
      "Structured clinical and community practice focusing on psychiatric hospital care, rehabilitation systems, social welfare administration, and vulnerable group advocacy.",
    points: [
      "Psychiatric social work exposure in NABH-accredited hospital setting",
      "Institutional rehabilitation and client psychosocial reintegration",
      "Community casework, group work, and grassroots social development",
      "Professional Member, Kerala Association of Professional Social Workers (KAPS)"
    ]
  },
  {
    id: "mental-health",
    number: "02",
    tag: "Advocacy & Promotion",
    title: "Youth Mental Health & Resilience",
    subtitle: "YUVA Manass Campaign & 'Are You Okay?' Initiative",
    description:
      "Mobilizing youth dialogue to destigmatize psychological struggles, foster emotional resilience, and link individuals to professional counseling and mental health services.",
    points: [
      "Founder of YUVA Manass youth mental health awareness campaign",
      "Facilitation of Focused Group Discussions on youth emotional well-being",
      "Advocacy for human rights and accessible mental health ecosystems",
      "Normalizing help-seeking behaviors among emerging student communities"
    ]
  },
  {
    id: "entrepreneurship",
    number: "03",
    tag: "Venture & Leadership",
    title: "AMDG Group & Social Ventures",
    subtitle: "Founder & Chairman — Bridging Media, Tech & Impact",
    description:
      "An entrepreneurial initiative developed around creativity, digital innovation, media, and social entrepreneurship to transform ideas into tangible societal platforms.",
    points: [
      "Founder & Chairman of AMDG Group (amdggroup.in)",
      "Incubating digital solutions tailored for non-profit and community growth",
      "Synthesizing social work ethics with sustainable entrepreneurial models",
      "Leadership across volunteer teams and project lifecycles"
    ]
  },
  {
    id: "creativity",
    number: "04",
    tag: "Design & Communication",
    title: "Visual Identity & Digital Media",
    subtitle: "AMDG Media, Creative Direction & Documentation",
    description:
      "Employing graphic design, digital media, educational design, and botanical biodiversity archival (EcoScan) to elevate communication in the social sector.",
    points: [
      "AMDG Media creative and digital communication initiatives",
      "Creator and designer of the EcoScan college biodiversity documentation",
      "Publication, digital asset creation, and executive presentation design",
      "Creative direction and campaign identity creation for social initiatives"
    ]
  }
];

export const initiatives: Initiative[] = [
  {
    id: "yuva-manass",
    title: "YUVA Manass",
    category: "Mental Health Campaign",
    role: "Founder",
    period: "2026",
    tagline: "“Are You Okay?” — Youth Mental Health Awareness",
    description:
      "A youth-centered mental health awareness initiative created to foster open dialogues about mental health, dismantle stigma, promote emotional resilience, and connect young people with counseling and institutional care networks.",
    highlights: [
      "Promotes emotional resilience and open conversation on emotional distress",
      "Creates direct awareness about counseling, therapy, and support systems",
      "Leads workshops, outreach sessions, and focused group dialogues",
      "Coordinates digital mental health campaigns across student communities"
    ]
  },
  {
    id: "amdg-group",
    title: "AMDG Group",
    category: "Social Entrepreneurship & Media",
    role: "Founder & Chairman",
    period: "2026 onwards",
    tagline: "Creativity, Digital Innovation & Social Entrepreneurship",
    description:
      "An entrepreneurial ecosystem connecting technology, design, media, and social impact. Houses AMDG Media as a specialized creative unit delivering digital communication, design, and project development.",
    url: "https://www.amdgmedia.co.in/",
    highlights: [
      "Fosters digital solutions and creative media for purposeful initiatives",
      "AMDG Media creative engine for graphic design and communications",
      "Integrates modern digital capability with social responsibility"
    ]
  },
  {
    id: "aksharanila",
    title: "AKSHARANILA Project",
    category: "Community Fieldwork Initiative",
    role: "Project Initiator & Coordinator",
    period: "2023 – 2024",
    tagline: "Education Through Empowerment",
    description:
      "Undertaken during concurrent fieldwork under Health Dialogue Kozhikode, AKSHARANILA empowered economically disadvantaged school students through structured educational and mentorship support.",
    highlights: [
      "Designed educational reinforcement modules for underprivileged students",
      "Fostered youth self-efficacy, learning continuity, and social empowerment",
      "Coordinated grassroots stakeholder collaboration under Health Dialogue"
    ]
  },
  {
    id: "ecoscan",
    title: "ECOSCAN Project",
    category: "Environmental & Digital Design",
    role: "Project Initiator & Designer",
    period: "2023 – 2024",
    tagline: "Documenting College Biodiversity",
    description:
      "A creative digital documentation initiative cataloging the flora and tree species of LISSAH College campus, synthesizing environmental consciousness, scientific taxonomy, and visual graphic design.",
    highlights: [
      "Conducted campus flora identification and digital documentation",
      "Designed communicative informational design assets for biodiversity education",
      "Combined environmental science awareness with visual media"
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: "iqraa-hospital",
    organization: "IQRAA International Hospital & Research Centre",
    department: "Department of Psychiatry",
    accreditation: "NABH Accredited Hospital, Kozhikode",
    role: "Psychiatric Social Work Intern",
    period: "01 July 2026 – 31 July 2026",
    duration: "1 Month",
    type: "Clinical",
    scope:
      "Clinical exposure to psychiatric care environments and the pivotal role of social work within multi-disciplinary mental health treatment teams.",
    highlights: [
      "Psychiatric case assessments and clinical intake observation",
      "Multi-disciplinary mental health rounds and treatment plan discussions",
      "Patient psycho-social rehabilitation and caregiver counseling exposure"
    ]
  },
  {
    id: "good-samaritan",
    organization: "Good Samaritan Rehabilitation & Training Centre",
    regNo: "Reg No. 99/IV/17 | OCB Reg No. 2780, Kannur",
    role: "Social Work Intern",
    period: "03 May 2025 – 05 July 2025",
    duration: "2 Months",
    type: "Internship",
    scope:
      "Institutional rehabilitation social work, individual client counseling support, occupational therapy observation, and social reintegration programs.",
    highlights: [
      "Direct engagement with institutional rehabilitation residents",
      "Assisted in vocational and therapeutic developmental activities",
      "Coordinated sports meets and community awareness initiatives for PwDs"
    ]
  },
  {
    id: "sahrudeya",
    organization: "Welfare Services Ernakulam (Sahrudeya)",
    regNo: "Reg. No. ER 32/65",
    role: "Social Work Intern",
    period: "01 October 2024 – 25 October 2024",
    duration: "1 Month",
    type: "Internship",
    scope:
      "Exposure to regional social development, non-governmental organizational structure, women empowerment groups, and rural community welfare.",
    highlights: [
      "Analyzed community welfare delivery models and SHG networks",
      "Field visits to community intervention sites across Ernakulam",
      "Documentation of non-governmental development interventions"
    ]
  },
  {
    id: "health-dialogue",
    organization: "Health Dialogue Kozhikode",
    regNo: "Reg. No: KL/2017/0178207",
    role: "Concurrent Fieldwork Trainee",
    period: "14 December 2023 – 07 March 2024",
    duration: "24 Days (Concurrent)",
    type: "Fieldwork",
    scope:
      "Hands-on community fieldwork, grassroots demographic surveys, community case studies, and conceptualization of the AKSHARANILA empowerment project.",
    highlights: [
      "Conducted community needs assessments and household surveys",
      "Initiated and coordinated the AKSHARANILA educational project",
      "Facilitated group work sessions for children and local self-help groups"
    ]
  }
];

export const education: EducationItem[] = [
  {
    id: "msw",
    degree: "Master of Social Work (MSW)",
    specialization: "Medical & Psychiatry",
    institution: "Marian College Kuttikkanam (Autonomous)",
    affiliation: "Mahatma Gandhi University",
    period: "2025 – 2027",
    details:
      "Advanced clinical training in psychiatric social work, health system policies, therapeutic interventions, counseling psychology, and clinical research."
  },
  {
    id: "bsw",
    degree: "Bachelor of Social Work (BSW)",
    institution: "LISSAH College, Kaithapoyil",
    affiliation: "University of Calicut",
    period: "2022 – 2025",
    details:
      "Graduated with thorough foundation in casework, group work, community organization, social administration, human behavior, and concurrent fieldwork."
  },
  {
    id: "seminary",
    degree: "Formation & Personal Development",
    institution: "St. Alphonsa Seminary, Diocese of Thamarassery",
    period: "2019 – 2022",
    details:
      "Three years of rigorous personal formation cultivating discipline, community living, leadership ethics, interpersonal empathy, and service-oriented responsibility."
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary (+2)",
    specialization: "Humanities",
    institution: "St. Joseph's Higher Secondary School, Kodancherry",
    affiliation: "Kerala State Board",
    period: "Completed 2022",
    details: "Foundational studies in sociology, political science, history, and humanities."
  },
  {
    id: "sslc",
    degree: "Secondary Education (SSLC)",
    institution: "Stella Maris International Boarding School, Koodaranji",
    affiliation: "CBSE, Delhi",
    period: "Completed 2019",
    details: "Secondary schooling and foundational academic formation."
  }
];

export const volunteering: VolunteerItem[] = [
  {
    id: "gsrtc-staff",
    title: "Voluntary Staff",
    organization: "Good Samaritan Rehabilitation & Training Centre",
    location: "Kannur",
    period: "05 July 2025 – 05 February 2027",
    description:
      "Long-term voluntary service assisting rehabilitation staff, supporting inmate welfare, and coordinating developmental programs."
  },
  {
    id: "dhisha-fgd",
    title: "Focused Group Discussion Leader — Youth Mental Health & Human Rights",
    organization: "Dhisha Foundation",
    location: "Ernakulam",
    description:
      "Moderated and led an in-depth Focused Group Discussion at the Youth Mental Health & Human Rights Symposium."
  },
  {
    id: "marivilli-clinic",
    title: "Medical Camp Volunteer for Transgender Persons",
    organization: "Marivilli Clinic",
    location: "Ernakulam",
    description:
      "Volunteered in patient intake, health screening coordination, and sensitive community care support at a medical camp for transgender persons."
  },
  {
    id: "insurance-survey",
    title: "Government Welfare & Insurance Survey Volunteer",
    organization: "Puthuppady Grama Panchayat",
    location: "Kozhikode",
    description:
      "Conducted extensive grassroots door-to-door survey to ensure widespread awareness and enrollment in government welfare and healthcare insurance schemes."
  },
  {
    id: "pwd-sports",
    title: "Sports Meet & Marathon for Persons with Disabilities",
    organization: "GSRTC Peravoor",
    location: "Kannur",
    description:
      "Coordinated logistics, participant safety, and encouragement during the regional sports meet and marathon organized for persons with disabilities."
  }
];

export const certifications: Certification[] = [
  {
    id: "kaps",
    name: "Kerala Association of Professional Social Workers (KAPS)",
    issuer: "KAPS Kerala",
    details: "Official Registered Professional Member • Membership No: KAPS/SM/581/2024-25"
  },
  {
    id: "psychiatric-fieldwork",
    name: "Psychiatric Social Work Clinical Internship Certificate",
    issuer: "IQRAA International Hospital & Research Centre",
    details: "NABH Accredited Department of Psychiatry"
  },
  {
    id: "rehab-internship",
    name: "Rehabilitation Social Work Internship Certificate",
    issuer: "Good Samaritan Rehabilitation & Training Centre",
    details: "Two-month institutional rehabilitation practicum"
  },
  {
    id: "fieldwork-hd",
    name: "Concurrent Fieldwork Practicum Certificate",
    issuer: "Health Dialogue Kozhikode",
    details: "Community development and social assessment verification"
  },
  {
    id: "sahrudeya-cert",
    name: "Social Welfare Administration Internship Certificate",
    issuer: "Welfare Services Ernakulam (Sahrudeya)",
    details: "Community welfare and NGO operational verification"
  },
  {
    id: "cyber-security",
    name: "Cyber Security Certificate",
    issuer: "Certified Credential",
    details: "Information security and digital safety foundations"
  },
  {
    id: "canva-skills",
    name: "Visual Communication & Canva Skills Add-on Course",
    issuer: "Institutional Add-on Certification",
    details: "Graphic design, publication layout, and visual communication"
  },
  {
    id: "graphic-designer",
    name: "Graphic Designer Certificate",
    issuer: "Design Credential",
    details: "Digital media layout, brand typography, and visual assets"
  },
  {
    id: "software-dev",
    name: "Software Product Developer Certificate",
    issuer: "Technology Credential",
    details: "Digital product development and systems thinking"
  },
  {
    id: "skillup",
    name: "Skillup Professional Certifications",
    issuer: "Professional Learning",
    details: "Cross-disciplinary skill building in communication and leadership"
  }
];

export const skillsData = {
  professional: [
    "Medical & Psychiatric Social Work",
    "Psychosocial Intake & Assessment",
    "Empathetic & Active Listening",
    "Community Needs Assessment",
    "Focus Group Discussion (FGD) Facilitation",
    "Group Work & Casework Methods",
    "Crisis & Help-Seeking Navigation",
    "Organizational Leadership",
    "Ethical Social Documentation",
    "Interpersonal Communication"
  ],
  creativeAndTechnical: [
    "Graphic & Editorial Design",
    "AMDG Media Creative Direction",
    "Digital Communication Strategy",
    "Canva & Visual Composition",
    "Digital Biodiversity Documentation",
    "Brand & Campaign Identity",
    "Public Presentation & Deck Design",
    "Digital Product Systems"
  ],
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Malayalam", level: "Native Proficiency" },
    { name: "Hindi", level: "Basic Working Knowledge" },
    { name: "Latin", level: "Scholarly Formation Knowledge" }
  ]
};

export const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#work" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" }
];
