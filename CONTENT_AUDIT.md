# Portfolio Website Content Audit

> **Codebase Content Audit & Verbatim Extraction**  
> **Repository:** `portfolio-website`  
> **Site Architecture:** Single Page Application (SPA) with React 19 + Vite, GSAP ScrollTrigger, and smooth-scrolling architecture.  
> **Data Storage Architecture:** All copy throughout the application is **hardcoded directly** within the React component JSX files and `index.html`. No external configuration or data files (such as `projects.json`, `data.ts`, or CMS endpoints) are currently used. Any internal data structures (e.g., arrays of projects, skills, FAQs) are declared directly at the top of their respective component files.

---

# Home (Portfolio Landing Page — SPA Root: `/`)

## Document Metadata & Head Tags — `index.html`
*Data Source: Hardcoded directly in `index.html`*
- Page Title: `"Devang Dhakate | Full-Stack Developer, 3D & Motion Designer"`
- Meta Description: `"Pune-based full-stack developer and creative technologist. MERN stack development, React Three.js experiences, Blender 3D modeling & rigging, Adobe Illustrator, and After Effects (AE) motion design."`
- Canonical URL: `"https://devang-dhakate.onrender.com/"`
- Meta Robots: `"index, follow"`
- Google Site Verification: `"Dw20aEN6-jo2TAOKQbLEvMM1W8Yj_mH9W7OtUlZf9Vs"`
- Open Graph Type: `"website"`
- Open Graph URL: `"https://devang-dhakate.onrender.com/"`
- Open Graph Title: `"Devang Dhakate | Full-Stack Developer, 3D & Motion Designer"`
- Open Graph Description: `"Pune-based full-stack developer and creative technologist. MERN stack development, React Three.js experiences, Blender 3D modeling & rigging, Adobe Illustrator, and After Effects (AE) motion design."`
- Open Graph Image: `"https://devang-dhakate.onrender.com/images/Untitled%20(15).png"`
- Twitter Card: `"summary_large_image"`
- Twitter URL: `"https://devang-dhakate.onrender.com/"`
- Twitter Title: `"Devang Dhakate | Full-Stack Developer, 3D & Motion Designer"`
- Twitter Description: `"Pune-based full-stack developer and creative technologist. MERN stack development, React Three.js experiences, Blender 3D modeling & rigging, Adobe Illustrator, and After Effects (AE) motion design."`
- Twitter Image: `"https://devang-dhakate.onrender.com/images/Untitled%20(15).png"`

---

## Structured Data (JSON-LD Schema) — `index.html`
*Data Source: Hardcoded directly in `index.html` (`<script type="application/ld+json">`)*
- WebSite Schema:
  - Name: `"Devang Dhakate | Full-Stack Developer & Creative Technologist"`
  - URL: `"https://devang-dhakate.onrender.com/"`
  - Description: `"Pune-based MERN stack developer and creative technologist. Specializing in secure full-stack products, dual-gateway e-commerce, and interactive React Three.js experiences."`
- Person Schema:
  - Name: `"Devang Dhakate"`
  - Alternate Name: `"Devang"`
  - Job Title: `"Full-Stack Developer, Creative Technologist & 3D/Motion Designer"`
  - Description: `"Devang Dhakate is a Pune-based Full-Stack Developer, Creative Technologist, and D2C product builder. He engineers dual-gateway payment systems and secure production applications, builds interactive Three.js web experiences, and models, rigs, and animates 3D characters in Blender extending into Adobe Illustrator and After Effects (AE) for motion graphics and product showcase videos."`
  - Address: `"Pune, Maharashtra, India"`
  - Organization (worksFor): `"Amazon"`, Job Title: `"Customer Service Associate L2"`
  - Brand: `"Morivaná Daily"` (`https://morivanadaily.com`)
  - Languages Known: `["English", "Hindi", "Marathi"]`
  - Knowledge Topics: `["Full-Stack Development", "MERN Stack", "React", "Node.js", "Express", "MongoDB", "Three.js", "GSAP", "SwiftUI", "Blender 3D Modeling", "3D Character Rigging", "Low-Poly 3D Design", "Adobe Illustrator", "After Effects (AE)", "Motion Graphics", "UI/UX Design", "Figma", "Razorpay", "Stripe", "Cloudflare Pages", "Delhivery API", "Socket.IO", "SEO Optimization", "Generative Engine Optimization (GEO)", "Answer Engine Optimization (AEO)"]`
