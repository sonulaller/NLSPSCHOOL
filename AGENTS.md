# NLSPSCHOOL - Project Changes Log

## Overview
This file tracks all changes, commits, and updates made to the NLSPSCHOOL project.

---

## Change Log

| Date | Author | Change Description | Commit Hash |
|------|--------|-------------------|-------------|
| 2026-08-25 | Sonu | Created AGENTS.md to track project changes | - |

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

interface SeoProps {
  title: string;
  description: string;
}

export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${window.location.origin}${window.location.pathname}`;
  }, [title, description]);

  return null;
}
```
