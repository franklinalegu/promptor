# Promptor

> **Creative direction, compiled.**

Promptor is a browser-based character-direction studio for crafting detailed, model-ready prompts for image and video generation. It gives creators a structured way to define a character's identity, styling, world, camera language, and production constraints—then compiles those choices into a polished creative brief that can be used with Midjourney, Flux, Kling, and similar generative tools.

![Promptor interface](https://img.shields.io/badge/status-prototype-887cff?style=flat-square)
![No build required](https://img.shields.io/badge/build-none-58e1be?style=flat-square)
![License](https://img.shields.io/badge/license-not%20specified-4b556b?style=flat-square)

---

## Contents

- [Product overview](#product-overview)
- [Core capabilities](#core-capabilities)
- [Prompt-building workflow](#prompt-building-workflow)
- [How the prompt is composed](#how-the-prompt-is-composed)
- [Using Promptor](#using-promptor)
- [Saved directions and local data](#saved-directions-and-local-data)
- [Run locally](#run-locally)
- [Deploy](#deploy)
- [Project structure](#project-structure)
- [Technical notes](#technical-notes)
- [Current limitations](#current-limitations)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

---

## Product overview

Promptor is not an image generator. It is a **creative-direction and prompt-composition interface**: a focused workspace that converts deliberate visual choices into a coherent prompt.

The interface is designed around the choices typically needed for editorial portraits, AI influencers, campaign characters, lifestyle imagery, and image-to-video concepts:

- Who is the character?
- What makes them visually recognizable?
- What are they wearing and why?
- Where does the scene take place?
- How should the camera, lighting, and visual medium treat the subject?
- Which details must be avoided by the image model?

The result is a detailed, copyable production prompt rather than a loose list of keywords.

---

## Core capabilities

### Guided creative-direction workflow

Promptor organizes character development into five focused stages:

| Stage | Purpose | Example controls |
| --- | --- | --- |
| **Identity** | Establish the character's human and professional foundation. | Gender presentation, age range, heritage/origin, character role |
| **Look** | Create a memorable appearance and wardrobe language. | Hair, eye colour, signature details, wardrobe direction, palette |
| **World** | Give the character context and narrative space. | Location, atmosphere, environmental details, scene reference |
| **Direction** | Define how the image should be produced. | Demeanor, expression, framing, pose, lighting, visual medium, aspect ratio |
| **Refine** | Preserve intent and reduce unwanted model output. | Campaign context, negative direction |

### Live prompt generation

The right-hand panel updates continuously as choices are made. The generated direction contains visual identity, styling, setting, lighting, camera language, finish, aspect ratio, optional narrative context, and optional negative prompt instructions.

### Creative decision presets

Most controls offer curated one-select or multi-select options. This helps users move quickly while retaining specificity. Selecting an active one-select option again clears it; multi-select options can be combined.

### Scene-reference attachment

Users can attach a scene reference image from their device. Promptor records the attached filename and inserts an instruction to match the reference image's atmosphere and spatial language.

> The current prototype does not inspect image pixels or upload the reference anywhere. It is a local creative note for the prompt. See [Current limitations](#current-limitations).

### Saved directions

Users can save a working direction under a custom name, build a small library of concepts, and reload any saved direction later.

### Export and copy

- **Copy** the generated direction to the system clipboard.
- **Export `.txt`** downloads the current production prompt as a text file.
- **Explore direction** creates a randomized starting point from the available preset pools.

---

## Prompt-building workflow

1. **Start with Identity**  
   Select the character's presentation, age range, origin, and role.

2. **Define their Look**  
   Make appearance and wardrobe decisions. Use *Signature details* for features such as freckles, jewelry, tattoos, texture, or specific accessories.

3. **Build their World**  
   Choose a setting and atmosphere. Add environmental materials, props, or lighting cues in *Environmental details*.

4. **Set Direction**  
   Select camera framing, pose, lighting, rendering medium, and final output ratio. These choices make the prompt more consistent across generation tools.

5. **Refine Constraints**  
   Add campaign context to clarify the intended use. Add negative direction to reduce common generation defects or unwanted creative choices.

6. **Copy or Export**  
   The live production prompt is available at all times from the right-side output panel.

---

## How the prompt is composed

Promptor assembles selections into a consistent order so prompts read as a usable creative brief:

```text
[Age], [heritage], [role], [gender presentation].
[Framing], [pose and gaze];
[hair], [eye colour], [expression], [demeanor].
Signature details: [...].
Wearing [wardrobe] in a [palette] palette.
Set on a [location] during [atmosphere].
Environment: [...].
[lighting], [rendering medium], 85mm portrait lens,
deliberate composition, authentic skin detail, tactile fabric texture,
nuanced shadows, professional color grading, subtle depth of field,
campaign-quality finish.
Narrative context: [...].
Negative prompt: [...].
--ar [aspect ratio]
```

### Example

```text
Late 20s, West African, AI influencer, Woman. Eye-level medium portrait,
centered, direct eye contact; Long waves hair in Obsidian black, Deep brown
eyes, Confident smile expression, Confident and Sophisticated presence.
Wearing Editorial tailoring in a Cream and gold palette. Set on a Modern Lagos
rooftop during Golden hour. Golden-hour backlight, Luxury campaign photography,
85mm portrait lens, deliberate composition, authentic skin detail, tactile
fabric texture, nuanced shadows, professional color grading, subtle depth of
field, campaign-quality finish. --ar 4:5
```

The exact text changes according to the choices made in the interface.

---

## Using Promptor

### Selection behavior

- **One-select controls:** Choose a single option. Click it again to clear it.
- **Multi-select controls:** Select as many traits as are relevant.
- **Freeform fields:** Use these for visual specifics that presets cannot express.
- **Empty controls:** Promptor uses sensible fallback phrasing in the generated prompt when a category is unfilled.

### Tips for stronger prompts

- Select **one or two** demeanor traits rather than every option.
- Use signature details for traits that help distinguish the character between generations.
- Use environmental details to specify materials, props, time of day, and atmosphere.
- Keep negative direction concise and concrete: e.g. `plastic skin, text overlays, cluttered background`.
- Pair a camera choice with a compatible scene. For example, a full-body editorial shot benefits from a richer environment than a tight beauty portrait.
- Use `9:16` for vertical/reels concepts, `4:5` for social portrait posts, and `16:9` for cinematic frames.

---

## Saved directions and local data

Promptor is a client-side prototype. It does not use an account, a database, or a remote API.

The browser's `localStorage` is used for:

| Key | Purpose |
| --- | --- |
| `promptor.rebuild.draft` | Stores the active work-in-progress direction. |
| `promptor.rebuild.saved` | Stores up to seven saved directions in the local browser. |

### Implications

- Saved directions remain in the same browser on the same device.
- Clearing browser site data/local storage removes saved directions.
- Saved directions are not shared between devices.
- No user prompt information is sent to a server by this prototype.

---

## Run locally

Promptor is a static application. No package manager, bundler, environment variables, or build step is required.

### Option 1 — Open the file

Open `index.html` in a modern browser.

### Option 2 — Start a local static server

From the project directory:

```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

Then visit:

```text
http://localhost:8080
```

### Browser support

Promptor is intended for current versions of Chrome, Edge, Firefox, and Safari. Clipboard support depends on browser permissions and the serving context; if copying is unavailable, select text directly from the output panel.

---

## Deploy

Because it is static, Promptor can be deployed to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host.

### GitHub Pages

1. Push the project to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder.
5. Save. GitHub will publish `index.html` as the site entry point.

### Netlify / Vercel / Cloudflare Pages

- Connect the repository.
- Set the framework preset to **Static HTML** or **No framework**.
- Leave build command and output directory blank, unless your host requires an output directory configuration.
- Deploy from the repository root.

---

## Project structure

```text
promptor/
├── index.html    # Complete single-page application: markup, styles, and logic
└── README.md     # Product and technical documentation
```

### Implementation overview

The application is intentionally self-contained in `index.html`:

- **HTML** defines the product shell and output regions.
- **CSS** provides responsive styling, visual tokens, responsive breakpoints, and interaction states.
- **Vanilla JavaScript** defines the staged controls, prompt composer, local persistence, export behavior, and saved-direction library.

This approach makes the prototype easy to deploy and inspect, while avoiding a dependency or build pipeline.

---

## Technical notes

### No external runtime dependencies

The user interface and application logic are written with native browser APIs. The typography import is optional and loaded from Google Fonts; the interface remains usable if it is unavailable.

### State model

A single `state` object holds the active direction. Each stage describes its own fields and option sets. When the user modifies a field, Promptor:

1. Updates `state`.
2. Persists it to `localStorage`.
3. Re-renders the active stage where necessary.
4. Re-composes the production prompt.
5. Updates the direction audit.

### Export behavior

The export action creates a browser `Blob` from the prompt string and downloads it as `promptor-direction.txt`. No server is needed.

### Security and privacy

This project does not include secrets, API keys, user accounts, analytics, or network submission of creative inputs. If image analysis, AI text generation, authentication, or cloud sync are added in the future, those features should use a secure backend and documented privacy controls.

---

## Current limitations

Promptor is a front-end product prototype. Current limitations include:

- It creates prompts but **does not generate images or video**.
- The scene-reference control attaches a filename and writes a prompt instruction; it does **not** perform visual scene analysis.
- Prompt generation uses structured templates and selected content; it does not currently use an LLM to reason about compatibility or rewrite language dynamically.
- There is no model-specific prompt adaptation beyond the `--ar` aspect-ratio suffix.
- Saved directions are local to the browser and are not synchronized.
- There is no user authentication, team workspace, revision history, or cloud backup.
- There are no automated tests or continuous integration workflows yet.

---

## Roadmap

Potential next iterations:

- [ ] Generate model-specific variants for Midjourney, Flux, SDXL, Kling, and image-to-video tools.
- [ ] Add authenticated cloud sync and shareable project links.
- [ ] Integrate secure image reference analysis through a backend service.
- [ ] Add a visual prompt preview / moodboard panel.
- [ ] Support reusable character bibles and multi-shot campaigns.
- [ ] Add seed, stylization, and negative-prompt controls per target model.
- [ ] Add CSV/JSON project export and import.
- [ ] Add accessibility testing, keyboard navigation, and automated browser tests.

---

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make and test your changes locally.
4. Keep the application deployable as a static site unless the change explicitly introduces an architecture update.
5. Open a pull request describing the problem, solution, and any UI/behavior changes.

For substantial product changes, include before/after screenshots or a short screen recording where possible.

---

## License

No license has been specified for this repository. Add a license file before distributing, relicensing, or accepting external contributions under a defined license.