- FAQPage Schema:
  - Question 1: `"Who is Devang Dhakate?"`
  - Answer 1: `"Devang Dhakate is a full-stack developer, product builder, and creative technologist based in Pune, India. He specializes in engineering production-ready MERN stack web applications, high-performance D2C e-commerce pipelines, and immersive 3D/creative frontend user experiences."`
  - Question 2: `"What is Devang Dhakate's technical stack?"`
  - Answer 2: `"Devang's core stack includes React, Vite, Node.js, Express, and MongoDB (MERN). For creative and interactive experiences, he leverages Three.js, GSAP, Lenis, and Blender. For mobile and systems development, he works with SwiftUI, Socket.IO, Razorpay, Stripe, and Cloudflare Pages."`
  - Question 3: `"What are Devang Dhakate's flagship projects?"`
  - Answer 3: `"His key projects include Morivaná Daily (a premium super-greens brand with automated logistics and payment routing), Soundabode (a custom Three.js scrollytelling experience), and Gyroscope Fruit Ninja (a real-time device-controller game built using Socket.IO)."`
  - Question 4: `"Where is Devang Dhakate located and is he open to work?"`
  - Answer 4: `"Devang is based in Pune, Maharashtra, India. Having completed his studies and L2 operational operations at Amazon, he is actively open to full-time software engineering roles and freelance full-stack/creative contracts globally (remote or local)."`
  - Question 5: `"Does Devang Dhakate do 3D modeling and Blender work?"`
  - Answer 5: `"Yes. Devang models and rigs low-poly 3D characters in Blender and builds full Blender-to-web pipelines using GLB export and Draco compression to bring 3D assets into React Three.js experiences."`
  - Question 6: `"Does Devang Dhakate offer motion design or video editing?"`
  - Answer 6: `"Devang handles motion design in Adobe After Effects (AE) and vector graphics in Adobe Illustrator for product showcases and marketing visuals, and has built custom video compositing pipelines in Python/OpenCV for AI-generated product footage, combining technical and creative tooling most developers don't cover."`
  - Question 7: `"Is Devang Dhakate a UI/UX designer as well as a developer?"`
  - Answer 7: `"Yes, Devang designs interfaces in Figma before building them, giving him a full design-to-production workflow. This lets clients get a cohesive product from wireframe to a deployed, production-ready application without handing off between separate designers and developers."`

---

## Fallback Cold-Start Loader — `index.html`
*Data Source: Hardcoded directly in `index.html` (`.fallback-loader-container`)*
- Logo / Brand Text: `"DEVANG"`
- Status Text: `"Waking up server..."`

---

## Initial Animated Loader — `src/components/Loader.jsx`
*Data Source: Hardcoded directly in `src/components/Loader.jsx`*
- Animated Loading Message: `"HELLO, I'M DEVANG"`

---

## Global Navigation Bar — `src/components/Navbar.jsx`
*Data Source: Hardcoded directly in `src/components/Navbar.jsx` (`navLinks` array)*
- Logo / Brand: `"DEV"`
- Navigation Links (Desktop & Mobile Fullscreen Drawer):
  - Link 1: `"HOME"` (Target: `#home`)
  - Link 2: `"ABOUT"` (Target: `#about`)
  - Link 3: `"WORK"` (Target: `#work`)
  - Link 4: `"SKILLS"` (Target: `#skills`)
  - Link 5: `"EXPERIENCE"` (Target: `#experience`)
  - Link 6: `"CONTACT"` (Target: `#contact`)
- Accessibility / ARIA Labels:
  - Mobile Menu Toggle: `"Toggle menu"` (`aria-label="Toggle menu"`, `id="mobile-menu-toggle"`)

---

## Fixed Transition Overlay — `src/App.jsx`
*Data Source: Hardcoded directly in `src/App.jsx`*
- Image Alt Text: `"Digital Experience"` (Source: `/images/Untitled (15).png`)

---

## Hero Section — `src/components/Hero.jsx`
*Data Source: Hardcoded directly in `src/components/Hero.jsx`*
- Heading (Rendered line-by-line with staggered reveal):
  - Line 1: `"I build full-stack"`
  - Line 2: `"products from"`
  - Line 3: `"e-commerce to"` *(styled with `.hero-italic`)*
  - Line 4: `"interactive web"`
  - Line 5: `"experiences."` *(styled with `.hero-italic`)*
- Primary CTA: `"View Work →"` (Target: `#work`)
- Secondary CTA: `"Download Resume ↓"` (Target: `/Devang_Dhakate_Resume.pdf`, `download="Devang_Dhakate_Resume.pdf"`)
- 3D Interactive Card Image Alt Text: `"Digital Experience"` (Source: `/images/Untitled (15).png`)
- Status Indicator: `"Available for work"` (Accompanying live pulsing status dot)
- Focus Area Subheadings / Badges:
  - Item 1: `"Web Design"`
  - Item 2: `"Web Development"`
  - Item 3: `"3D & Motion"`
  - Item 4: `"Based in Pune, India."`
- Scroll Indicator:
  - Dynamic Timecode / Counter: Formatted as `HH:MM:SS:MS` (Initial state: `"00:00:00:00"`)
  - Scroll Icon: Downward direction arrow SVG

---

## About Section — `src/components/About.jsx`
*Data Source: Hardcoded directly in `src/components/About.jsx`*
- Section Label / Tag: `"( about me )"`
- Role Subheading:
  ```
  Full-Stack Architect ·
  Creative Technologist ·
  3D & Motion Designer ·
  Based in Pune.
  ```
