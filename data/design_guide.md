# 1. Site Info

- SITE_TYPE: Fintech Corporate Template
- HTML_LANG: en

# 2. Color Token Mapping

## Visual Theme
A clean, high-end fintech design featuring high-contrast typography, deep-toned elements, and a vibrant neon-indigo accent. Employs sophisticated light grey surfaces (`#f3f4f2`), deep off-black base colors (`#131313`), and a premium purple/indigo key color (`#5F58FF`) for highlights, active tabs, and background glows.

## Colors
- background: hsl(0, 0%, 100%)
- foreground: hsl(0, 0%, 7%)
- muted-foreground: hsl(0, 0%, 31%)
- border: hsl(0, 0%, 84%)
- surface: hsl(80, 2%, 95%)
- primary: hsl(0, 0%, 7%)
- primary-foreground: hsl(0, 0%, 100%)
- primary-hover: hsl(0, 0%, 17%)
- secondary: hsl(242, 100%, 67%)
- secondary-foreground: hsl(0, 0%, 100%)
- secondary-hover: hsl(242, 100%, 60%)
- dark-background: hsl(0, 0%, 7%)
- dark-foreground: hsl(0, 0%, 100%)
- dark-muted-foreground: hsl(0, 0%, 69%)
- dark-border: hsl(184, 15%, 31%)
- accent: hsl(242, 100%, 67%)

## Page Background
solid hsl(0, 0%, 100%)

## Typography
- Heading font: `inter` (weights: 300, 400, 500, 600, 700)
- Body font: `inter` (weights: 300, 400, 500)

Typography size fidelity:
- H1: `text-[68px] leading-[84.32px] font-normal tracking-[-4.08px]`
- H2 (Section Title Large): `text-[60px] leading-[72px] font-normal tracking-[-3.6px]`
- H2 (Section Tagline Medium): `text-[36px] leading-[43.92px] font-normal tracking-[-2.16px]`
- H3 (Card Heading): `text-[24px] leading-[1.2] font-normal`
- Base Paragraph: `text-[16px] leading-[1.5] font-normal`
- Section Label: `text-[16px] font-medium uppercase tracking-wider`

## Components
- Buttons: Rounded pill/xl style with `border-radius: 12px` (`rounded-[12px]`). Horizontal padding `px-6`, vertical padding `py-2`. Solid off-black fills with white text, or clean white solid fills with dark text. Transition scales slightly on hover.
- Cards: Generously rounded corners (`border-radius: 20px` or `24px` -> `rounded-[20px]`/`rounded-[24px]`). Subtle outer borders on default cards, solid fill on accent cards.

# 3. Navigation Spec

- NAV_FULL_WIDTH: true
- NAV_WIDTH: 1905px
- NAV_BACKGROUND: hsl(0, 0%, 100%)
- NAV_BORDER_RADIUS: none
- NAV_POSITION: sticky
- NAV_SHADOW: none
- SCROLL_BEHAVIOR: none
- NAV_DIVIDERS: none

## Link style
- fontSize: text-[16px] (strictly normalized, do NOT use text-sm/base defaults)
- fontWeight: font-medium (500) for active, font-normal (400) for inactive
- fontFamily: Inter
- textTransform: normal-case
- letterSpacing: tracking-normal
- color: active matches `text-foreground` (hsl(0, 0%, 7%)), inactive matches `text-[#4e4e4e]`
- link row layout: Left-aligned distribution next to the logo. Container spacing is horizontal flex with absolute gap offsets (`gap-[24px]`). Right-pushed CTA container for the secondary element.
- SINGLE LINE: whitespace-nowrap applied to all navigation options to prevent layout wrap on responsive resizes.

