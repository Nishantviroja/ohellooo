# Fizoval - AI Tools Directory Platform

## Project Overview
Fizoval is a comprehensive AI tools directory platform featuring 5000+ AI tools across 120+ categories. The platform helps users discover, compare, and explore AI tools with detailed reviews, categorization, and a curated blog about AI trends.

**Live Site:** https://fizoval.com
**Tech Stack:** Next.js 14+ (App Router), React, Tailwind CSS, Framer Motion
**Content:** 5000+ AI tools, 120+ categories, blog posts, free casual games

---

## Tech Stack & Dependencies

### Core Framework
- **Next.js 14+** - App Router with Server Components, ISR, SSG
- **React 18+** - Server and Client Components
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations and transitions

### Key Libraries
- **next/image** - Optimized image loading
- **next/link** - Client-side navigation
- **Google AdSense** - Monetization
- **Google Analytics & Tag Manager** - Analytics
- **Microsoft Clarity** - User behavior analytics
- **OneSignal** - Push notifications
- **Gamezop API** - Free casual games integration

---

## Project Structure

```
fizoval/
├── app/
│   ├── schema/                    # Structured Data (JSON-LD)
│   │   ├── HomeSchema.js         # Homepage (7 schemas)
│   │   ├── BlogSchema.js         # Blog listing (4 schemas)
│   │   ├── BlogPostSchema.js     # Individual blog posts
│   │   ├── AIToolsSchema.js      # AI Tools page (4 schemas)
│   │   ├── CategorySchema.js     # Category pages (3 schemas)
│   │   ├── ToolSchema.js         # Individual tool pages
│   │   └── index.js              # Centralized exports
│   │
│   ├── components/               # React Components
│   │   ├── Hero.js               # Homepage hero section
│   │   ├── Navbar.js             # Site navigation
│   │   ├── Footer.js             # Site footer
│   │   ├── CategoriesGrid.js     # Category cards grid
│   │   ├── BlogCard.js           # Blog post card
│   │   ├── ToolCard.js           # AI tool card
│   │   ├── FAQSection.js         # FAQ accordion (with schema)
│   │   ├── PlayPromoModal.js     # Games promo popup
│   │   ├── TrendingToolsSection.js
│   │   ├── RecentlyAddedSection.js
│   │   ├── TestimonialsSection.js
│   │   ├── HomeBlogSection.js
│   │   ├── HowItWorksSection.js
│   │   └── ads/                  # AdSense components
│   │       ├── GoogleAdSense.js
│   │       ├── AdFluid.js
│   │       ├── AdRectangle.js
│   │       └── ...
│   │
│   ├── data/                     # Data & Configuration
│   │   ├── aiTools.js            # 5000+ AI tools database
│   │   ├── metadata.js           # SEO metadata for all pages
│   │   ├── authors.js            # Blog authors
│   │   ├── blogPosts.js          # Blog fetching logic
│   │   ├── playPromotions.js     # Game promo images
│   │   └── gamezop.js            # Gamezop API config
│   │
│   ├── api/                      # API Routes
│   │   ├── blog-posts/route.js   # Fetch blog posts from GitHub
│   │   └── gamezop/route.js      # Fetch games from Gamezop
│   │
│   ├── sitemap.xml/              # Dynamic Sitemap
│   │   └── route.js              # Generates sitemap with 5,130+ URLs
│   │
│   ├── page.js                   # Homepage
│   ├── layout.js                 # Root layout (includes modal)
│   ├── ai-tools/page.js          # All AI tools listing
│   ├── blog/
│   │   ├── page.js               # Blog listing
│   │   ├── [slug]/page.js        # Individual blog post
│   │   └── author/[id]/page.js   # Author profile
│   ├── [category]/
│   │   ├── page.js               # Category page (dynamic)
│   │   ├── category-tools.js     # Category tools component
│   │   └── [tool]/page.js        # Individual tool page (dynamic)
│   ├── play/
│   │   ├── page.js               # Games page
│   │   └── PlaySchema.js         # Games schema
│   ├── about/page.js             # About page
│   ├── terms-and-conditions/page.js
│   ├── privacy-policy/page.js
│   └── affiliate-disclosure/page.js
│
├── public/
│   ├── robots.txt                # SEO robots file
│   ├── Fizoval.png               # Logo
│   └── FeaturingIMG.png          # OG image
│
├── next.config.mjs               # Next.js configuration
└── tailwind.config.js            # Tailwind CSS config
```

---

## Key Files Explained

### 1. Data Files

#### `app/data/aiTools.js`
- **Purpose:** Central database of 5000+ AI tools
- **Structure:** Array of tool objects
- **Fields:**
  ```javascript
  {
    index: 1,
    name: "Tool Name",
    category: "Productivity",
    description: "Short description",
    full_description: "Long description",
    image_url: "https://...",
    external_link: "https://...",
    pricing_model: "Free|Paid|Freemium"
  }
  ```

