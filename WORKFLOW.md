# 🔄 The Step-by-Step #100DaysOfCode Live Workflow
**From VS Code -> Obsidian -> GitHub Pages**

---

## 🛠️ Stage 1: VS Code Daily Setup & Implementation

### Step 1: Execute the Daily Kickoff
Open Copilot Chat in VS Code and run the standardized kickoff command:

@workspace Prepare the challenge and files for Day XX

* **What happens:** Copilot automatically creates the day-XX/ folder, initializes empty index.html, styles.css, and script.js starter files, and writes a structured README.md containing:
  - Difficulty level (Level 1-3)
  - Visual Layout Spec
  - Contextually relevant W3Schools live reference links
  - Step-by-step micro-tasks
  - Acceptance criteria checklist

---

### Step 2: Implement the Solution Line-by-Line
1. Open day-XX/index.html and craft the semantic HTML markup.
2. Open day-XX/styles.css to build the layout, spacing, and visual design.
3. Open day-XX/script.js to add any dynamic DOM logic or event handling.
4. Preview your work locally using VS Code's Live Server extension (or open index.html directly in your browser).

---

### Step 3: Ask Copilot for Mentorship or Code Review (Optional)
If you get stuck or need structured feedback without getting solution code revealed:

* **For Socratic Guidance on a specific task:**
  @workspace I don't understand task #[X] in day-XX README. Can you explain the concept and point me to the right W3Schools reference?

* **For Socratic Code Review before submitting:**
  @workspace Inspect my code for day-XX. What is good, what is bad, what did I miss, and what can be improved?

---

## 📓 Stage 2: Daily Logging in Obsidian

Once your implementation satisfies the acceptance criteria in day-XX/README.md, document your process inside your Obsidian Vault.

### Step 1: Create the Daily Log Note
Create a new Markdown file at the following path:
/home/milan/Documents/Obsidian Vault/20_Areas/Daily Challenge/day-XX/day-XX.md

### Step 2: Populate Frontmatter & Body Content
Copy and adapt this template for your note:

```yaml
---
day: "01"
title: "Centered Preview Card Component"
date: "2026-10-14"
github_url: "[https://github.com/milanjosipovic/milanjosipovic.github.io/tree/main/day-01](https://github.com/milanjosipovic/milanjosipovic.github.io/tree/main/day-01)"
demo_url: "[https://milanjosipovic.github.io/day-01/](https://milanjosipovic.github.io/day-01/)"
status: "completed"
tags:
  - html
  - css
  - flexbox
---

Today I built a centered preview card using semantic HTML5 and CSS Flexbox.
```


### Key Learnings
- Centering a layout wrapper using min-height: 100vh and Flexbox properties (justify-content / align-items).
- Applying border-radius, subtle box shadows, and readable padding hierarchy.

### Challenges & Reflections
- Handled mobile box-sizing boundaries to ensure proper spacing on small screens.

---

## 🚀 Stage 3: Automated SSG Build & Deployment

### Step 1: Run the Build Script
Open your terminal in the workspace root directory and run:

node build-challenge.js

* **What build-challenge.js does:**
  1. Scans /home/milan/Documents/Obsidian Vault/20_Areas/Daily Challenge/ for day-XX folders.
  2. Parses the YAML frontmatter and converts your daily log Markdown into HTML (/challenge/logs/day-XX.html).
  3. Rebuilds the master showcase dashboard (/challenge/index.html) with updated metrics, completed counts, and interactive filter cards.

---

### Step 2: Commit and Push to GitHub
Stage your new code, your daily log, and the generated challenge files:

git add .
git commit -m "feat(day-XX): complete Day XX challenge and publish daily log"
git push origin main

---

### Step 3: Live Verification on GitHub Pages
Once the GitHub Actions workflow finishes deploying:

1. **Showcase Dashboard:** Visit https://milanjosipovic.rs/challenge/ to verify your new card and updated streak metrics.
2. **Daily Log Page:** Visit https://milanjosipovic.rs/challenge/logs/day-XX.html to review your published log.
3. **Live Demo:** Visit your deployed demo link to test the live project in browser.