## Logo
- Presence: SVG vector branding icon + "Clayo" text wordmark.
- Size: `w-[94px] h-[26px]`
- Image URL: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0b6a/6a3c3ed5c7bf81e0610b0da6_Clayo%20icon.svg`

## Dropdowns
- Link: "More Links" features `hasDropdown: true`. Standard overlay chevron indicator pointing downwards. Shows sub-links for different page versions on hover/click:
  - Home V.1, Home V.2, Home V.3, Features
  - About V.1, About V.2, About V.3, Pricing
  - Contact V.1, Contact V.2, Contact V.3
  - Blog, Blog Post

## CTA Button
- Text: "Get Started"
- Style: Solid background `bg-[#131313]`, text `text-white`, rounded edge `rounded-[12px]`, padding `px-6 py-2`.

# 4. Section Plan

## Section 1: Hero
- id: "hero"
- theme: LIGHT
- background: bg-background
- layout: Two-column grid on desktop: `grid grid-cols-1 lg:grid-cols-12 gap-[64px] items-center max-w-[1176px] mx-auto px-6 py-20`
- Columns:
  - Left Column (span 6): Flex alignment layout vertically.
    - H1: "Build & growth with scalable tools" (`text-[68px] font-normal leading-[1.1] tracking-[-4.08px] text-[#131313]`)
    - Body Paragraph: "Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth." (`text-[16px] text-[#4e4e4e] mt-4 mb-8 max-w-[480px]`)
    - Button: "Get Started" (`bg-[#131313] hover:bg-[#232323] text-white rounded-[12px] px-6 py-3 self-start`)
    - Social Pile Overlay row: Horizontal line container (`flex items-center gap-3 mt-12`). Contains overlapping circular face images (avatars) and text: "10K+ 10.000+ people already joined the Advisory".
  - Right Column (span 6):
    - Base container `relative rounded-[24px] overflow-hidden` holding a gorgeous, large-format portrait image of a woman.
    - Image matching CDN: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0b6a/6a3c3ed5c7bf81e0610b0dc0_hero%20one%20-%20main%20image.webp` (874px x 1022px)
    - Overlay element (Bottom-Left corner): Absolute-positioned overlay card (`absolute bottom-6 left-6 bg-white p-6 rounded-[20px] shadow-lg w-[240px]`). Contains card content "Total balance" and a mockup illustration of financial performance metrics chart ($1.204,00). Image CDN match: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0b6a/6a3c3ed5c7bf81e0610b0dc2_hero%20one%20-%20balance.webp`.

## Section 2: About Tagline
- id: "about-clayo"
- theme: LIGHT
- background: bg-surface (hsl(80, 2%, 95%))
- layout: Two-column flex/grid container layout: `grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-[48px] items-start max-w-[1176px] mx-auto px-6 py-24`
- Content:
  - Left Col: Segment indicator pill tag: "• About Clayo" (`text-[16px] font-normal text-foreground whitespace-nowrap`)
  - Right Col: Impact Tagline Header (`text-[36px] font-normal leading-[1.3] tracking-[-2.16px] text-foreground`):
    "We are passionate about empowering individuals and businesses to take control of their finances and achieve their financial goals."

## Section 3: Finance Metrics Grid
- id: "finance-grid"
- theme: LIGHT
- background: bg-background
- layout: Vertical stacking layout containing a split intro header row and a modular metric grid below: `max-w-[1176px] mx-auto px-6 py-24`
- Intro Header Row: Split layout.
  - Left block: H2 "Make payment easy, simplify your finance" (`text-[60px] font-normal tracking-[-3.6px] leading-[1.1] max-w-[500px]`)
  - Right block: Muted body text "Our platform managing personal finances or growing your investment portfolio, our system integrates the latest technology to help you make smarter financial decisions with ease." (`text-[16px] text-[#4e4e4e] max-w-[480px] self-end pb-2`)
- Modular Grid Layout: Three vertical columns (`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16`):
  - Column 1: `flex flex-col gap-6`
    - Card A (Visual Photo Card): Image visual container. `rounded-[20px] overflow-hidden`. Image: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0b6a/6a3c3ed5c7bf81e0610b0df9_Frame%202147226953.webp`
    - Card B (Highlight Purple Card): Opaque violet container (`bg-[#5f58ff] p-8 rounded-[20px] text-white`). Text Content: "95% Complete customer satisfaction achieved through personalized solutions...".
  - Column 2: `flex flex-col gap-6`
    - Card C (Dark Charcoal Card): Muted near-black panel (`bg-[#232323] p-8 rounded-[20px] text-white`). Text Content: "10+ Years of innovation and valuable insights, empowering businesses to thrive...".
    - Card D (Visual Photo Card): Portrait view image panel. `rounded-[20px] overflow-hidden`. Image: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0b6a/6a3c3ed5c7bf81e0610b0dfa_Finance%20image%20three.webp`
  - Column 3: `flex flex-col h-full justify-between bg-[#f3f4f2] p-8 rounded-[20px] min-h-[480px]`
    - Card E (Tall Mockup Card): Top features dashboard preview widget. Bottom text content: "95% Complete customer satisfaction...". Image: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0b6a/6a3c3ed5c7bf81e0610b0df8_Frame%202147226954.webp`

## Section 4: Expertise Dashboard Features
- id: "expertise"
- theme: LIGHT
- background: bg-background
- layout: Flex vertical stacking section `max-w-[1176px] mx-auto px-6 py-24 text-center`
- Header:
  - Dot Label Tag: "• Expertise" (`text-[#131313] font-normal mb-4`)
  - Title: "Empowering and strengthening your financial success" (`text-[60px] font-normal tracking-[-3.6px] leading-[1.1] max-w-[800px] mx-auto`)
  - Paragraph: "Our platform provides advanced tools and insights to help you manage, grow, and secure your financial assets." (`text-[16px] text-[#4e4e4e] max-w-[550px] mx-auto mt-4 mb-16`)
- Features Grid: 4 cards arranged in dual rows: `grid grid-cols-1 md:grid-cols-2 gap-6`
  - Card 1: `bg-[#f3f4f2] p-8 rounded-[16px] flex flex-col justify-between items-start text-left`
    - Top image slot: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0b6a/6a3c3ed5c7bf81e0610b0dc4_Dashboard%20one%20-%20image%20one.webp` (mockup panel of Balance metrics)
    - Bottom Text block: H3 "Intuitive user interface" + "User-friendly design for effortless navigation..."
  - Card 2: `bg-[#f3f4f2] p-8 rounded-[16px] flex flex-col justify-between items-start text-left`
    - Top image slot: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0b6a/6a3c3ed5c7bf81e0610b0dc5_Dashboard%20one%20-%20image%20two.webp` (mockup chart)
    - Bottom Text block: H3 "Automated processes" + "Streamlined workflows to increase efficiency..."
  - Card 3: `bg-[#f3f4f2] p-8 rounded-[16px] flex flex-col justify-between items-start text-left`
    - Top image slot: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0dc6_Dashboard%20one%20-%20image%20three.webp` (mockup padlock/security panel)
    - Bottom Text block: H3 "Advanced security features" + "Protect your data with top-notch security..."
  - Card 4: `bg-[#f3f4f2] p-8 rounded-[16px] flex flex-col justify-between items-start text-left`
    - Top image slot: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0b6a/6a3c3ed5c7bf81e0610b0dc9_Dashboard%20one%20-%20image%20sixe.webp` (mockup circular charts)
    - Bottom Text block: H3 "Secure transactions" + "Safeguard your purchases with encrypted transactions..."
- CTA: "Learn more" Button centered below grid (`bg-[#131313] text-white px-6 py-3 rounded-[12px] inline-block mt-12 hover:bg-[#232323] transition-colors`)

## Section 5: Standout Features Tabs
- id: "features-tabs"
- theme: LIGHT
- background: bg-background
- layout: Stacked structure split into descriptive top headers and standard dual-column tabs interface: `max-w-[1176px] mx-auto px-6 py-24`
- Header:
  - Dot Label Tag: "• Features"
  - Title: "Explore our standout features designed to deliver exceptional performance and value, distinguishing us from the competition." (`text-[36px] font-normal text-[#131313] leading-[1.2] max-w-[800px] mt-4 mb-16`)
- Interactive Tabs Layout: `grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[80px] items-center`
  - Left Tab List (Stack): 4 vertical options. Each item has a thin border-bottom `border-border` and generous vertical spacing (`py-6`).
    - Option 1 (Active): "Real-time analytics" (`text-[36px] font-normal text-[#131313]`)
    - Option 2: "Customizable reports" (`text-[36px] font-normal text-[#afafaf]`)
    - Option 3: "Mobile accessibility" (`text-[36px] font-normal text-[#afafaf]`)
    - Option 4: "Enhanced security" (`text-[36px] font-normal text-[#afafaf]`)
  - Right Tab Content Wrapper: `bg-[#f3f4f2] rounded-[24px] p-10 flex items-center justify-center min-h-[450px]`
    - Current Active Content Illustration Image: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0b6a/6a3c3ed5c7bf81e0610b0dca_Features%20one%20-%20image%20one.webp`

## Section 6: Testimonials Carousel
- id: "testimonials"
- theme: LIGHT
- background: bg-surface (hsl(80, 2%, 95%))
- layout: Single-item horizontal slide layout centered `max-w-[1176px] mx-auto px-6 py-24 text-center relative`
- Carousel Config:
  - totalSlides: 6
  - visibleAtOnce: 1
  - autoScroll: true
- Slide Element Structure:
  - Big Blockquote text: `"Clayo has revolutionized how I manage my startup's finances. The platform is intuitive and the insights are incredibly valuable. I can't imagine going back to how we used to do things."` (`text-[32px] leading-[1.4] font-normal max-w-[900px] mx-auto text-[#131313] mb-8`)
  - Author Avatar: Circular profile photo (`w-16 h-16 rounded-full mx-auto overflow-hidden border-2 border-white shadow`)
    - Active Slide Author Image: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0b6a/6a3c3ed5c7bf81e0610b0dce_Testimonials%20-%20use%20one.webp`
  - Author Metadata: "Sarah Thompson / Founder, GreenPath Solutions" (`text-[16px] mt-4 font-normal text-[#131313]`)
  - Slider Navigation dots / arrows positioned at bottom center coordinates.
- Slider Dataset:
  1. Sarah Thompson (Founder, GreenPath Solutions) - `"Clayo has revolutionized how I manage my startup's finances..."` / Image: `6a3c3ed5c7bf81e0610b0dce_Testimonials%20-%20use%20one.webp`
  2. David Wilson (CFO, Nova Enterprises) - `"Thanks to Clayo, our team has gained better visibility into our budget..."` / Image: `6a3c3ed5c7bf81e0610b0ddd_Testimonials%20-%20use%20three.webp`
  3. Emily Harris (Freelance Consultant, EH Strategies) - `"I've used several financial platforms before, but none as complete..."` / Image: `6a3c3ed5c7bf81e0610b0dcf_Testimonials%20-%20use%20two.webp`
  4. James O'Connor (Managing Director, BrightCore Ltd) - `"Clayo delivers exactly what modern businesses need..."` / Image: `6a3c3ed5c7bf81e0610b0dd0_Testimonials%20-%20use%20four.webp`
  5. Olivia Bennett (Marketing Director, Horizon Brands) - `"Clayo gives me peace of mind. Tracking expenses and setting financial goals..."` / Image: `6a3c3ed5c7bf81e0610b0de2_Testimonials%20-%20use%20five.webp`
  6. Michael Reed (Owner, Reed & Co.) - `"As a small business owner, Clayo has been a lifesaver..."` / Image: `6a3c3ed5c7bf81e0610b0de3_Testimonials%20-%20use%20six.webp`

## Section 7: Pricing Plans
- id: "pricing"
- theme: LIGHT
- background: bg-background
- layout: Centered vertical content block split into intro headers and a triple horizontal card pricing plan deck: `max-w-[1176px] mx-auto px-6 py-24`
- Header:
  - Dot Label Tag: "• Expertise"
  - Title: "Simple & transparent pricing" (`text-[60px] font-normal text-center tracking-[-3.6px] leading-[1.1] mb-4`)
  - Paragraph description: "Choose a plan that fits your business needs and budget. No hidden fees, no surprises..." (`text-[16px] text-center text-[#4e4e4e] max-w-[600px] mx-auto mt-4 mb-16`)
- Pricing Cards Layout: `grid grid-cols-1 lg:grid-cols-3 gap-8`
  - Card 1 (Standard): `bg-[#f3f4f2] rounded-[16px] p-8 text-left flex flex-col justify-between h-full`
    - Top segment: Name "Starter Plan", Price "$50 /month" (`text-[36px] font-normal mb-4`), Description "Perfect for Small Teams, Startups, and Growing Businesses"
    - Middle segment (Features): List of items with custom bullet checks:
      - Basic financial analytics tools
      - Up to 3 user accounts
      - Real-time exchange rate monitoring
      - Monthly financial reports
      - Email support
    - Bottom segment: CTA button "Get Started" (`bg-[#131313] text-white w-full py-3 rounded-[12px] text-center block`)
  - Card 2 (Premium Dark - Center Highlighted): `bg-[#131313] rounded-[16px] p-8 text-left flex flex-col justify-between h-full text-white relative overflow-hidden`
    - Top segment: Name "Starter Plan", Price "$50 /month" (`text-[36px] font-normal text-white mb-4`), Description "Perfect for Small Teams..."
    - Middle segment (Features): List of items (identical check targets) in white
    - Bottom segment: CTA button "Get Started" (`bg-white text-[#131313] w-full py-3 rounded-[12px] text-center block`)
    - Background Glow FX: Subtle visual neon radial gradient background aura (`rgba(95, 88, 255, 0.3)`) glowing at the bottom edge.
  - Card 3 (Standard): `bg-[#f3f4f2] rounded-[16px] p-8 text-left flex flex-col justify-between h-full`
    - Top segment: Same copy content ("Starter Plan / $50 /month / Features")
    - Bottom segment: CTA button "Get Started" (`bg-[#131313] text-white w-full py-3 rounded-[12px] text-center block`)

## Section 8: Blog articles slider
- id: "blog-slider"
- theme: LIGHT
- background: bg-background
- layout: Vertical column format incorporating header parameters with horizontal scroll blog deck: `max-w-[1176px] mx-auto px-6 py-24`
- Header:
  - Dot Label Tag: "• Blog and articles"
  - Title: "Latest insights and trends" (`text-[60px] font-normal text-[#131313] tracking-[-3.6px] leading-[1.1] mb-12 mt-4`)
- Horizontal Blog Carousel deck: `grid grid-cols-1 md:grid-cols-3 gap-6`
  - Blog Card 1: `flex flex-col gap-4 text-left`
    - Image element: Aspect-ratio wrapper holding `https://cdn.prod.website-files.com/6a3c3ed5c7bf81e0610b0cf7/6a3c3ed5c7bf81e0610b0d00_Blog%20one%20-%20thumbnail%20image.webp` (rounded-[16px] edge)
    - Tags row: "News", "Insights" grey visual pill tags
    - H3 title: "The Ultimate Guide to Budgeting in 2024" (`text-[24px] font-normal leading-[1.2] text-[#131313]`)
    - Paragraph preview: "Master the art of budgeting with our comprehensive guide..."
  - Blog Card 2: `flex flex-col gap-4 text-left`
    - Image: `https://cdn.prod.website-files.com/6a3c3ed5c7bf81e0610b0cf7/6a3c3ed5c7bf81e0610b0d04_Blog%20two%20-%20thumbnail%20image.webp`
    - Tags: Grey category pill tag indicators
    - H3: "Top Investment Strategies for Long-Term Growth"
    - Paragraph preview: "Discover the best investment strategies to build and sustain your wealth over time..."
  - Blog Card 3: `flex flex-col gap-4 text-left`
    - Image: `https://cdn.prod.website-files.com/6a3c3ed5c7bf81e0610b0cf7/6a3c3ed5c7bf81e0610b0d06_Blog%20three%20-%20thumbnail%20image.webp`
    - Tags: Grey category pill tag indicators
    - H3: "Understanding Cryptocurrency: What You Need to Know"
    - Paragraph preview: "Cryptocurrency continues to make headlines, but what does it mean for your finances..."
- Navigation Row (Bottom Left): Dual round back/forward arrows stacked next to each other.

# 5. Favicon

- Favicon URL: `https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a4535765980c07e93225b_Group%202942.png`
- Action: Invoke `process_favicon_image({ imageUrl: "https://pagesmith-cdn.com/ededff4c/images/665a4535765980c07e93225b_Group-2942-32.webp" })`.

# 6. Footer

- Style: Dark off-black background `bg-[#131313]` (rgb(19, 19, 19))
- Text color: hsl(0, 0%, 100%) / light grey muted links text-[#afafaf]
- Columns layout: 2 main logical compartments. Left: Branding & Pitch. Right: Navigation column decks.
- Layout Spec: `max-w-[1176px] mx-auto px-6 py-20`
- Top Block content:
  - Left Panel (width ~40%): "Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth." plus social icon circle pills (Instagram, Facebook, LinkedIn, X).
  - Right Panel (width ~60%): 3 layout columns containing footer link menus:
    - Col 1: Home V.1, Home V.2, Home V.3, Features, About us V.1
    - Col 2: About us V.2, About us V.3, Pricing, Blogs, Blog post
    - Col 3: Contact V.1, Contact V.2, Contact V.3
- Middle Block:
  - Massively sized white heading wordmark "Clayo" spanning across the layout width (`text-[15vw] leading-[1] font-normal text-white uppercase text-center mt-12 mb-8 select-none`)
- Bottom Row block:
  - Horizontal split bar (`border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#afafaf] gap-4`).
  - Left content links: "Licensing", "Style Guide"
  - Right content: "Powered by Webflow"
  - Matching icon image matching CDN: `https://cdn.prod.website-files.com/6a3c3ed1c7bf81e0610b0b6a/6a3c3ed5c7bf81e0610b0ddf_Clayo%20footer%20logo.svg`

# 7. Files

- MODIFY: `src/components/Navigation.astro`
- MODIFY: `src/components/Footer.astro`
- MODIFY: `src/data/site.ts`
- MODIFY: `src/styles/global.css`
- CREATE: `src/components/home/Hero.astro`
- CREATE: `src/components/home/AboutTagline.astro`
- CREATE: `src/components/home/FinanceGrid.astro`
- CREATE: `src/components/home/Expertise.astro`
- CREATE: `src/components/home/FeaturesTabs.astro`
- CREATE: `src/components/home/Testimonials.astro`
- CREATE: `src/components/home/Pricing.astro`
- CREATE: `src/components/home/BlogSlider.astro`