#### `app/data/metadata.js`
- **Purpose:** SEO metadata for all pages
- **Exports:** `siteMetadata` object with keys: home, blog, aiTools, about, terms, privacy, affiliate
- **Fields:** title, description, keywords, openGraph, twitter, alternates

#### `app/data/blogPosts.js`
- **Purpose:** Fetch blog posts from external GitHub JSON
- **Source:** `https://raw.githubusercontent.com/Nishantviroja/fizoval-blogs/main/blogs.json`
- **Export:** `fetchBlogPosts()` function

#### `app/data/playPromotions.js`
- **Purpose:** Game promotion images for modal
- **Structure:** Array of image URLs
- **Usage:** Random image shown to users after 10 seconds

---

### 2. Schema Files (SEO Structured Data)

All schemas are in `app/schema/` folder and use JSON-LD format.

#### Schema Coverage:
- **HomeSchema:** 7 schemas (Organization, Website, WebPage, Breadcrumb, ItemList, CollectionPage, Product)
- **BlogSchema:** 4 schemas (Blog, WebPage, Breadcrumb, CollectionPage)
- **BlogPostSchema:** BlogPosting with author, publisher, dates
- **AIToolsSchema:** 4 schemas (CollectionPage, WebPage, Breadcrumb, ItemList)
- **CategorySchema:** 3 schemas (CollectionPage, WebPage, Breadcrumb)
- **ToolSchema:** SoftwareApplication with offers, ratings

#### Schema Relationships:
- All schemas reference `@id` for linking (e.g., `"@id": "https://fizoval.com/#organization"`)
- Publisher always references Organization schema
- WebPages reference Website schema via `isPartOf`

---

### 3. Dynamic Routes

#### Category Pages: `app/[category]/page.js`
- **Pattern:** `https://fizoval.com/productivity-ai-tools`
- **Slug Format:** `{category-name}-ai-tools` (lowercase, hyphens)
- **Generation:** `generateStaticParams()` creates 120+ pages at build time
- **ISR:** `revalidate = 86400` (24 hours)

#### Tool Pages: `app/[category]/[tool]/page.js`
- **Pattern:** `https://fizoval.com/productivity-ai-tools/notion-ai`
- **Slug Format:** `{category-slug}/{tool-name-slug}`
- **Generation:** All 5000+ tool pages pre-generated
- **ISR:** `revalidate = 604800` (7 days)

#### Blog Posts: `app/blog/[slug]/page.js`
- **Pattern:** `https://fizoval.com/blog/best-ai-tools-2025`
- **Generation:** Dynamic based on GitHub JSON
- **ISR:** `revalidate = 60` (1 minute)

---

### 4. API Routes

#### `/api/blog-posts`
- **Method:** GET
- **Source:** Fetches from GitHub raw JSON
- **Caching:** `cache: 'no-store'`
- **Returns:** `{ posts: [...] }`

#### `/api/gamezop`
- **Method:** GET
- **Query Params:** `lang` (default: 'en')
- **Source:** Gamezop API with Bearer token
- **Returns:** `{ status: 'success', data: { games: [...] } }`
- **Auth:** Requires `BEARER_TOKEN` in `app/data/gamezop.js`

---

### 5. Sitemap

#### `app/sitemap.xml/route.js`
- **Dynamic Generation:** Creates XML sitemap on-the-fly
- **Revalidation:** `revalidate = 60` (1 minute)
- **Includes:**
  - 8 static pages
  - All blog posts (dynamic from API)
  - 120+ category pages
  - 5000+ tool pages
- **Total URLs:** ~5,130+
- **Features:** XML escaping, image tags for blog posts, proper priorities

---

## Important Patterns & Conventions

### 1. Component Patterns

#### Server Components (Default)
- All page components are Server Components by default
- Use for: Data fetching, SEO, initial rendering
- Files: `page.js` files in routes

#### Client Components
- Marked with `'use client'`
- Use for: Interactivity, state, browser APIs
- Examples: `PlayPromoModal.js`, `FAQSection.js`, `Navbar.js`

### 2. Metadata Pattern

Every page route exports metadata:
```javascript
export const metadata = {
  ...(siteMetadata.pageName || {}),
  robots: { index: true, follow: true, maxImagePreview: 'large' },
  alternates: {
    canonical: 'https://fizoval.com/page-url',
  },
};
```

Or dynamic metadata:
```javascript
export async function generateMetadata({ params }) {
  // Generate metadata based on params
  return { title, description, ... };
}
```

### 3. Schema Pattern

