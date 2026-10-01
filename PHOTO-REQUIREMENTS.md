# Ajin Shibu — Master Photography & Visual Asset Requirements

> Comprehensive specification for all photography, clinical documentation, project imagery, and official certification documents across the portfolio website.

---

## 1. Executive Summary & Inventory

- **Total Media Slots Cataloged**: 31 visual assets
- **Authentic Photos Currently Deployed**: 1 photo (`public/images/ajin-shibu.png` — Hero portrait & Gallery Folio 01)
- **Placeholders Deployed**: 31 custom dark-luxury SVG/WebP assets (`public/placeholders/`)
- **Central Asset Registry**: `src/data/media.ts`
- **Supported Aspect Ratios**: `4:5` (Hero Portrait), `3:4` (Editorial Portrait / Certs), `3:2` (Clinical & Fieldwork Practicum), `4:3` (Community & Case Studies), `16:9` (Cinematic Campaign & Venture Banners)

---

## 2. Requirements by Section

### 2.1 Hero Section

#### Slot 01: Hero Master Portrait
- **Filename**: `hero-portrait.webp` (or high-res `ajin-shibu.png`)
- **Path**: `public/placeholders/hero-portrait.webp` (current active: `public/images/ajin-shibu.png`)
- **Section**: Hero (`src/components/Hero.tsx`)
- **Purpose**: Definitive editorial personal branding portrait representing Ajin Shibu as a social work scholar, mental health advocate, and founder.
- **Aspect Ratio**: `4:5`
- **Orientation**: Vertical / Portrait
- **Suggested Resolution**: `1200 × 1500 px` (minimum 300 DPI source)
- **Priority**: **Essential (Highest Priority)**
- **Description**: High-resolution studio or outdoor editorial portrait of Ajin Shibu. Professional or smart-casual attire (blazer, structured dark shirt, or formal academic attire).
- **Composition & Lighting**:
  - Close-up to mid-bust framing, centered or slight 3/4 turn.
  - Direct, warm, engaged gaze into the camera lens.
  - Directional soft lighting with gentle rim light to cleanly separate from dark background.
  - Neutral dark, architectural, or subtly textured background (slate grey, deep charcoal, dark olive).

---

### 2.2 About Section

#### Slot 02: About Editorial Narrative Plate
- **Filename**: `about-portrait.webp`
- **Path**: `public/placeholders/about-portrait.webp`
- **Section**: About (`src/components/About.tsx`)
- **Purpose**: Environmental portrait displaying professional action, mentorship, clinical dialogue, or reflective scholarship.
- **Aspect Ratio**: `3:4`
- **Orientation**: Vertical / Portrait
- **Suggested Resolution**: `1200 × 1600 px`
- **Priority**: **High**
- **Description**: Candid or environmental photograph of Ajin Shibu in an academic setting, library, campus courtyard, or seminar hall reviewing clinical case notes or engaged in study.
- **Composition & Lighting**:
  - Medium shot showing posture, desk/table context, or architectural surroundings.
  - Thoughtful, confident, approachable posture.
  - Natural ambient light with shallow depth of field (blurred background).

---

### 2.3 Experience Section (Clinical & Practicum Placements)

