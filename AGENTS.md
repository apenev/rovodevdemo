# Team 25 EU 2025 - Project Guide

## Project Overview

- **Purpose**: A conference website for Team 25 EU Sydney 2025 featuring real speaker profiles
- **Event Date**: Oct 7-9, 2025
- **Location**: Barcelona, Spain
- **Language**: TypeScript
- **Framework**: React 18 with Vite
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with dark theme matching official Atlassian event site
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query (React Query) v5
- **Build Tool**: Vite with SWC for fast compilation
- **API Integration**: Atlassian Confluence API for real employee profile pictures

## ⚠️ Real Speaker account ids

Here are the account IDs for the people on your list (where available):

1. Jovana Dunisijevic - Senior Technical Evangelist  
   **Account ID:** 5f61d740cacd8300776a100a

2. Shane Wolf - Senior Engineering Manager  
   **Account ID:** 5e68a34641833c0d0b6a51c2

3. Willer Liu - Senior Backend Engineer  
   **Account ID:** 6362283d76b91b62562f6204

4. Axel Sooriah - Product Management Evangelist  
   **Account ID:** 712020:16597855-e1be-4cbb-85f3-a86e8fb5af22

5. Laurena Alves - Head of Product Marketing  
   **Account ID:** 712020:e5e8f877-09de-4152-9a2e-6b228a3c4c8b

6. Andrew Boyagi - Customer CTO  
   **Account ID:** 70121:13d21423-5100-4f02-a622-3be56fc925b4

7. Matt Colman - Senior Engineering Manager  
   **Account ID:** 5ebbbb4c96bbcb0b85b17f12

8. Ryan Jiang - Principal Product Manager  
   **Account ID:** 63ad4e922c70aae1e6fa1f7c

9. Melissa Miller - Product Marketing Manager  
   **Account ID:** 5efc5cde3bfa9f0bb0836b61

10. Mike Cannon-Brookes - CEO & Co-Founder  
    **Account ID:** See below a better place to find his avatar

11. Anu Bharadwaj - President  
    **Account ID:** 557057:48ccc048-9a9d-4c88-aac2-a8f66d577946

12. Carlos Sainz - F1 Williams Driver  
    **Account ID:** See below a better place to find his avatar

13. Chris Clarke - Head of Product Bitbucket Cloud  
    **Account ID:** 557057:072705ea-f2d3-46fb-8f55-82110600d634

14. Chris Davidson - Lead Solutions Engineer  
    **Account ID:** 5e7dc3331e65980c42bbc7c1

15. Taroon Mandhana - Head of Product Engineering  
    **Account ID:** 638712ee77acd224b3411fa5

16. Sherif Mansour - Distinguished Product Manager  
    **Account ID:** 557057:76693d7c-2bd2-4204-97d2-89acd3b273ae

**Avatar urls**
Use the format `https://hello.atlassian.net/wiki/aa-avatar/ACCOUNT_ID`

**Mike and Carlos urls**
Find better avatar images for Mike and Carlos by opening https://events.atlassian.com/teameurope/speakers

## Key Technologies & Dependencies

### Core Stack

- React 18.3.1 with TypeScript 5.5.3
- Vite 5.4.1 as build tool with React SWC plugin
- Tailwind CSS 3.4.11 with tailwindcss-animate
- shadcn/ui component system

### UI Components & Libraries

- Radix UI primitives for accessible components
- Lucide React for icons
- Class Variance Authority (CVA) for component variants
- clsx and tailwind-merge for conditional styling
- Sonner for toast notifications

### Development Tools

- ESLint 9 with TypeScript ESLint
- PostCSS with Autoprefixer

## Project Structure

### Root Configuration Files

- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite configuration with path aliases
- `tailwind.config.ts` - Tailwind CSS configuration with custom theme
- `tsconfig.json` - TypeScript configuration with path mapping
- `components.json` - shadcn/ui configuration
- `eslint.config.js` - ESLint configuration

### Source Directory (`src/`)

- `main.tsx` - Application entry point
- `App.tsx` - Root component with providers and routing
- `index.css` - Global styles and CSS custom properties
- `vite-env.d.ts` - Vite type definitions

### Pages (`src/pages/`)

- `Index.tsx` - Main event page with hero section, benefits, and speaker showcase
- `NotFound.tsx` - 404 error page with navigation

### Components (`src/components/`)

- `Header.tsx` - Site header with Atlassian logo and event details
- `Speakers.tsx` - Grid layout for speakers with dark theme styling

### UI Components (`src/components/ui/`)

- Complete shadcn/ui component library
- All components follow Radix UI patterns
- Styled with Tailwind CSS and dark theme variables

### Utilities (`src/lib/`)

- `utils.ts` - Utility functions including `cn()` for class merging

