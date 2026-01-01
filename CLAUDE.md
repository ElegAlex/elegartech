# ElegarTech - Contexte pour Claude

## Projet

Blog technique francophone déployé sur **https://elegartech.fr**

## Stack technique

- **Framework** : Astro 5 + MDX
- **Styling** : Tailwind CSS + @tailwindcss/typography
- **Recherche** : Pagefind (généré au build)
- **Commentaires** : Giscus (GitHub Discussions)
- **Déploiement** : GitHub Pages via GitHub Actions
- **Repo** : https://github.com/ElegAlex/elegartech

## Structure clé

```
src/
├── content/
│   ├── config.ts          # Schéma Zod des collections
│   ├── authors/admin.json # Auteur par défaut
│   └── blog/YYYY/slug/    # Articles MDX
├── components/            # Composants Astro
├── layouts/
│   ├── BaseLayout.astro   # Layout principal
│   └── BlogPost.astro     # Template article
├── pages/
│   ├── index.astro        # Homepage
│   ├── blog/[...slug].astro
│   ├── categories/[category].astro
│   └── tags/[tag].astro
└── styles/global.css      # CSS + variables dark/light
```

## Catégories (SANS "Tutoriels")

- IA
- Open Source
- Développement
- Systèmes
- Sécurité
- Analyses

## Workflow articles

1. L'utilisateur dépose un `.md` dans `drafts/`
2. Demande de conversion à Claude
3. Créer `src/content/blog/YYYY/slug/index.mdx` avec frontmatter complet
4. **Supprimer** le fichier source de `drafts/`
5. Commit + push = déploiement auto

Voir `drafts/README.md` pour le détail du format.

## Frontmatter type

```yaml
---
title: "Titre de l'article"
description: "Description SEO (max 160 caractères)"
date: 2026-01-01
categories: ["IA", "Open Source"]
tags: ["tag1", "tag2"]
author: admin
draft: false
featured: false
---
```

## Commandes

```bash
npm run dev      # Serveur local (localhost:4321)
npm run build    # Build + Pagefind
npm run preview  # Preview du build
```

## Points d'attention

- **Dark mode par défaut** : Les styles prose sont configurés pour dark mode, avec overrides CSS pour light mode dans `global.css`
- **Date des articles** : Ne pas mettre de date future, sinon l'article n'apparaît pas
- **Catégories** : Toujours utiliser celles définies dans `CATEGORIES` (pages/index.astro, pages/categories/[category].astro)
- **Images** : Placer dans le dossier de l'article (`src/content/blog/YYYY/slug/image.png`) et référencer avec `./image.png`

## Déploiement

Push sur `main` → GitHub Actions build → GitHub Pages

Le domaine `elegartech.fr` est configuré avec HTTPS.
