#!/usr/bin/env node
// Generates all product pages for Side Quest Stack
const fs = require('fs');
const path = require('path');

const PRODUCTS_DIR = path.join(__dirname, 'products');
if (!fs.existsSync(PRODUCTS_DIR)) fs.mkdirSync(PRODUCTS_DIR);

const NAV = `  <nav>
    <div class="nav-inner">
      <a href="/" class="nav-logo">Side Quest <span>Stack</span></a>
      <ul class="nav-links">
        <li><a href="/">Shop</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/" class="btn-nav">Browse All →</a></li>
      </ul>
    </div>
  </nav>`;

const FOOTER = `  <footer>
    <div class="footer-inner">
      <a href="/" class="footer-logo">Side Quest <span>Stack</span></a>
      <ul class="footer-links">
        <li><a href="/">Shop</a></li>
        <li><a href="/about.html">About</a></li>
      </ul>
      <span class="footer-copy">© 2025 Side Quest Stack. All rights reserved.</span>
    </div>
  </footer>`;

function generatePage(product) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${product.name} — Side Quest Stack</title>
  <meta name="description" content="${product.metaDesc}">
  <meta property="og:title" content="${product.name} — Side Quest Stack">
  <meta property="og:description" content="${product.metaDesc}">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://sidequeststack.com/products/${product.slug}.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>

${NAV}

  <div class="container">
    <div class="product-page">

      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <a href="/">Shop</a>
        <span class="breadcrumb-sep">/</span>
        <span>${product.category}</span>
        <span class="breadcrumb-sep">/</span>
        <span>${product.name}</span>
      </div>

      <div class="product-layout">

        <!-- Preview -->
        <div>
          <div class="product-preview">${product.emoji}</div>
        </div>

        <!-- Info -->
        <div class="product-info">
          <span class="category-tag">${product.category}</span>
          <h1>${product.name}</h1>

          <div class="product-badges">
            <span class="badge badge-green">⬇ Instant PDF Download</span>
            <span class="badge badge-purple">🖨 Print-Ready</span>
          </div>

          <p class="product-description">${product.description}</p>

          <p class="features-heading">What's Included</p>
          <ul class="features-list">
            ${product.features.map(f => `<li>${f}</li>`).join('\n            ')}
          </ul>

          <!-- Buy Box (mobile — shown below features on mobile, above on desktop via CSS) -->
          <div class="buy-box" style="display:none;" id="buyBoxMobile">
          </div>

        </div>

        <!-- Sticky Buy Box -->
        <div class="buy-box">
          <div class="buy-box-price">${product.price}</div>
          <p class="buy-box-desc">One-time purchase. Instant PDF download. Print as many times as you need.</p>

          <a href="#" class="btn-buy" onclick="alert('Checkout coming soon! Check back shortly.'); return false;">Buy Now — ${product.price}</a>

          <p class="buy-box-note">🔒 Secure checkout · Instant download after payment</p>

          <div class="buy-box-features">
            <div class="buy-feature">
              <span class="buy-feature-icon">✓</span>
              <span>Instant download — no waiting</span>
            </div>
            <div class="buy-feature">
              <span class="buy-feature-icon">✓</span>
              <span>High-resolution PDF, print at home or at a shop</span>
            </div>
            <div class="buy-feature">
              <span class="buy-feature-icon">✓</span>
              <span>One-time payment, use forever</span>
            </div>
            <div class="buy-feature">
              <span class="buy-feature-icon">✓</span>
              <span>No account required</span>
            </div>
          </div>
        </div>

      </div><!-- /product-layout -->

      <hr class="divider">

      <!-- Related / Back CTA -->
      <div style="text-align:center; padding: 20px 0 40px;">
        <p style="color: var(--text-dim); margin-bottom: 16px; font-size: 0.9rem;">Looking for more tools?</p>
        <a href="/" style="display: inline-block; padding: 10px 24px; background: var(--bg-card); border: 1px solid var(--border); color: var(--text); border-radius: 8px; text-decoration: none; font-size: 0.9rem; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">← Browse All Products</a>
      </div>

    </div>
  </div>