Every major page includes schema component:
```javascript
import HomeSchema from './schema/HomeSchema';

export default function Page() {
  return (
    <>
      <HomeSchema />
      <Navbar />
      {/* Page content */}
      <Footer />
    </>
  );
}
```

### 4. ISR (Incremental Static Regeneration)

Used across the site for performance:
```javascript
export const revalidate = 60; // Revalidate every 60 seconds
```

Revalidation times:
- Blog posts: 60 seconds
- Blog listing: 60 seconds  
- Categories: 24 hours (86400)
- Tools: 7 days (604800)
- Sitemap: 60 seconds

---

## SEO Implementation

### 1. Meta Tags
- **Location:** `app/data/metadata.js`
- **Coverage:** All pages
- **Includes:** Title, description, keywords, OG tags, Twitter cards

### 2. Canonical URLs
- All major pages have canonical URLs
- Format: `https://fizoval.com/{page-path}`
- Prevents duplicate content issues

### 3. Robots.txt
- **Location:** `public/robots.txt`
- **Rules:**
  - Allow: All pages
  - Disallow: `/private/` directory
  - Sitemap: `https://fizoval.com/sitemap.xml`

### 4. Structured Data (JSON-LD)
- **Organization:** 7 schemas on homepage
- **Blog:** 4 schemas on listing + BlogPosting per post
- **Tools:** CollectionPage + SoftwareApplication schemas
- **Total:** ~5,370+ schema instances across site

### 5. Internal Linking
- Homepage → Categories (via CategoriesGrid)
- Categories → Tools (via category pages)
- Blog → Tools (via content links)
- Footer → Legal pages

---

## Styling & Design

### Tailwind CSS
- **Configuration:** `tailwind.config.js`
- **Custom Colors:** Blue/purple gradient theme
- **Responsive:** Mobile-first approach
- **Classes:** Utility-first, no custom CSS files

### Common Patterns
```javascript
// Gradient text
className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"

// Card hover effect
className="hover:shadow-xl hover:scale-105 transition-all duration-300"

// Glassmorphism
className="backdrop-blur-lg bg-white/70 border border-white/20"
```

### Responsive Breakpoints
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

---

## External Integrations

### 1. Google AdSense
- **Component:** `app/components/ads/GoogleAdSense.js`
- **Client ID:** ca-pub-9072106519416394
- **Placement:** Blog posts, category pages, AI tools page

### 2. Google Analytics
- **Component:** `app/components/GoogleAnalytics.js`
- **Tracking ID:** Configured in component

### 3. Microsoft Clarity
- **Component:** `app/components/MicrosoftClarity.js`
- **Purpose:** User behavior analytics

### 4. OneSignal
- **Component:** `app/components/OneSignalInit.js`
- **Purpose:** Push notifications

### 5. Gamezop API
- **Purpose:** Free casual games
- **API Endpoint:** `https://pub.gamezop.com/v3/games`
- **Auth:** Bearer token required
- **Config:** `app/data/gamezop.js`

---

## Image Configuration

### Next.js Image Domains
Configured in `next.config.mjs`:
```javascript
images: {
  remotePatterns: [
    { hostname: 'cdn.prod.website-files.com' },
    { hostname: 'blogger.googleusercontent.com' },
    { hostname: 'i.pravatar.cc' },
    { hostname: 'pub.gamezop.com' }
  ],
  domains: ['cdn.prod.website-files.com', 'blogger.googleusercontent.com', 'i.pravatar.cc', 'pub.gamezop.com']
}
```

---

## Key Features

### 1. Play Promo Modal
- **Component:** `app/components/PlayPromoModal.js`
- **Trigger:** 10 seconds after page load
- **Frequency:** Once per session (sessionStorage)
- **Location:** All pages (added in `app/layout.js`)
- **Action:** Redirects to `/play` page

### 2. Blog System
- **Source:** External GitHub JSON repository
- **Fetching:** Server-side with ISR
- **Display:** Grid layout, 16:9 thumbnail ratio
- **Features:** Category, date, author, featured image

### 3. Category System
- **Count:** 120+ categories
- **Dynamic:** Auto-generated from aiTools.js
- **SEO:** Each category has 3 schemas
- **Icons:** Emoji-based category icons

### 4. Search Functionality
- **Location:** AI Tools page, Play page
- **Type:** Client-side filtering
- **Fields:** Name, description

### 5. Games Integration
- **Provider:** Gamezop
- **Count:** 100+ games
- **Features:** Categories, search, instant play
- **Layout:** Responsive grid (2 cols mobile, 6 cols desktop)

---

## Development Guidelines

