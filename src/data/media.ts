/**
 * Central Media System for Ajin Shibu Portfolio
 *
 * All image paths, dimensions, aspect ratios, and metadata are defined here.
 * When real photographs are acquired, simply update the `src` path and toggle `isReal: true`.
 */

export interface MediaAsset {
  src: string;
  placeholderSrc: string;
  alt: string;
  aspectRatio: string;
  width: number;
  height: number;
  isReal: boolean;
  caption?: string;
  objectPosition?: string;
}

export interface GalleryMediaItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  src: string;
  placeholderSrc: string;
  alt: string;
  tag: string;
  spanClass: string;
  isReal: boolean;
  aspectRatio: string;
  objectPosition?: string;
}

export interface MediaRegistry {
  hero: { portrait: MediaAsset };
  about: { portrait: MediaAsset };
  experience: Record<"iqraa" | "goodSamaritan" | "sahrudeya" | "fieldwork", MediaAsset>;
  projects: Record<"aksharanila" | "ecoscan", MediaAsset>;
  yuvaManass: { campaign: MediaAsset };
  amdg: { brand: MediaAsset };
  volunteering: Record<"medicalCamp" | "insuranceSurvey" | "pwdSports" | "mentalHealth" | "goodSamaritan", MediaAsset>;
  gallery: GalleryMediaItem[];
  certificates: Record<
    "kaps" | "iqraa" | "goodSamaritan" | "fieldwork" | "sahrudeya" | "cybersecurity" | "canva" | "graphicDesign" | "softwareDev" | "skillup",
    MediaAsset
  >;
}

