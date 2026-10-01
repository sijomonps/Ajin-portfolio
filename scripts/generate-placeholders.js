/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const placeholders = [
  {
    filename: 'hero-portrait.webp',
    width: 1200,
    height: 1500,
    ratio: '4:5',
    title: 'AJIN SHIBU',
    subtitle: 'HERO IDENTITY PORTRAIT',
    category: 'PERSONAL IDENTITY / HERO',
    description: 'Authentic portrait, studio or natural lighting, dark editorial attire',
  },
  {
    filename: 'about-portrait.webp',
    width: 1200,
    height: 1600,
    ratio: '3:4',
    title: 'AJIN SHIBU',
    subtitle: 'SCHOLAR &amp; CLINICAL PORTRAIT',
    category: 'ABOUT / ACADEMIC COLOPHON',
    description: 'Professional documentary portrait in academic or clinical setting',
  },
  {
    filename: 'experience-iqraa.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    title: 'IQRAA INTERNATIONAL HOSPITAL',
    subtitle: 'PSYCHIATRIC SOCIAL WORK CLINIC',
    category: 'EXPERIENCE / CLINICAL PRACTICUM',
    description: 'NABH-accredited Department of Psychiatry clinical environment or team setting',
  },
  {
    filename: 'experience-good-samaritan.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    title: 'GOOD SAMARITAN REHABILITATION',
    subtitle: 'INSTITUTIONAL REHABILITATION PRACTICUM',
    category: 'EXPERIENCE / REHABILITATION',
    description: 'Rehabilitation centre campus, vocational therapy workshops, or resident activities',
  },
  {
    filename: 'experience-sahrudeya.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    title: 'SAHRUDEYA WELFARE SERVICES',
    subtitle: 'COMMUNITY WELFARE ADMINISTRATION',
    category: 'EXPERIENCE / WELFARE ADMINISTRATION',
    description: 'Non-governmental organization operations, SHG community sessions, or field documentation',
  },
  {
    filename: 'experience-fieldwork.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    title: 'HEALTH DIALOGUE KOZHIKODE',
    subtitle: 'CONCURRENT FIELDWORK PRACTICUM',
    category: 'EXPERIENCE / FIELDWORK',
    description: 'Grassroots community surveys, neighborhood home visits, or demographic assessments',
  },
  {
    filename: 'project-aksharanila.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'PROJECT // AKSHARANILA',
    subtitle: 'EDUCATION THROUGH EMPOWERMENT',
    category: 'SELECTED WORK / COMMUNITY FIELDWORK',
    description: 'Student educational mentorship, learning sessions with underprivileged school children',
  },
  {
    filename: 'project-ecoscan.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'PROJECT // ECOSCAN',
    subtitle: 'COLLEGE BIODIVERSITY ARCHIVE',
    category: 'SELECTED WORK / ENVIRONMENTAL DESIGN',
    description: 'Campus tree taxonomy, botanical field cataloging, and digital QR signage installation',
  },
  {
    filename: 'yuva-manass-campaign.webp',
    width: 1600,
    height: 900,
    ratio: '16:9',
    title: 'YUVA MANASS CAMPAIGN',
    subtitle: 'ARE YOU OKAY? YOUTH DIALOGUES',
    category: 'ADVOCACY / MENTAL HEALTH',
    description: 'Youth mental health awareness workshop, student dialogue session, or campaign banner',
  },
  {
    filename: 'amdg-brand.webp',
    width: 1600,
    height: 900,
    ratio: '16:9',
    title: 'AMDG GROUP // AMDG MEDIA',
    subtitle: 'DIGITAL INNOVATION &amp; CREATIVE ENGINE',
    category: 'VENTURE / MEDIA &amp; TECHNOLOGY',
    description: 'AMDG creative studio environment, digital production workspace, or brand visual',
  },
  {
    filename: 'volunteering-medical-camp.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    title: 'MARIVILLI CLINIC MEDICAL CAMP',
    subtitle: 'TRANSGENDER HEALTHCARE COORDINATION',
    category: 'VOLUNTEERING / CIVIC SERVICE',
    description: 'Medical intake desk, healthcare screening, or community volunteer coordination',
  },
  {
    filename: 'volunteering-insurance-survey.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    title: 'PUTHUPPADY GRAMA PANCHAYAT',
    subtitle: 'WELFARE &amp; INSURANCE SURVEY',
    category: 'VOLUNTEERING / CIVIC ACTION',
    description: 'Door-to-door community survey, citizen interaction, or welfare enrollment',
  },
  {
    filename: 'volunteering-pwd-sports.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    title: 'GSRTC PERAVOOR SPORTS MEET',
    subtitle: 'MARATHON FOR PERSONS WITH DISABILITIES',
    category: 'VOLUNTEERING / DISABILITY ADVOCACY',
    description: 'Trackside assistance, marathon coordination, or encouragement for PwD athletes',
  },
  {
    filename: 'volunteering-mental-health.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    title: 'DHISHA FOUNDATION SYMPOSIUM',
    subtitle: 'FOCUSED GROUP DISCUSSION LEADER',
    category: 'VOLUNTEERING / DIALOGUE LEADERSHIP',
    description: 'Leading FGD circle on youth mental health &amp; human rights at Ernakulam symposium',
  },
  {
    filename: 'volunteering-good-samaritan.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    title: 'GOOD SAMARITAN VOLUNTARY STAFF',
    subtitle: 'LONG-TERM REHABILITATION SERVICE',
    category: 'VOLUNTEERING / INSTITUTIONAL CARE',
    description: 'Long-term volunteer service assisting staff, vocational training, or developmental programs',
  },
  {
    filename: 'gallery-01.webp',
    width: 1200,
    height: 1600,
    ratio: '3:4',
    title: 'AJIN SHIBU — MSW SCHOLAR',
    subtitle: 'MARIAN COLLEGE KUTTIKKANAM',
    category: 'GALLERY // 01 • ACADEMIC &amp; LEADERSHIP',
    description: 'High-resolution authentic portrait of Ajin Shibu, Medical &amp; Psychiatry Scholar and Founder',
  },
  {
    filename: 'gallery-02.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'PSYCHIATRIC PRACTICUM ARCHIVE',
    subtitle: 'IQRAA INTERNATIONAL HOSPITAL',
    category: 'GALLERY // 02 • CLINICAL HEALTHCARE',
    description: 'Hospital Department of Psychiatry clinical environment, documentation, or team consultation',
  },
  {
    filename: 'gallery-03.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'AKSHARANILA FIELDWORK ARCHIVE',
    subtitle: 'HEALTH DIALOGUE KOZHIKODE',
    category: 'GALLERY // 03 • COMMUNITY FIELDWORK',
    description: 'Fieldwork education sessions with students, classroom interactions, and mentor moments',
  },
  {
    filename: 'gallery-04.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'ECOSCAN BOTANICAL ARCHIVE',
    subtitle: 'LISSAH COLLEGE BIODIVERSITY',
    category: 'GALLERY // 04 • ENVIRONMENTAL DESIGN',
    description: 'Cataloging campus tree species, botanical specimens, and informational design plates',
  },
  {
    filename: 'gallery-05.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'YUVA MANASS DIALOGUES ARCHIVE',
    subtitle: 'ARE YOU OKAY? CAMPAIGN',
    category: 'GALLERY // 05 • ADVOCACY &amp; DIALOGUE',
    description: 'Group discussion circles, student engagement sessions, or advocacy campaign banners',
  },
  {
    filename: 'gallery-06.webp',
    width: 1600,
    height: 900,
    ratio: '16:9',
    title: 'GOOD SAMARITAN REHAB ARCHIVE',
    subtitle: 'INSTITUTIONAL REHABILITATION KANNUR',
    category: 'GALLERY // 06 • REHABILITATION SYSTEMS',
    description: 'Resident vocational programs, rehabilitation facility activities, or community sports events',
  },
  {
    filename: 'certificate-kaps.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'KAPS OFFICIAL MEMBERSHIP',
    subtitle: 'KERALA ASSOC. OF PROFESSIONAL SOCIAL WORKERS',
    category: 'CREDENTIAL // 01 • PROFESSIONAL STANDING',
    description: 'Official State Chapter Registered Membership certificate document scan',
  },
  {
    filename: 'certificate-iqraa.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'PSYCHIATRIC SOCIAL WORK CERTIFICATE',
    subtitle: 'IQRAA INTERNATIONAL HOSPITAL',
    category: 'CREDENTIAL // 02 • CLINICAL PRACTICUM',
    description: 'NABH Department of Psychiatry clinical internship completion certificate document scan',
  },
  {
    filename: 'certificate-good-samaritan.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'REHABILITATION SOCIAL WORK CERTIFICATE',
    subtitle: 'GOOD SAMARITAN REHABILITATION CENTRE',
    category: 'CREDENTIAL // 03 • CLINICAL REHABILITATION',
    description: 'Two-month institutional rehabilitation practicum verification certificate document scan',
  },
  {
    filename: 'certificate-fieldwork.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'CONCURRENT FIELDWORK CERTIFICATE',
    subtitle: 'HEALTH DIALOGUE KOZHIKODE',
    category: 'CREDENTIAL // 04 • COMMUNITY FIELDWORK',
    description: 'Concurrent fieldwork practicum and community project initiation certificate scan',
  },
  {
    filename: 'certificate-sahrudeya.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'SOCIAL WELFARE ADMINISTRATION CERTIFICATE',
    subtitle: 'WELFARE SERVICES ERNAKULAM (SAHRUDEYA)',
    category: 'CREDENTIAL // 05 • NGO ADMINISTRATION',
    description: 'Social welfare administration internship completion certificate document scan',
  },
  {
    filename: 'certificate-cybersecurity.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'CYBER SECURITY CERTIFICATE',
    subtitle: 'INFORMATION SECURITY FOUNDATIONS',
    category: 'CREDENTIAL // 06 • TECHNICAL CREDENTIAL',
    description: 'Information security, privacy, and ethical digital systems certificate document scan',
  },
  {
    filename: 'certificate-canva.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'CANVA SKILLS ADD-ON CERTIFICATE',
    subtitle: 'VISUAL COMMUNICATION DESIGN',
    category: 'CREDENTIAL // 07 • DESIGN CREDENTIAL',
    description: 'Visual communication, graphic composition, and digital layout certificate document scan',
  },
  {
    filename: 'certificate-graphic-design.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'GRAPHIC DESIGNER CERTIFICATE',
    subtitle: 'BRAND TYPOGRAPHY &amp; DIGITAL ASSETS',
    category: 'CREDENTIAL // 08 • DESIGN CREDENTIAL',
    description: 'Digital media layout, brand identity, and executive presentation design certificate scan',
  },
  {
    filename: 'certificate-software-dev.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'SOFTWARE PRODUCT DEVELOPER CERTIFICATE',
    subtitle: 'DIGITAL PRODUCT WORKFLOWS',
    category: 'CREDENTIAL // 09 • TECHNICAL CREDENTIAL',
    description: 'Frontend product development, digital tools, and systems design certificate scan',
  },
  {
    filename: 'certificate-skillup.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    title: 'SKILLUP PROFESSIONAL CERTIFICATE',
    subtitle: 'COMMUNICATION &amp; CIVIC LEADERSHIP',
    category: 'CREDENTIAL // 10 • PROFESSIONAL LEARNING',
    description: 'Cross-disciplinary leadership, decision-making, and communication certificate scan',
  },
];

