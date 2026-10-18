# 🗺️ 100 Days of Code: Concepts & Technology Map

> **Usage Note:** This map strictly defines the language features, APIs, and web standards assigned to each day. Copilot uses this map alongside `CURRICULUM.md` to scaffold daily `README.md` objectives.

---

## 🟢 Tier 1: Foundations & Box Model (Days 01–30)

### Day 01: Personal Digital Business Card
- **HTML5 Tags:** `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<body>`, `<main>`, `<header>`, `<section>`, `<h1>`, `<h2>`, `<p>`, `<a>`, `<img>`, `<footer>`
- **CSS Properties:** `margin` (`0 auto`), `padding`, `border`, `border-radius`, `background-color`, `color`, `font-family`, `text-align`, `width`, `max-width`, `box-sizing`
- **JavaScript:** Structural setup only / basic DOM element query (`document.querySelector()`)
- **W3Schools Reference:** [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)

### Day 02: Interactive Quote Generator
- **HTML5 Tags:** `<blockquote>`, `<cite>`, `<button>`, `<div>`
- **CSS Properties:** `font-style`, `line-height`, `letter-spacing`, `:hover`, `transition`
- **JavaScript:** Arrays (`[]`), `Math.random()`, `Math.floor()`, `textContent`, `addEventListener('click')`
- **W3Schools Reference:** [JS Arrays](https://www.w3schools.com/js/js_arrays.asp)

### Day 03: Profile Card with Dark Mode Toggle
- **HTML5 Tags:** `<label>`, `<input type="checkbox">`, `<span>`
- **CSS Properties:** CSS custom properties (`var(--bg)`, `var(--text)`), `.dark-mode` class rules
- **JavaScript:** `classList.toggle()`, `element.setAttribute()`
- **W3Schools Reference:** [JS ClassList](https://www.w3schools.com/jsref/prop_element_classlist.asp)

### Day 04: Digital Recipe Card
- **HTML5 Tags:** `<article>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<em>`
- **CSS Properties:** `list-style-type`, `list-style-position`, `border-bottom`, `padding-left`
- **JavaScript:** Dynamic list item toggling (`element.style.textDecoration`)
- **W3Schools Reference:** [HTML Lists](https://www.w3schools.com/html/html_lists.asp)

### Day 05: Minimal Event Countdown Banner
- **HTML5 Tags:** `<time>`, `<mark>`, `<small>`
- **CSS Properties:** `display: inline-block`, `font-weight`, `text-transform`, `opacity`
- **JavaScript:** `Date()`, `setInterval()`, `clearInterval()`, string padding (`padStart`)
- **W3Schools Reference:** [JS Timing Events](https://www.w3schools.com/js/js_timing.asp)

### Day 06: Accordion FAQ Component
- **HTML5 Tags:** `<details>`, `<summary>`
- **CSS Properties:** `cursor: pointer`, `outline`, `transition`
- **JavaScript:** Event delegation, `details.hasAttribute('open')`
- **W3Schools Reference:** [HTML Details Tag](https://www.w3schools.com/tags/tag_details.asp)

### Day 07: Product Feature Pricing Table
- **HTML5 Tags:** `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- **CSS Properties:** `border-collapse`, `caption-side`, `nth-child(even)` zebra striping
- **JavaScript:** Tabular element row highlighting on click
- **W3Schools Reference:** [CSS Tables](https://www.w3schools.com/css/css_table.asp)

### Day 08: Character Counter & Textarea Limit
- **HTML5 Tags:** `<textarea>`, `<progress>`, `<output>`
- **CSS Properties:** `resize: vertical`, `overflow`, progress bar color styling
- **JavaScript:** `input` event listener, `textarea.value.length`, string length metrics
- **W3Schools Reference:** [JS DOM Events](https://www.w3schools.com/js/js_htmldom_events.asp)

### Day 09: Tip Calculator Component
- **HTML5 Tags:** `<form>`, `<input type="number">`, `<select>`, `<option>`
- **CSS Properties:** `accent-color`, form input focus state (`:focus`), border outlines
- **JavaScript:** `parseFloat()`, `toFixed(2)`, form input reading (`input.valueAsNumber`)
- **W3Schools Reference:** [JS Number Methods](https://www.w3schools.com/js/js_number_methods.asp)

### Day 10: Simple Digital Clock & Date Display
- **HTML5 Tags:** `<time>`, `<header>`
- **CSS Properties:** Custom Web Fonts (`@font-face` / Google Fonts import), `text-shadow`
- **JavaScript:** `Date()` getters (`getHours()`, `getMinutes()`, `getSeconds()`), template literals
- **W3Schools Reference:** [JS Dates](https://www.w3schools.com/js/js_dates.asp)

---

### Days 11–20: Advanced Form Mechanics & State Fundamentals

### Day 11: Multi-Step Progress Tracker Bar
- **HTML5 Tags:** `<ol>`, `<li>`, `<progress>`
- **CSS Properties:** Relative positioning (`position: relative`), overflow clipping
- **JavaScript:** Step index state variable, DOM step active class application
- **W3Schools Reference:** [HTML Progress Tag](https://www.w3schools.com/tags/tag_progress.asp)

### Day 12: Notification Toast Alert System
- **HTML5 Tags:** `<aside>`, `<button>`, `<p>`
- **CSS Properties:** `position: fixed` (Introductory floating alert), `z-index`, `top`, `right`
- **JavaScript:** `setTimeout()`, dynamic element removal (`element.remove()`)
- **W3Schools Reference:** [JS Window Location / Timeout](https://www.w3schools.com/js/js_timing.asp)

### Day 13: Interactive Rating Stars
- **HTML5 Tags:** `<fieldset>`, `<legend>`, `<input type="radio">`
- **CSS Properties:** CSS attribute selectors (`[type="radio"]`), sibling combinators (`~`)
- **JavaScript:** Click capture, state rating storage in memory
- **W3Schools Reference:** [CSS Attribute Selectors](https://www.w3schools.com/css/css_attribute_selectors.asp)

### Day 14: Tabbed Content Switcher
- **HTML5 Tags:** `<nav>`, `<button role="tab">`, `<section role="tabpanel">`
- **CSS Properties:** Display toggling (`display: none` / `display: block`)
- **JavaScript:** `querySelectorAll()`, `forEach()` loop element matching
- **W3Schools Reference:** [CSS Display Property](https://www.w3schools.com/css/css_display_visibility.asp)

### Day 15: Password Strength Validator
- **HTML5 Tags:** `<input type="password">`, `<meter>`
- **CSS Properties:** Meter gauge custom color styling, transition smoothing
- **JavaScript:** Regular Expressions (`RegExp.test()`), validation metrics
- **W3Schools Reference:** [JS RegExp](https://www.w3schools.com/js/js_regexp.asp)

### Day 16: Interactive Modal Popup Dialog
- **HTML5 Tags:** `<dialog>`, `<form method="dialog">`
- **CSS Properties:** Backdrop pseudo-element (`::backdrop`), modal centering
- **JavaScript:** Native HTML5 Dialog API (`dialog.showModal()`, `dialog.close()`)
- **W3Schools Reference:** [HTML Dialog Tag](https://www.w3schools.com/tags/tag_dialog.asp)

### Day 17: Color Palette Generator
- **HTML5 Tags:** `<input type="color">`, `<button>`
- **CSS Properties:** Inline background-color string updates, hex text overlay styling
- **JavaScript:** Random Hex string generation, `navigator.clipboard.writeText()`
- **W3Schools Reference:** [JS Math Methods](https://www.w3schools.com/js/js_math.asp)

### Day 18: Simple Flashcard Quiz
- **HTML5 Tags:** `<figure>`, `<figcaption>`, `<button>`
- **CSS Properties:** Perspective & 3D CSS card flipping basics (`transform: rotateY()`)
- **JavaScript:** Object data array structures, question/answer index navigation
- **W3Schools Reference:** [JS Objects](https://www.w3schools.com/js/js_objects.asp)

### Day 19: Filterable Search List
- **HTML5 Tags:** `<input type="search">`, `<ul>`, `<li>`
- **CSS Properties:** Hidden element states (`.is-hidden { display: none; }`)
- **JavaScript:** String searching (`toLowerCase()`, `includes()`), DOM filtering loops
- **W3Schools Reference:** [JS String Search](https://www.w3schools.com/js/js_string_search.asp)

### Day 20: Counter App with Local Limit Controls
- **HTML5 Tags:** `<button>`, `<output>`, `<input type="number">`
- **CSS Properties:** Custom button focus states (`:focus-visible`)
- **JavaScript:** Integer incrementing, condition bounds (`if/else` checks)
- **W3Schools Reference:** [JS Comparisons](https://www.w3schools.com/js/js_comparisons.asp)

---

### Days 21–30: Native API Integration & Media Elements

### Day 21: Audio Player UI Deck
- **HTML5 Tags:** `<audio>`, `<track>`, `<button>`
- **CSS Properties:** Custom range slider track & thumb styling
- **JavaScript:** HTMLMediaElement API (`audio.play()`, `audio.pause()`, `currentTime`)
- **W3Schools Reference:** [HTML Audio](https://www.w3schools.com/html/html5_audio.asp)

### Day 22: Image Gallery Lightbox
- **HTML5 Tags:** `<figure>`, `<img>`, `<dialog>`
- **CSS Properties:** Object positioning (`object-fit: cover`, `object-position`)
- **JavaScript:** Image source swapping (`img.src`), modal image preview binding
- **W3Schools Reference:** [CSS Object-fit](https://www.w3schools.com/css/css3_object-fit.asp)

### Day 23: LocalStorage Quick Notepad
- **HTML5 Tags:** `<textarea>`, `<time>`
- **CSS Properties:** Clean full-height editor containers, line-height padding
- **JavaScript:** Web Storage API (`localStorage.getItem()`, `localStorage.setItem()`)
- **W3Schools Reference:** [JS Web Storage](https://www.w3schools.com/html/html5_webstorage.asp)

### Day 24: Drag and Drop File Upload Zone
- **HTML5 Tags:** `<input type="file">`, `<label>`
- **CSS Properties:** Dragover outline states, drop area styling
- **JavaScript:** HTML Drag and Drop API (`dragover`, `dragleave`, `drop`), `FileList`
- **W3Schools Reference:** [HTML Drag & Drop](https://www.w3schools.com/html/html5_draganddrop.asp)

### Day 25: Simple BMI Calculator
- **HTML5 Tags:** `<form>`, `<input type="range">`, `<output>`
- **CSS Properties:** Dynamic color indicator gauge ranges
- **JavaScript:** Math exponent formulas, BMI range classification logic
- **W3Schools Reference:** [JS Operators](https://www.w3schools.com/js/js_operators.asp)

### Day 26: Custom Video Player Controls
- **HTML5 Tags:** `<video>`, `<source>`
- **CSS Properties:** Video container aspect-ratio maintenance (`aspect-ratio: 16/9`)
- **JavaScript:** Video API (`video.volume`, `video.duration`, `timeupdate` event)
- **W3Schools Reference:** [HTML Video](https://www.w3schools.com/html/html5_video.asp)

### Day 27: Text-to-Speech Voice Reader
- **HTML5 Tags:** `<textarea>`, `<select>`, `<button>`
- **CSS Properties:** Playback active button animation states
- **JavaScript:** Web Speech API (`SpeechSynthesisUtterance`, `window.speechSynthesis`)
- **W3Schools Reference:** [JS Web APIs](https://www.w3schools.com/js/js_api_intro.asp)

### Day 28: Interactive Accordion Menu with Search
- **HTML5 Tags:** `<input type="search">`, `<details>`, `<summary>`
- **CSS Properties:** Nested detail list indents
- **JavaScript:** Deep DOM traversing, search regex query filtering across sections
- **W3Schools Reference:** [JS DOM Navigation](https://www.w3schools.com/js/js_htmldom_navigation.asp)

### Day 29: Dynamic Time-based Greeting Dashboard
- **HTML5 Tags:** `<header>`, `<h1>`, `<p>`
- **CSS Properties:** CSS gradient backgrounds (`linear-gradient`) updated via classes
- **JavaScript:** Hour-based conditional branching (`if (hours < 12)`)
- **W3Schools Reference:** [CSS Gradients](https://www.w3schools.com/css/css3_gradients.asp)

### Day 30: Tier 1 Capstone — Interactive Personal Portfolio Page
- **HTML5 Tags:** Full HTML5 Semantic document tree
- **CSS Properties:** Complete box model layout architecture, CSS custom properties
- **JavaScript:** Dynamic theme state, interactive project filtering, local persistent contact draft
- **W3Schools Reference:** [HTML Semantics](https://www.w3schools.com/html/html5_semantic_elements.asp)

---

## 🟡 Tier 2: Flexbox, Grid & Dynamic UI Architecture (Days 31–70)

### Days 31–45: Flexbox Masterclass & Data Structures

### Day 31: Flexbox Responsive Navigation Bar
- **HTML5 Tags:** `<nav>`, `<ul>`, `<li>`, `<a>`, `<button>`
- **CSS Properties:** `display: flex`, `justify-content`, `align-items`, `flex-direction`, `@media` queries
- **JavaScript:** Hamburger menu mobile nav menu toggle (`active` class handling)
- **W3Schools Reference:** [CSS Flexbox Container](https://www.w3schools.com/css/css3_flexbox_container.asp)

### Day 32: Persistent To-Do List Application
- **HTML5 Tags:** `<form>`, `<input>`, `<ul>`, `<li>`, `<button>`
- **CSS Properties:** Flex item alignment, line-through task completion styles
- **JavaScript:** Array object mutation (`push()`, `filter()`), `JSON.stringify()`, `JSON.parse()`
- **W3Schools Reference:** [JS JSON](https://www.w3schools.com/js/js_json.asp)

### Day 33: E-Commerce Product Card Grid
- **HTML5 Tags:** `<article>`, `<img>`, `<h3>`, `<span>`, `<button>`
- **CSS Properties:** `flex-wrap`, `gap`, `flex-grow`, `flex-shrink`, `flex-basis`
- **JavaScript:** Cart badge counter state updates
- **W3Schools Reference:** [CSS Flexbox Items](https://www.w3schools.com/css/css3_flexbox_items.asp)

### Day 34: Interactive Kanban Task Board
- **HTML5 Tags:** `<main>`, `<section>`, `<article>`, `<header>`
- **CSS Properties:** Multi-column flexbox layout, min-width column wrappers
- **JavaScript:** HTML5 Drag and Drop event binding between board columns
- **W3Schools Reference:** [HTML Drag and Drop API](https://www.w3schools.com/html/html5_draganddrop.asp)

### Day 35: Live Filterable Expense Tracker
- **HTML5 Tags:** `<form>`, `<select>`, `<output>`, `<ul>`
- **CSS Properties:** Flexbox row distribution, monetary color highlights
- **JavaScript:** `Array.prototype.reduce()`, dynamic DOM row injection (`createElement`)
- **W3Schools Reference:** [JS Array Iteration](https://www.w3schools.com/js/js_array_iteration.asp)

### Day 36: Flexbox Split-Screen Landing Page
- **HTML5 Tags:** `<section>`, `<div>`, `<h1>`, `<form>`
- **CSS Properties:** Equal 50/50 flex column split (`flex: 1`), full height (`100vh`)
- **JavaScript:** CTA Form email syntax validation logic
- **W3Schools Reference:** [CSS Responsive Web Design](https://www.w3schools.com/css/css_rwd_intro.asp)

### Day 37: Dynamic Form Builder UI
- **HTML5 Tags:** `<select>`, `<button>`, `<form>`
- **CSS Properties:** Flex form row spacing, dynamic field styling
- **JavaScript:** Dynamic DOM creation (`document.createElement()`, `appendChild()`)
- **W3Schools Reference:** [JS DOM Nodes](https://www.w3schools.com/js/js_htmldom_nodes.asp)

### Day 38: Custom Multi-Select Tag Input
- **HTML5 Tags:** `<div>`, `<input type="text">`, `<span>`
- **CSS Properties:** Inline flex element wrapping, badge chip spacing
- **JavaScript:** Keyboard event listeners (`Keydown` enter handling), Array index removal (`splice()`)
- **W3Schools Reference:** [JS Event Listeners](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

### Day 39: Split-Pane Code Viewer Dashboard
- **HTML5 Tags:** `<main>`, `<pre>`, `<code>`, `<button>`
- **CSS Properties:** Side-by-side flex panes, dark code block theme styling
- **JavaScript:** Clipboard API syntax copying, code toggle views
- **W3Schools Reference:** [HTML Code Elements](https://www.w3schools.com/html/html_code_elements.asp)

### Day 40: Currency Converter UI
- **HTML5 Tags:** `<input type="number">`, `<select>`, `<button>`
- **CSS Properties:** Form input group alignment using Flexbox
- **JavaScript:** Static object rate exchange mapping calculation
- **W3Schools Reference:** [JS Math Functions](https://www.w3schools.com/js/js_math.asp)

---

### Days 41–55: CSS Grid Systems & Complex Layouts

### Day 41: Responsive Photo Gallery Grid
- **HTML5 Tags:** `<section>`, `<figure>`, `<img>`
- **CSS Properties:** `display: grid`, `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`, `gap`
- **JavaScript:** Click-to-expand grid item full view preview
- **W3Schools Reference:** [CSS Grid Intro](https://www.w3schools.com/css/css_grid.asp)

### Day 42: Magazine Editorial Layout
- **HTML5 Tags:** `<article>`, `<header>`, `<aside>`, `<main>`, `<footer>`
- **CSS Properties:** `grid-template-areas`, `grid-area` named placement
- **JavaScript:** Font size scaling controls (+ / - buttons)
- **W3Schools Reference:** [CSS Grid Layout Areas](https://www.w3schools.com/css/css_grid_container.asp)

### Day 43: Interactive Dashboard Widget Grid
- **HTML5 Tags:** `<section>`, `<article>`, `<h3>`, `<canvas>`
- **CSS Properties:** `grid-column: span 2`, `grid-row: span 2`, dashboard card gaps
- **JavaScript:** Dynamic widget toggle hide/show state logic
- **W3Schools Reference:** [CSS Grid Item Rules](https://www.w3schools.com/css/css_grid_item.asp)

### Day 44: Calendar Month View UI
- **HTML5 Tags:** `<header>`, `<div>` (grid header days), `<time>`
- **CSS Properties:** 7-column grid grid structure (`repeat(7, 1fr)`), active day highlighting
- **JavaScript:** Month date calculation loops, dynamic cell rendering
- **W3Schools Reference:** [JS Date Methods](https://www.w3schools.com/js/js_date_methods.asp)

### Day 45: Interactive Seat Booking Layout
- **HTML5 Tags:** `<main>`, `<button class="seat">`, `<output>`
- **CSS Properties:** Seat map grid matrix, occupancy state background styling
- **JavaScript:** Seat state selection limits, total price summation calculation
- **W3Schools Reference:** [JS Event Handling](https://www.w3schools.com/js/js_events.asp)

### Day 46: E-Commerce Product Filter & Grid System
- **HTML5 Tags:** `<aside>`, `<main>`, `<section>`
- **CSS Properties:** Sidebar & content grid layout (`grid-template-columns: 250px 1fr`)
- **JavaScript:** Multi-criteria array filtering (`price`, `category`, `rating`)
- **W3Schools Reference:** [JS Array Filter](https://www.w3schools.com/jsref/jsref_filter.asp)

### Day 47: Pixel Art Drawing Canvas
- **HTML5 Tags:** `<div id="grid">`, `<input type="color">`, `<button>`
- **CSS Properties:** Dynamic Grid template dimensions (`grid-template-rows / columns`)
- **JavaScript:** Loop-generated grid nodes, mouseover click drawing state tracking
- **W3Schools Reference:** [JS DOM Manipulation](https://www.w3schools.com/js/js_htmldom_html.asp)

### Day 48: Interactive Timeline Component
- **HTML5 Tags:** `<ol>`, `<li>`, `<time>`, `<div>`
- **CSS Properties:** Alternating CSS Grid positions, central vertical timeline divider rule
- **JavaScript:** Scroll highlight reveal logic
- **W3Schools Reference:** [CSS Pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp)

### Day 49: Responsive Pricing Tier Grid
- **HTML5 Tags:** `<section>`, `<article>`, `<button>`
- **CSS Properties:** Grid item elevation transforms (`transform: scale(1.05)`), highlighted middle plan
- **JavaScript:** Monthly / Annual pricing billing toggle calculation
- **W3Schools Reference:** [CSS 2D Transforms](https://www.w3schools.com/css/css3_2dtransforms.asp)

### Day 50: Periodic Table Element Explorer
- **HTML5 Tags:** `<main>`, `<button class="element">`, `<dialog>`
- **CSS Properties:** Complex 18-column explicit CSS Grid positioning
- **JavaScript:** JSON element data mapping, modal details binding
- **W3Schools Reference:** [JS Objects & JSON](https://www.w3schools.com/js/js_json.asp)

---

### Days 51–70: Asynchronous JavaScript & API Integration

### Day 51: Live Crypto Price Ticker
- **HTML5 Tags:** `<header>`, `<ul>`, `<li>`, `<time>`
- **CSS Properties:** Up/down price color indicator badges
- **JavaScript:** `fetch()`, `Promises`, `then()`, handling external API JSON responses
- **W3Schools Reference:** [JS Fetch API](https://www.w3schools.com/js/js_api_fetch.asp)

### Day 52: Random User Profile Generator
- **HTML5 Tags:** `<article>`, `<img>`, `<h2>`, `<a href="mailto:">`
- **CSS Properties:** Profile card layout, placeholder shimmer background styling
- **JavaScript:** `async/await`, `try...catch` error handling
- **W3Schools Reference:** [JS Async/Await](https://www.w3schools.com/js/js_async.asp)

### Day 53: Weather Forecast Dashboard
- **HTML5 Tags:** `<form>`, `<input type="search">`, `<section>`, `<time>`
- **CSS Properties:** Weather condition background image transitions
- **JavaScript:** API parameter fetching, extracting forecast array structures
- **W3Schools Reference:** [JS Promises](https://www.w3schools.com/js/js_promise.asp)

### Day 54: Movie Search Database UI
- **HTML5 Tags:** `<input type="search">`, `<main class="movie-grid">`
- **CSS Properties:** Card image overlays, star rating display badges
- **JavaScript:** Search input debouncing (`setTimeout` clearing)
- **W3Schools Reference:** [JS Timing Operations](https://www.w3schools.com/js/js_timing.asp)

### Day 55: Recipe Finder App with Ingredients Search
- **HTML5 Tags:** `<form>`, `<input>`, `<section>`
- **CSS Properties:** Recipe card flex grid, badge pill tags
- **JavaScript:** Query parameter construction (`URLSearchParams`)
- **W3Schools Reference:** [JS URL API](https://www.w3schools.com/js/js_api_intro.asp)

### Day 56: GitHub User Repositories Explorer
- **HTML5 Tags:** `<form>`, `<section>`, `<ul>`, `<li>`
- **CSS Properties:** Repository language color dots, metric counters
- **JavaScript:** GitHub REST API parsing, star count sorting (`sort()`)
- **W3Schools Reference:** [JS Array Sort](https://www.w3schools.com/jsref/jsref_sort.asp)

### Day 57: Random Advice & Trivia Generator
- **HTML5 Tags:** `Quote`, `<button>`, `<mark>`
- **CSS Properties:** Subtle card fade animations (`@keyframes opacity`)
- **JavaScript:** API request cache headers prevention, button disable state during fetching
- **W3Schools Reference:** [CSS Animations](https://www.w3schools.com/css/css3_animations.asp)

### Day 58: Country Information Finder
- **HTML5 Tags:** `<input type="search">`, `<section>`, `<img>`
- **CSS Properties:** Flag thumbnail containers, key-value data list grids
- **JavaScript:** REST Countries API processing, dynamic neighbor country links
- **W3Schools Reference:** [JS JSON Parsing](https://www.w3schools.com/js/js_json_parse.asp)

### Day 59: NASA Picture of the Day Viewer
- **HTML5 Tags:** `<header>`, `<figure>`, `<img>`, `<figcaption>`
- **CSS Properties:** High-resolution image viewport container fitting
- **JavaScript:** Date picker API queries (`input type="date"` change handling)
- **W3Schools Reference:** [JS Inputs](https://www.w3schools.com/html/html_form_input_types.asp)

### Day 60: Dynamic News Feed Aggregator
- **HTML5 Tags:** `<nav>`, `<main>`, `<article>`
- **CSS Properties:** News card typography hierarchy, multi-column reading lists
- **JavaScript:** Category tab selection API endpoint switching
- **W3Schools Reference:** [JS Modules / API](https://www.w3schools.com/js/js_modules.asp)

### Day 61: Dictionary & Pronunciation Tool
- **HTML5 Tags:** `<input type="search">`, `<button id="audio-btn">`, `<section>`
- **CSS Properties:** Phonetic text styling, audio button active states
- **JavaScript:** Free Dictionary API integration, Speech Synthesis / Audio playback triggering
- **W3Schools Reference:** [HTML Audio API](https://www.w3schools.com/html/html5_audio.asp)

### Day 62: Live Currency Converter with API Rates
- **HTML5 Tags:** `<form>`, `<select>`, `<input type="number">`
- **CSS Properties:** Exchange rate swap button rotation transform
- **JavaScript:** Live exchange rate API fetching, real-time conversion keyup binding
- **W3Schools Reference:** [JS HTML DOM Events](https://www.w3schools.com/js/js_htmldom_events.asp)

### Day 63: Quiz Application with Timer & Scoreboard
- **HTML5 Tags:** `<progress>`, `<h2>`, `<button>`
- **CSS Properties:** Option choice correct/incorrect answer highlighting classes
- **JavaScript:** Quiz state machine object, countdown interval timer, dynamic score tallying
- **W3Schools Reference:** [JS State Logic](https://www.w3schools.com/js/js_break.asp)

### Day 64: Infinite Scroll Image Stream
- **HTML5 Tags:** `<main id="gallery">`, `<div class="loader">`
- **CSS Properties:** Loading spinner animation keyframes
- **JavaScript:** Intersection Observer API (`IntersectionObserver`), dynamic scroll batch loading
- **W3Schools Reference:** [JS API Intro](https://www.w3schools.com/js/js_api_intro.asp)

### Day 65: Interactive Map Marker Dashboard
- **HTML5 Tags:** `<main>`, `<div id="map">`, `<aside>`
- **CSS Properties:** Map height containers, custom popup card styles
- **JavaScript:** Leaflet.js / OpenStreetMap API binding, latitude/longitude pin rendering
- **W3Schools Reference:** [JS HTML Location API](https://www.w3schools.com/html/html5_geolocation.asp)

### Day 66: Real-time Text Translator Interface
- **HTML5 Tags:** `<textarea>`, `<select>`, `<button>`
- **CSS Properties:** Side-by-side translation textboxes
- **JavaScript:** Translation API endpoint integration, source/target code passing
- **W3Schools Reference:** [JS Strings](https://www.w3schools.com/js/js_strings.asp)

### Day 67: Public Transport Station Board
- **HTML5 Tags:** `<table>`, `<thead>`, `<tbody>`, `<time>`
- **CSS Properties:** High-contrast LED digital board dark styling
- **JavaScript:** Departure array sorting, time remaining calculation updates
- **W3Schools Reference:** [JS Array Methods](https://www.w3schools.com/js/js_array_methods.asp)

### Day 68: Bookmark Manager with Favicon Fetching
- **HTML5 Tags:** `<form>`, `<input type="url">`, `<ul>`, `<li>`
- **CSS Properties:** Favicon thumbnail flex layout items
- **JavaScript:** URL validation constructor (`new URL()`), dynamic domain icon fetching
- **W3Schools Reference:** [JS Errors / Try Catch](https://www.w3schools.com/js/js_errors.asp)

### Day 69: Interactive Poll Creator with Live Charts
- **HTML5 Tags:** `<form>`, `<section class="bar-chart">`, `<progress>`
- **CSS Properties:** Custom CSS percentage bar fill widths
- **JavaScript:** Vote tallying logic, dynamic style percentage assignment (`element.style.width`)
- **W3Schools Reference:** [JS Style Manipulation](https://www.w3schools.com/js/js_htmldom_css.asp)

### Day 70: Tier 2 Capstone — Full-featured Weather & News Dashboard
- **HTML5 Tags:** Comprehensive Semantic layout architecture
- **CSS Properties:** Advanced CSS Grid + Flexbox hybrid responsive system
- **JavaScript:** Multi-API async orchestration (`Promise.all`), LocalStorage settings retention
- **W3Schools Reference:** [JS Async Orchestration](https://www.w3schools.com/js/js_async.asp)

---

## 🔴 Tier 3: Advanced Architecture, Web Components & State Systems (Days 71–100)

### Days 71–85: ES6 Web Components & Custom Elements

### Day 71: Native Custom Button Component
- **HTML5 Tags:** `<custom-button>`
- **CSS Properties:** Encapsulated Shadow DOM styling (`:host`, `slot`)
- **JavaScript:** ES6 Class declaration, `HTMLElement` extension, `customElements.define()`
- **W3Schools Reference:** [JS Classes](https://www.w3schools.com/js/js_classes.asp)

### Day 72: Custom Rating Star Web Component
- **HTML5 Tags:** `<star-rating>`
- **CSS Properties:** Shadow DOM component styling isolation
- **JavaScript:** Observed attributes (`static get observedAttributes()`), `attributeChangedCallback()`
- **W3Schools Reference:** [JS Class Inheritance](https://www.w3schools.com/js/js_class_inheritance.asp)

### Day 73: Reusable Modal Web Component
- **HTML5 Tags:** `<modal-dialog>`, `<slot name="header">`, `<slot name="content">`
- **CSS Properties:** Component slot projecting & layout rules
- **JavaScript:** Connected / Disconnected lifecycle hooks (`connectedCallback`)
- **W3Schools Reference:** [JS HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp)

### Day 74: Shadow DOM Tooltip Component
- **HTML5 Tags:** `<tooltip-element>`
- **CSS Properties:** Floating tooltip absolute positioning relative to `:host`
- **JavaScript:** Component mouseenter / mouseleave event delegation
- **W3Schools Reference:** [JS Event Listeners](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

### Day 75: Custom Progress Bar Component
- **HTML5 Tags:** `<custom-progress>`
- **CSS Properties:** Internal progress fill animation logic
- **JavaScript:** Getter / Setter bindings for component property synchronization
- **W3Schools Reference:** [JS Getters / Setters](https://www.w3schools.com/js/js_object_accessors.asp)

### Day 76: Product Card Web Component
- **HTML5 Tags:** `<product-card>`
- **CSS Properties:** Encapsulated grid / flex layout rules inside shadow template
- **JavaScript:** HTML `<template>` cloning (`document.importNode()`)
- **W3Schools Reference:** [HTML Template Tag](https://www.w3schools.com/tags/tag_template.asp)

### Day 77: Interactive Accordion Web Component
- **HTML5 Tags:** `<accordion-group>`, `<accordion-item>`
- **CSS Properties:** Component parent-child state styling
- **JavaScript:** Custom Events firing (`dispatchEvent()`, `CustomEvent`)
- **W3Schools Reference:** [JS Custom Events](https://www.w3schools.com/js/js_htmldom_events.asp)

### Day 78: Audio Player Custom Web Component
- **HTML5 Tags:** `<audio-player>`
- **CSS Properties:** Encapsulated player controls theme variables
- **JavaScript:** Internal audio API encapsulation & public controller methods
- **W3Schools Reference:** [JS HTML Audio API](https://www.w3schools.com/html/html5_audio.asp)

### Day 79: Reusable Data Table Component
- **HTML5 Tags:** `<data-table>`
- **CSS Properties:** Internal scrollable table wrapper, header sort indicators
- **JavaScript:** Column sorting method reflection on component state
- **W3Schools Reference:** [JS Array Sort](https://www.w3schools.com/jsref/jsref_sort.asp)

### Day 80: Custom Input Tag Cloud Component
- **HTML5 Tags:** `<tag-input>`
- **CSS Properties:** Shadow DOM input badge container layout
- **JavaScript:** Tag array property reflection to component attribute updates
- **W3Schools Reference:** [JS Class Methods](https://www.w3schools.com/js/js_class_intro.asp)

### Day 81: Color Picker Custom Element
- **HTML5 Tags:** `<color-picker>`
- **CSS Properties:** Custom hue canvas layout within shadow root
- **JavaScript:** Internal canvas context pixel inspection (`getImageData`)
- **W3Schools Reference:** [HTML Canvas API](https://www.w3schools.com/html/html5_canvas.asp)

### Day 82: Toggle Switch Web Component
- **HTML5 Tags:** `<toggle-switch>`
- **CSS Properties:** Shadow DOM slider transitions (`transform: translateX()`)
- **JavaScript:** Accessible ARIA attribute toggling (`aria-checked`)
- **W3Schools Reference:** [JS Accessibility Rules](https://www.w3schools.com/graphics/svg_intro.asp)

### Day 83: Markdown Previewer Component
- **HTML5 Tags:** `<markdown-viewer>`
- **CSS Properties:** Formatted typography styling scope inside Shadow DOM
- **JavaScript:** Input parsing, dynamic innerHTML sanitization and output
- **W3Schools Reference:** [JS String Methods](https://www.w3schools.com/js/js_string_methods.asp)

### Day 84: Countdown Timer Custom Element
- **HTML5 Tags:** `<countdown-timer>`
- **CSS Properties:** Digit card layout styling
- **JavaScript:** Self-contained timer interval handling inside component lifecycle
- **W3Schools Reference:** [JS SetInterval](https://www.w3schools.com/js/js_timing.asp)

### Day 85: Toast Notification System Web Component
- **HTML5 Tags:** `<toast-container>`, `<toast-message>`
- **CSS Properties:** Stacked notification host positioning
- **JavaScript:** Global component listener API (`ToastContainer.show(message)`)
- **W3Schools Reference:** [JS HTML DOM Architecture](https://www.w3schools.com/js/js_htmldom.asp)

---

### Days 86–100: Complex Application Architecture & State Engines

### Day 86: Client-Side Hash Router Application
- **HTML5 Tags:** `<nav>`, `<main id="app">`
- **CSS Properties:** Page view fade transition styling
- **JavaScript:** `window.addEventListener('hashchange')`, route-to-view mapping engine
- **W3Schools Reference:** [JS Window Location](https://www.w3schools.com/js/js_window_location.asp)

### Day 87: Centralized State Management Store (Pub/Sub)
- **HTML5 Tags:** `<main>`, `<output>`
- **CSS Properties:** Multi-component synchronized state indicators
- **JavaScript:** Publish/Subscribe pattern implementation, state change notification dispatching
- **W3Schools Reference:** [JS Design Patterns](https://www.w3schools.com/js/js_objects.asp)

### Day 88: Custom HTML Canvas Drawing App
- **HTML5 Tags:** `<canvas>`, `<toolbar>`
- **CSS Properties:** Canvas border layout, brush size toolbars
- **JavaScript:** 2D Context API (`getContext('2d')`, `beginPath()`, `stroke()`, `clear()`)
- **W3Schools Reference:** [HTML Canvas](https://www.w3schools.com/html/html5_canvas.asp)

### Day 89: Offline-First PWA Note Manager
- **HTML5 Tags:** `<form>`, `<textarea>`, `<section>`
- **CSS Properties:** Application-like header bar & offline banner styling
- **JavaScript:** Service Worker registration (`navigator.serviceWorker`), Cache API basics
- **W3Schools Reference:** [JS API Service Workers](https://www.w3schools.com/js/js_api_intro.asp)

### Day 90: IndexedDB Storage Explorer UI
- **HTML5 Tags:** `<form>`, `<table>`, `<button>`
- **CSS Properties:** Large database record view table layouts
- **JavaScript:** Native `window.indexedDB` API operations (`open`, `transaction`, `add`, `getAll`)
- **W3Schools Reference:** [JS Storage APIs](https://www.w3schools.com/html/html5_webstorage.asp)

### Day 91: Interactive Drag and Drop Dashboard Builder
- **HTML5 Tags:** `<main>`, `<div class="grid-container">`, `<article>`
- **CSS Properties:** CSS Grid swap drop area placeholders
- **JavaScript:** Advanced Drag and Drop layout reordering and state grid saving
- **W3Schools Reference:** [HTML Drag and Drop API](https://www.w3schools.com/html/html5_draganddrop.asp)

### Day 92: Speech-to-Text Voice Command Pad
- **HTML5 Tags:** `<button>`, `<textarea>`, `<output>`
- **CSS Properties:** Recording active indicator animation pulses
- **JavaScript:** Web Speech Recognition API (`webkitSpeechRecognition`), command phrase matching
- **W3Schools Reference:** [JS Speech APIs](https://www.w3schools.com/js/js_api_intro.asp)

### Day 93: Custom SVG Data Visualization Charting System
- **HTML5 Tags:** `<svg>`, `<rect>`, `<circle>`, `<text>`
- **CSS Properties:** SVG fill, stroke, stroke-dasharray animation styling
- **JavaScript:** Dynamic SVG DOM element creation (`createElementNS`)
- **W3Schools Reference:** [HTML SVG](https://www.w3schools.com/html/html5_svg.asp)

### Day 94: Real-time Form Auto-Save Engine
- **HTML5 Tags:** `<form>`, `<input>`, `<textarea>`, `<output id="save-status">`
- **CSS Properties:** Auto-save pulse badge layout
- **JavaScript:** Input debouncing, LocalStorage / IndexedDB background state sync
- **W3Schools Reference:** [JS Window Timers](https://www.w3schools.com/js/js_timing.asp)

### Day 95: Audio Synthesizer & Piano Deck
- **HTML5 Tags:** `<section id="keyboard">`, `<button class="key">`
- **CSS Properties:** Piano key layout positioning (white & black key overlays)
- **JavaScript:** Web Audio API (`AudioContext`, `createOscillator()`, frequency mapping)
- **W3Schools Reference:** [JS HTML DOM Events](https://www.w3schools.com/js/js_htmldom_events.asp)

### Day 96: Multi-Theme CSS Variable Engine & Switcher
- **HTML5 Tags:** `<select>`, `<main>`, `<article>`
- **CSS Properties:** Comprehensive CSS custom property theme tokens (`--primary`, `--surface`)
- **JavaScript:** Dynamic document root style overrides (`document.documentElement.style.setProperty`)
- **W3Schools Reference:** [CSS Custom Properties](https://www.w3schools.com/css/css3_variables.asp)

### Day 97: Real-Time Performance Monitor Overlay
- **HTML5 Tags:** `<aside id="perf-monitor">`, `<canvas>`
- **CSS Properties:** Floating high z-index telemetry HUD styling
- **JavaScript:** Performance API (`performance.now()`), `requestAnimationFrame()` FPS tracker
- **W3Schools Reference:** [JS Animation Frames](https://www.w3schools.com/js/js_api_intro.asp)

### Day 98: Virtualized Long List Renderer
- **HTML5 Tags:** `<div id="viewport">`, `<ul id="visible-items">`
- **CSS Properties:** Relative container with absolute inner list translation positioning
- **JavaScript:** Virtual DOM scroll window math calculation (rendering only visible 20 items out of 10,000)
- **W3Schools Reference:** [JS Math & Scroll APIs](https://www.w3schools.com/js/js_math.asp)

### Day 99: Full-Featured Markdown Editor & Live Previewer
- **HTML5 Tags:** `<textarea>`, `<article id="preview">`
- **CSS Properties:** Synchronized side-by-side flex editor panes
- **JavaScript:** Custom regex markdown parsing engine (headers, lists, code, emphasis), scroll sync
- **W3Schools Reference:** [JS RegExp & String Replacements](https://www.w3schools.com/js/js_regexp.asp)

### Day 100: Grand Capstone — Full Vanilla Frontend Application Architecture
- **HTML5 Tags:** Semantic HTML5 Document Tree + Custom Web Components Integration
- **CSS Properties:** Full Responsive System (Flexbox, CSS Grid, Custom Theme Variables, Shadow DOM Scoping)
- **JavaScript:** Single Page Application (SPA) Client-Side Hash Router, Centralized Pub/Sub State Store, Async API Data Layer, Offline Storage Integration
- **W3Schools Reference:** [W3Schools Full Web Development Architecture](https://www.w3schools.com/)