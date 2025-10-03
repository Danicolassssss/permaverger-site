# Permaverger — Site vitrine (Next.js + TypeScript + Tailwind v4 + shadcn/ui)

Projet vitrine pour Permaverger, inspiré d’un style clean et moderne, adapté au thème permaculture/verger.

- Stack: Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui
- Structure prête pour Blog et Tutoriels
- Composants UI réutilisables et thémés (boutons, cartes, navigation, etc.)

## Démarrage

```bash
npm run dev
```

Ouvrir http://localhost:3000

Build et production :

```bash
npm run build
npm run start
```

## Structure principale

- `src/app/`
  - `page.tsx` — page d’accueil (Hero, piliers, newsletter, contact)
  - `layout.tsx` — layout global avec Header et Footer
  - `globals.css` — styles globaux + Tailwind v4 (@import "tailwindcss")
  - `not-found.tsx` — page 404
  - `blog/` — page d’index blog (`/blog`), prête pour accueillir des sous-pages
  - `tutorials/` — page d’index tutoriels (`/tutorials`), prête pour des sous-pages
- `src/components/ui/` — composants shadcn/ui (button, card, badge, input, textarea, navigation-menu, sheet)
- `src/components/site/` — Header et Footer
- `tsconfig.json` — TypeScript + alias `@/*` activé (requis par shadcn/ui)

## Blog & Tutoriels

Deux approches possibles :
- Pages TSX: créez un dossier par article/tutoriel avec `page.tsx`, par ex. `src/app/blog/mon-article/page.tsx`.
- Markdown/MDX (optionnel): vous pourrez intégrer MDX ultérieurement si souhaité.

## shadcn/ui

Le projet est initialisé avec shadcn/ui et les composants suivants :
- `button`, `card`, `badge`, `input`, `textarea`, `navigation-menu`, `sheet`

Ajouter d’autres composants :

```bash
npx shadcn@latest add alert dialog dropdown-menu tabs accordion # etc.
```

Les composants sont accessibles via l’alias `@/components/ui/...` et prêts à être stylés.

## Style & Thème (Tailwind v4)

Tailwind v4 est déjà configuré via `src/app/globals.css`.

- Pour personnaliser les couleurs/tokens, modifiez la section `@theme inline` dans `globals.css`.
- Vous pouvez utiliser les classes Tailwind directement dans vos composants (`bg-green-600`, `text-muted-foreground`, etc.).
- Pour un branding plus fort (vert Permaverger), gardez une palette cohérente (ex: `bg-green-600 hover:bg-green-700`).

Exemple : ajouter/ajuster des tokens dans `@theme inline` puis utiliser `bg-primary` si vous définissez `--color-primary`.

## Déploiement (Vercel)

1. Build local :
   ```bash
   npm run build
   ```
2. Démarrage local (prod) :
   ```bash
   npm run start
   ```
3. Versionnez le dépôt et poussez sur GitHub :
   ```bash
   git init
   git add .
   git commit -m "chore: init Permaverger site"
   git branch -M main
   git remote add origin <votre_repo_git>
   git push -u origin main
   ```
4. Connectez le repo à Vercel (import du projet), puis laissez le déploiement automatique se faire à chaque `git push`.

## Notes

- L’alias d’import `@/*` est activé car requis par l’outil shadcn/ui. Si vous ne souhaitez pas l’utiliser ailleurs, continuez à importer avec des chemins relatifs, cela reste compatible.
- La navigation inclut des liens vers `/`, `/blog`, `/tutorials` et l’ancre `/#decouvrir` sur la home.

## Idées de next steps

- MDX pour écrire les articles/tutos en Markdown.
- Pages détaillées pour les exemples listés (blog et tutoriels).
- Ajout d’images/galeries (optimisées via `next/image`).
- Personnalisation fine du thème (tokens Tailwind v4) et éventuel Dark Mode.