### Hooks (`src/hooks/`)

- `use-mobile.tsx` - Mobile detection hook
- `use-toast.ts` - Toast notification hook

## Development Guidelines

### Code Style & Conventions

- Use TypeScript for all new files
- Follow React functional component patterns
- Use named exports for components
- Implement proper TypeScript interfaces for props
- Use the `cn()` utility for conditional class names

### Component Development

- Build components using shadcn/ui patterns
- Use Radix UI primitives for accessibility
- Implement proper TypeScript interfaces
- Follow the established component structure in `src/components/ui/`
- Use CSS custom properties for theming

### Styling Guidelines

- Use Tailwind CSS utility classes
- Leverage CSS custom properties defined in `index.css`
- Support both light and dark themes
- Use the established color palette and design tokens
- Apply consistent spacing and typography scales

### File Organization

- Place reusable components in `src/components/`
- Put UI primitives in `src/components/ui/`
- Store page components in `src/pages/`
- Keep data files in `src/asset/speakers`
- Maintain utilities in `src/lib/`

### Import Conventions

- Use path aliases (`@/` for `src/`)
- Import UI components from `@/components/ui/`
- Import utilities from `@/lib/utils`
- Group imports: external libraries, internal components, relative imports

### TypeScript Configuration

- Strict mode is disabled for flexibility
- Path mapping configured for clean imports
- Skip lib check enabled for faster compilation
- Allow JavaScript files for gradual migration

## Available Scripts

- `npm run build` - Production build
- `npm run build:dev` - Development build (recommended for testing)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Design System

- if asked about rebranding the website to match the Atlassian colour, look and feel, then use these instructions

### Color Scheme


- **Dark Theme**: Matches official Atlassian TEAM EU event site

- **Primary Background**: `#0F1419` (Dark Navy)

- **Secondary Background**: `#1A1F2E` (Lighter Navy)

- **Card Background**: `#2A3441` (Dark Gray)

- **Accent Colors**: `#3B82F6` (Atlassian Blue)

- **Text**: White and gray variants for high contrast

### Typography

- **Large, bold headings** for impact
- **White text** on dark backgrounds
- **Blue accents** for interactive elements
- **Professional spacing** and hierarchy

### Layout Patterns

- **Section-based layout** with alternating backgrounds
- **Responsive grid layouts** for speakers
- **Hero section** with event details
- **Benefits section** with icon cards
- **Hover animations** and smooth transitions

### Atlassian Branding
 
- if asked about rebranding the website to match the Atlassian colour, look and feel, then use these instructions

- **Custom Atlassian logo** SVG in header

- **Official event messaging** and content

- **Professional dark theme** matching event site

- **Real employee profile pictures** from Confluence API

## Best Practices

### Component Development

- Always define TypeScript interfaces for props
- Use proper semantic HTML elements
- Implement accessible patterns with Radix UI
- Add hover states and transitions for interactivity
- Use the `cn()` utility for conditional styling

### Performance

- Leverage Vite's fast HMR for development
- Use React.memo() for expensive components when needed
- Optimize images and assets
- Implement proper code splitting for larger applications

### Accessibility

- Use Radix UI primitives for built-in accessibility
- Provide proper alt text for images
- Ensure keyboard navigation works
- Maintain proper color contrast ratios

### State Management

- Use TanStack Query for server state
- Keep local state minimal and close to usage
- Use React's built-in state management for simple cases

## Common Patterns

### Creating New Components

```tsx
import { cn } from "@/lib/utils";

interface ComponentProps {
  className?: string;
  // other props
}

export const Component = ({ className, ...props }: ComponentProps) => {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {/* component content */}
    </div>
  );
};
```

### Adding New Pages

1. Create component in `src/pages/`
2. Add route to `src/App.tsx`
3. Follow existing page structure patterns

### Styling Components

- Use Tailwind utilities first
- Leverage CSS custom properties for theming
- Apply consistent spacing and typography
- Add hover states and transitions

## Troubleshooting

### Common Issues

- Path resolution: Ensure `@/` alias is used correctly
- TypeScript errors: Check interface definitions and imports
- Styling issues: Verify Tailwind classes and CSS custom properties
- Build errors: Check for missing dependencies or configuration issues

### Development Server

- Runs on `http://localhost:8080`
- Hot module replacement enabled

# Workspace notes

- if asked about a Jira ticket with T25EU issue key then use the site https://one-atlas-dvao.atlassian.net/jira/software/projects/T25EU/boards/211
- if asked about a Jira ticket with T2ET issue key then use the site https://one-atlas-dvao.atlassian.net/jira/software/projects/T2ET/boards/244

## Jira write operations

- DO NOT transition or make any write operations to Jira tickets unless asking for permission first