#### Slot 03: IQRAA International Hospital Practicum
- **Filename**: `experience-iqraa.webp`
- **Path**: `public/placeholders/experience-iqraa.webp`
- **Section**: Experience (`src/components/Experience.tsx`)
- **Purpose**: Visual documentation of clinical psychiatric hospital internship at IQRAA International Hospital & Research Centre.
- **Aspect Ratio**: `3:2`
- **Orientation**: Horizontal / Landscape
- **Suggested Resolution**: `1200 × 800 px`
- **Priority**: **High**
- **Description**: Hospital exterior facade, Department of Psychiatry entrance, institutional corridor, clinical case conference room, or Ajin wearing hospital credentials/ID badge. *(Strict patient privacy / HIPAA/NABH compliance — never include patients' faces or identifiable records).*
- **Composition**: Symmetrical architectural perspective, institutional authority, muted clinical tones.

#### Slot 04: Good Samaritan Rehabilitation Centre Practicum
- **Filename**: `experience-good-samaritan.webp`
- **Path**: `public/placeholders/experience-good-samaritan.webp`
- **Section**: Experience (`src/components/Experience.tsx`)
- **Purpose**: Rehabilitation social work practicum documentation at Good Samaritan Rehabilitation & Training Centre, Kannur.
- **Aspect Ratio**: `3:2`
- **Orientation**: Horizontal / Landscape
- **Suggested Resolution**: `1200 × 800 px`
- **Priority**: **High**
- **Description**: Vocational training workshops, rehabilitation center campus, group activity hall, or staff coordination table.
- **Composition**: Warm, humane, dignified documentary framing.

#### Slot 05: Sahrudeya Welfare Services Practicum
- **Filename**: `experience-sahrudeya.webp`
- **Path**: `public/placeholders/experience-sahrudeya.webp`
- **Section**: Experience (`src/components/Experience.tsx`)
- **Purpose**: Social welfare administration internship documentation at Welfare Services Ernakulam.
- **Aspect Ratio**: `3:2`
- **Orientation**: Horizontal / Landscape
- **Suggested Resolution**: `1200 × 800 px`
- **Priority**: **Medium**
- **Description**: Community development office, self-help group records, welfare project charts, or field orientation.
- **Composition**: Documentary-style, clean organizational atmosphere.

#### Slot 06: Health Dialogue Concurrent Fieldwork
- **Filename**: `experience-fieldwork.webp`
- **Path**: `public/placeholders/experience-fieldwork.webp`
- **Section**: Experience (`src/components/Experience.tsx`)
- **Purpose**: Concurrent community fieldwork practicum in Kozhikode.
- **Aspect Ratio**: `3:2`
- **Orientation**: Horizontal / Landscape
- **Suggested Resolution**: `1200 × 800 px`
- **Priority**: **Medium**
- **Description**: Community fieldwork survey interaction, rural neighborhood path, community hall, or field team meeting.
- **Composition**: Ground-level perspective, authentic natural Kerala community surroundings.

---

### 2.4 Projects Section (Case Studies)

#### Slot 07: AKSHARANILA Educational Initiative
- **Filename**: `project-aksharanila.webp`
- **Path**: `public/placeholders/project-aksharanila.webp`
- **Section**: Projects (`src/components/Projects.tsx`)
- **Purpose**: Hero visual for the AKSHARANILA educational continuity project in Kozhikode.
- **Aspect Ratio**: `4:3`
- **Orientation**: Horizontal
- **Suggested Resolution**: `1200 × 900 px`
- **Priority**: **Essential**
- **Description**: Action photograph from the AKSHARANILA project — study materials, blackboard session, children’s learning workshop, or community education room.
- **Composition**: Warm, high energy, genuine educational engagement, child-friendly framing from child eye-level.

#### Slot 08: ECOSCAN Campus Flora & QR Documentation
- **Filename**: `project-ecoscan.webp`
- **Path**: `public/placeholders/project-ecoscan.webp`
- **Section**: Projects (`src/components/Projects.tsx`)
- **Purpose**: Hero visual for the ECOSCAN botanical biodiversity documentation at LISSAH campus.
- **Aspect Ratio**: `4:3`
- **Orientation**: Horizontal
- **Suggested Resolution**: `1200 × 900 px`
- **Priority**: **Essential**
- **Description**: Close-up of QR code informational plate installed on a campus tree/plant, someone scanning the QR with a smartphone, or campus botanical flora overview.
- **Composition**: Crisp macro or semi-macro photography, lush green depth of field, clear technological QR element contrasting with organic foliage.

---

### 2.5 YUVA Manass Section (Youth Mental Health Campaign)

#### Slot 09: YUVA Manass Campaign Advocacy Dialogue
- **Filename**: `yuva-manass-campaign.webp`
- **Path**: `public/placeholders/yuva-manass-campaign.webp`
- **Section**: YUVA Manass (`src/components/YuvaManass.tsx`)
- **Purpose**: Cinematic 16:9 banner anchor for the "Are You Okay?" youth mental health movement.
- **Aspect Ratio**: `16:9`
- **Orientation**: Wide Horizontal
- **Suggested Resolution**: `1920 × 1080 px`
- **Priority**: **Essential**
- **Description**: Interactive youth circle, mental health symposium workshop, group discussion circle with youth participants, or campaign banner with Ajin speaking.
- **Composition**: Wide cinematic framing, evocative mood, empathy, connection, deep focus on genuine peer interaction.

---

### 2.6 AMDG Group Section (Entrepreneurship & Media Studio)

#### Slot 10: AMDG Group Venture & Media Ecosystem
- **Filename**: `amdg-brand.webp`
- **Path**: `public/placeholders/amdg-brand.webp`
- **Section**: AMDG Group (`src/components/AmdgGroup.tsx`)
- **Purpose**: High-tech, entrepreneurial visual anchor representing AMDG Group and AMDG Media.
- **Aspect Ratio**: `16:9`
- **Orientation**: Wide Horizontal
- **Suggested Resolution**: `1920 × 1080 px`
- **Priority**: **Essential**
- **Description**: Creative studio workspace, dual-monitor digital workstation displaying design systems/editorial layouts, video production setup, or tech incubation team meeting.
- **Composition**: Clean, modern, architectural desk setup, moody studio backlighting with cyan/blue accents.

---

### 2.7 Volunteering Section

#### Slot 11: Marivilli Clinic Medical Camp
- **Filename**: `volunteering-medical-camp.webp`
- **Path**: `public/placeholders/volunteering-medical-camp.webp`
- **Section**: Volunteering (`src/components/VolunteeringCapabilities.tsx`)
- **Purpose**: Transgender medical screening camp documentation.
- **Aspect Ratio**: `3:2` (or `4:3`)
- **Resolution**: `1200 × 800 px`
- **Priority**: **Medium**
- **Description**: Clinic reception, medical registration desk, doctor consultation area, or camp banner.

#### Slot 12: Puthuppady Grama Panchayat Survey
- **Filename**: `volunteering-insurance-survey.webp`
- **Path**: `public/placeholders/volunteering-insurance-survey.webp`
- **Section**: Volunteering (`src/components/VolunteeringCapabilities.tsx`)
- **Purpose**: Door-to-door insurance and welfare scheme survey documentation.
- **Aspect Ratio**: `3:2`
- **Resolution**: `1200 × 800 px`
- **Priority**: **Medium**
- **Description**: Field clipboard, surveyor with resident at doorstep, or Grama Panchayat headquarters.

#### Slot 13: GSRTC Peravoor PwD Sports Meet & Marathon
- **Filename**: `volunteering-pwd-sports.webp`
- **Path**: `public/placeholders/volunteering-pwd-sports.webp`
- **Section**: Volunteering (`src/components/VolunteeringCapabilities.tsx`)
- **Purpose**: Sports meet and marathon for persons with disabilities.
- **Aspect Ratio**: `3:2`
- **Resolution**: `1200 × 800 px`
- **Priority**: **Medium**
- **Description**: Track event, finish line cheer, medal distribution ceremony, or volunteer logistics booth.

#### Slot 14: Dhisha Foundation Youth Mental Health Symposium
- **Filename**: `volunteering-mental-health.webp`
- **Path**: `public/placeholders/volunteering-mental-health.webp`
- **Section**: Volunteering (`src/components/VolunteeringCapabilities.tsx`)
- **Purpose**: Moderating the Focus Group Discussion (FGD) at the symposium.
- **Aspect Ratio**: `3:2`
- **Resolution**: `1200 × 800 px`
- **Priority**: **High**
- **Description**: Ajin standing or seated leading a roundtable focus group discussion, whiteboard with key talking points, or stage presentation.

#### Slot 15: Good Samaritan Voluntary Staff
- **Filename**: `volunteering-good-samaritan.webp`
- **Path**: `public/placeholders/volunteering-good-samaritan.webp`
- **Section**: Volunteering (`src/components/VolunteeringCapabilities.tsx`)
- **Purpose**: Long-term voluntary service at institutional rehabilitation center.
- **Aspect Ratio**: `3:2`
- **Resolution**: `1200 × 800 px`
- **Priority**: **Medium**
- **Description**: Institutional grounds, community meal or activity supervision, staff team briefing.

---

### 2.8 Visual Archive & Gallery (ArchiveCertifications)

#### Slots 16–27: 12 Archival Gallery Folios
1. **`gallery-msw-academic.webp`** (`3:4` portrait, `1200 × 1600 px`, **Essential**): MSW academic graduation, university research, or formal scholar portrait. *(Folio 01 Featured Card)*.
2. **`gallery-fieldwork.webp`** (`4:3` landscape, `1200 × 900 px`, **High**): Grassroots fieldwork group photo, community interaction.
3. **`gallery-psychiatric.webp`** (`4:3` landscape, `1200 × 900 px`, **High**): Department of Psychiatry IQRAA clinical team or department doorway.
4. **`gallery-community.webp`** (`4:3` landscape, `1200 × 900 px`, **Medium**): Community awareness rally, street play, or public health campaign.
5. **`gallery-aksharanila.webp`** (`4:3` landscape, `1200 × 900 px`, **High**): AKSHARANILA group photo or project launch with children.
6. **`gallery-ecoscan.webp`** (`4:3` landscape, `1200 × 900 px`, **High**): ECOSCAN students tagging flora on LISSAH campus.
7. **`gallery-yuva-manass.webp`** (`16:9` landscape, `1600 × 900 px`, **Essential**): YUVA Manass campaign banner, student gathering.
8. **`gallery-amdg.webp`** (`16:9` landscape, `1600 × 900 px`, **High**): AMDG Media workstation, video editing timeline, branding collateral.
9. **`gallery-workshops.webp`** (`4:3` landscape, `1200 × 900 px`, **Medium**): Interactive seminar workshop hall, participants taking notes.
10. **`gallery-seminars.webp`** (`4:3` landscape, `1200 × 900 px`, **Medium**): Presentation at a state or national academic social work conference.
11. **`gallery-volunteering.webp`** (`4:3` landscape, `1200 × 900 px`, **Medium**): Group picture of volunteers in distinctive volunteer t-shirts/badges.
12. **`gallery-leadership.webp`** (`4:3` landscape, `1200 × 900 px`, **High**): Ajin addressing an audience at a podium or moderating a panel.

---

### 2.9 Official Certificates & Credentials

#### Slots 28–31: High-Resolution Scans of Verified Certificates
1. **`cert-kaps.webp`** (`3:4` vertical, `1200 × 1600 px`, **High**): Kerala Association of Professional Social Workers (KAPS) Membership Certificate or official ID. *(Membership number masked or discreet).*
2. **`cert-clinical.webp`** (`3:2` horizontal, `1200 × 800 px`, **High**): Official Clinical Internship Completion Certificate issued by IQRAA Department of Psychiatry.
3. **`cert-rehab.webp`** (`3:2` horizontal, `1200 × 800 px`, **High**): Good Samaritan Rehabilitation & Training Centre Internship Certificate.
4. **`cert-technical.webp`** (`3:2` horizontal, `1200 × 800 px`, **Medium**): Cyber Security, Canva Skills, Graphic Design, or Software Product Developer Certificates.

- **Scanning Advice for Certificates**:
  - Scan directly on a flatbed scanner at 300 DPI, or take a straight-on, glare-free photo under diffused daylight.
  - Crop edges cleanly to the certificate border.
  - Never alter watermarks, stamps, or official signatures.

---

## 3. General Quality Guidelines for Photography

1. **Color Grading & Mood**:
   - Natural, rich tones with subtle contrast. Avoid neon filters or aggressive oversaturation.
   - For black and white conversions in UI, high-contrast monochrome with gentle midtones performs best.
2. **File Formats**:
   - Modern WebP format is strongly recommended for optimal compression and rapid page load.
   - Original master PNG or JPEG files can also be dropped directly into `public/images/`.
3. **Responsive Sizing**:
   - Keep landscape images at `1600 × 900` or `1200 × 800`.
   - Keep portrait images at `1200 × 1500` or `1200 × 1600`.
   - Keep file size between 80 KB – 350 KB per compressed WebP.
