# Master Photo Map & Replacement Inventory

> Comprehensive mapping of every visual asset slot across the Ajin Shibu portfolio codebase, with file paths, component references, and step-by-step replacement instructions.

---

## 1. Quick Replacement Guide (2-Minute Process)

To replace any placeholder with a real photograph:

### Method A: Direct File Overwrite (Zero Code Changes)
Simply save your real photograph with the **exact same filename** in `/public/placeholders/`:
```bash
# Example: Replacing the About portrait
cp /path/to/my-real-about-photo.jpg public/placeholders/about-portrait.webp
```
*Because the component is already wired to that path, refreshing your browser immediately displays the real photo.*

### Method B: Add Real File to `/public/images/` & Flip `isReal: true` in `src/data/media.ts` (Recommended)
1. Drop your authentic photo into `public/images/`, e.g. `public/images/real-ecoscan.jpg`.
2. Open `src/data/media.ts`.
3. Locate the item (e.g. `projects.ecoscan`) and update:
   ```typescript
   ecoscan: {
     src: "/images/real-ecoscan.jpg", // <--- Update to your new photo path
     placeholderSrc: "/placeholders/project-ecoscan.webp",
     alt: "ECOSCAN Botanical Flora Identification Project at LISSAH",
     aspectRatio: "4:3",
     width: 1200,
     height: 900,
     isReal: true, // <--- Flip to true!
     caption: "LISSAH campus tree taxonomy and digital QR information plates",
   }
   ```
4. Run `npm run build` to verify static compilation.

---

## 2. Complete Asset Inventory & Mapping Table

