---
name: Ghifari Portfolio
description: Personal portfolio for a programmer-cosplayer - warm, dreamy, and distinctly personal
colors:
  warm-paper: "#FFF8F0"
  warm-paper-deep: "#F5EBE0"
  soft-coral: "#FFCDB2"
  soft-coral-light: "#FFE5D9"
  dusty-rose: "#E5989B"
  dream-blue: "#A2D2FF"
  dream-blue-light: "#CAE9FF"
  fresh-mint: "#B5E48C"
  fresh-mint-dark: "#99D98C"
  soft-lilac: "#CDB4DB"
  soft-lilac-light: "#E4C1F9"
  pure-white: "#FFFFFF"
  charcoal: "#4A4A4A"
  charcoal-light: "#6B7280"
  charcoal-muted: "#9CA3AF"
typography:
  display:
    fontFamily: "'Quicksand', sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Quicksand', sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "'Quicksand', sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "'Nunito', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'Quicksand', sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    letterSpacing: "0"
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  full: "50%"
spacing:
  section-padding: "100px 0"
  container-max: "1200px"
  container-padding: "20px"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, #FFCDB2 0%, #E5989B 100%)"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.lg}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "linear-gradient(135deg, #FFCDB2 0%, #E5989B 100%)"
    textColor: "{colors.pure-white}"
    transform: "translateY(-4px) scale(1.02)"
    boxShadow: "0 12px 40px rgba(229, 152, 155, 0.35)"
  button-secondary:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.lg}"
    padding: "14px 28px"
    border: "2px solid {colors.soft-coral-light}"
  skill-tag:
    backgroundColor: "{colors.warm-paper}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.md}"
    padding: "6px 14px"
    border: "1px solid {colors.soft-coral-light}"
  card-base:
    backgroundColor: "{colors.pure-white}"
    rounded: "{rounded.xl}"
    shadow: "0 4px 16px rgba(229, 152, 155, 0.15)"
---

# Design System: Ghifari Portfolio

## 1. Overview

**Creative North Star: "The Cozy Atelier"**

A warm creative workspace where code meets costume. The design captures the duality of Ghifari's identity — programmer and cosplayer — in a space that feels like an afternoon in a well-loved studio: soft light, comfortable surfaces, and the quiet satisfaction of craft. Every element feels handmade and personal, never template-driven or AI-generated.

**The atmosphere is soft and dreamy.** Warm cream backgrounds meet gentle coral and dusty rose accents, with touches of dream blue and soft lilac that evoke the fantastical world of cosplay. The overall feeling is slice-of-life warmth — inviting, personal, and distinctly human.

**This system explicitly rejects:**
- Template or AI-generated aesthetics
- Corporate or cold developer-portfolio styling
- Dark/neon aggressive design
- Generic SaaS landing page clichés

### Key Characteristics

- Warm cream base with coral/rose accent gradient
- Soft shadows that respond to interaction (appear on hover/focus)
- Rounded, friendly shapes throughout (24-32px radii on major elements)
- Clean typography with subtle motion — nothing bouncy or aggressive
- Floating decorative elements (leaves, stars) that add personality without distraction

## 2. Colors

The palette is warm and gentle, built around cream paper tones with coral and dusty rose as the primary accent. Dream blue and soft lilac provide secondary creative energy, while fresh mint adds unexpected pops of color.

### Primary