- Body Paragraph:
  `"I'm Devang, a full-stack developer based in Pune, India. I build end-to-end: e-commerce platforms with real payments and logistics, interactive 3D web experiences, and the occasional native app. Beyond code, I model and rig 3D characters in Blender, craft vector artwork in Adobe Illustrator, and direct motion design in After Effects (AE), skills I use to build custom assets and marketing visuals rather than relying on stock libraries. I care about the details that make a product actually work in production: security, performance, and the messy integrations most people skip. Currently moving toward full-time and freelance full-stack work."`
- Stat Cards (`stats` array hardcoded in component):
  - Stat 1:
    - Number: `"5+"`
    - Label: `"Products Built"`
  - Stat 2:
    - Number: `"3+"`
    - Label: `"Years Experience"`
  - Stat 3:
    - Number: `"Pune, IN"`
    - Label: `"Base Location"`

---

## Selected Work (Case Studies Header) — `src/components/SelectedWork.jsx`
*Data Source: Hardcoded directly in `src/components/SelectedWork.jsx`*
- Section Label / Tag: `"( case studies )"`
- Section Heading:
  ```
  Selected
  work.
  ```
  *(Note: "work." is styled with an italic emphasis `<em>` tag)*
- Section Sub-tag / Instruction: `"Click on any project to read the full case study · ©2025–26"`
- Case Study Drawer Subheadings (Repeated across all expanded project drawers):
  - Subheading 1: `"Problem / Context"`
  - Subheading 2: `"What I Built & Decisions Made"`
  - Subheading 3: `"Outcome / Metric"`
  - Subheading 4: `"Tech Stack"`
- Drawer Action CTA Labels:
  - Primary CTA: `"Live Site →"`
  - Secondary CTA: `"GitHub Repo →"`
- Accordion Toggle Control: `"+"` (transforms 45° to `"×"` when expanded)

---

### Project Entry 01: Morivaná Daily — `src/components/SelectedWork.jsx`
*Data Source: Hardcoded directly in `projects[0]` in `src/components/SelectedWork.jsx`*
- Number: `"01"`
- Project Name: `"Morivaná Daily"`
- Live URL: `"https://morivanadaily.com"`
- Repository URL: `""` *(Private D2C brand)*
- Image Alt Text: `"Morivaná Daily premium organic super-greens e-commerce storefront landing page"` (Image: `/images/morivana_work.jpeg`)
- Problem / Context:
  `"An e-commerce wellness brand needed a secure production platform (storefront, authentication, dual-gateway payments, and logistics automation) built from the ground up to serve customers globally."`
- What I Built & Decisions Made:
  `"Built a full MERN stack storefront. Integrated Clerk for passwordless authentication, Razorpay for domestic (India) checkouts, and Stripe for international transactions. Automated order fulfillment via the Delhivery API, set up an inventory admin dashboard, and hardened the Express backend using Helmet, strict CSP headers, and rate-limiting. Implemented Meta Pixel and Conversions API (CAPI) for privacy-compliant ad attribution."`
- Outcome / Metric:
  `"Successfully launched and currently serving active customers across India and Canada with automated payment routing and logistics label generation."`
- Tech Stack Tags:
  - `"React"`
  - `"Node.js"`
  - `"Express"`
  - `"MongoDB"`
  - `"Clerk Auth"`
  - `"Razorpay"`
  - `"Stripe"`
  - `"Delhivery API"`
  - `"Cloudflare Pages"`
  - `"Meta Pixel/CAPI"`
- CTA: `"Live Site →"` (Target: `https://morivanadaily.com`)

---

### Project Entry 02: Soundabode — `src/components/SelectedWork.jsx`
*Data Source: Hardcoded directly in `projects[1]` in `src/components/SelectedWork.jsx`*
- Number: `"02"`
- Project Name: `"Soundabode"`
- Live URL: `"https://soundabode.com"`
- Repository URL: `""` *(Private client project)*
- Image Alt Text: `"Soundabode Pune DJ academy interactive scrollytelling web experience"` (Image: `/images/soundabode-hover-image.png`)
- Problem / Context:
  `"A local music academy wanted an immersive, interactive digital presence that matched the brand identity of DJing and music production, avoiding boilerplate templates."`
- What I Built & Decisions Made:
  `"Created a high-fidelity scrollytelling experience using React, Three.js, and GSAP ScrollTrigger for smooth, performance-optimized scroll animations. Handled server migration to Cloudflare Pages, resolved complex post-migration CSP errors, and executed local SEO/AEO/GEO optimization to secure local search authority."`
- Outcome / Metric:
  `"Live site powering the academy's marketing, resulting in active local search leads and user engagement."`
- Tech Stack Tags:
  - `"React"`
  - `"Three.js"`
  - `"GSAP"`
  - `"Lenis Scroll"`
  - `"Cloudflare Pages"`
  - `"Meta Pixel/CAPI"`
