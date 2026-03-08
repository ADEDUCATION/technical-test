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

```
src/
├── app/
│   ├── page.tsx                    # Home page
│   ├── quiz/
│   │   └── page.tsx                # Quiz page
│   ├── results/
│   │   └── page.tsx                # Results page
│   └── dev/icons/
│       └── page.tsx                # Lists custom icons (dev only, hidden in prod)
├── components/
│   ├── ui/                         # shadcn/ui components (auto-generated, do not edit)
│   ├── home/                       # Home page components
│   ├── quiz/                       # Quiz page components
│   ├── results/                    # Results page components
│   └── ... shared components       # Shared components
├── data/
│   ├── schools-data.json           # Schools, formations and quiz questions data
│   └── constants.ts                # Card configs and static UI constants
├── domain/
│   ├── scoring.ts                  # Formation matching algorithm
│   └── quizReducer.ts              # Quiz state reducer (pure logic)
├── hooks/
│   └── useQuiz.ts                  # Quiz state management hook
├── lib/
│   └── utils.ts                    # Tailwind class merging utility (cn)
└── types/
    └── index.ts                    # TypeScript interfaces and types
```

## Tech Choices

### Stack

#### App Router over Pages Router

Next.js App Router was chosen as required by the brief. It enables React Server Components by default, which improves initial load performance for static content like the home page, and aligns with the current Next.js direction.

#### shadcn/ui

shadcn/ui was chosen as required by the brief. Unlike traditional component libraries, components are copied into the codebase and fully owned — making them easy to customize without fighting library abstractions or overriding styles.

#### Separating UI from Business Logic

The codebase is deliberately split into three concerns:

- `domain/` — pure TypeScript business logic (scoring algorithm, quiz state reducer) with no React dependency. This code could run in a CLI or a different framework without modification.
- `hooks/` — React-specific state management that bridges the domain logic with the UI.
- `components/` — UI only, no business logic.

This makes the scoring algorithm independently testable and keeps components focused on rendering.

### `useReducer` for Quiz State

Quiz state (current question index, answers map, completion status) is managed with `useReducer` rather than multiple `useState` calls. This centralises all state transitions in one place (`quizReducer.ts`), making the logic easier to reason about, debug, and extend.

The reducer handles six actions: `ANSWER_QUESTION`, `NEXT_QUESTION`, `PREV_QUESTION`, `GO_TO_QUESTION`, `RESET_QUIZ`, and `RESTORE_FROM_STORAGE`. The `GO_TO_QUESTION` action in particular powers the segmented progress bar, which lets users navigate back to any previously answered question.

State is persisted to `localStorage` on every change and restored on mount, so users don't lose their progress on page refresh.

### Scoring Algorithm

The matching algorithm (`domain/scoring.ts`) works in four steps:

1. **Build tag scores** — each answer carries a `tag → score` map; scores are summed across all answers.
2. **Score each formation** — a formation's base score is the sum of its matched tags' scores. Only positive matches contribute.
3. **Apply level bonus** — +10 if the student's answers indicate a Bachelor or Mastère preference and the formation matches.
4. **Apply alternance bonus** — +5 if alternance is desired and the formation offers it.
5. **Sort** — formations ranked by total score descending, matched tag count as tiebreaker.
6. **Return top 3** — top result is the primary recommendation, next two are alternatives.

### Data as JSON

All schools, formations, and quiz questions live in a single `schools-data.json` file. This makes content easy to update without touching application code, and keeps the door open for replacing it with an API call in the future.

## Difficulties & Solutions

### Layered card layout (results page)

The recommendation cards required a specific visual layering: a position badge half-overlapping the top of a photo, which itself overlaps the top of the card content below it. Achieving this with CSS stacking (z-index + negative margins) while keeping the components cleanly separated required isolating each layer into its own component (`RecommendationPosition`, `RecommendationImage`) with explicit z-index values (`z-30`, `z-20`, `z-10`) on the parent wrapper.

### Quiz state persistence

Saving quiz state to `localStorage` introduced a subtle hydration mismatch: the server renders with the initial empty state, but the client immediately restores a saved state on mount. This was resolved by treating the restore as a one-time effect on mount, keeping the initial render lightweight and consistent with the server output.

## Time Spent

| Task                                                     | Time      |
| -------------------------------------------------------- | --------- |
| Create work plan                                         | 30 min    |
| Go through material (README, data, Figma)                | 1h 30     |
| Project setup: installing deps & setting up architecture | 1h        |
| Setting up types                                         | 30 min    |
| Scoring algorithm                                        | 2h        |
| Quiz state                                               | 1h 30 min |
| Home page (3D cards, animations)                         | 2h        |
| Quiz page (state, UI, progress bar)                      | 3h        |
| Results page & recommendation cards                      | 4h        |
| Final polish                                             | 2h        |
| **Total**                                                | **~18h**  |