export const media: MediaRegistry = {
  hero: {
    portrait: {
      src: "/images/ajin-shibu.png", // Active authentic photograph
      placeholderSrc: "/placeholders/hero-portrait.webp",
      alt: "Ajin Shibu — Social Work Professional, Founder & Chairman",
      aspectRatio: "4:5",
      width: 1200,
      height: 1500,
      isReal: true,
      caption: "Authentic portrait plate, Ajin Shibu",
      objectPosition: "object-top",
    },
  },

  about: {
    portrait: {
      src: "/placeholders/about-portrait.webp",
      placeholderSrc: "/placeholders/about-portrait.webp",
      alt: "Ajin Shibu — Master of Social Work Scholar, Medical & Psychiatry Specialization",
      aspectRatio: "3:4",
      width: 1200,
      height: 1600,
      isReal: false,
      caption: "MSW Scholar & Clinical Healthcare Practicum",
      objectPosition: "object-top",
    },
  },

  experience: {
    iqraa: {
      src: "/placeholders/experience-iqraa.webp",
      placeholderSrc: "/placeholders/experience-iqraa.webp",
      alt: "IQRAA International Hospital — Department of Psychiatry Clinical Practicum",
      aspectRatio: "3:2",
      width: 1200,
      height: 800,
      isReal: false,
      caption: "Psychiatric clinical intake and multi-disciplinary treatment rounds",
    },
    goodSamaritan: {
      src: "/placeholders/experience-good-samaritan.webp",
      placeholderSrc: "/placeholders/experience-good-samaritan.webp",
      alt: "Good Samaritan Rehabilitation & Training Centre — Institutional Rehabilitation Practicum",
      aspectRatio: "3:2",
      width: 1200,
      height: 800,
      isReal: false,
      caption: "Institutional client rehabilitation and vocational therapy",
    },
    sahrudeya: {
      src: "/placeholders/experience-sahrudeya.webp",
      placeholderSrc: "/placeholders/experience-sahrudeya.webp",
      alt: "Welfare Services Ernakulam (Sahrudeya) — Community Welfare Administration Internship",
      aspectRatio: "3:2",
      width: 1200,
      height: 800,
      isReal: false,
      caption: "Non-governmental social welfare administration and SHG development",
    },
    fieldwork: {
      src: "/placeholders/experience-fieldwork.webp",
      placeholderSrc: "/placeholders/experience-fieldwork.webp",
      alt: "Health Dialogue Kozhikode — Concurrent Community Fieldwork Practicum",
      aspectRatio: "3:2",
      width: 1200,
      height: 800,
      isReal: false,
      caption: "Grassroots community needs assessment and household surveys",
    },
  },

  projects: {
    aksharanila: {
      src: "/placeholders/project-aksharanila.webp",
      placeholderSrc: "/placeholders/project-aksharanila.webp",
      alt: "AKSHARANILA Project — Education Through Empowerment Community Fieldwork",
      aspectRatio: "4:3",
      width: 1200,
      height: 900,
      isReal: false,
      caption: "Educational reinforcement and mentoring for underprivileged students",
    },
    ecoscan: {
      src: "/placeholders/project-ecoscan.webp",
      placeholderSrc: "/placeholders/project-ecoscan.webp",
      alt: "ECOSCAN Project — LISSAH College Biodiversity Documentation & Environmental Design",
      aspectRatio: "4:3",
      width: 1200,
      height: 900,
      isReal: false,
      caption: "College campus tree taxonomy, botanical cataloging, and digital QR signage",
    },
  },

  yuvaManass: {
    campaign: {
      src: "/placeholders/yuva-manass-campaign.webp",
      placeholderSrc: "/placeholders/yuva-manass-campaign.webp",
      alt: "YUVA Manass — 'Are You Okay?' Youth Mental Health Awareness Dialogues",
      aspectRatio: "16:9",
      width: 1600,
      height: 900,
      isReal: false,
      caption: "Youth emotional dialogue session and de-stigmatization workshop",
    },
  },

  amdg: {
    brand: {
      src: "/placeholders/amdg-brand.webp",
      placeholderSrc: "/placeholders/amdg-brand.webp",
      alt: "AMDG Group & AMDG Media — Creative Innovation & Social Entrepreneurship Ecosystem",
      aspectRatio: "16:9",
      width: 1600,
      height: 900,
      isReal: false,
      caption: "AMDG Media creative studio and technology venture incubation",
    },
  },

  volunteering: {
    medicalCamp: {
      src: "/placeholders/volunteering-medical-camp.webp",
      placeholderSrc: "/placeholders/volunteering-medical-camp.webp",
      alt: "Marivilli Clinic — Medical Camp Volunteer for Transgender Persons",
      aspectRatio: "3:2",
      width: 1200,
      height: 800,
      isReal: false,
      caption: "Patient intake and health screening coordination",
    },
    insuranceSurvey: {
      src: "/placeholders/volunteering-insurance-survey.webp",
      placeholderSrc: "/placeholders/volunteering-insurance-survey.webp",
      alt: "Puthuppady Grama Panchayat — Welfare & Insurance Survey Volunteer",
      aspectRatio: "3:2",
      width: 1200,
      height: 800,
      isReal: false,
      caption: "Grassroots door-to-door survey and welfare scheme enrollment",
    },
    pwdSports: {
      src: "/placeholders/volunteering-pwd-sports.webp",
      placeholderSrc: "/placeholders/volunteering-pwd-sports.webp",
      alt: "GSRTC Peravoor — Sports Meet & Marathon for Persons with Disabilities",
      aspectRatio: "3:2",
      width: 1200,
      height: 800,
      isReal: false,
      caption: "Sports meet and marathon coordination for persons with disabilities",
    },
    mentalHealth: {
      src: "/placeholders/volunteering-mental-health.webp",
      placeholderSrc: "/placeholders/volunteering-mental-health.webp",
      alt: "Dhisha Foundation — Youth Mental Health & Human Rights Symposium FGD Leader",
      aspectRatio: "3:2",
      width: 1200,
      height: 800,
      isReal: false,
      caption: "Focused Group Discussion leadership at Youth Mental Health Symposium",
    },
    goodSamaritan: {
      src: "/placeholders/volunteering-good-samaritan.webp",
      placeholderSrc: "/placeholders/volunteering-good-samaritan.webp",
      alt: "Good Samaritan Centre — Long-Term Voluntary Staff for Institutional Rehabilitation",
      aspectRatio: "3:2",
      width: 1200,
      height: 800,
      isReal: false,
      caption: "Long-term voluntary service assisting rehabilitation staff and resident programs",
    },
  },

  gallery: [
    {
      id: "portrait-feature",
      code: "01",
      title: "Ajin Shibu — Personal Folio",
      subtitle: "Marian College Kuttikkanam",
      category: "Academic & Leadership",
      description:
        "MSW Scholar in Medical & Psychiatry and founder.",
      src: "/images/ajin-shibu.png", // Active real portrait
      placeholderSrc: "/placeholders/gallery-01.webp",
      alt: "Ajin Shibu — MSW Medical & Psychiatry Scholar and Founder",
      tag: "Authentic Portrait • Verified 2026",
      spanClass: "col-span-12 lg:col-span-5 lg:row-span-2 aspect-[3/4] lg:aspect-auto",
      isReal: true,
      aspectRatio: "3:4",
      objectPosition: "object-top",
    },
    {
      id: "iqraa-archive",
      code: "02",
      title: "Psychiatric Clinical Practicum",
      subtitle: "IQRAA International Hospital, Kozhikode",
      category: "Clinical Healthcare",
      description:
        "Clinical intake observation, psychiatric rounds, and psychosocial rehabilitation.",
      src: "/placeholders/gallery-02.webp",
      placeholderSrc: "/placeholders/gallery-02.webp",
      alt: "IQRAA International Hospital Psychiatric Clinical Practicum Archive",
      tag: "NABH Clinical Dossier",
      spanClass: "col-span-12 sm:col-span-6 lg:col-span-4 min-h-[200px] sm:min-h-[240px] aspect-auto sm:aspect-[4/3]",
      isReal: false,
      aspectRatio: "4:3",
      objectPosition: "object-center",
    },
    {
      id: "aksharanila-archive",
      code: "03",
      title: "AKSHARANILA Fieldwork",
      subtitle: "Health Dialogue Kozhikode",
      category: "Fieldwork & Education",
      description:
        "Educational reinforcement and mentoring for underprivileged school students.",
      src: "/placeholders/gallery-03.webp",
      placeholderSrc: "/placeholders/gallery-03.webp",
      alt: "AKSHARANILA Community Fieldwork Educational Mentorship Archive",
      tag: "Grassroots Intervention Record",
      spanClass: "col-span-12 sm:col-span-6 lg:col-span-3 min-h-[200px] sm:min-h-[240px] aspect-auto sm:aspect-[4/3]",
      isReal: false,
      aspectRatio: "4:3",
      objectPosition: "object-center",
    },
    {
      id: "ecoscan-archive",
      code: "04",
      title: "ECOSCAN Biodiversity Project",
      subtitle: "LISSAH College Campus",
      category: "Environmental Design",
      description:
        "Campus flora cataloging, botanical taxonomy, and QR signage design.",
      src: "/placeholders/gallery-04.webp",
      placeholderSrc: "/placeholders/gallery-04.webp",
      alt: "ECOSCAN Botanical Biodiversity Campus Archive",
      tag: "Campus Flora Index",
      spanClass: "col-span-12 sm:col-span-6 lg:col-span-4 min-h-[200px] sm:min-h-[240px] aspect-auto sm:aspect-[4/3]",
      isReal: false,
      aspectRatio: "4:3",
      objectPosition: "object-center",
    },
    {
      id: "yuva-manass-archive",
      code: "05",
      title: "YUVA Manass Campaign",
      subtitle: "Youth Mental Health Dialogues",
      category: "Advocacy & Dialogue",
      description:
        "Focused Group Discussions and youth mental health destigmatization.",
      src: "/placeholders/gallery-05.webp",
      placeholderSrc: "/placeholders/gallery-05.webp",
      alt: "YUVA Manass Youth Mental Health Awareness Dialogues Archive",
      tag: "Advocacy Outreach Record",
      spanClass: "col-span-12 sm:col-span-6 lg:col-span-3 min-h-[200px] sm:min-h-[240px] aspect-auto sm:aspect-[4/3]",
      isReal: false,
      aspectRatio: "4:3",
      objectPosition: "object-center",
    },
    {
      id: "rehab-archive",
      code: "06",
      title: "Rehabilitation Practicum",
      subtitle: "Good Samaritan Centre, Kannur",
      category: "Rehabilitation Systems",
      description:
        "Institutional rehabilitation, developmental therapy, and community sports for PwDs.",
      src: "/placeholders/gallery-06.webp",
      placeholderSrc: "/placeholders/gallery-06.webp",
      alt: "Good Samaritan Rehabilitation Practicum Archive",
      tag: "Institutional Rehabilitation File",
      spanClass: "col-span-12 sm:col-span-12 lg:col-span-5 min-h-[200px] sm:min-h-[240px] aspect-auto sm:aspect-[16/9] lg:aspect-[4/3]",
      isReal: false,
      aspectRatio: "16:9",
      objectPosition: "object-center",
    },
  ] as GalleryMediaItem[],


  certificates: {
    kaps: {
      src: "/placeholders/certificate-kaps.webp",
      placeholderSrc: "/placeholders/certificate-kaps.webp",
      alt: "KAPS Kerala Official Registered Professional Member Certificate Scan",
      aspectRatio: "4:3",
      width: 1200,
      height: 900,
      isReal: false,
    },
    iqraa: {
      src: "/placeholders/certificate-iqraa.webp",
      placeholderSrc: "/placeholders/certificate-iqraa.webp",
      alt: "IQRAA International Hospital Psychiatric Social Work Practicum Certificate Scan",
      aspectRatio: "4:3",
      width: 1200,
      height: 900,
      isReal: false,
    },
    goodSamaritan: {
      src: "/placeholders/certificate-good-samaritan.webp",
      placeholderSrc: "/placeholders/certificate-good-samaritan.webp",
      alt: "Good Samaritan Rehabilitation Social Work Internship Certificate Scan",
      aspectRatio: "4:3",
      width: 1200,
      height: 900,
      isReal: false,
    },
    fieldwork: {
      src: "/placeholders/certificate-fieldwork.webp",
      placeholderSrc: "/placeholders/certificate-fieldwork.webp",
      alt: "Health Dialogue Concurrent Fieldwork Practicum Certificate Scan",
      aspectRatio: "4:3",
      width: 1200,
      height: 900,
      isReal: false,
    },
    sahrudeya: {
      src: "/placeholders/certificate-sahrudeya.webp",
      placeholderSrc: "/placeholders/certificate-sahrudeya.webp",
      alt: "Welfare Services Ernakulam (Sahrudeya) Social Welfare Internship Certificate Scan",
      aspectRatio: "4:3",
      width: 1200,
      height: 900,
      isReal: false,
    },
    cybersecurity: {
      src: "/placeholders/certificate-cybersecurity.webp",
      placeholderSrc: "/placeholders/certificate-cybersecurity.webp",
      alt: "Cyber Security Certificate Scan",
      aspectRatio: "4:3",
      width: 1200,
      height: 900,
      isReal: false,
    },
    canva: {
      src: "/placeholders/certificate-canva.webp",
      placeholderSrc: "/placeholders/certificate-canva.webp",
      alt: "Visual Communication & Canva Skills Add-on Course Certificate Scan",
      aspectRatio: "4:3",
      width: 1200,
      height: 900,
      isReal: false,
    },
    graphicDesign: {
      src: "/placeholders/certificate-graphic-design.webp",
      placeholderSrc: "/placeholders/certificate-graphic-design.webp",
      alt: "Graphic Designer Certificate Scan",
      aspectRatio: "4:3",
      width: 1200,
      height: 900,
      isReal: false,
    },
    softwareDev: {
      src: "/placeholders/certificate-software-dev.webp",
      placeholderSrc: "/placeholders/certificate-software-dev.webp",
      alt: "Software Product Developer Certificate Scan",
      aspectRatio: "4:3",
      width: 1200,
      height: 900,
      isReal: false,
    },
    skillup: {
      src: "/placeholders/certificate-skillup.webp",
      placeholderSrc: "/placeholders/certificate-skillup.webp",
      alt: "Skillup Professional Certifications Scan",
      aspectRatio: "4:3",
      width: 1200,
      height: 900,
      isReal: false,
    },
  },
};