- CTA: `"Live Site →"` (Target: `https://soundabode.com`)

---

### Project Entry 03: Roadmaptic — `src/components/SelectedWork.jsx`
*Data Source: Hardcoded directly in `projects[2]` in `src/components/SelectedWork.jsx`*
- Number: `"03"`
- Project Name: `"Roadmaptic"`
- Live URL: `"https://roadmaptic.qzz.io"`
- Repository URL: `""` *(Closed source)*
- Image Alt Text: `"Roadmaptic AI curriculum and roadmap generator user dashboard"` (Image: `/images/roadmaptic_works.jpeg`)
- Problem / Context:
  `"Self-directed learners frequently struggle with \"tutorial hell,\" consuming unstructured learning materials without a clear progression path."`
- What I Built & Decisions Made:
  `"Developed an AI product that parses a user's target role, current skills, and weekly commitment to generate a custom 12-week week-by-week learning roadmap. Curated a registry of high-quality free tutorials (FreeCodeCamp, YouTube, documentation) to inject instead of raw search links. Set up automated email delivery and an SEO-friendly blog/glossary directory."`
- Outcome / Metric:
  `"Active production deployment generating custom structured curricula for learners without requiring sign-up barriers."`
- Tech Stack Tags:
  - `"React"`
  - `"Vite"`
  - `"Node.js"`
  - `"OpenAI API"`
  - `"Tailwind CSS"`
  - `"EmailJS"`
- CTA: `"Live Site →"` (Target: `https://roadmaptic.qzz.io`)

---

### Project Entry 04: Gyroscope Fruit Ninja — `src/components/SelectedWork.jsx`
*Data Source: Hardcoded directly in `projects[3]` in `src/components/SelectedWork.jsx`*
- Number: `"04"`
- Project Name: `"Gyroscope Fruit Ninja"`
- Live URL: `"#"` *(Proof-of-concept repository focus)*
- Repository URL: `"https://github.com/Justdevang/Gyroscope-Controlled-Fruit-Ninja"`
- Image Alt Text: `"Gyroscope-controlled Fruit Ninja browser game interaction model"` (Image: `/images/Gyro_fruitninja_work.jpeg`)
- Problem / Context:
  `"Exploring device interaction paradigms by creating a real-time web game controlled entirely by a smartphone's physical movement, with no touch or keyboard inputs."`
- What I Built & Decisions Made:
  `"Built a browser game using Three.js and Socket.IO. Streams phone gyroscope data (DeviceOrientation API) to a node backend in real-time, mapping quaternion sensor orientation to the slicing blade. Handled complex edge cases including sensor calibration drift and iOS Safari motion-permission requests."`
- Outcome / Metric:
  `"Working cross-device real-time motion control proof-of-concept with ultra-low latency (<20ms local streaming)."`
- Tech Stack Tags:
  - `"Three.js"`
  - `"Socket.IO"`
  - `"WebSockets"`
  - `"Node.js"`
  - `"Express"`
  - `"DeviceOrientation API"`
- CTA: `"GitHub Repo →"` (Target: `https://github.com/Justdevang/Gyroscope-Controlled-Fruit-Ninja`)

---

## Skills & Stack Section — `src/components/Skills.jsx`
*Data Source: Hardcoded directly in `src/components/Skills.jsx` (`skillGroups` array)*
- Section Label / Tag: `"( skills & stack )"`
- Heading:
  ```
  Tools, technology,
  and core frameworks.
  ```
- Skill Groups & Technologies:
  - Category 1: `"Frontend"`
    - `"React"`
    - `"Vite"`
    - `"Three.js"`
    - `"GSAP"`
    - `"Lenis"`
    - `"SwiftUI"`
  - Category 2: `"Backend"`
    - `"Node.js"`
    - `"Express"`
    - `"MongoDB"`
    - `"Socket.IO"`
  - Category 3: `"Tools & Infra"`
    - `"Cloudflare Pages"`
    - `"Razorpay"`
    - `"Stripe"`
    - `"Delhivery API"`
    - `"Clerk Auth"`
  - Category 4: `"3D & Character Design"`
    - `"Blender"`
    - `"Low-Poly Modeling"`
    - `"3D Character Rigging"`
  - Category 5: `"Motion & UI Design"`
    - `"Adobe Illustrator"`
    - `"Adobe After Effects (AE)"`
    - `"Figma"`
    - `"Motion Graphics"`
    - `"UI/UX Design"`

---

## Experience Section — `src/components/Experience.jsx`
*Data Source: Hardcoded directly in `src/components/Experience.jsx` (`experiences` array)*
- Section Label / Tag: `"( background & experience )"`
- Heading:
  ```
  Career timeline
  and active studies.
  ```

### Experience Entry 01: Morivaná Daily
- Role: `"Full-Stack Developer"`
- Company: `"Morivaná Daily"`
- Period: `"Freelance"`
- Description:
  `"Built the premium e-commerce platform end-to-end. Engineered storefront, Clerk authentication, dual-gateway payments (Razorpay/Stripe), automated Delhivery logistics API, admin console, and implemented high-security server configurations (Helmet, CSP headers, rate-limiting) and Meta Pixel/CAPI tracking."`

