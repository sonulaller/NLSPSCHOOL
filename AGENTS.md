# NLSPSCHOOL - Project Changes Log

## Overview
This file tracks all changes, commits, and updates made to the NLSPSCHOOL project.

---

## Change Log

| Date | Author | Change Description | Commit Hash |
|------|--------|-------------------|-------------|
| 2026-08-25 | Sonu | Created AGENTS.md to track project changes | - |
| 2026-09-08 | Sonu | SEO improvements: semantic HTML tags, JSON-LD structured data, robots.txt + sitemap.xml, alt text, lazy loading, image optimization, removed unused react-query | 6d12ebb |

---

## Project Info
- **Repository:** https://github.com/sonulaller/NLSPSCHOOL
- **Branch:** main
- **Created:** 2026-08-25

---

## SCO.md Folder Content

### Seo.tsx

```tsx
import { useEffect } from "react";

const SITE_URL = "https://www.nlspschool.example.com";

interface SeoProps {
  title: string;
  description: string;
  jsonLd?: object | object[];
}

const schoolSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "School"],
  name: "New Little Star Public School",
  alternateName: "NLSP School",
  url: SITE_URL,
  logo: `${SITE_URL}/school-logo.jpg`,
  description:
    "New Little Star Public School (NLSP School), Kasan, District Kaithal, Haryana — a CBSE-affiliated school offering quality education, modern facilities, admissions and academics from Nursery to Class XII.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kichhana Road, Kasan",
    addressLocality: "Kasan",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  email: "newlittlestarkasan@gmail.com",
};

function upsertMeta(name: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function upsertCanonical() {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = `${window.location.origin}${window.location.pathname}`;
}

function injectJsonLd(schemas: object[]) {
  document.querySelectorAll("script[data-seo-jsonld]").forEach((el) => el.remove());
  schemas.forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoJsonLd = "true";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export default function Seo({ title, description, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;

    upsertMeta("description", description);
    upsertCanonical();

    const extraSchemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    injectJsonLd([schoolSchema, ...extraSchemas]);
  }, [title, description, jsonLd]);

  return null;
}
```
