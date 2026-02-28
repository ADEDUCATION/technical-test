# Orientation Qiuz — AD Education

An quiz helping prospective students discover which AD Education programme best matches their profile.

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- Access to the `@ad-education/ui` private npm registry (API key required)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
```

### Available Scripts

| Command             | Description                             |
| ------------------- | --------------------------------------- |
| `pnpm dev`          | Start development server with Turbopack |
| `pnpm build`        | Build for production                    |
| `pnpm start`        | Start production server                 |
| `pnpm lint`         | Run ESLint                              |
| `pnpm format`       | Format all files with Prettier          |
| `pnpm format:check` | Check formatting without writing        |

## Tech Stack

| Technology   | Version | Purpose                |
| ------------ | ------- | ---------------------- |
| Next.js      | 16      | Framework (App Router) |
| TypeScript   | 5       | Type safety            |
| Tailwind CSS | 4       | Styling                |
| shadcn/ui    | latest  | UI components          |
| pnpm         | 10      | Package manager        |

## Project Structure

TODO : something like this

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── quiz/
│   │   └── page.tsx      # Quiz page
│   └── results/
│       └── page.tsx      # Results page
├── components/
│   ├── ui/               # shadcn/ui components (auto-generated)
│   └── quiz/             # Custom quiz components
├── data/
│   └── schools-data.json # Schools, formations and questions data
├── lib/
│   └── scoring.ts        # Matching algorithm
└── types/
    └── index.ts          # TypeScript interfaces
```

## Tech Choices

### Stack

#### App Router over Pages Router

Next.js App Router was used as required by the brief. It enables React Server Components by default, which improves initial load performance for static content like the home page.

#### shadcn/ui

shadcn/ui was chosen as required. Unlike traditional component libraries, components are copied into the codebase and fully owned — making them easy to customize to match the design.

### Scoring Algorithm

TODO

## Difficulties & Solutions

TODO

## Time Spent

TODO