### Experience Entry 02: Soundabode
- Role: `"Full-Stack Developer"`
- Company: `"Soundabode"`
- Period: `"Freelance"`
- Description:
  `"Designed and built a custom Three.js scrollytelling web experience with immersive, scroll-driven animations. Handled secure Cloudflare migration, resolved post-migration content security policy (CSP) issues, and executed a localized SEO/AEO/GEO strategy."`

### Experience Entry 03: Amazon
- Role: `"Customer Service Associate L2"`
- Company: `"Amazon"`
- Period: `"Sep 25 - Apr 26"`
- Description:
  `"Operate within a high-scale, process-driven enterprise environment. Resolve critical escalations, manage queue workloads under strict SLAs, and coordinate cross-department workflows. This role funds my independent development runway while sharpening core operational habits: extreme ownership under pressure, structured communication, and high attention to detail."`

---

## Contact / CTA Section — `src/components/CTA.jsx`
*Data Source: Hardcoded directly in `src/components/CTA.jsx`*
- Section Label / Tag: `"( let’s connect )"`
- Heading: `"Open to full-time and freelance full-stack development roles."`
- Body Paragraph:
  `"Whether you need a high-conversion e-commerce engine, an interactive 3D web experience, or are looking to hire a dedicated full-stack engineer based in Pune, let’s start a conversation."`
- Direct Channels Sub-label: `"Direct Channels"`
- Direct Channels Links & Copy:
  - Channel 1:
    - Label: `"EMAIL:"`
    - Value / Link Copy: `"devangdhakate22@gmail.com"` (Target: `mailto:devangdhakate22@gmail.com`)
  - Channel 2:
    - Label: `"LINKEDIN:"`
    - Value / Link Copy: `"linkedin.com/in/devang-dhakate"` (Target: `https://www.linkedin.com/in/devang-dhakate/`)
  - Channel 3:
    - Label: `"GITHUB:"`
    - Value / Link Copy: `"github.com/Justdevang"` (Target: `https://github.com/Justdevang`)
  - Channel 4:
    - Label: `"RESUME:"`
    - Value / Link Copy: `"Download CV/Resume ↓"` (Target: `/Devang_Dhakate_Resume.pdf`, `download="Devang_Dhakate_Resume.pdf"`)

### Contact Form Elements:
- Field 1:
  - Form Label: `"Name"`
  - Input Placeholder: `"Your name"`
- Field 2:
  - Form Label: `"Email"`
  - Input Placeholder: `"Your email address"`
- Field 3:
  - Form Label: `"Message"`
  - Textarea Placeholder: `"How can I help you?"`
  - Form Helper / Limit Note: `"Max 1000 characters"`
- Submit Button States:
  - Idle State: `"Send Message →"`
  - Submitting State: `"Sending..."`
  - Success State: `"Sent!"`
  - Error State: `"Failed"`
- Submission Status Feedback Messages:
  - Success Message: `"Thank you! Your message has been sent."`
  - Error Message: `"Oops! Something went wrong. Please try again."`

---

## Frequently Asked Questions (FAQ) Section — `src/components/FAQ.jsx`
*Data Source: Hardcoded directly in `src/components/FAQ.jsx` (`faqs` array)*
- Section Label / Tag: `"( faq )"`
- Heading: `"Common Questions"`
- Accordion Expand Control: `"+"` (rotates 45° to `"×"` when open)

### FAQ Entry 01
- Question: `"Who is Devang Dhakate?"`
- Answer:
  `"Devang Dhakate is a full-stack developer, product builder, and creative technologist based in Pune, India. He specializes in engineering production-ready MERN stack web applications, high-performance D2C e-commerce pipelines, and immersive 3D/creative frontend user experiences."`

### FAQ Entry 02
- Question: `"What is Devang Dhakate's technical stack?"`
- Answer:
  `"Devang's core stack includes React, Vite, Node.js, Express, and MongoDB (MERN). For creative and interactive experiences, he leverages Three.js, GSAP, Lenis, and Blender. For mobile and systems development, he works with SwiftUI, Socket.IO, Razorpay, Stripe, and Cloudflare Pages."`

### FAQ Entry 03
- Question: `"What are Devang Dhakate's flagship projects?"`
- Answer:
  `"His key projects include Morivaná Daily (a premium super-greens brand with automated logistics and payment routing), Soundabode (a custom Three.js scrollytelling experience), and Gyroscope Fruit Ninja (a real-time device-controller game built using Socket.IO)."`

### FAQ Entry 04
- Question: `"Where is Devang Dhakate located and is he open to work?"`
- Answer:
  `"Devang is based in Pune, Maharashtra, India. Having completed his studies and L2 operational operations at Amazon, he is actively open to full-time software engineering roles and freelance full-stack/creative contracts globally (remote or local)."`