function buildSVG(p) {
  const { width, height, ratio, title, subtitle, category, description } = p;
  const cx = width / 2;
  const cy = height / 2;

  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c0e13" />
      <stop offset="50%" stop-color="#090a0d" />
      <stop offset="100%" stop-color="#060709" />
    </linearGradient>

    <!-- Subtle Cyan Aura -->
    <radialGradient id="auraGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.08" />
      <stop offset="70%" stop-color="#0284c7" stop-opacity="0.02" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Grid Pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-opacity="0.025" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />

  <!-- Subtle Grid Overlay -->
  <rect width="100%" height="100%" fill="url(#grid)" />

  <!-- Subtle Radial Aura -->
  <circle cx="${cx}" cy="${cy}" r="${Math.min(width, height) * 0.45}" fill="url(#auraGrad)" />

  <!-- Architectural Registration Marks (Four Corners) -->
  <g stroke="#38bdf8" stroke-opacity="0.35" stroke-width="1.5">
    <!-- Top-Left -->
    <line x1="36" y1="46" x2="56" y2="46" />
    <line x1="46" y1="36" x2="46" y2="56" />

    <!-- Top-Right -->
    <line x1="${width - 56}" y1="46" x2="${width - 36}" y2="46" />
    <line x1="${width - 46}" y1="36" x2="${width - 46}" y2="56" />

    <!-- Bottom-Left -->
    <line x1="36" y1="${height - 46}" x2="56" y2="${height - 46}" />
    <line x1="46" y1="${height - 56}" x2="46" y2="${height - 36}" />

    <!-- Bottom-Right -->
    <line x1="${width - 56}" y1="${height - 46}" x2="${width - 36}" y2="${height - 46}" />
    <line x1="${width - 46}" y1="${height - 56}" x2="${width - 46}" y2="${height - 36}" />
  </g>

  <!-- Thin Outer Border Frame -->
  <rect x="24" y="24" width="${width - 48}" height="${height - 48}" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1" rx="4" />
  <rect x="28" y="28" width="${width - 56}" height="${height - 56}" fill="none" stroke="#38bdf8" stroke-opacity="0.12" stroke-width="1" rx="2" />

  <!-- Top Header Metadata -->
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" letter-spacing="2.5">
    <text x="70" y="52" fill="#38bdf8" text-anchor="start">SPECIMEN // PLACEHOLDER</text>
    <text x="${width - 70}" y="52" fill="#94a3b8" text-anchor="end">${ratio} • ${width} × ${height}</text>
  </g>

  <!-- Top Category Line -->
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="500" letter-spacing="3">
    <text x="70" y="80" fill="#64748b" text-anchor="start">+ ${category}</text>
  </g>

  <!-- Center Composition: Photographic Camera Aperture Icon -->
  <g transform="translate(${cx}, ${cy - 85})" stroke="#38bdf8" stroke-opacity="0.8" fill="none">
    <circle cx="0" cy="0" r="38" stroke-width="1.5" stroke-dasharray="4 3" />
    <circle cx="0" cy="0" r="28" stroke-width="1.5" />
    <circle cx="0" cy="0" r="14" fill="#38bdf8" fill-opacity="0.15" stroke-width="1" />
    <circle cx="0" cy="0" r="4" fill="#38bdf8" />
    <!-- Aperture Blades -->
    <line x1="0" y1="-28" x2="16" y2="-10" stroke-width="1" />
    <line x1="24" y1="-14" x2="14" y2="14" stroke-width="1" />
    <line x1="18" y1="22" x2="-8" y2="20" stroke-width="1" />
    <line x1="-22" y1="18" x2="-20" y2="-10" stroke-width="1" />
    <line x1="-12" y1="-26" x2="8" y2="-22" stroke-width="1" />
  </g>

  <!-- Central Title Typography -->
  <g text-anchor="middle">
    <!-- Main Title (Instrument Serif/Editorial Style) -->
    <text x="${cx}" y="${cy + 10}" font-family="Georgia, Cambria, serif" font-size="34" font-weight="400" letter-spacing="1" fill="#f8fafc">
      ${title}
    </text>

    <!-- Subtitle (Clean Sans) -->
    <text x="${cx}" y="${cy + 42}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" letter-spacing="3" fill="#38bdf8">
      ${subtitle}
    </text>

    <!-- Intended Subject Description -->
    <text x="${cx}" y="${cy + 75}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="400" letter-spacing="0.5" fill="#94a3b8">
      ${description}
    </text>
  </g>

  <!-- Bottom Colophon Bar -->
  <line x1="60" y1="${height - 76}" x2="${width - 60}" y2="${height - 76}" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1" />

  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" letter-spacing="2">
    <text x="70" y="${height - 50}" fill="#64748b" text-anchor="start">AJIN SHIBU OFFICIAL ARCHIVE</text>
    <text x="${cx}" y="${height - 50}" fill="#38bdf8" text-anchor="middle" font-weight="600">● PENDING REAL PHOTOGRAPH</text>
    <text x="${width - 70}" y="${height - 50}" fill="#64748b" text-anchor="end">REPLACEABLE ASSET</text>
  </g>
</svg>
`.trim();
}

async function run() {
  const targetDir = path.join(__dirname, '..', 'public', 'placeholders');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log(`Generating ${placeholders.length} high-quality WebP placeholders in ${targetDir}...`);

  for (const item of placeholders) {
    const svgString = buildSVG(item);
    const outPath = path.join(targetDir, item.filename);
    const svgPath = path.join(targetDir, item.filename.replace('.webp', '.svg'));

    // Save SVG file
    fs.writeFileSync(svgPath, svgString, 'utf8');

    // Convert SVG to WebP using sharp
    await sharp(Buffer.from(svgString))
      .webp({ quality: 90 })
      .toFile(outPath);

    console.log(`✓ Generated ${item.filename} (${item.width}x${item.height}, ${item.ratio})`);
  }

  console.log(`All ${placeholders.length} placeholders successfully generated!`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
