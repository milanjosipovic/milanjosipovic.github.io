const fs = require("fs");
const path = require("path");

// ==========================================================================
// CONFIGURATION
// ==========================================================================
const OBSIDIAN_CHALLENGE_DIR =
  "/home/milan/Documents/Obsidian Vault/20_Areas/Daily Challenge";
const OUTPUT_LOGS_DIR = path.join(__dirname, "challenge/logs");
const DASHBOARD_FILE = path.join(__dirname, "challenge/index.html");

if (!fs.existsSync(OUTPUT_LOGS_DIR)) {
  fs.mkdirSync(OUTPUT_LOGS_DIR, { recursive: true });
}

// ==========================================================================
// UTILITY PARSERS
// ==========================================================================

function parseFrontmatter(fileContent) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) return { data: {}, content: fileContent };

  const rawYaml = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const data = {};

  rawYaml.split("\n").forEach((line) => {
    const [key, ...values] = line.split(":");
    if (key && values.length) {
      let val = values
        .join(":")
        .trim()
        .replace(/^["']|["']$/g, "");
      if (val.startsWith("[") && val.endsWith("]")) {
        val = val
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim());
      }
      data[key.trim()] = val;
    }
  });

  return { data, content };
}

function markdownToHtml(markdown) {
  let html = markdown
    .replace(/`<([^>]+)>`/g, "<code>&lt;$1&gt;</code>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^\- (.*$)/gim, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gms, "<ul>$1</ul>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/<p><\/p>/g, "");

  return `<p>${html}</p>`;
}

// ==========================================================================
// TEMPLATES
// ==========================================================================