### FAQ Entry 05
- Question: `"Does Devang Dhakate do 3D modeling and Blender work?"`
- Answer:
  `"Yes. Devang models and rigs low-poly 3D characters in Blender and builds full Blender-to-web pipelines using GLB export and Draco compression to bring 3D assets into React Three.js experiences."`

### FAQ Entry 06
- Question: `"Does Devang Dhakate offer motion design or video editing?"`
- Answer:
  `"Devang handles motion design in Adobe After Effects (AE) and vector graphics in Adobe Illustrator for product showcases and marketing visuals, and has built custom video compositing pipelines in Python/OpenCV for AI-generated product footage, combining technical and creative tooling most developers don't cover."`

### FAQ Entry 07
- Question: `"Is Devang Dhakate a UI/UX designer as well as a developer?"`
- Answer:
  `"Yes, Devang designs interfaces in Figma before building them, giving him a full design-to-production workflow. This lets clients get a cohesive product from wireframe to a deployed, production-ready application without handing off between separate designers and developers."`

---

## Footer Section — `src/components/Footer.jsx`
*Data Source: Hardcoded directly in `src/components/Footer.jsx`*
- Background Ticker Track (Easter Egg):
  `"MONDAY · TUESDAY · WEDNESDAY · THURSDAY · FRIDAY · SATURDAY · SUNDAY · "`
- Copyright / Rights Text:
  `"DEV © 2026. All Rights Reserved."`
- Social Links:
  - Link 1: `"Instagram"` (Target: `https://www.instagram.com/codev_ai/`, Element ID: `#footer-instagram`)
  - Link 2: `"LinkedIn"` (Target: `https://www.linkedin.com/in/devang-dhakate/`, Element ID: `#footer-linkedin`)
  - Link 3: `"GitHub"` (Target: `https://github.com/Justdevang`, Element ID: `#footer-github`)

---

# Static & Semantic HTML Fallback (`index.html`)

For accessibility, non-JavaScript clients, and search crawlers (Googlebot, Applebot, GPTBot, ClaudeBot, PerplexityBot, etc.), `index.html` includes a standalone semantic markup tree inside `<div class="fallback-wrapper">` / `<noscript>`.

## Semantic Navigation Header — `index.html`
*Data Source: Hardcoded directly in `index.html`*
- Links:
  - `"Home"` (`href="#home"`)
  - `"About"` (`href="#about"`)
  - `"Work"` (`href="#work"`)
  - `"Skills"` (`href="#skills"`)
  - `"Experience"` (`href="#experience"`)
  - `"Contact"` (`href="#contact"`)

## Semantic Home Section — `index.html`
*Data Source: Hardcoded directly in `index.html`*
- Heading (h1): `"I build full-stack products from e-commerce to interactive web experiences."`
- Meta Info: `"Status: Available for work • Based in Pune, India"`
- Body Paragraph: `"Focus Areas: Web Design · Web Development · 3D & Motion · Creative Technology"`
- CTAs / Links:
  - `"View Case Studies"` (`href="#work"`)
  - `"Download Resume CV"` (`href="/Devang_Dhakate_Resume.pdf"`)

## Semantic About Section — `index.html`
*Data Source: Hardcoded directly in `index.html`*
- Heading (h2): `"About Me"`
- Meta Info: `"Full-Stack Architect · Creative Technologist · 3D & Motion Designer"`
- Body Paragraph:
  `"I'm Devang, a full-stack developer based in Pune, India. I build end-to-end: e-commerce platforms with real payments and logistics, interactive 3D web experiences, and the occasional native app. Beyond code, I model and rig 3D characters in Blender, craft vector artwork in Adobe Illustrator, and direct motion design in After Effects (AE), skills I use to build custom assets and marketing visuals rather than relying on stock libraries. I care about the details that make a product actually work in production: security, performance, and the messy integrations most people skip. Currently moving toward full-time and freelance full-stack work."`
- Key Metrics:
  - `"5+ Products Built"`
  - `"3+ Years Experience"`
  - `"Pune, IN Base Location"`

## Semantic Work Section — `index.html`
*Data Source: Hardcoded directly in `index.html`*
- Heading (h2): `"Selected Work"`

### 01. Morivaná Daily
- Title (h3): `"01. Morivaná Daily"`
- URL: `"morivanadaily.com"` (`href="https://morivanadaily.com"`)
- Stack: `"React, Node.js, Express, MongoDB, Clerk Auth, Razorpay, Stripe, Delhivery API, Cloudflare Pages, Meta Pixel/CAPI"`
- Problem: `"An e-commerce wellness brand needed a secure production platform (storefront, authentication, dual-gateway payments, and logistics automation) built from the ground up to serve customers globally."`
- What I Built: `"Built a full MERN stack storefront. Integrated Clerk for passwordless authentication, Razorpay for domestic (India) checkouts, and Stripe for international transactions. Automated order fulfillment via the Delhivery API, set up an inventory admin dashboard, and hardened the Express backend using Helmet, strict CSP headers, and rate-limiting. Implemented Meta Pixel and Conversions API (CAPI) for privacy-compliant ad attribution."`
- Outcome: `"Successfully launched and currently serving active customers across India and Canada with automated payment routing and logistics label generation."`

