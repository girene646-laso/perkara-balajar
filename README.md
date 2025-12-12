# Foxxy.dev

A fast, accessible personal portfolio built with React + TypeScript.

## Quick Start

```bash
# Install & run
npm install
npm run dev

# Build
npm run build
```

## Tech Stack

- React 18 + TypeScript
- Vite (fast builds)
- CSS custom properties (no frameworks)
- PWA support
- 95+ Lighthouse score

## Project Structure

```
src/
  ├── components/      # React components
  ├── lib.ts          # Data, schemas, utilities
  ├── styles/         # CSS with custom properties
  ├── App.tsx         # Main layout
  └── main.tsx        # Entry point

config/               # ESLint, Prettier, TypeScript
public/              # Static files, PWA
```

## Add Projects

Edit `src/lib.ts` - projects array:

```typescript
{
  id: 'project-id',
  name: 'Project Name',
  description: 'Short description',
  problem: 'The challenge',
  solution: 'How you solved it',
  role: 'Your role',
  outcome: 'Results',
  tech: ['React', 'TypeScript'],
  repo: 'https://github.com/...'
}
```

## Customize

- **Name/links:** `src/components/Hero.tsx`, `ContactSection.tsx`
- **Colors:** CSS variables in `src/styles/global.css`
- **Skills:** `src/components/SkillsSection.tsx`

## Deploy

Works on Vercel, Netlify, or any static host.

```bash
npm run build  # Creates dist/ folder
```

## Links

- GitHub: [@girene646-laso](https://github.com/girene646-laso)
- Email: farrellfyelo@gmail.com
