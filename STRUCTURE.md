# AutoGenesis AI Platform - Project Structure

## Current Issues

All UI components are currently in the root directory. This needs to be reorganized for proper Next.js structure.

## Target Structure

```
AutoGenesis-AI-Platform/
├── src/
│   ├── app/                      # Next.js 14+ app directory
│   │   ├── layout.tsx            # Root layout (move from root)
│   │   ├── page.tsx              # Home page (move from root)
│   │   ├── api/                  # API routes
│   │   └── (routes)/            # App routes
│   │
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   │   ├── accordion.tsx    # Move all .tsx from root here
│   │   │   ├── alert.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── button-group.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── empty.tsx
│   │   │   ├── field.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── input-group.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── item.tsx
│   │   │   ├── kbd.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── spinner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   └── tooltip.tsx
│   │   │
│   │   └── features/            # Feature-specific components
│   │
│   ├── lib/
│   │   └── utils.ts             # Utility functions (move from root)
│   │
│   ├── hooks/
│   │   ├── use-toast.ts         # Move from root
│   │   └── use-mobile.tsx       # Move from root
│   │
│   └── styles/
│       └── globals.css          # Move from root
│
├── public/                      # Static assets
│   ├── placeholder-logo.svg    # Move from root
│   ├── placeholder-logo.png    # Move from root
│   ├── placeholder-user.jpg    # Move from root
│   └── placeholder.jpg         # Move from root
│
├── .gitignore                   # Already exists
├── components.json              # Already exists
├── next.config.mjs              # Already exists
├── package.json                 # Needs dependencies added
├── pnpm-lock.yaml              # Needs regeneration
├── postcss.config.mjs          # Already exists
├── tsconfig.json               # Already exists
└── README.md                    # Already exists
```

## Files to Move

### From Root to src/components/ui/
- All *.tsx files (except page.tsx, layout.tsx)
- Total: ~45 component files

### From Root to src/app/
- layout.tsx
- page.tsx

### From Root to src/lib/
- utils.ts

### From Root to src/hooks/
- use-toast.ts
- use-mobile.tsx

### From Root to src/styles/
- globals.css

### From Root to public/
- All image files (*.svg, *.png, *.jpg)

## Migration Steps

1. Create directory structure:
   ```bash
   mkdir -p src/{app,components/ui,lib,hooks,styles}
   mkdir -p public
   ```

2. Move components:
   ```bash
   # Move UI components
   mv *.tsx src/components/ui/ (except page.tsx and layout.tsx)
   
   # Move app files
   mv page.tsx layout.tsx src/app/
   
   # Move utilities
   mv utils.ts src/lib/
   mv use-*.{ts,tsx} src/hooks/
   
   # Move styles
   mv globals.css src/styles/
   
   # Move images
   mv placeholder*.{svg,png,jpg} public/
   ```

3. Update imports in all files:
   ```typescript
   // Old: import { Button } from './button'
   // New: import { Button } from '@/components/ui/button'
   ```

4. Regenerate lock file:
   ```bash
   rm pnpm-lock.yaml
   pnpm install
   ```

## Package.json Requirements

Ensure these dependencies are in package.json:

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest",
    "lucide-react": "latest",
    "recharts": "latest"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

## Components Inventory

### Layout Components (7)
- accordion, card, tabs, dialog, sheet, drawer, sidebar

### Form Components (9)  
- input, button, checkbox, radio-group, select, textarea, switch, field, form

### Navigation Components (4)
- breadcrumb, menubar, navigation-menu, pagination

### Feedback Components (6)
- alert, toast, progress, skeleton, spinner, toaster

### Data Display Components (5)
- table, badge, avatar, calendar, chart

### Overlay Components (6)
- popover, tooltip, hover-card, context-menu, dropdown-menu, alert-dialog

### Specialized Components (8)
- carousel, collapsible, resizable, scroll-area, button-group, toggle, toggle-group, separator

### Utility Components (4)
- empty, item, kbd, sonner

### Helper Components (2)
- aspect-ratio, label

## After Reorganization

Once reorganized:
1. Update all import paths
2. Test build: `pnpm build`
3. Verify all components work
4. Update README with new structure
5. Add application-specific pages
6. Implement AI features

## Automation Script

Create `reorganize.sh` to automate the migration:

```bash
#!/bin/bash
# This script reorganizes the project structure
# Run from project root

set -e

echo "Creating directory structure..."
mkdir -p src/{app,components/ui,lib,hooks,styles} public

echo "Moving files..."
# Add file moving commands here

echo "Done! Update imports next."
```

## Priority Actions

1. **Immediate**: Create src/ directory structure
2. **High**: Move all UI components to src/components/ui/
3. **High**: Move app files to src/app/
4. **Medium**: Update all import paths
5. **Medium**: Regenerate pnpm-lock.yaml
6. **Low**: Add application logic

---

**Note**: This reorganization will make the project production-ready and maintainable.