### 02. Soundabode
- Title (h3): `"02. Soundabode"`
- URL: `"soundabode.com"` (`href="https://soundabode.com"`)
- Stack: `"React, Three.js, GSAP, Lenis Scroll, Cloudflare Pages, Meta Pixel/CAPI"`
- Problem: `"A local music academy wanted an immersive, interactive digital presence that matched the brand identity of DJing and music production, avoiding boilerplate templates."`
- What I Built: `"Created a high-fidelity scrollytelling experience using React, Three.js, and GSAP ScrollTrigger for smooth, performance-optimized scroll animations. Handled server migration to Cloudflare Pages, resolved complex post-migration CSP errors, and executed local SEO/AEO/GEO optimization to secure local search authority."`
- Outcome: `"Live site powering the academy's marketing, resulting in active local search leads and user engagement."`

### 03. Roadmaptic
- Title (h3): `"03. Roadmaptic"`
- URL: `"roadmaptic.qzz.io"` (`href="https://roadmaptic.qzz.io"`)
- Stack: `"React, Vite, Node.js, OpenAI API, Tailwind CSS, EmailJS"`
- Problem: `"Self-directed learners frequently struggle with \"tutorial hell,\" consuming unstructured learning materials without a clear progression path."`
- What I Built: `"Developed an AI product that parses a user's target role, current skills, and weekly commitment to generate a custom 12-week week-by-week learning roadmap. Curated a registry of high-quality free tutorials (FreeCodeCamp, YouTube, documentation) to inject instead of raw search links. Set up automated email delivery and an SEO-friendly blog/glossary directory."`
- Outcome: `"Active production deployment generating custom structured curricula for learners without requiring sign-up barriers."`

### 04. Gyroscope Fruit Ninja
- Title (h3): `"04. Gyroscope Fruit Ninja"`
- Repository: `"github.com/Justdevang/gyro-fruit-ninja"` (`href="https://github.com/Justdevang/gyro-fruit-ninja"`)
- Stack: `"Three.js, Socket.IO, WebSockets, Node.js, Express, DeviceOrientation API"`
- Problem: `"Exploring device interaction paradigms by creating a real-time web game controlled entirely by a smartphone's physical movement, with no touch or keyboard inputs."`
- What I Built: `"Built a browser game using Three.js and Socket.IO. Streams phone gyroscope data (DeviceOrientation API) to a node backend in real-time, mapping quaternion sensor orientation to the slicing blade. Handled complex edge cases including sensor calibration drift and iOS Safari motion-permission requests."`
- Outcome: `"Working cross-device real-time motion control proof-of-concept with ultra-low latency (<20ms local streaming)."`

## Semantic Skills Section — `index.html`
*Data Source: Hardcoded directly in `index.html`*
- Heading (h2): `"Skills & Tech Stack"`
- Skill Sets:
  - `"Frontend: React • Vite • Three.js • GSAP • Lenis • SwiftUI"`
  - `"Backend: Node.js • Express • MongoDB • Socket.IO"`
  - `"Tools & Infrastructure: Cloudflare Pages • Razorpay • Stripe • Delhivery API • Clerk Auth"`
  - `"3D & Character Design: Blender • Low-Poly Modeling • 3D Character Rigging"`
  - `"Motion & UI Design: Adobe Illustrator • Adobe After Effects (AE) • Figma • Motion Graphics • UI/UX Design"`

## Semantic Experience Section — `index.html`
*Data Source: Hardcoded directly in `index.html`*
- Heading (h2): `"Experience"`

### Full-Stack Developer — Morivaná Daily
- Title (h3): `"Full-Stack Developer — Morivaná Daily"`
- Meta Info: `"Freelance"`
- Description:
  `"Built the premium e-commerce platform end-to-end. Engineered storefront, Clerk authentication, dual-gateway payments (Razorpay/Stripe), automated Delhivery logistics API, admin console, and implemented high-security server configurations (Helmet, CSP headers, rate-limiting) and Meta Pixel/CAPI tracking."`

### Full-Stack Developer — Soundabode
- Title (h3): `"Full-Stack Developer — Soundabode"`
- Meta Info: `"Freelance"`
- Description:
  `"Designed and built a custom Three.js scrollytelling web experience with immersive, scroll-driven animations. Handled secure Cloudflare migration, resolved post-migration content security policy (CSP) issues, and executed a localized SEO/AEO/GEO strategy."`

### Customer Service Associate L2 — Amazon
- Title (h3): `"Customer Service Associate L2 — Amazon"`
- Meta Info: `"Sep 25 - Apr 26"`
- Description:
  `"Operate within a high-scale, process-driven enterprise environment. Resolve critical escalations, manage queue workloads under strict SLAs, and coordinate cross-department workflows. This role funds my independent development runway while sharpening core operational habits: extreme ownership under pressure, structured communication, and high attention to detail."`

