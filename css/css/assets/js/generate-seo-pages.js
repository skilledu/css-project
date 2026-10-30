const fs = require('fs');
const path = require('path');
const vm = require('vm');

// TODO: replace with real domain before deploying
const SITE_URL = 'https://REPLACE-WITH-REAL-DOMAIN.com';

// 1. Read and safely evaluate chapters.js
const dataPath = path.join(__dirname, 'chapters.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');
// Replace 'const topics =' with 'topics =' so it binds to the sandbox global
dataContent = dataContent.replace('const topics =', 'topics =');

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(dataContent, sandbox);
const topics = sandbox.topics;

if (!Array.isArray(topics)) {
    console.error('Failed to parse topics array from data-full.js');
    process.exit(1);
}

// Ensure output directory exists
const outDir = path.join(__dirname, '..', '..', 'topics');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

// 2. Build the slug list and mappings
const idCounts = {};
const processedTopics = topics.map((topic, index) => {
    idCounts[topic.id] = (idCounts[topic.id] || 0) + 1;
    let slug = topic.id;

    // Handle the duplicate IDs based on user constraints
    if (topic.id === 'colors') {
        slug = idCounts[topic.id] === 1 ? 'colors-basics' : 'colors-advanced';
    } else if (topic.id === 'text') {
        slug = idCounts[topic.id] === 1 ? 'text-basics' : 'text-overflow';
    }

    return { ...topic, slug, index };
});

// For Step 6, we generate all topics
processedTopics.forEach((topic) => {

    // Determine Prev/Next for navigation
    const prevTopic = topic.index > 0 ? processedTopics[topic.index - 1] : null;
    const nextTopic = topic.index < processedTopics.length - 1 ? processedTopics[topic.index + 1] : null;

    // 3. Meta description truncation (truncate at word boundary before 155 chars)
    let metaDescription = 'Comprehensive CSS tutorial chapter.';
    const pMatch = topic.content.match(/<p>([\s\S]*?)<\/p>/i);
    if (pMatch && pMatch[1]) {
        // Strip inner HTML tags
        let rawText = pMatch[1].replace(/<[^>]+>/g, '').trim();
        // Remove line breaks
        rawText = rawText.replace(/\s+/g, ' ');
        if (rawText.length > 155) {
            let truncated = rawText.substring(0, 155);
            const lastSpace = truncated.lastIndexOf(' ');
            if (lastSpace > 0) {
                truncated = truncated.substring(0, lastSpace);
            }
            metaDescription = truncated + '...';
        } else {
            metaDescription = rawText;
        }
        metaDescription = metaDescription.replace(/"/g, '&quot;');
    }

    let pageTitle = /^css\b/i.test(topic.title.trim())
        ? `${topic.title} | Skilledu Tutorial`
        : `CSS ${topic.title} | Skilledu Tutorial`;
    if (topic.slug === 'text-overflow') {
        pageTitle = 'CSS Text Overflow & Breaking | Skilledu Tutorial';
    }
    const pageUrl = `${SITE_URL}/topics/${topic.slug}.html`;

    // JSON-LD Creation (using proper objects and JSON.stringify)
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${SITE_URL}/`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "CSS Tutorial",
                "item": `${SITE_URL}/#topics`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": topic.title,
                "item": pageUrl
            }
        ]
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": pageTitle,
        "description": metaDescription,
        "author": {
            "@type": "Organization",
            "name": "Skilledu"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Skilledu",
            "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/assets/images/logo-light.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": pageUrl
        },
        "isPartOf": {
            "@type": "Course",
            "name": "Complete Interactive CSS Tutorial",
            "url": `${SITE_URL}/`
        }
    };

    // Construct the HTML document
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
    <meta name="description" content="${metaDescription}">

    <link rel="canonical" href="${pageUrl}">

    <!-- Open Graph Tags -->
    <meta property="og:title" content="${pageTitle}">
    <meta property="og:description" content="${metaDescription}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${SITE_URL}/assets/images/logo-light.png">
    <meta property="og:site_name" content="Skilledu">

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${pageTitle}">
    <meta name="twitter:description" content="${metaDescription}">
    <meta name="twitter:image" content="${SITE_URL}/assets/images/logo-light.png">

    <!-- Robots -->
    <meta name="robots" content="index, follow">
    <!-- Stylesheet -->
    <link rel="stylesheet" href="assets/styles/style.css">
    <style>
        .page-header { padding: 20px; background: var(--bg-surface, #fff); border-bottom: 1px solid var(--border, #e5e7eb); display: flex; justify-content: space-between; align-items: center; }
        .page-header a.logo-link { text-decoration: none; }
        .page-header img { height: 30px; }
        .page-header a.button { padding: 10px 15px; background: var(--primary, #3b82f6); color: #fff; text-decoration: none; border-radius: 6px; font-weight: 600; }
        .topic-content-main { max-width: 900px; margin: 40px auto; padding: 0 20px; }
        .page-nav { display: flex; justify-content: space-between; margin-top: 50px; padding-top: 20px; border-top: 1px solid var(--border, #e5e7eb); }
        .page-nav a { color: var(--primary, #3b82f6); font-weight: 600; text-decoration: none; }
        .page-footer { text-align: center; padding: 30px; margin-top: 40px; color: var(--text-muted, #6b7280); font-size: 0.9rem; }
    </style>

    <!-- Structured Data -->
    <script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
    </script>
    <script type="application/ld+json">
${JSON.stringify(articleSchema, null, 2)}
    </script>
</head>
<body>
    <script>window.__INITIAL_TOPIC__ = '${topic.slug}';</script>
    <header class="page-header">
        <a href="../index.html#topic-${topic.slug}" class="logo-link">
            <img src="assets/images/logo-light.png" alt="Skilledu" width="135" height="30">
        </a>
        <a href="../index.html#topic-${topic.slug}" class="button">Open in Interactive Tutorial</a>
    </header>

    <main class="topic-content-main">
        ${topic.content}

        <nav class="page-nav">
            ${prevTopic ? `<a href="${prevTopic.slug}.html">&larr; Previous Chapter: ${prevTopic.title}</a>` : '<span></span>'}
            ${nextTopic ? `<a href="${nextTopic.slug}.html">Next Chapter: ${nextTopic.title} &rarr;</a>` : '<span></span>'}
        </nav>
    </main>

    <footer class="page-footer">
        &copy; ${new Date().getFullYear()} Skilledu CSS Tutorial. All rights reserved.
    </footer>
</body>
</html>`;

    // Save file
    fs.writeFileSync(path.join(outDir, `${topic.slug}.html`), html, 'utf8');
    console.log(`Generated: /topics/${topic.slug}.html`);
});

// 4. Generate sitemap.xml
const today = new Date().toISOString().split('T')[0]; // // TODO: set actual last-modified dates
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

// Home page
sitemapXml += `
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>`;

// All 46 Topic pages
processedTopics.forEach(topic => {
    sitemapXml += `
  <url>
    <loc>${SITE_URL}/topics/${topic.slug}.html</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>`;
});

sitemapXml += `\n</urlset>`;
fs.writeFileSync(path.join(__dirname, '..', '..', 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Generated: sitemap.xml with ${processedTopics.length} URLs.`);

console.log('Sample generation complete.');
