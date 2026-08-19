# Promptor Privacy & GDPR Policy Template

**Status:** Local-first prototype policy template  
**Last updated:** 21 August 2026

> This document describes the current browser-local Promptor prototype. It is not legal advice. Before releasing Promptor publicly, the operator must have qualified legal counsel review this policy and replace all deployment-specific placeholders with the correct legal details.

## 1. Who is responsible for data processing

For a public deployment, insert the following details:

- **Data controller:** `[Legal business name]`
- **Registered address:** `[Business address]`
- **Privacy contact:** `[privacy email address]`
- **Data Protection Officer, if applicable:** `[DPO contact]`

The operator of a deployed Promptor instance is the data controller for any personal data it collects or processes.

## 2. What the current version processes

The local-first Promptor prototype can store the following information in the browser being used:

- Project titles, loglines, genres, scripts, and notes
- Character, location, prop, and product descriptions
- Prompt text
- Storyboard shot lists and production status notes
- User-selected local reference images, storyboard images, and clips
- Appearance preference, such as day or night mode

These items can contain personal data if a user enters personal information or uploads identifiable images.

## 3. Where data is stored

The current product stores project information using browser local storage on the user’s device. The current product does not include:

- User accounts
- A Promptor cloud database
- Server-side project storage
- Advertising cookies
- Analytics tracking
- A direct integration with ChatGPT, Google Flow, or another AI API

The product does not intentionally transmit project data to a Promptor server.

## 4. Why data is processed

The current prototype uses local data solely to provide these requested functions:

- Project and storyboard planning
- Prompt construction
- Reference and storyboard-image organization
- Product animation planning
- Local persistence between browser visits
- Browser-side export

For a future hosted product, the controller must document the lawful basis under GDPR Article 6 for every processing activity.

## 5. External AI services

Promptor can prepare prompts for external services, but it does not submit content to those services automatically.

When a user copies a prompt, uploads an image, or submits information to ChatGPT, Google Flow, or another external service, that external provider processes the data under its own terms and privacy policy. Users should review those policies before submitting personal data or confidential content.

## 6. Retention and deletion

In the current local-first version:

- Data remains in the browser until the user changes it, removes it, clears browser site data, or uses a browser profile reset.
- Users can export a JSON backup before deletion.
- Users can delete local data through browser site-data controls.

A future hosted version must define and publish a retention schedule.

## 7. User rights

For the local-first version, users can exercise practical control directly:

- **Access:** view data in the workspace or export JSON.
- **Rectification:** edit project fields, shots, and notes.
- **Erasure:** remove project data or clear browser site data.
- **Portability:** export JSON, CSV, or a prompt pack.

For a future hosted version, the controller must provide a contact method for GDPR rights requests, including access, rectification, erasure, restriction, objection, portability, and complaint rights where applicable.

## 8. Security

The current prototype relies on the security of the user’s device and browser profile. Users should avoid entering sensitive personal information in an unencrypted shared device profile.

A future hosted version should include appropriate technical and organizational measures such as authentication, encrypted transport, access controls, backups, logging, least-privilege permissions, and processor agreements.

## 9. Cookies and local storage

The current version does not use advertising or analytics cookies. It uses browser local storage for essential product functionality, including saving projects and theme preferences.

If non-essential cookies, analytics, advertising, or hosted services are added, the controller must update this policy and implement consent controls where required.

## 10. Changes to this policy

The operator should update the policy when product behavior, storage, integrations, or processing practices change. Material changes should be communicated through the deployed product where appropriate.
