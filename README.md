# Promptor

**Promptor is a human-centered storyboard workspace for planning stories, product films, and AI animation.**

It helps creators move from an idea to a practical shot list, storyboard-image prompts, animation prompts, visual references, and exportable production notes. Promptor works without an account or API key: it runs entirely in the browser and is designed to work alongside ChatGPT and animation tools such as Google Flow.

## What it is for

```text
Story idea or product brief
        ↓
Characters, places, references, and product details
        ↓
Storyboard shot list
        ↓
ChatGPT storyboard-image prompts
        ↓
Animation prompts and selected clips
```

Promptor does not generate images or videos itself. It is the planning layer that helps a creator make clearer, more consistent requests in the tools they already use.

## Main areas

| Area | What it does |
| --- | --- |
| **Overview** | Shows the project, a simple readiness check, and the clearest next step. |
| **Characters & places** | Stores reusable character, location, and prop details. |
| **Story** | Holds the story or script, creates a ChatGPT shot-list brief, and imports returned JSON. |
| **Storyboard** | Organizes shots, storyboard frames, prompts, notes, statuses, and animation clips. |
| **References** | Stores local reference images for characters, places, and props. |
| **Animation** | Plans product campaigns, product features, product shots, image prompts, and animation prompts. |
| **Export** | Exports project JSON, a CSV shot list, a text prompt pack, or a printable review. |

## Core workflow

### 1. Start a project

Choose a starter type:

- Short film
- Product video
- Social story
- Music video

Then add a title, logline, genre, frame shape, and visual style.

### 2. Add only the important visual details

Use **Characters & places** for recurring details that should remain consistent. Keep descriptions short and visual.

Example:

```text
Amara is a 27-year-old Nigerian woman with long natural braids,
gold hoop earrings, a cream trench coat, and a scar above her left eyebrow.
```

Use the consistency note only for elements that must not drift from one image or shot to the next.

### 3. Turn the story into shots

In **Story**, paste a synopsis or script and select **Create a ChatGPT shot-list brief**. Copy the generated request into ChatGPT.

Promptor asks ChatGPT to return JSON with useful fields including:

- title
- duration
- purpose
- action
- framing
- camera movement
- emotion
- audio

Paste the JSON response into **Import a ChatGPT shot list** to create editable shot cards automatically.

### 4. Make storyboard frames

In **Storyboard**, choose a shot and copy its **Image prompt** into ChatGPT. Upload the resulting storyboard image back to the shot when you have a usable frame.

Each shot can include:

- A scene name
- Duration
- Action and purpose
- Framing and camera movement
- Emotion and audio
- Storyboard image
- Animation clip
- Production status
- Personal or team notes

Shots can be dragged into a new order.

### 5. Move to animation

Use the **Animation prompt** for an approved storyboard shot. The prompt includes the shot action, camera direction, sound, style, continuity language, and selected product feature where applicable.

## Product animation

Product Animation is part of the **Animation** area.

### Product information

Product Animation now begins with one required step: **upload a clear product image**. Promptor uses that reference as the product’s visual anchor and automatically locks its appearance, packaging, label, materials, colours, silhouette, and proportions in generated prompts.

The creator then only needs to add the **features or benefits** to highlight, such as `24-hour hydration`, `spill-proof lid`, or `active noise cancellation`.

Frame shape and product story type remain available as optional campaign settings.

### Product story templates

Choose a starting structure:

- Lifestyle product story
- Skincare routine
- Food & beverage
- Technology demo

Promptor creates a five-shot product sequence. Assign one key feature to each shot so the campaign does not try to show every benefit in every frame.

## References and storyboard images

Reference images and storyboard frames are stored as browser-local data in the current prototype. They can be attached to:

- Characters
- Places
- Props
- Storyboard shots
- Product shots

Use references in the same ChatGPT conversation whenever possible to improve visual consistency.

## Project quality check

The Overview page checks whether the project has:

- A title and logline
- A character or product
- A place or product setting
- Storyboard shots
- A storyboard image for each shot

This is intended to help creators focus on the next useful task rather than show generic dashboard metrics.

## Export

Promptor offers browser-side exports:

- **Project JSON** — a complete backup of the project data
- **Shot list CSV** — a spreadsheet-friendly production list
- **Prompt pack** — image and animation prompts for all shots
- **Print / save PDF** — a printable production review using the browser print dialog

## Day and night mode

Use the top-navigation appearance switch to choose Day mode or Night mode. The choice is saved locally in the browser.

## Privacy, GDPR, and local data

A local-first GDPR/privacy policy template is available in [GDPR_POLICY.md](GDPR_POLICY.md). The product footer also includes Privacy & GDPR, Local data, Terms of use, and Your rights notices.

Promptor currently has:

- No login
- No cloud database
- No server-side storage
- No API key requirement
- No built-in image or video generation

Projects are stored in browser `localStorage`. Export JSON regularly if a project is important. Clearing site data can remove local projects and attached references.

## Run locally

Promptor is a static site with no package installation or build step.

```bash
cd promptor
python3 -m http.server 8080 --bind 0.0.0.0
```

Open `http://localhost:8080`.

## Deploy

Deploy the repository root to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or another static host. No build command is required.

## Current boundaries

This prototype intentionally does not include authentication, cloud storage, secure collaboration, backend analytics, or direct external AI API calls. Those require a future backend architecture.

## License

No license has been specified yet.