- **Dusty Rose** (#E5989B): The dominant accent. Used for highlights, active states, and key interactive elements. Its muted warmth prevents it from feeling aggressive while still commanding attention.
- **Soft Coral** (#FFCDB2): Secondary warm accent, often as a lighter variant or gradient component. Used in button gradients and subtle tints.

### Secondary

- **Dream Blue** (#A2D2FF): Creative energy, used sparingly for project links and secondary actions. Evokes the sky/fantasy aspect of cosplay.
- **Soft Lilac** (#CDB4DB): Gentle creative accent for photographer credits and decorative touches.

### Tertiary

- **Fresh Mint** (#B5E48C): Occasional pop of color for variety. Not dominant but adds freshness.

### Neutral

- **Warm Paper** (#FFF8F0): Primary background. Not stark white — has enough warmth to feel inviting.
- **Warm Paper Deep** (#F5EBE0): Section backgrounds and subtle depth layers.
- **Pure White** (#FFFFFF): Cards and elevated surfaces.
- **Charcoal** (#4A4A4A): Primary text. Not pure black — has warmth that matches the palette.
- **Charcoal Light** (#6B7280): Secondary text, descriptions.
- **Charcoal Muted** (#9CA3AF): Tertiary text, placeholders.

### Named Rules

**The Warmth Rule.** Never use pure black (#000000) or pure white (#FFFFFF) for text or backgrounds respectively. The palette's warmth is the point; stark contrast breaks the cozy atmosphere.

## 3. Typography

**Display Font:** Quicksand (headings, navigation, buttons)
**Body Font:** Nunito (body text, descriptions)
**Character:** Rounded and friendly without being childish. Quicksand's geometric softness pairs with Nunito's humanist warmth — both feel approachable, not technical.

### Hierarchy

- **Display** (Quicksand 700, clamp(2.5rem, 5vw, 4rem), line-height 1.3): Hero headlines only. Large, welcoming, with subtle letter-spacing (-0.02em).
- **Headline** (Quicksand 700, clamp(2rem, 4vw, 3rem), line-height 1.3): Section titles. Clear hierarchy below display.
- **Title** (Quicksand 700, clamp(1.5rem, 3vw, 2rem), line-height 1.3): Card titles, component headings.
- **Body** (Nunito 400, 1rem, line-height 1.7): Descriptions, paragraphs. Max line length 65-75ch for readability.
- **Label** (Quicksand 600, 0.85rem): Skill tags, navigation links, metadata.

### Named Rules

**The Friendly Weight Rule.** Heavy weights (700) reserved for headings only. Body text stays at 400-500. The contrast creates hierarchy without shouting.

## 4. Elevation

This system uses soft shadows that respond to interaction. Surfaces are flat at rest; shadows appear on hover and focus to indicate elevation. The approach is functional, not decorative — shadows communicate state, not atmosphere.

### Shadow Vocabulary

- **subtle** (`0 2px 8px rgba(229, 152, 155, 0.1)`): Cards at rest, navigation.
- **default** (`0 4px 16px rgba(229, 152, 155, 0.15)`): Cards in grids, elevated surfaces.
- **lifted** (`0 8px 32px rgba(229, 152, 155, 0.2)`): Modal-like elements, floating elements.
- **hover** (`0 12px 40px rgba(229, 152, 155, 0.25)`): Interactive card hover state.
- **glow** (`0 0 30px rgba(255, 205, 178, 0.4)`): Button glow effects on hover.
- **card-hover** (`0 20px 50px rgba(229, 152, 155, 0.3)`): Maximum lift for major interactive elements.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, focus). Never use shadows decoratively.

## 5. Components

### Buttons

- **Shape:** Rounded-lg (24px radius)
- **Primary:** Gradient background (Soft Coral → Dusty Rose), white text, soft shadow, shimmer animation on hover.
- **Hover / Focus:** Lifts with enhanced shadow and subtle glow. Scale(1.02), translateY(-4px).
- **Secondary:** White background, charcoal text, coral border. Fills with coral on hover via ::after pseudo-element.

### Chips / Skill Tags

- **Style:** Warm Paper background, charcoal text, soft coral border, 16px radius.
- **Hover:** Coral background tint, lifts slightly (translateY(-2px) scale(1.05)).
- **Used for:** Programming languages, frameworks, tools, platforms.

### Cards / Containers

- **Corner Style:** Large radii (24-32px) — friendly and soft.
- **Background:** White or Warm Paper gradients.
- **Shadow Strategy:** Default shadows at rest; lifted shadows on hover.
- **Border:** Subtle 1px borders in coral-tinted tones when needed.
- **Internal Padding:** 20-30px depending on content density.

### Navigation

- **Style:** Fixed navbar with glass effect (backdrop-filter blur), warm paper tint.
- **Typography:** Quicksand 600, charcoal text.
- **Default/Hover/Active:** Charcoal text, coral background tint on hover/active. Underline grows from center on hover.
- **Mobile:** Full-width dropdown with hamburger toggle, smooth slide transition.

### Hero Section

- **Background:** Three-color gradient (Warm Paper → Soft Coral Light → Dream Blue Light) — creates warm-to-cool flow.
- **Decorative Elements:** Floating leaves (🌿🍃) and sparkles (✨) with gentle float animation. Positioned absolutely, non-interactive except for hover scale.
- **Text Layout:** Two-column on desktop (text left, profile image right), stacked on mobile.

### Cosplay Gallery Cards

- **Layout:** Masonry-style with varying heights, 3 columns desktop → 2 tablet → 1 mobile.
- **Slideshow:** Auto-advancing every 4 seconds with manual arrow/dot controls.
- **Card Info:** Character name, series origin, photographer credit with camera icon.
- **Hover:** Subtle lift (translateY(-10px) scale(1.02)), top accent bar scales in.

### Project List Items

- **Style:** Horizontal layout with project info on left, links on right.
- **Hover:** Left slide (translateX(5px)), bottom border animates in, enhanced shadow.
- **Links:** Dream Blue for web links, neutral with coral hover for GitHub.

## 6. Do's and Don'ts

### Do

- **Do** use the warm coral/rose gradient as the primary accent. It carries the brand personality.
- **Do** maintain generous rounded corners (24px+) throughout. The softness is intentional.
- **Do** use Quicksand for headings and Nunito for body text. The pairing is deliberate.
- **Do** include subtle motion on interactive elements. Hover lifts, focus states, and shimmer effects.
- **Do** use floating decorative elements (emoji) for personality. Keep them subtle and non-interactive.
- **Do** follow the two-identity-as-strength principle. Both programming and cosplay sections should feel cohesive.

### Don't

- **Don't** use gradient text (`background-clip: text`). Solid colors only.
- **Don't** use side-stripe borders (border-left/right > 1px) as decorative accents.
- **Don't** use glassmorphism decoratively. The glass navbar is functional (visibility + blur), not aesthetic excess.
- **Don't** add eyebrow labels above every section (e.g., "ABOUT", "PORTFOLIO"). The existing design avoids this; keep it that way.
- **Don't** use numbered section markers (01, 02, 03). The design doesn't use them; don't introduce them.
- **Don't** use the hero-metric template (big number + small label). This portfolio showcases work, not metrics.
- **Don't** let text overflow containers. Test headings at every breakpoint; reduce clamp values or rewrite copy if needed.
- **Don't** use template or AI-generated aesthetic patterns. The Cozy Atelier should feel personal and handcrafted.
