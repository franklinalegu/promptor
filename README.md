# Promptor Stories

> **AI film preproduction for ChatGPT storyboarding and Google Flow animation.**

Promptor Stories is a browser-based creative-direction workspace. It transforms a story idea into a structured film project with a story bible, a ChatGPT storyboard brief, editable shot cards, continuity notes, storyboard keyframe prompts, and Google Flow-ready animation prompts.

It is designed for the workflow:

```text
Story idea / script
       ↓
Promptor project + story bible
       ↓
ChatGPT storyboard breakdown
       ↓
Promptor shot refinement + storyboard keyframes
       ↓
Google Flow image/video generation and assembly
```

Promptor does not generate images or video itself. It gives creators the structured direction needed to generate more consistent visual assets and animated scenes in external tools.

---

## Contents

- [What Promptor Stories does](#what-promptor-stories-does)
- [Production workflow](#production-workflow)
- [Workspace modules](#workspace-modules)
- [Prompt outputs](#prompt-outputs)
- [Product animation segment](#product-animation-segment)
- [Using the application](#using-the-application)
- [Data and privacy](#data-and-privacy)
- [Run locally](#run-locally)
- [Deployment](#deployment)
- [Technical architecture](#technical-architecture)
- [Current limitations](#current-limitations)
- [Roadmap](#roadmap)

---

## What Promptor Stories does

Promptor Stories turns loose creative direction into reusable production assets:

| Asset | Purpose |
| --- | --- |
| **Project brief** | Captures title, logline, genre, tone, target duration, format, and global visual language. |
| **Story bible** | Stores reusable character, location, and prop records. |
| **Character lock** | Documents physical details and wardrobe elements that must remain consistent across shots. |
| **ChatGPT storyboard brief** | Produces a copyable instruction for requesting a structured shot list from ChatGPT. |
| **Shot list** | Organizes the story into editable cinematic beats. |
| **Storyboard keyframe prompt** | Generates a still-image prompt for visualizing each planned shot. |
| **Google Flow prompt** | Generates an animation-oriented prompt with action, camera movement, audio, consistency rules, and negative constraints. |
| **Continuity inspector** | Flags missing visual references and tracks shot approvals before animation. |
| **Project JSON export** | Exports the project structure for backup or future integrations. |

---

## Production workflow

### 1. Create the project brief

Start in **Project brief** and define:

- Project title and logline
- One or more genres and emotional tone
- Target runtime
- Target aspect ratio (`9:16`, `16:9`, `4:5`, or `1:1`)
- Global visual style

Promptor uses a **single-genre dropdown**. Select the preferred genre and it stays visible as a persistent tag in the story brief. To change it, simply choose another option from the dropdown. The selected genre is included in every ChatGPT storyboard brief.

The visual style becomes a shared direction in every shot prompt. A useful global style includes color palette, material texture, mood, lens/film language, and lighting philosophy.

Example:

```text
Cinematic Nigerian urban drama; indigo rain shadows, amber practical lights,
tactile 35mm texture, natural skin detail and intimate camera movement.
```

### 2. Build the story bible

Use **Story bible** to create repeatable records for:

- **Characters** — name, role, physical description, and non-negotiable visual locks.
- **Locations** — architecture, weather, materials, time of day, light, and atmosphere.
- **Props** — important narrative objects that must stay consistent between scenes.

A good character lock records details that should not drift between generations:

```text
Keep long braids, gold hoop earrings, scar above left eyebrow, facial
structure and cream coat palette consistent.
```

### 3. Use ChatGPT to break down the story

Open **Script & ChatGPT**, paste your draft, then select **Create ChatGPT storyboard brief**.

Promptor creates a tailored brief asking ChatGPT to return a shot list with:

1. Shot duration
2. Narrative purpose
3. Characters and continuity locks
4. Location
5. Framing
6. Camera movement
7. Visible action
8. Emotional beat
9. Dialogue or voiceover
10. Audio and ambience
11. Storyboard keyframe prompt
12. Google Flow animation prompt
13. Continuity note

Promptor now also accepts a JSON response directly. In **Script & ChatGPT**, paste either a JSON array of shots or an object containing a `shots` array into **Import ChatGPT shot JSON**, then choose **Import shot list**. Promptor creates editable shot cards automatically.

A compatible minimum example is:

```json
{
  "shots": [
    {
      "title": "The city waits",
      "duration": "5 sec",
      "purpose": "Establish the world",
      "framing": "Wide establishing shot",
      "camera_movement": "Slow lateral drift",
      "action": "The protagonist waits beneath the shelter.",
      "emotion": "Isolated",
      "audio": "Rain and distant traffic"
    }
  ]
}
```

Promptor also accepts common alternatives including `shot_title`, `narrative_purpose`, `visible_action`, `emotional_beat`, and `sound`.

### 4. Refine every storyboard shot

In **Storyboard**, each shot has:

- Duration
- Narrative purpose
- Character and location links
- Framing
- Camera movement
- Visible action
- Emotional state
- Audio direction
- Approval status

Select a shot to switch between three prompt views. Use **Edit details** to open the full shot editor for title, duration, purpose, framing, camera movement, action, emotion, and audio instead of editing with browser prompts.

Promptor can also import a ChatGPT-generated JSON shot list directly from the Script & ChatGPT workspace.

Prompt views:

| View | Use |
| --- | --- |
| **Google Flow prompt** | Animate the shot with character, location, motion, audio, and continuity context. |
| **Storyboard keyframe** | Generate a still visual frame before animation. |
| **Script & audio** | Keep dialogue / voiceover and sound direction with the visual beat. |

### 5. Attach visual references and animate

In **Assets & continuity**, attach local reference images to character, location, and prop records. Promptor stores reference filenames locally and reminds you which assets should be included as references/ingredients for the relevant Flow shots.

For each approved shot:

1. Create or choose the reference/keyframe image.
2. Bring the applicable character, location, and prop references into Google Flow.
3. Copy the shot's **Google Flow prompt** from Promptor.
4. Generate a short clip.
5. Record the best result and move to the next shot.

---

## Workspace modules

### Premium creative-tech design system

Promptor uses a human-centered editorial workspace: a warm off-white canvas, clean paper-like surfaces, restrained forest-green interaction states, and calm charcoal typography. Decorative gradients, transparent overlays, and dashboard-like visual effects have been removed in favour of a story-first low-noise workspace. The interface uses **Plus Jakarta Sans** for product UI and **DM Mono** for timing, labels, and technical metadata. The layout intentionally minimizes nested cards and repeated content so creators can move through project setup, scripting, storyboarding, references, and animation work with less visual friction.

A persistent **Day mode / Night mode** control is available in the top navigation. The chosen appearance is saved locally in the browser and is restored the next time the project is opened.

### Project dashboard and brief

The project-level creative control center now begins with a **Project Command Center**. It surfaces a production-readiness percentage, the five-stage workflow, current character/shot counts, approved-shot progress, and quick actions for storyboarding, the story bible, and reference review. Use the brief below it to maintain a consistent cinematic language across the entire story.

### Story bible

The reusable continuity layer. Story bible details are automatically incorporated into applicable shot prompts.

### Script & ChatGPT

A handoff surface for using ChatGPT as a story editor and shot-list writer. Promptor does not require an API key; the generated brief can simply be copied into ChatGPT.

### Storyboard

A shot-based production board. You can select, approve, duplicate, add, and edit shots. The active shot produces model-ready outputs on demand.

### Assets & continuity

A local reference tracker and preflight checklist for character locks, reference coverage, and approval status.

---

## Prompt outputs

### Storyboard keyframe prompt

Use this first when you need a clear still-frame reference for a scene:

```text
9:16 cinematic medium three-quarter shot. Amara, a 27-year-old Nigerian woman
with long natural braids and a cream trench coat, waits beneath a rain-soaked
Lagos bus shelter. Amber streetlamps reflect on wet pavement. Cinematic
Nigerian urban drama; indigo rain shadows, tactile 35mm texture. Storyboard
keyframe: slow push-in; clean visual read, intentional negative space,
coherent screen direction, detailed environment. --ar 9:16
```

### Google Flow animation prompt

Use this once a visual keyframe/reference has been selected:

```text
Use the attached character and location reference images where available.

9:16, 6 sec. Medium three-quarter composition. Amara folds her arms against
the cold and watches approaching headlights. Slow push-in. Her performance
shifts through exhausted, quietly hopeful. Rain-soaked bus shelter, wet
pavement, smeared traffic lights, amber streetlamps and deep indigo evening
shadows.

Keep the subject, wardrobe, facial features, hair, props and location design
consistent with the project references. Keep long braids, gold hoop earrings,
scar above left eyebrow, facial structure and cream coat palette consistent.

Audio: rain on metal roof, passing tires. Natural movement, realistic material
physics, no captions or text overlays. Avoid: plastic skin, altered wardrobe,
extra fingers, duplicate props, visual flicker.
```

The Google Flow prompt emphasizes animation-relevant instructions: duration, action, camera movement, performance, audio, reference continuity, and unwanted output constraints.

---

## Product animation segment

Promptor Stories now includes a dedicated **Product animation** workspace for ads, social product films, packshots, beauty/product demos, fashion objects, beverages, and other branded objects.

### Product identity lock

Define the product once, then reuse it across a sequence:

- Product name and one or more categories
- Physical description and silhouette
- Product appearance, packaging, label, material, surface finish, and reflection behavior in one clear visual-description field
- Product features and benefits to highlight on screen
- Brand lock: the exact elements that must never change
- Default campaign setting
- Product-specific output format
- Product reference image filename

Add each feature as a short, visualizable benefit, for example `24-hour hydration`, `active noise cancellation`, `spill-proof lid`, or `wireless charging`. Features are injected into every generated product prompt so the key benefit can be intentionally highlighted across the campaign.

The Product Appearance and Keep This Product Consistent fields include one-click example categories. Creators can choose a starting point such as **Glass bottle**, **Matte tube**, **Beverage can**, **Tech device**, or **Luxury packaging**, then edit the generated wording as needed. Consistency examples cover **Logo & label**, **Shape & material**, **Typography & colour**, and **Scale & details**.

The **brand lock** is the product equivalent of a character consistency lock. For example:

```text
Preserve the exact frosted-glass bottle silhouette, coral logo, ivory label,
gold cap, label placement, and product proportions in every frame.
```

### Product categories

Select one preferred product category from the **Product category** dropdown. The selected category remains visible as a persistent tag in the product identity; choose another dropdown option whenever the product category needs to change. The current category library includes:

- Skincare, beauty, fragrance, and haircare
- Beverages, food, and snacks
- Fashion apparel, footwear, jewellery, bags, and accessories
- Consumer technology, audio/headphones, and mobile apps/software
- Home/furniture, kitchenware, automotive, fitness/wellness, and sports equipment
- Baby/kids, toys/games, stationery/books, luxury packaging, and retail/e-commerce

Multiple categories can be combined for hybrid concepts, such as **Fitness & Wellness + Consumer Technology** for a wearable device or **Food & Snacks + Luxury Packaging** for a premium product launch.

### Product output format

The **Product Animation** module includes its own output-format dropdown. Choose `9:16` for vertical ads/Reels, `4:5` for social feed ads, `1:1` for square placements, `16:9` for widescreen commercials, or `3:4` for tall portrait compositions. Users can also keep the project-level format as the default.

The selected product format is inserted into product keyframe and Google Flow prompts without changing the format used by the rest of the story project.

### Product campaign templates and feature mapping

Choose a campaign type before building the sequence:

- Luxury product reveal
- Skincare demonstration
- Food & beverage commercial
- Technology product demo
- Fashion product campaign
- Social media product ad

Promptor adapts the five-shot sequence to the selected campaign type. Each generated product shot also has its own feature dropdown, so creators can map a specific product benefit to the appropriate scene—for example, map `active noise cancellation` to a technology feature macro or `24-hour hydration` to a skincare texture shot.

### Five-shot product sequence

Select **Build product sequence** to create a reusable advertising sequence:

1. Hero reveal
2. Material detail / macro shot
3. Product in context
4. Hero interaction
5. Closing packshot

Each shot creates either a **ChatGPT product-image prompt** in ChatGPT-only mode or a **Google Flow product-animation prompt** in Flow production mode.

### Recommended product workflow

1. Add a clean product packshot/reference in the Product animation section.
2. Fill the product identity and brand lock completely.
3. In ChatGPT-only mode, generate and approve the five storyboard/keyframe images.
4. Verify that the silhouette, label, logo, colour, material and proportions remain consistent.
5. Switch to Flow production mode.
6. Use the matching product reference and corresponding Flow prompt for each animated clip.

The generated animation prompts explicitly ask the model to preserve packaging geometry, label placement, material finish, product scale, branding, and reflections while avoiding warped logos, extra objects, deformed packaging, or model-added text overlays.

---

## ChatGPT-only Storyboard Mode

Promptor Stories opens in **ChatGPT-only storyboard mode**. This mode is designed for creators who want to plan and generate storyboard images in ChatGPT before paying for or moving into video generation.

In this mode Promptor:

- prioritizes the **ChatGPT image prompt** on each storyboard shot;
- hides the Google Flow shot tab so the workspace stays focused on storyboarding;
- changes **Copy prompts** to export all storyboard-image prompts;
- uses the Assets panel as a reference-consistency checklist for ChatGPT images;
- keeps a four-step storyboard status flow: **Draft → Prompt ready → Storyboard generated → Approved**.

Use **ChatGPT-only mode** in the top navigation to switch to **Flow production mode** when your keyframes are approved and you are ready to make animation prompts. Switching modes never deletes the project, story bible, shot list, or references.

### Recommended ChatGPT Free workflow

1. Create the project brief and story bible in Promptor.
2. Use **Open ChatGPT brief** to copy the shot-list instruction into a ChatGPT conversation.
3. Select each Promptor shot and copy its **ChatGPT image prompt**.
4. Generate storyboard panels in the same ChatGPT conversation where possible, carrying your character reference and prior panel context forward.
5. Mark the shot **Prompt ready**, then **Storyboard generated**, then **Approved** after you select a usable panel.
6. Export the project JSON as a backup.
7. Switch to Flow production mode only when you are ready to animate approved storyboard panels.

## Using the application

### Copying and exporting

- **Copy Flow prompts**: copies all current animation prompts as a single production document.
- **Copy**: copies the active prompt in the selected shot tab.
- **Export project**: downloads the complete project as a JSON file.
- **ChatGPT storyboard brief**: opens a modal containing a project-specific brief ready to copy.

### Local starter project

The app opens with a sample magical-realism project, **The Last Bus Home**. It demonstrates a character bible, a Lagos bus-stop location, a hero prop, and five shots. Replace it or use **New project** to begin from a clean project.

### Recommended shot duration

For AI video generation, begin with shots of **4–8 seconds**. Shorter, focused clips are more controllable and easier to join in a scene editor.

### Continuity checklist before animation

Before animating a shot, verify that:

- Character reference(s) are available.
- Wardrobe and signature physical details are in the character lock.
- The scene location/reference is attached.
- Hero props are described and present.
- Aspect ratio is correct for the project.
- The current emotional state follows naturally from the previous shot.
- The shot is approved in the storyboard.

---

## Data and privacy

Promptor Stories is a client-side static prototype.

It has no account system, server-side database, analytics, API key, or built-in image/video generation. Project data is saved in the current browser's `localStorage` under:

```text
promptor.stories
```

### Important implications

- Data remains on the current browser and device.
- Clearing browser site data removes the active project.
- Use **Export project** to create a backup.
- Reference uploads are stored as filenames in project data; image files themselves are not uploaded or persisted by the application.
- No project content is transmitted by Promptor.

---

## Run locally

Promptor Stories is a static website. It requires no package installation, build command, or environment variables.

### Open directly

Open `index.html` in a current browser.

### Run a local static server

```bash
cd promptor
python3 -m http.server 8080 --bind 0.0.0.0
```

Open:

```text
http://localhost:8080
```

---

## Deployment

Deploy the repository root to any static hosting platform.

### GitHub Pages

1. Open repository **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select `main` and the `/ (root)` directory.
4. Save.

### Netlify, Vercel, or Cloudflare Pages

- Import the repository.
- Choose **Static HTML** / **No framework**.
- Do not set a build command.
- Set the publish directory to the repository root if required by the host.

---

## Technical architecture

```text
promptor/
├── index.html   # Full single-page application: UI, styling and client logic
└── README.md    # Product and technical documentation
```

### Implementation

- **Vanilla HTML, CSS, and JavaScript**
- No runtime package dependencies
- Browser `localStorage` persistence
- Native Clipboard API for copying prompts
- Native `Blob` download for JSON export
- Responsive layout for desktop and mobile

The application state includes the project brief, story bible entries, reference filenames, storyboard shots, and review statuses. Prompt text is generated dynamically using the global project style plus each shot’s specific character, location, action, camera, audio, and continuity details.

---

## Current limitations

- Promptor does not call ChatGPT or Google Flow APIs directly.
- Storyboard output from ChatGPT must currently be transferred manually into shot cards.
- Attached references are tracked by filename; the app does not analyze, store, or transmit image pixels.
- There is no drag-and-drop shot ordering yet.
- Character, location, and prop assignment is lightweight and currently uses the project’s existing records.
- The continuity inspector is a practical checklist, not an AI visual-analysis system.
- No cloud sync, user authentication, collaboration, revision history, or multi-project database is included.

---

## Roadmap

- [ ] ChatGPT JSON storyboard import
- [ ] Drag-to-reorder timeline and scene groups
- [ ] Full shot editor for changing character, location, props, and dialogue
- [ ] Visual thumbnail/keyframe board
- [ ] Cloud project backup and shareable review links
- [ ] Direct integrations where supported by external generation tools
- [ ] Model-specific prompt adapters for Google Flow, Midjourney, Flux, and other tools
- [ ] AI-powered continuity review of generated reference images
- [ ] Export to production shot list PDF/CSV
- [ ] Team comments, version history, and approvals

---

## License

No license has been specified. Add a license before distributing the project or accepting public contributions.