## Semantic Contact Section — `index.html`
*Data Source: Hardcoded directly in `index.html`*
- Heading (h2): `"Contact & Connect"`
- Body Paragraph:
  `"Open to full-time and freelance full-stack development roles. Whether you need a high-conversion e-commerce engine, an interactive 3D web experience, or are looking to hire a dedicated full-stack engineer based in Pune, let's start a conversation."`
- Contact Channels:
  - `"Email: devangdhakate22@gmail.com"` (`href="mailto:devangdhakate22@gmail.com"`)
  - `"LinkedIn: linkedin.com/in/devang-dhakate"` (`href="https://www.linkedin.com/in/devang-dhakate/"`)
  - `"GitHub: github.com/Justdevang"` (`href="https://github.com/Justdevang"`)
  - `"Resume CV: Download PDF Resume"` (`href="/Devang_Dhakate_Resume.pdf"`, `download="Devang_Dhakate_Resume.pdf"`)

## Semantic FAQ Section — `index.html`
*Data Source: Hardcoded directly in `index.html`*
- Heading (h2): `"Frequently Asked Questions"`
- Q&A 1:
  - Question (`<dt>`): `"Who is Devang Dhakate?"`
  - Answer (`<dd>`): `"Devang Dhakate is a full-stack developer, product builder, and creative technologist based in Pune, India. He specializes in engineering production-ready MERN stack web applications, high-performance D2C e-commerce pipelines, and immersive 3D/creative frontend user experiences."`
- Q&A 2:
  - Question (`<dt>`): `"What is Devang Dhakate's technical stack?"`
  - Answer (`<dd>`): `"Devang's core stack includes React, Vite, Node.js, Express, and MongoDB (MERN). For creative and interactive experiences, he leverages Three.js, GSAP, Lenis, and Blender. For mobile and systems development, he works with SwiftUI, Socket.IO, Razorpay, Stripe, and Cloudflare Pages."`
- Q&A 3:
  - Question (`<dt>`): `"What are Devang Dhakate's flagship projects?"`
  - Answer (`<dd>`): `"His key projects include Morivaná Daily (a premium super-greens brand with automated logistics and payment routing), Soundabode (a custom Three.js scrollytelling experience), and Gyroscope Fruit Ninja (a real-time device-controller game built using Socket.IO)."`
- Q&A 4:
  - Question (`<dt>`): `"Where is Devang Dhakate located and is he open to work?"`
  - Answer (`<dd>`): `"Devang is based in Pune, Maharashtra, India. Having completed his studies and L2 operational operations at Amazon, he is actively open to full-time software engineering roles and freelance full-stack/creative contracts globally (remote or local)."`
- Q&A 5:
  - Question (`<dt>`): `"Does Devang Dhakate do 3D modeling and Blender work?"`
  - Answer (`<dd>`): `"Yes. Devang models and rigs low-poly 3D characters in Blender and builds full Blender-to-web pipelines using GLB export and Draco compression to bring 3D assets into React Three.js experiences."`
- Q&A 6:
  - Question (`<dt>`): `"Does Devang Dhakate offer motion design or video editing?"`
  - Answer (`<dd>`): `"Devang handles motion design in Adobe After Effects (AE) and vector graphics in Adobe Illustrator for product showcases and marketing visuals, and has built custom video compositing pipelines in Python/OpenCV for AI-generated product footage, combining technical and creative tooling most developers don't cover."`
- Q&A 7:
  - Question (`<dt>`): `"Is Devang Dhakate a UI/UX designer as well as a developer?"`
  - Answer (`<dd>`): `"Yes, Devang designs interfaces in Figma before building them, giving him a full design-to-production workflow. This lets clients get a cohesive product from wireframe to a deployed, production-ready application without handing off between separate designers and developers."`

## Semantic Footer — `index.html`
*Data Source: Hardcoded directly in `index.html`*
- Copyright: `"© 2026 Devang Dhakate. All Rights Reserved."`

---

# Crawling Directives & Infrastructure

## Robots Configuration — `public/robots.txt`
*Data Source: Hardcoded directly in `public/robots.txt`*
- Allowed Agents: `*`, `GPTBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-Web`, `Google-Extended`, `PerplexityBot`, `Applebot`, `Applebot-Extended`, `Meta-ExternalAgent`, `cohere-ai`, `Diffbot`, `YouBot`
- Sitemap Pointer: `"https://devang-dhakate.onrender.com/sitemap.xml"`

## XML Sitemap — `public/sitemap.xml`
*Data Source: Hardcoded directly in `public/sitemap.xml`*
- Location: `"https://devang-dhakate.onrender.com/"`
- Last Modified: `"2026-07-22"`
- Change Frequency: `"monthly"`
- Priority: `"1.0"`