function renderLogPage({
  day,
  title,
  date,
  github_url,
  demo_url,
  contentHtml,
  prevDay,
  nextDay,
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day ${day}: ${title} — #100DaysOfCode</title>
    <meta name="description" content="Day ${day} log of Milan Josipović's #100DaysOfCode challenge. Topic: ${title}.">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/challenge.css">
</head>
<body>
    <header class="site-header">
        <nav class="nav-container" aria-label="Main Navigation">
            <a href="/" class="site-title">Milan Josipović</a>
            <ul class="nav-links">
                <li><a href="/about/">About</a></li>
                <li><a href="/projects/">Projects</a></li>
                <li><a href="/challenge/" class="active">#100DaysOfCode</a></li>
                <li><a href="/garden/">Digital Garden</a></li>
            </ul>
        </nav>
    </header>

    <main id="main-content">
        <article class="h-entry log-article">
            <a href="/challenge/" class="back-link">&larr; Back to Dashboard</a>

            <header class="log-header">
                <div class="flex-between">
                    <span class="day-badge">Day ${day} of 100</span>
                    <time class="dt-published" datetime="${date}">${date}</time>
                </div>
                <h1 class="p-name">${title}</h1>
            </header>

            <div class="log-quick-links flex">
                <a href="${github_url}" class="btn" target="_blank" rel="noopener">View Source Code on GitHub</a>
                ${demo_url ? `<a href="${demo_url}" class="btn-outline" target="_blank" rel="noopener">Launch Live Demo</a>` : ""}
            </div>

            <hr class="divider">

            <div class="e-content log-body">
                ${contentHtml}
            </div>

            <footer class="log-footer flex-between">
                ${prevDay ? `<a href="/challenge/logs/day-${prevDay}.html" class="prev-link">&larr; Day ${prevDay}</a>` : '<span class="disabled">&larr; First Day</span>'}
                ${nextDay ? `<a href="/challenge/logs/day-${nextDay}.html" class="next-link">Day ${nextDay} &rarr;</a>` : '<span class="disabled">Next Day &rarr;</span>'}
            </footer>
        </article>
    </main>

    <footer class="site-footer">
        <p>&copy; 2026 Milan Josipović. Built with semantic HTML, CSS, and Vanilla JS.</p>
    </footer>
</body>
</html>`;
}

function renderDashboardCard(entry) {
  return `
            <article class="day-card completed h-entry" data-phase="phase1">
                <div class="card-header flex-between">
                    <span class="day-badge">Day ${entry.day}</span>
                    <span class="status-badge status-done">Completed</span>
                </div>
                <h2 class="card-title p-name">${entry.title}</h2>
                <p class="card-desc p-summary">${entry.rawMarkdown.split("\n")[0] || ""}</p>
                <div class="card-tags flex">
                    ${entry.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
                <div class="card-actions flex">
                    <a href="${entry.github_url}" class="action-link" target="_blank" rel="noopener">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                        Source Code
                    </a>
                    <a href="${entry.demo_url}" class="action-link live-link" target="_blank" rel="noopener">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Live Demo
                    </a>
                </div>
                <div class="card-footer">
                    <a href="/challenge/logs/day-${entry.day}.html" class="log-link">Read Daily Log &rarr;</a>
                </div>
            </article>`;
}

function renderDashboard(entries) {
  const cardsHtml = entries
    .map((entry) => renderDashboardCard(entry))
    .join("\n");
  const totalCompleted = entries.length;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>#100DaysOfCode Showcase Dashboard — Milan Josipović</title>
    <meta name="description" content="Public tracking dashboard for Milan Josipović's 100 Days of Code challenge, featuring source code repositories and live project demos.">
    <link rel="canonical" href="https://milanjosipovic.rs/challenge/">
    <link rel="me" href="https://github.com/milanjosipovic">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/challenge.css">
</head>
<body>
    <header class="site-header">
        <nav class="nav-container" aria-label="Main Navigation">
            <a href="/" class="site-title">Milan Josipović</a>
            <ul class="nav-links">
                <li><a href="/about/">About</a></li>
                <li><a href="/projects/">Projects</a></li>
                <li><a href="/challenge/" class="active" aria-current="page">#100DaysOfCode</a></li>
                <li><a href="/garden/">Digital Garden</a></li>
            </ul>
        </nav>
    </header>

    <main id="main-content">
        <section class="challenge-hero">
            <h1>#100DaysOfCode Showcase</h1>
            <p>
                Documenting my 100-day journey building software with an <strong>HTML-first approach</strong>, 
                clean CSS, and Vanilla JavaScript. Everything is open source, tracked daily, and hosted on the open web.
            </p>
            <div class="metrics-grid">
                <div class="metric-card">
                    <span class="metric-value" id="current-streak">${totalCompleted}</span>
                    <span class="metric-label">Current Streak</span>
                </div>
                <div class="metric-card">
                    <span class="metric-value" id="completed-days">${totalCompleted} / 100</span>
                    <span class="metric-label">Days Completed</span>
                </div>
                <div class="metric-card">
                    <span class="metric-value">Phase 1</span>
                    <span class="metric-label">Current Phase (HTML & CSS)</span>
                </div>
            </div>
        </section>

        <section class="filter-bar flex-between">
            <div class="filter-group flex">
                <button class="filter-btn active" data-filter="all">All Days</button>
                <button class="filter-btn" data-filter="phase1">Phase 1: Foundations</button>
                <button class="filter-btn" data-filter="phase2">Phase 2: Modern JS</button>
                <button class="filter-btn" data-filter="phase3">Phase 3: Design Systems</button>
            </div>
            <div class="github-repo-link">
                <a href="https://github.com/milanjosipovic/milanjosipovic.github.io" class="btn-outline" target="_blank" rel="noopener">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    View Main Repository
                </a>
            </div>
        </section>

        <section class="grid-auto showcase-grid">
            ${cardsHtml}
        </section>
    </main>

    <footer class="site-footer">
        <p>&copy; <time datetime="2026">2026</time> Milan Josipović. Built with semantic HTML, CSS, and Vanilla JS.</p>
    </footer>
</body>
</html>`;
}

// ==========================================================================
// BUILD EXECUTOR
// ==========================================================================

function build() {
  console.log("🚀 Starting #100DaysOfCode Build Process...\n");

  if (!fs.existsSync(OBSIDIAN_CHALLENGE_DIR)) {
    console.error(
      `❌ Obsidian directory not found at: ${OBSIDIAN_CHALLENGE_DIR}`,
    );
    return;
  }

  const folders = fs
    .readdirSync(OBSIDIAN_CHALLENGE_DIR)
    .filter((f) => f.startsWith("day-"));
  const entries = [];

  folders.forEach((folder) => {
    const dayFilePath = path.join(
      OBSIDIAN_CHALLENGE_DIR,
      folder,
      `${folder}.md`,
    );
    if (fs.existsSync(dayFilePath)) {
      const rawContent = fs.readFileSync(dayFilePath, "utf-8");
      const { data, content } = parseFrontmatter(rawContent);
      entries.push({
        day: data.day || folder.replace("day-", ""),
        title: data.title || "Untitled Entry",
        date: data.date || "",
        github_url: data.github_url || "#",
        demo_url: data.demo_url || "#",
        status: data.status || "completed",
        tags: Array.isArray(data.tags) ? data.tags : ["html", "css"],
        rawMarkdown: content,
      });
    }
  });

  entries.sort((a, b) => parseInt(a.day) - parseInt(b.day));

  // 1. Generate Individual Logs
  entries.forEach((entry, index) => {
    const prevDay = index > 0 ? entries[index - 1].day : null;
    const nextDay = index < entries.length - 1 ? entries[index + 1].day : null;
    const contentHtml = markdownToHtml(entry.rawMarkdown);
    const logPageHtml = renderLogPage({
      ...entry,
      contentHtml,
      prevDay,
      nextDay,
    });

    fs.writeFileSync(
      path.join(OUTPUT_LOGS_DIR, `day-${entry.day}.html`),
      logPageHtml,
      "utf-8",
    );
    console.log(`✅ Generated Log: /challenge/logs/day-${entry.day}.html`);
  });

  // 2. Generate Master Dashboard Index
  const dashboardHtml = renderDashboard(entries);
  fs.writeFileSync(DASHBOARD_FILE, dashboardHtml, "utf-8");
  console.log(`✅ Updated Dashboard: /challenge/index.html`);

  console.log(
    `\n🎉 Successfully processed ${entries.length} challenge entries!`,
  );
}

build();