### 1. Adding a New Page
```javascript
// 1. Create page file
// app/new-page/page.js

// 2. Add metadata
export const metadata = {
  title: "Page Title | Fizoval",
  description: "Page description",
  // ... other metadata
};

// 3. Create schema (if needed)
// app/schema/NewPageSchema.js

// 4. Add to sitemap
// app/sitemap.xml/route.js - add to staticPages array

// 5. Add navigation link (if needed)
// app/components/Navbar.js or Footer.js
```

### 2. Adding a New Schema
```javascript
// app/schema/NewSchema.js
export default function NewSchema({ data }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SchemaType",
    // ... schema properties
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Add to app/schema/index.js
export { default as NewSchema } from './NewSchema';
```

### 3. Adding a New Tool
```javascript
// Add to app/data/aiTools.js
{
  index: 5001,
  name: "New Tool",
  category: "Category Name",
  description: "Short description",
  full_description: "Detailed description",
  image_url: "https://...",
  external_link: "https://tool-website.com",
  pricing_model: "Free|Paid|Freemium"
}
```

### 4. Adding a Blog Post
- Add to GitHub repository: `fizoval-blogs/blogs.json`
- Will auto-sync within 60 seconds (ISR)

---

## Environment Variables

### Required (Not in code - configure separately)
```bash
# Gamezop API
BEARER_TOKEN="your_gamezop_bearer_token"

# Google AdSense
NEXT_PUBLIC_ADSENSE_ID="ca-pub-9072106519416394"

# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_GTM_ID="GTM-XXXXXXXXX"
```

---

## Common Tasks

### Update AI Tool
1. Open `app/data/aiTools.js`
2. Find tool by index or name
3. Update fields
4. Save and redeploy

### Update Site Metadata
1. Open `app/data/metadata.js`
2. Update relevant section (home, blog, etc.)
3. Save and redeploy

### Add New Category
1. Add tools with new category to `app/data/aiTools.js`
2. Add icon to `categoryIcons` in `app/components/CategoriesGrid.js`
3. Category page auto-generates via `generateStaticParams()`

### Fix Schema Error
1. Use Google Search Console URL Inspection
2. Identify problematic schema
3. Edit relevant schema file in `app/schema/`
4. Test with Schema.org validator
5. Redeploy and request re-indexing

---

## Performance Optimizations

### 1. Image Optimization
- Using `next/image` with automatic optimization
- Lazy loading for below-fold images
- Responsive image sizes

### 2. Code Splitting
- Automatic with Next.js App Router
- Dynamic imports for heavy components

### 3. ISR (Incremental Static Regeneration)
- Static generation with periodic updates
- Balances performance and freshness

### 4. Caching Strategy
- Static pages: Cached at edge
- API routes: Appropriate cache headers
- Sitemap: 1-minute revalidation

---

## SEO Checklist

✅ Sitemap submitted to Google Search Console
✅ 5,130+ URLs in sitemap
✅ Robots.txt configured
✅ All pages have canonical URLs
✅ All pages have metadata (title, description, OG, Twitter)
✅ 5,370+ structured data schemas implemented
✅ Internal linking structure in place
✅ Mobile-friendly responsive design
✅ Fast loading times (ISR + optimization)
✅ Rich snippets eligible (FAQs, breadcrumbs, products)

---

## Troubleshooting

### Page Not Indexed
1. Check sitemap: `https://fizoval.com/sitemap.xml`
2. Verify page in sitemap
3. Submit sitemap to GSC if not done
4. Request indexing via URL Inspection
5. Check for canonical URL
6. Verify robots.txt allows page

### Schema Errors
1. Use GSC URL Inspection
2. Copy schema from page source
3. Test at https://validator.schema.org/
4. Fix errors in relevant schema file
5. Redeploy and request re-indexing

### Images Not Loading
1. Check domain in `next.config.mjs`
2. Add to `remotePatterns` if missing
3. Verify image URL is accessible
4. Check for CORS issues

### Games Not Loading
1. Verify Bearer token in `app/data/gamezop.js`
2. Check API endpoint status
3. Check browser console for errors
4. Verify API route at `/api/gamezop`

---

## Future Enhancements

### Planned Features
- [ ] User authentication & saved tools
- [ ] Tool comparison feature
- [ ] Advanced filtering & sorting
- [ ] User reviews & ratings
- [ ] Newsletter subscription
- [ ] Dark mode
- [ ] Multiple language support
- [ ] AI-powered tool recommendations

### Potential Schema Additions
- [ ] AboutSchema for About page
- [ ] AuthorSchema for author pages  
- [ ] Review schema for tool reviews
- [ ] Rating schema with actual user ratings

---

## Contact & Support

**Developer:** Nishant Viroja
**GitHub:** https://github.com/Nishantviroja
**Live Site:** https://fizoval.com

---

## Last Updated
December 17, 2025 - Comprehensive SEO overhaul with enhanced schemas and organized structure.