| # | Slot / Identifier | Section / UI Location | Component File | Placeholder Filename (in `/public/placeholders/`) | Recommended Real Photo Content | Aspect Ratio | Priority | Current Status |
|---|-------------------|----------------------|----------------|---------------------------------------------------|--------------------------------|--------------|----------|----------------|
| 01 | `hero.portrait` | Hero Section (Center Top) | `src/components/Hero.tsx` | `hero-portrait.webp` | Studio/Environmental master portrait of Ajin Shibu in dark blazer/formal shirt | `4:5` | **Essential** | ✅ Active (`/images/ajin-shibu.png`) |
| 02 | `about.portrait` | About Section (Left Column) | `src/components/About.tsx` | `about-portrait.webp` | Reflective scholar / academic action portrait in study, library, or campus | `3:4` | **High** | 🔲 Placeholder active |
| 03 | `experience.iqraa` | Experience 01 Row / Lightbox | `src/components/Experience.tsx` | `experience-iqraa.webp` | IQRAA Hospital Department of Psychiatry facade or clinical conference room | `3:2` | **High** | 🔲 Placeholder active |
| 04 | `experience.goodSamaritan` | Experience 02 Row / Lightbox | `src/components/Experience.tsx` | `experience-good-samaritan.webp` | Good Samaritan Rehabilitation Centre vocational workshop or campus grounds | `3:2` | **High** | 🔲 Placeholder active |
| 05 | `experience.sahrudeya` | Experience 03 Row / Lightbox | `src/components/Experience.tsx` | `experience-sahrudeya.webp` | Sahrudeya Welfare Services Ernakulam office, community charts, or field center | `3:2` | **Medium** | 🔲 Placeholder active |
| 06 | `experience.fieldwork` | Experience 04 Row / Lightbox | `src/components/Experience.tsx` | `experience-fieldwork.webp` | Health Dialogue concurrent community survey or rural fieldwork setting | `3:2` | **Medium** | 🔲 Placeholder active |
| 07 | `projects.aksharanila` | Projects (Case Study 01 Background) | `src/components/Projects.tsx` | `project-aksharanila.webp` | AKSHARANILA classroom, blackboard, children's workshop, or learning aids | `4:3` | **Essential** | 🔲 Placeholder active |
| 08 | `projects.ecoscan` | Projects (Case Study 02 Background) | `src/components/Projects.tsx` | `project-ecoscan.webp` | QR code plate installed on tree / smartphone scanning flora on LISSAH campus | `4:3` | **Essential** | 🔲 Placeholder active |
| 09 | `yuvaManass.campaign` | YUVA Manass (Cinematic Banner Plate) | `src/components/YuvaManass.tsx` | `yuva-manass-campaign.webp` | Youth mental health circle, group discussion, or "Are You Okay?" banner | `16:9` | **Essential** | 🔲 Placeholder active |
| 10 | `amdg.brand` | AMDG Group (Venture Banner Plate) | `src/components/AmdgGroup.tsx` | `amdg-brand.webp` | AMDG Media studio workstation, digital design systems, or tech incubation desk | `16:9` | **Essential** | 🔲 Placeholder active |
| 11 | `volunteering.medicalCamp` | Volunteering 01 (Hover Thumbnail) | `src/components/VolunteeringCapabilities.tsx` | `volunteering-medical-camp.webp` | Marivilli Clinic medical camp screening desk or reception | `3:2` | **Medium** | 🔲 Placeholder ready |
| 12 | `volunteering.insuranceSurvey` | Volunteering 02 (Hover Thumbnail) | `src/components/VolunteeringCapabilities.tsx` | `volunteering-insurance-survey.webp` | Puthuppady Grama Panchayat door-to-door survey interaction | `3:2` | **Medium** | 🔲 Placeholder ready |
| 13 | `volunteering.pwdSports` | Volunteering 03 (Hover Thumbnail) | `src/components/VolunteeringCapabilities.tsx` | `volunteering-pwd-sports.webp` | GSRTC Peravoor sports meet for persons with disabilities | `3:2` | **Medium** | 🔲 Placeholder ready |
| 14 | `volunteering.mentalHealth` | Volunteering 04 (Hover Thumbnail) | `src/components/VolunteeringCapabilities.tsx` | `volunteering-mental-health.webp` | Dhisha Foundation symposium Focus Group Discussion session | `3:2` | **High** | 🔲 Placeholder ready |
| 15 | `volunteering.goodSamaritan` | Volunteering 05 (Hover Thumbnail) | `src/components/VolunteeringCapabilities.tsx` | `volunteering-good-samaritan.webp` | Voluntary staff service at Good Samaritan institutional rehabilitation | `3:2` | **Medium** | 🔲 Placeholder ready |
| 16 | `gallery[0]` (Folio 01) | Gallery Featured Card & Lightbox | `src/components/ArchiveCertifications.tsx` | `gallery-msw-academic.webp` | MSW academic graduation, university research, or formal scholar portrait | `3:4` | **Essential** | ✅ Active (`/images/ajin-shibu.png`) |
| 17 | `gallery[1]` (Folio 02) | Gallery Folio Card 02 & Lightbox | `src/components/ArchiveCertifications.tsx` | `gallery-fieldwork.webp` | Grassroots fieldwork team photo or community survey interaction | `4:3` | **High** | 🔲 Placeholder active |
| 18 | `gallery[2]` (Folio 03) | Gallery Folio Card 03 & Lightbox | `src/components/ArchiveCertifications.tsx` | `gallery-psychiatric.webp` | IQRAA Department of Psychiatry clinical department or team | `4:3` | **High** | 🔲 Placeholder active |
| 19 | `gallery[3]` (Folio 04) | Gallery Folio Card 04 & Lightbox | `src/components/ArchiveCertifications.tsx` | `gallery-community.webp` | Community outreach rally, awareness play, or civic program | `4:3` | **Medium** | 🔲 Placeholder active |
| 20 | `gallery[4]` (Folio 05) | Gallery Folio Card 05 & Lightbox | `src/components/ArchiveCertifications.tsx` | `gallery-aksharanila.webp` | AKSHARANILA project inauguration or children's group photo | `4:3` | **High** | 🔲 Placeholder active |
| 21 | `gallery[5]` (Folio 06) | Gallery Folio Card 06 & Lightbox | `src/components/ArchiveCertifications.tsx` | `gallery-ecoscan.webp` | Field botanists / students documenting tree flora on campus | `4:3` | **High** | 🔲 Placeholder active |
| 22 | `gallery[6]` (Folio 07) | Gallery Folio Card 07 & Lightbox | `src/components/ArchiveCertifications.tsx` | `gallery-yuva-manass.webp` | YUVA Manass campaign seminar banner or student engagement session | `16:9` | **Essential** | 🔲 Placeholder active |
| 23 | `gallery[7]` (Folio 08) | Gallery Folio Card 08 & Lightbox | `src/components/ArchiveCertifications.tsx` | `gallery-amdg.webp` | AMDG Group branding assets, media suite, or developer workstation | `16:9` | **High** | 🔲 Placeholder active |
| 24 | `gallery[8]` (Folio 09) | Gallery Folio Card 09 & Lightbox | `src/components/ArchiveCertifications.tsx` | `gallery-workshops.webp` | Skill training workshop hall, participants in session | `4:3` | **Medium** | 🔲 Placeholder active |
| 25 | `gallery[9]` (Folio 10) | Gallery Folio Card 10 & Lightbox | `src/components/ArchiveCertifications.tsx` | `gallery-seminars.webp` | Academic conference podium presentation or panel session | `4:3` | **Medium** | 🔲 Placeholder active |
| 26 | `gallery[10]` (Folio 11) | Gallery Folio Card 11 & Lightbox | `src/components/ArchiveCertifications.tsx` | `gallery-volunteering.webp` | Civic volunteering group photo or marathon coordination | `4:3` | **Medium** | 🔲 Placeholder active |
| 27 | `gallery[11]` (Folio 12) | Gallery Folio Card 12 & Lightbox | `src/components/ArchiveCertifications.tsx` | `gallery-leadership.webp` | Ajin Shibu leading a youth discussion, campus speech, or meeting | `4:3` | **High** | 🔲 Placeholder active |
| 28 | `certificates.kaps` | Certifications List / Preview | `src/components/ArchiveCertifications.tsx` | `cert-kaps.webp` | Clean flatbed scan of KAPS Professional Membership Certificate | `3:4` | **High** | 🔲 Placeholder active |
| 29 | `certificates.clinical` | Certifications List / Preview | `src/components/ArchiveCertifications.tsx` | `cert-clinical.webp` | Official IQRAA Hospital Psychiatric Clinical Internship Certificate scan | `3:2` | **High** | 🔲 Placeholder active |
| 30 | `certificates.rehab` | Certifications List / Preview | `src/components/ArchiveCertifications.tsx` | `cert-rehab.webp` | Official Good Samaritan Rehabilitation Internship Certificate scan | `3:2` | **High** | 🔲 Placeholder active |
| 31 | `certificates.technical` | Certifications List / Preview | `src/components/ArchiveCertifications.tsx` | `cert-technical.webp` | Cyber Security & Software Product Developer Certificate scans | `3:2` | **Medium** | 🔲 Placeholder active |

---

## 3. Image Optimization & Format Tips

- **Recommended Image Format**: Convert your photographs to `.webp` or `.jpg` before adding them.
- **Conversion Command (Terminal)**:
  ```bash
  # Convert a single photo to optimized WebP
  npx sharp-cli -i my-photo.jpg -o public/placeholders/about-portrait.webp -q 85
  ```
- **Aspect Ratio Cropping**: Crop images to their respective aspect ratio (`4:5`, `3:4`, `3:2`, `4:3`, `16:9`) prior to placing them, ensuring focal elements (faces, text) are centered.
