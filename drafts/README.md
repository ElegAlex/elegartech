# Dossier de dépôt des articles

Dépose ici tes brouillons d'articles en **Markdown** (`.md`).

---

## Format attendu

```markdown
# Titre de l'article

Introduction / chapô de l'article...

## Section 1

Contenu...

## Section 2

Contenu...
```

---

## Processus de publication

1. **Déposer** : Place ton fichier `.md` dans ce dossier
2. **Demander la conversion** : Demande à Claude de convertir l'article
3. **Vérification** : L'article sera converti en MDX avec :
   - Frontmatter complet (title, description, date, categories, tags, etc.)
   - Placement dans `src/content/blog/YYYY/slug/index.mdx`
   - Suppression automatique du fichier source de ce dossier
4. **Review** : Vérifie le rendu en local avec `npm run dev`
5. **Publication** : Commit et push, le déploiement est automatique

---

## Catégories disponibles

- `IA` - Intelligence artificielle, machine learning
- `Open Source` - Projets et outils open source
- `Développement` - Programmation, frameworks, langages
- `Systèmes` - Linux, administration, infrastructure
- `Sécurité` - Cybersécurité, bonnes pratiques
- `Analyses` - Opinions, tendances, réflexions tech

---

## Métadonnées générées automatiquement

| Champ | Description |
|-------|-------------|
| `title` | Extrait du titre H1 |
| `description` | Résumé généré (160 caractères) |
| `date` | Date de conversion |
| `categories` | Catégories pertinentes (1-2) |
| `tags` | Mots-clés extraits du contenu |
| `author` | `admin` par défaut |
| `draft` | `false` pour publication immédiate |
| `featured` | `false` par défaut |

---

## Exemple de commande

```
Convertis l'article "mon-article.md" du dossier drafts
```

Claude s'occupera de tout le reste.
