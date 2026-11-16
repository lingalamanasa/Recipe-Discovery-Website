# Stackly - Premium Recipe Discovery & Meal Planning Platform

> 🔗 **GitHub Repository**: [https://github.com/lingalamanasa/Recipe-Discovery-Website](https://github.com/lingalamanasa/Recipe-Discovery-Website)  
> 🌐 **Live Website (GitHub Pages)**: [https://lingalamanasa.github.io/Recipe-Discovery-Website/](https://lingalamanasa.github.io/Recipe-Discovery-Website/)

A modern, visually stunning, responsive recipe discovery website and weekly meal planner built using **semantic HTML5**, **modern CSS3**, and **Vanilla JavaScript** (ES6+).

---

## 🎨 1. Design Theme & Color Palette

Stackly is designed around an elegant, editorial food-magazine aesthetic with warm, appetizing tones, refined typography, and smooth micro-interactions.

| Color Role | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary** | `#244D3A` | Deep Forest Green – Brand identity, primary headers, buttons, active states |
| **Secondary** | `#A8B89A` | Sage Green – Accents, borders, badges, subtle backgrounds |
| **Background** | `#FAF7F0` | Warm Cream – Inviting, organic overall background canvas |
| **Cards** | `#FFFFFF` | Pure White – High-contrast readable recipe cards and panels |
| **Accent** | `#E89A55` | Soft Warm Orange – Interactive highlights, call-to-actions, badges, rating stars |
| **Text** | `#252B27` | Dark Charcoal – High-readability body copy and subtitles |

### Typography
- **Headings**: `Playfair Display` & `DM Serif Display` – Sophisticated, high-end culinary publication styling.
- **Body & Controls**: `Plus Jakarta Sans` – Clean, modern, highly legible sans-serif for numbers, fractions, and instructions.

---

## 🌐 2. Website Structure & Pages

1. **`index.html` (Home Page)**
   - **Fixed Navigation Bar**: Stackly brand logo, mathematically centered links with directional hover transitions, live Search trigger, dynamic Favourites count badge, Meal Plan badge, and responsive mobile drawer.
   - **Split-Layout Hero Section**: Engaging typography, badge with animated glowing pulse, Call-To-Action buttons, and a food showcase featuring floating cook time and community rating badges.
   - **Featured Recipe of the Day**: Highlighting Tuscan Garlic Butter Salmon with metadata, time breakdowns, and instant Add-to-Plan / View Recipe triggers.
   - **Popular Recipes**: 6 interactive recipe cards with image hover zoom, category tags, difficulty badges, heart toggle, and star ratings.
   - **Recipe Categories**: Visual cards for Breakfast, Lunch, Dinner, Desserts, Healthy Food, and Vegetarian that navigate to the Explore page with pre-selected filters.
   - **Why Choose Stackly**: 4 interactive feature cards (Easy Recipes, Quick Cooking, Healthy Choices, Meal Planning).
   - **Newsletter Subscription**: Email input with regex validation, instant feedback message, and local storage recording.
   - **Footer**: Brand statement, quick links, category navigation, social media icons, and copyright.

2. **`explore.html` (Explore Recipes Page)**
   - **Header & Breadcrumbs**: Elegant title banner with breadcrumb navigation.
   - **Real-Time Search**: Live debounced search by recipe title, dietary tags, and ingredients.
   - **Interactive Category Filters**: All, Breakfast, Lunch, Dinner, Desserts, Healthy, Vegetarian with active state indicators.
   - **Sorting Engine**:
     - Default (Featured First)
     - Cooking Time: Low to High
     - Cooking Time: High to Low
     - Highest Rated
     - Quickest Prep Time
   - **Dynamic Grid**: Rendered from a realistic 18-recipe database using `map()`, `filter()`, `find()`, and `sort()`.
   - **Empty State**: Friendly illustration and "Reset All Filters" button when no results match.

3. **`recipe-details.html` (Recipe Details Page)**
   - **Dynamic Query Parameter Loading**: Reads `?id=...` from the URL, displaying full details with fallbacks.
   - **Hero Showcase**: High-res photograph, category, difficulty pill, prep time, cook time, total time, and calories.
   - **Interactive Servings Scaler (`- / +`)**: Dynamically recalculates all ingredient amounts and fractions in real time (e.g. ¼, ½, ¾).
   - **Interactive Checklist**: Strike-through checklist for ingredients with "Select All" and "Clear All" shortcuts.
   - **Step-by-Step Cooking Timeline**: Numbered instructions with "Mark step as done" checkboxes and a real-time progress bar.
   - **Interactive Kitchen Timer Widget**: Countdown timer with pause, reset, and audio/toast notification when time is up.
   - **Nutritional Information**: Breakdown for Calories, Protein, Carbs, Fats, and Fiber.
   - **Chef's Secret Technique**: Editorial culinary tip for home cooking mastery.
   - **Related Recipes Carousel**: Contextual suggestions based on category or dietary tags.

4. **`meal-plan.html` (My Meal Plan & Grocery Generator)**
   - **7-Day Calendar Grid**: Columns for Monday through Sunday, with Breakfast, Lunch, Dinner, and Snack slots.
   - **Interactive Slot Management**: Add recipes to slots via modal picker, or remove recipes with one click.
   - **Weekly Summary Counters**: Live totals for planned meals, cumulative cooking time, and total calories.
   - **Consolidated Grocery List**: Automatically aggregates ingredients from all scheduled recipes, with checkable items and "Copy List to Clipboard".
   - **Saved Favourites Shelf**: Instant access to favorited recipes with 1-click scheduling.

---

## 📱 3. Responsive Breakpoints & Multi-Device Testing

The website is engineered with a mobile-first philosophy, utilizing CSS Grid, Flexbox, `clamp()`, and tailored media queries for 7 distinct device tiers:

| Device Tier | Breakpoint Range | Grid & Layout Adaptations |
| :--- | :--- | :--- |
| **Desktop** | `1367px and above` | Max-width 1320px; 3–4 recipe cards/row; 6-column category strip; 4-column feature & footer grids |
| **Laptop** | `1025px–1366px` | 3 recipe cards/row; 6-column categories; 4-column features; 4-column footer |
| **Small Laptop** | `769px–1024px` | 2 recipe cards/row; 3-column categories; 2-column features; 2-column footer |
| **Tablet** | `601px–768px` | Slide-in drawer navigation; single-column hero (text first, image second); 2 cards/row; 3 categories/row |
| **Large Mobile** | `481px–600px` | 2 recipe cards/row; 2 categories/row; full-width stacked CTA buttons |
| **Standard Mobile** | `376px–480px` | 1 recipe card/row; 2 categories/row; safe inset floating badges (zero horizontal overflow) |
| **Small Mobile** | `320px–375px` | Compact typography; 1 card/row; 2 categories/row; full touch-friendly tap targets |

### Verified Viewports
The layout has been tested across 9 strict viewport dimensions:
- `320px` (iPhone SE 1st Gen)
- `360px` (Galaxy S8)
- `375px` (iPhone 11 / SE 2nd Gen)
- `390px` (iPhone 13 / 14 / 15)
- `430px` (iPhone 14 / 15 Pro Max)
- `768px` (iPad Mini / Portrait Tablets)
- `1024px` (iPad Pro / Small Laptops)
- `1366px` (Standard Laptops)
- `1440px+` (Large Desktop Displays)

---

## 🛠️ 4. Technologies Used

- **HTML5**: Semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<nav>`).
- **CSS3**: Custom properties (CSS variables), CSS Grid, Flexbox, keyframe animations, glassmorphism (`backdrop-filter`), media queries, and `@media print` print styles.
- **Vanilla JavaScript (ES6+)**:
  - Array methods: `map()`, `filter()`, `find()`, `sort()`, `reduce()`, `forEach()`.
  - DOM manipulation and event delegation.
  - Persistent state management using browser `localStorage`.
  - Dynamic URL query parameter parsing via `URLSearchParams`.
  - Real-time debounced input filtering and modal management.

---

## 🚀 4. How to Run & Test the Project

No build step, Node.js server, or external package manager is required. The website runs natively in any modern web browser.

1. **Directly Open in Browser**:
   - Double-click or open `index.html` in Chrome, Edge, Firefox, or Safari.

2. **Using a Local Server (e.g., VS Code Live Server or Python)**:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   Navigate to `http://localhost:8000` in your browser.

---

## ✨ 5. Key Highlights & Interactive Features

- **Zero External Dependencies**: Fast, lightweight, pure HTML5/CSS3/Vanilla JS.
- **Full State Persistence**: Favorited recipes and meal plan selections persist in `localStorage` across refreshes.
- **Deep Linking**: Click any category from the Home page (e.g. `explore.html?category=breakfast`) or details page (`recipe-details.html?id=1`) with full query parameter support.
- **Toast Notification System**: Non-intrusive floating feedback messages for all actions.
- **Kitchen Step Timer**: Floating timer that counts down cooking steps and alerts when done.
- **Print Friendly**: Built-in print stylesheet hiding UI controls for distraction-free kitchen recipe cards.

