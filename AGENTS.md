# AGENTS.md - Development Guidelines

## Build/Test/Lint Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (Next.js built-in)
- No test framework configured

## Code Style Guidelines

- **Framework**: Next.js 15 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS with custom theme variables
- **Imports**: Use `@/` alias for root imports, group external imports first
- **Components**: Export default functions, use PascalCase for component names
- **Props**: Use TypeScript interfaces, destructure in function parameters
- **Naming**: camelCase for variables/functions, PascalCase for components/types
- **Files**: kebab-case for file names, .tsx for components, .ts for utilities
- **Metadata**: Export metadata objects for page SEO
- **Theme**: Support dark/light mode with next-themes, use CSS custom properties
- **Layout**: Use semantic HTML, responsive design with Tailwind breakpoints
- **Error Handling**: Use TypeScript strict mode, handle async operations properly
- **Comments**: Minimal comments, prefer self-documenting code
- **Formatting**: 2-space indentation, semicolons, double quotes for strings

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components with ui/ subfolder
- `public/` - Static assets and images