${FOOTER}

</body>
</html>`;
}

const products = [
  // AI & TECH
  {
    slug: 'ai-prompt-vault',
    name: 'AI Prompt Vault',
    category: 'AI & Tech',
    emoji: '⚡',
    price: '$7.99',
    metaDesc: '500+ battle-tested AI prompts for writing, business, marketing, and creativity. Stop starting from scratch.',
    description: 'The AI Prompt Vault is a comprehensive collection of 500+ carefully crafted prompts for ChatGPT, Claude, Gemini, and other AI tools. Whether you\'re writing content, building a business, or creating art, these prompts skip the guesswork and get results fast.',
    features: [
      '500+ curated prompts across 12 categories',
      'Writing & copywriting prompts',
      'Business strategy & planning prompts',
      'Marketing & social media prompts',
      'Email & newsletter prompts',
      'Research & summarization prompts',
      'Creative & brainstorming prompts',
      'Quick-reference format — easy to scan and use',
    ],
  },
  {
    slug: 'ai-art-prompt-pack',
    name: 'AI Art Prompt Pack',
    category: 'AI & Tech',
    emoji: '🎨',
    price: '$5.99',
    metaDesc: '200+ ready-to-use prompts for Midjourney, DALL-E, and Stable Diffusion. Create stunning visuals instantly.',
    description: 'Create jaw-dropping AI art without staring at a blank prompt box. This pack includes 200+ expertly engineered prompts for the top AI image generators — organized by style, mood, and use case.',
    features: [
      '200+ prompts for Midjourney, DALL-E, and Stable Diffusion',
      'Organized by style: photorealistic, illustration, abstract, vintage',
      'Product photography prompts for e-commerce',
      'Portrait and character prompts',
      'Landscape and environment prompts',
      'Logo and branding concept prompts',
      'Prompt structure guide included',
      'Works with free and paid AI art tools',
    ],
  },
  {
    slug: 'seo-cheat-sheet',
    name: 'SEO Cheat Sheet',
    category: 'AI & Tech',
    emoji: '🔍',
    price: '$3.99',
    metaDesc: 'The essentials of SEO on one printable sheet. Keywords, on-page tactics, and link-building — no fluff.',
    description: 'Stop wading through 10,000-word SEO guides. This cheat sheet distills everything you need to know into one clean, printable reference — from keyword research to on-page optimization to link building basics.',
    features: [
      'Keyword research checklist and formula',
      'On-page SEO checklist (title, meta, headers, images)',
      'Technical SEO quick reference',
      'Link building strategies overview',
      'Google Search Console tips',
      'SEO glossary of key terms',
      'Printable one-page format',
      'Updated for current Google algorithms',
    ],
  },
  {
    slug: 'blog-post-templates',
    name: 'Blog Post Template Pack',
    category: 'AI & Tech',
    emoji: '📝',
    price: '$4.99',
    metaDesc: '10 fill-in-the-blank blog post frameworks for every format — listicles, how-tos, deep dives, and more.',
    description: 'Never face a blank page again. This pack includes 10 fill-in-the-blank blog post templates covering every major format. Just plug in your topic and details — the structure does the heavy lifting.',
    features: [
      '10 battle-tested blog post templates',
      'Listicle template (e.g., "X Ways to...")',
      'How-to guide template with step structure',
      'Ultimate guide / pillar post template',
      'Product review template',
      'Comparison post template',
      'Personal story / case study template',
      'Opinion / thought leadership template',
      'FAQ post template',
      'Round-up post template',
    ],
  },
  {
    slug: 'caption-templates',
    name: 'Social Media Caption Templates',
    category: 'AI & Tech',
    emoji: '📱',
    price: '$3.99',
    metaDesc: '100+ plug-and-play caption templates for Instagram, TikTok, and LinkedIn.',
    description: 'Stop spending 20 minutes writing captions. These 100+ templates are ready to customize for Instagram, TikTok, LinkedIn, and more — covering promotions, stories, engagement posts, and product launches.',
    features: [
      '100+ caption templates across all major platforms',
      'Instagram templates (Reels, Stories, Feed)',
      'TikTok templates for hooks and CTAs',
      'LinkedIn professional templates',
      'Product launch and sale templates',
      'Engagement and conversation-starter templates',
      'Story series templates',
      'Hashtag strategy guide included',
    ],
  },
  {
    slug: 'content-calendar',
    name: 'Content Calendar Bundle',
    category: 'AI & Tech',
    emoji: '📅',
    price: '$4.99',
    metaDesc: 'Plan 3 months of content across every platform. Weekly, monthly, and campaign views included.',
    description: 'Plan your entire content strategy across platforms with this 3-month content calendar bundle. Includes weekly, monthly, and campaign-level planning pages — so you\'re never scrambling for what to post.',
    features: [
      '3-month content calendar (12 weekly spreads)',
      'Monthly overview page for each month',
      'Platform-specific planning columns (Instagram, TikTok, YouTube, Email, Blog)',
      'Campaign planning template',
      'Content idea bank (100+ topic prompts)',
      'Posting frequency tracker',
      'Engagement metrics log',
      'Printable and fillable PDF',
    ],
  },
  {
    slug: 'product-description-guide',
    name: 'Product Description Formula Guide',
    category: 'AI & Tech',
    emoji: '🛒',
    price: '$4.99',
    metaDesc: 'The copywriting formulas that sell. Write product descriptions that convert browsers to buyers.',
    description: 'Your product is great — your description just needs to say so. This guide teaches the proven copywriting frameworks used by top Etsy sellers and DTC brands to write descriptions that actually convert.',
    features: [
      '5 proven product description formulas',
      'Before/after examples for each formula',
      'Power words list (150+ words that convert)',
      'Buyer psychology overview',
      'Bullet vs. paragraph format guide',
      'SEO integration tips for product listings',
      'Etsy, Shopify, and Amazon-specific tips',
      'Template for each formula',
    ],
  },

  // BUSINESS
  {
    slug: 'side-hustle-launch-checklist',
    name: 'Side Hustle Launch Checklist',
    category: 'Business',
    emoji: '🚀',
    price: '$3.99',
    metaDesc: 'Every step to launch your side hustle — from idea validation to first sale.',
    description: 'Launching a side hustle is overwhelming — until you have a clear checklist. This comprehensive launch checklist walks you through every phase from idea validation to your first paying customer.',
    features: [
      'Phase 1: Idea validation checklist',
      'Phase 2: Business setup checklist (LLC, banking, tools)',
      'Phase 3: Product or service creation checklist',
      'Phase 4: Marketing setup checklist',
      'Phase 5: Launch day checklist',
      'Phase 6: First 30 days post-launch actions',
      'Resource links for each step',
      'Notes sections throughout',
    ],
  },
  {
    slug: 'revenue-tracker',
    name: 'Revenue Tracker',
    category: 'Business',
    emoji: '📈',
    price: '$4.99',
    metaDesc: 'Track income streams, monthly goals, and business growth across all your side hustles.',
    description: 'Know exactly where every dollar is coming from. This revenue tracker helps you log income by stream, track monthly and annual goals, and spot which products or services are actually moving the needle.',
    features: [
      'Monthly income log by revenue stream',
      'Annual revenue overview chart',
      'Revenue goal vs. actual tracker',
      'Top earners breakdown by product/service',
      'Quarter-over-quarter comparison',
      'Notes and observations section',
      '12 monthly spread pages',
      'Works for freelancers, Etsy sellers, and multi-income earners',
    ],
  },
  {
    slug: 'expense-tracker',
    name: 'Expense Tracker',
    category: 'Business',
    emoji: '💸',
    price: '$3.99',
    metaDesc: 'Log and categorize business expenses for tax season. Simple, clean, printable.',
    description: 'Tax season stress comes from not knowing where your money went. This expense tracker keeps everything organized throughout the year so you\'re always ready for your accountant (or your own filing).',
    features: [
      'Monthly expense log by category',
      '15 common business expense categories pre-labeled',
      'Mileage log included',
      'Annual expense summary page',
      'Deductible vs. non-deductible tracker',
      'Receipt notes column',
      'Tax preparation checklist',
      '12 monthly pages + annual summary',
    ],
  },
  {
    slug: 'freelancer-invoice-pack',
    name: 'Freelancer Invoice Pack',
    category: 'Business',
    emoji: '🧾',
    price: '$5.99',
    metaDesc: '5 professional invoice templates for freelancers. Look established from day one.',
    description: 'Stop sending ugly invoices from random generators. This pack includes 5 clean, professional invoice templates designed for freelancers — covering hourly, project, retainer, and milestone billing.',
    features: [
      '5 distinct invoice template designs',
      'Hourly billing invoice template',
      'Project-based flat-rate template',
      'Retainer agreement invoice template',
      'Milestone billing template',
      'Rush fee / revision add-on template',
      'Payment terms guidance included',
      'Editable PDF format',
    ],
  },
  {
    slug: 'weekly-ceo-planner',
    name: 'Weekly CEO Planner',
    category: 'Business',
    emoji: '👑',
    price: '$4.99',
    metaDesc: 'Think and plan like a CEO. Weekly priorities, decisions log, and big-picture review.',
    description: 'Whether you\'re running a side hustle or a full business, this planner trains you to operate at the CEO level — working on the business, not just in it. Big picture thinking, weekly priorities, decisions log, and reflection built in.',
    features: [
      '52 weekly planning spreads',
      'Weekly priority matrix (urgent vs. important)',
      'CEO decisions log',
      'Revenue and metrics check-in',
      'Team / contractor notes section',
      'Weekly wins and lessons',
      'Big picture quarterly alignment check',
      'Annual CEO review template',
    ],
  },
  {
    slug: '90-day-launch-planner',
    name: '90-Day Product Launch Planner',
    category: 'Business',
    emoji: '🗓️',
    price: '$5.99',
    metaDesc: 'The complete 90-day roadmap to launch any product or offer. Week-by-week milestones.',
    description: 'Launching a product without a plan is hoping for the best. This 90-day planner gives you a proven week-by-week framework from pre-launch build-up to post-launch optimization.',
    features: [
      '90-day week-by-week action plan',
      'Pre-launch phase (Days 1-30): Build & validate',
      'Launch phase (Days 31-60): Market & sell',
      'Post-launch phase (Days 61-90): Optimize & grow',
      'Daily task trackers for each week',
      'Launch metrics dashboard',
      'Marketing channel planner',
      'Launch debrief template',
    ],
  },
  {
    slug: 'pitch-deck-template',
    name: 'Pitch Deck Template',
    category: 'Business',
    emoji: '📊',
    price: '$9.99',
    metaDesc: 'A clean, professional pitch deck framework. From problem statement to ask.',
    description: 'A compelling pitch deck can open doors — but most people don\'t know where to start. This template gives you the exact slide structure used in successful startup pitches, with guidance on what to write on each slide.',
    features: [
      '12-slide pitch deck framework',
      'Problem and solution slides',
      'Market size and opportunity slide',
      'Product / service demo slide',
      'Business model and revenue slide',
      'Traction and social proof slide',
      'Team overview slide',
      'Financials and projections slide',
      'The Ask slide',
      'Slide-by-slide writing prompts and tips',
    ],
  },
  {
    slug: 'client-onboarding-pack',
    name: 'Client Onboarding Pack',
    category: 'Business',
    emoji: '🤝',
    price: '$6.99',
    metaDesc: 'Welcome new clients like a pro. Includes welcome guide, questionnaire, contract checklist, and more.',
    description: 'First impressions stick. A professional client onboarding experience builds trust, sets expectations, and reduces back-and-forth — before a single deliverable is created. This pack includes everything you need.',
    features: [
      'Welcome letter template',
      'Client intake questionnaire (20 questions)',
      'Project scope and timeline template',
      'Contract checklist (what to include)',
      'Communication expectations guide',
      'File sharing and feedback workflow guide',
      'Kickoff meeting agenda template',
      'Revision policy template',
    ],
  },
  {
    slug: 'etsy-first-100-sales',
    name: 'First 100 Sales Etsy Playbook',
    category: 'Business',
    emoji: '🛍️',
    price: '$6.99',
    metaDesc: 'The exact strategies to go from zero to 100 sales on Etsy. SEO, listings, pricing, and promotion.',
    description: 'Your first 100 Etsy sales are the hardest — but they\'re also the most learnable. This playbook breaks down the exact strategies for optimizing your listings, pricing for profit, getting found in search, and driving external traffic.',
    features: [
      'Etsy SEO guide (titles, tags, descriptions)',
      'Pricing for profit formula',
      'Product photography tips',
      'Listing optimization checklist',
      'Pinterest + Etsy traffic strategy',
      'Review generation strategy',
      'Star Seller requirements guide',
      '30-day action plan to first 100 sales',
      'Common mistakes to avoid',
    ],
  },

  // PLANNERS
  {
    slug: 'budget-planner',
    name: 'Budget Planner',
    category: 'Planners',
    emoji: '💰',
    price: '$4.99',
    metaDesc: 'Take control of your money with monthly budget sheets, spending trackers, and savings goals.',
    description: 'A straightforward, no-nonsense budget planner for anyone who wants to know exactly where their money is going — and take control of where it goes next.',
    features: [
      'Monthly income and expense breakdown',
      'Fixed vs. variable expense categories',
      'Spending by category tracker',
      'Savings goals tracker',
      'Emergency fund calculator page',
      'Net worth tracker',
      'Annual financial overview',
      '12 monthly pages + annual summary',
    ],
  },
  {
    slug: 'daily-planner',
    name: 'Daily Planner',
    category: 'Planners',
    emoji: '☀️',
    price: '$3.99',
    metaDesc: 'Structure your days with intention. Time blocks, priority tasks, and reflection prompts.',
    description: 'A daily planner that helps you actually get through your day — with time blocking, priority ranking, habit tracking, and end-of-day reflection built into every page.',
    features: [
      'Morning priority setting (top 3 tasks)',
      'Hourly time block schedule (6am–10pm)',
      'Habit tracker row',
      'Water and movement tracker',
      'Brain dump section',
      'Wins and grateful-for prompts',
      'Next-day prep section',
      '90-day format (90 daily pages)',
    ],
  },
  {
    slug: 'habit-tracker',
    name: 'Habit Tracker',
    category: 'Planners',
    emoji: '✅',
    price: '$3.99',
    metaDesc: 'Build habits that actually stick. Visual streak tracking for up to 30 habits over 12 months.',
    description: 'Visual streak tracking makes habits satisfying to maintain. This tracker gives you 12 months of monthly habit grids, plus a habit design guide to set you up for long-term success.',
    features: [
      '12 monthly habit tracking grids',
      'Track up to 30 habits per month',
      'Streak counter and longest streak tracker',
      'Habit design guide (cue, routine, reward)',
      'Habit stacking worksheet',
      'Monthly habit review page',
      'Annual habits overview',
      'A4 and letter-size versions included',
    ],
  },
  {
    slug: 'gratitude-journal',
    name: 'Gratitude Journal',
    category: 'Planners',
    emoji: '🙏',
    price: '$3.99',
    metaDesc: 'Daily gratitude prompts and reflection pages to build a positive mindset. 90-day format.',
    description: 'A consistent gratitude practice is one of the simplest ways to improve mental wellbeing. This 90-day journal gives you fresh prompts every day — no repeating the same three things.',
    features: [
      '90 daily journal pages',
      'Unique daily gratitude prompts',
      'Three-things gratitude format + reflection',
      'Weekly intention-setting pages',
      'Monthly check-in and review',
      'Affirmations page per month',
      'Simple, distraction-free layout',
      'Cover page and introduction',
    ],
  },
  {
    slug: 'self-care-planner',
    name: 'Self-Care Planner',
    category: 'Planners',
    emoji: '🌿',
    price: '$3.99',
    metaDesc: 'Design a self-care routine that fits your life. Weekly check-ins and wellness trackers.',
    description: 'Self-care isn\'t a bath bomb — it\'s consistent, intentional attention to your wellbeing. This planner helps you identify what actually restores you and build it into your regular rhythm.',
    features: [
      'Self-care inventory assessment',
      'Weekly self-care planning spread',
      'Physical, mental, emotional, social, and spiritual care categories',
      'Energy and mood tracker',
      'Boundaries setting worksheet',
      '"No" practice page',
      'Monthly wellness review',
      '12-week planner format',
    ],
  },
  {
    slug: 'side-hustle-planner',
    name: 'Side Hustle Planner',
    category: 'Planners',
    emoji: '⚡',
    price: '$4.99',
    metaDesc: 'Plan, track, and grow your side hustle with weekly tasks, revenue goals, and milestone tracking.',
    description: 'The planner built specifically for people building something on the side. Balances the demands of a day job (or life) with the focused effort needed to grow a side hustle.',
    features: [
      'Weekly side hustle planning spread',
      'Hourly time audit (finding hours to work)',
      'Revenue and goal tracker',
      'Project and product tracker',
      'Income stream breakdown',
      'Weekly review template',
      'Monthly milestones board',
      '52 weekly pages',
    ],
  },
  {
    slug: 'meal-prep-planner',
    name: 'Meal Prep Planner',
    category: 'Planners',
    emoji: '🥗',
    price: '$3.99',
    metaDesc: 'Plan meals, build grocery lists, and batch cook like a pro. Weekly and monthly views.',
    description: 'Meal prepping saves time, money, and mental energy — if you plan it right. This planner makes the whole process simple from planning meals to building shopping lists to tracking nutrition.',
    features: [
      'Weekly meal planning grid (breakfast, lunch, dinner, snacks)',
      'Grocery list template with categories',
      'Batch cooking checklist and schedule',
      'Recipe favorites tracker',
      'Monthly meal planning overview',
      'Pantry inventory page',
      'Nutrition goals tracker',
      '12 weekly spreads',
    ],
  },
  {
    slug: 'wedding-planner',
    name: 'Wedding Planner',
    category: 'Planners',
    emoji: '💍',
    price: '$5.99',
    metaDesc: 'Plan your perfect day without losing your mind. Vendor lists, timelines, budgets, and checklists.',
    description: 'A complete wedding planning companion from engagement to honeymoon. Covers every detail without the overwhelming complexity of 400-page wedding binders.',
    features: [
      '12-month wedding countdown checklist',
      'Budget tracker and vendor payment log',
      'Vendor contact list',
      'Guest list and RSVP tracker',
      'Seating chart worksheet',
      'Day-of timeline template',
      'Ceremony and reception notes',
      'Honeymoon planning pages',
    ],
  },
  {
    slug: 'travel-planner',
    name: 'Travel Planner',
    category: 'Planners',
    emoji: '✈️',
    price: '$4.99',
    metaDesc: 'Plan every trip from packing to itinerary. Budget tracker, booking log, and packing lists.',
    description: 'Never arrive at a hotel without a confirmation number again. This travel planner covers pre-trip planning, daily itineraries, budgeting, and memories — for any trip.',
    features: [
      'Trip overview and goals page',
      'Flight, hotel, and rental booking log',
      'Day-by-day itinerary pages',
      'Travel budget tracker',
      'Packing checklist (customizable)',
      'Restaurant and activity wish list',
      'Emergency contacts and documents page',
      'Trip memories and highlights journal',
    ],
  },
  {
    slug: 'teacher-planner',
    name: 'Teacher Planner',
    category: 'Planners',
    emoji: '🍎',
    price: '$5.99',
    metaDesc: 'The ultimate classroom organizer. Lesson plans, grade trackers, parent communication, and yearly overview.',
    description: 'Designed by teachers, for teachers. This planner covers every aspect of classroom management — from year-long curriculum planning to daily lesson plans, grades, and parent communication.',
    features: [
      'Yearly curriculum overview',
      'Weekly lesson plan template',
      'Student roster with notes',
      'Grade tracker (up to 35 students)',
      'Parent communication log',
      'Meeting notes pages',
      'Monthly classroom goals',
      'Supply and resource tracker',
    ],
  },
  {
    slug: 'adhd-planner',
    name: 'ADHD Planner',
    category: 'Planners',
    emoji: '🧠',
    price: '$4.99',
    metaDesc: 'A planner designed for the ADHD brain. Brain dumps, flexible layouts, and dopamine menus.',
    description: 'Traditional planners fail ADHD brains. This one doesn\'t. Built with flexible layouts, visual priority systems, brain dump pages, and tools that match how ADHD brains actually work.',
    features: [
      'Brain dump pages (daily and weekly)',
      'Flexible daily layout (no rigid hour-by-hour)',
      'Dopamine menu worksheet',
      'Body doubling log',
      'Top 3 (max) daily tasks',
      'Distraction log (capture thoughts to return to)',
      'Reward and motivation tracker',
      'Monthly reflection with compassion prompts',
    ],
  },
  {
    slug: 'baby-planner',
    name: 'Baby Planner',
    category: 'Planners',
    emoji: '👶',
    price: '$4.99',
    metaDesc: 'From nursery prep to newborn milestones. A complete planning companion for new and expecting parents.',
    description: 'Preparing for a baby is joyful chaos. This planner gives expecting and new parents a clear system for nursery prep, hospital bag packing, feeding and sleep tracking, milestones, and first-year memories.',
    features: [
      'Pregnancy milestones timeline',
      'Hospital bag checklist',
      'Nursery setup checklist',
      'Baby gear research and purchase tracker',
      'Feeding log (breast / formula / solids)',
      'Sleep schedule tracker',
      'Doctor appointment log',
      'First-year milestones and memories pages',
    ],
  },
  {
    slug: 'quarterly-goal-review',
    name: 'Quarterly Goal Review',
    category: 'Planners',
    emoji: '🎯',
    price: '$3.99',
    metaDesc: 'Review your last 90 days and set up the next. Wins, lessons, habits, and priorities all covered.',
    description: 'The quarterly review is the habit that separates people who set goals from people who achieve them. This guide walks you through a structured review and planning session you\'ll actually finish.',
    features: [
      'Last quarter wins review',
      'Lessons learned and what didn\'t work',
      'Habit and routine reflection',
      'Goal completion scoring',
      'Next quarter goal-setting framework',
      'Priority ranking for new goals',
      'Monthly milestones breakdown',
      'Motivation and vision reset',
    ],
  },
  {
    slug: 'social-media-planner',
    name: 'Social Media Planner',
    category: 'Planners',
    emoji: '📲',
    price: '$3.99',
    metaDesc: 'Plan, schedule, and track your social content. Monthly grid, platform breakdowns, and analytics log.',
    description: 'A social media strategy needs a system. This planner helps you plan content across platforms, track what\'s working, and stay consistent without burning out.',
    features: [
      'Monthly content calendar grid',
      'Platform-specific planning pages (Instagram, TikTok, LinkedIn, Pinterest)',
      'Weekly content batch planning spread',
      'Hashtag research tracker',
      'Analytics log (followers, reach, engagement)',
      'Content theme and pillar planner',
      'Campaign planning template',
      '12 monthly spreads',
    ],
  },
  {
    slug: 'debt-free-planner',
    name: 'Debt-Free Planner',
    category: 'Planners',
    emoji: '🏦',
    price: '$4.99',
    metaDesc: 'Map your debt payoff journey. Snowball or avalanche method — track every payment and celebrate wins.',
    description: 'Getting out of debt requires a plan and the motivation to stick to it. This planner supports both — with clear payoff tracking, both the snowball and avalanche methods, and celebration checkpoints along the way.',
    features: [
      'Debt inventory overview page',
      'Snowball method payoff tracker',
      'Avalanche method payoff tracker',
      'Monthly payment log',
      'Interest savings calculator page',
      'Emergency fund tracker (to stop new debt)',
      'Payoff milestone celebrations',
      'Debt-free date estimator',
    ],
  },

  // LIFESTYLE
  {
    slug: 'morning-routine-builder',
    name: 'Morning Routine Builder',
    category: 'Lifestyle',
    emoji: '🌅',
    price: '$3.99',
    metaDesc: 'Design a morning routine that sets you up to win. Habit stacking, time blocks, and energy tracking.',
    description: 'Your morning sets the tone for everything that follows. This builder helps you design, test, and refine a morning routine that actually fits your life and energy levels.',
    features: [
      'Morning audit (what\'s working, what\'s not)',
      'Routine design worksheet (drag-and-drop style)',
      'Habit stacking guide',
      'Time block templates (30-min, 60-min, 90-min mornings)',
      '21-day routine tracking calendar',
      'Energy level log (A.M. energy check)',
      'Optimization reflection',
      'Seasonal routine adjustment pages',
    ],
  },
  {
    slug: 'anti-productivity-planner',
    name: 'Anti-Productivity Planner',
    category: 'Lifestyle',
    emoji: '😴',
    price: '$3.99',
    metaDesc: 'Rest, recharge, and reconnect. A planner for when hustle culture isn\'t working for you.',
    description: 'Not everything needs to be optimized. This planner is for the seasons when you need to slow down, rest intentionally, and reconnect with what actually matters to you.',
    features: [
      'Rest audit — what actually recharges you',
      'Joy and pleasure inventory',
      'Permission list (what you\'re allowed to enjoy)',
      'Unscheduled time protection tracker',
      'People and activities energy audit',
      'Weekly gentle intention-setting',
      'Digital detox planner',
      'Monthly check-in with compassion prompts',
    ],
  },
  {
    slug: 'vision-board-kit',
    name: 'Vision Board Kit',
    category: 'Lifestyle',
    emoji: '🌟',
    price: '$4.99',
    metaDesc: 'A printable vision board kit with goal categories, affirmations, and reflection exercises.',
    description: 'Make your vision board actually mean something. This kit includes printable elements, goal category pages, affirmations, and exercises to connect your vision to real actions.',
    features: [
      'Printable vision board template (A3/tabloid)',
      '8 life category goal pages (career, health, relationships, etc.)',
      '100+ printable affirmation cards',
      'Vision statement writing guide',
      'Values clarification exercise',
      'Vision-to-action bridge worksheet',
      'Annual vision review template',
      'Digital-friendly version included',
    ],
  },
  {
    slug: 'email-newsletter-kit',
    name: 'Email Newsletter Starter Kit',
    category: 'Lifestyle',
    emoji: '📧',
    price: '$6.99',
    metaDesc: 'Launch your email list with templates, subject line formulas, and a 4-week welcome sequence.',
    description: 'An email list is the most valuable asset you can build. This starter kit gives you everything to launch yours — from choosing a platform to writing your first 4 welcome emails.',
    features: [
      'Platform comparison guide (Mailchimp, Kit, Beehiiv)',
      'List-building strategy overview',
      '4-week welcome sequence templates (email 1–4)',
      '50 proven subject line formulas',
      'Newsletter issue template (recurring)',
      'Opt-in offer (lead magnet) ideas list',
      'Newsletter metrics tracker',
      'Unsubscribe reduction tips',
    ],
  },
];

let count = 0;
for (const product of products) {
  const html = generatePage(product);
  const outPath = path.join(PRODUCTS_DIR, `${product.slug}.html`);
  fs.writeFileSync(outPath, html, 'utf8');
  count++;
}

console.log(`Generated ${count} product pages.`);
