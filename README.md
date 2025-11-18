# AutoGenesis AI Platform

A Next.js-based AI platform with comprehensive UI components and TypeScript support.

## Features

- **Modern UI Components**: Complete set of shadcn/ui components
- **TypeScript**: Full type safety throughout the application
- **Next.js Framework**: Built on the latest Next.js features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Extensive collection of pre-built UI components

## Project Structure

This project currently has UI components in the root directory. These should be organized into a proper structure:

```
AutoGenesis-AI-Platform/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/
│   │   └── ui/          # UI components (move all .tsx files here)
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
├── public/              # Static assets
├── package.json
├── tsconfig.json
└── next.config.mjs
```

## Installation

### Prerequisites
- Node.js 18 or higher
- pnpm (recommended) or npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Garrettc123/AutoGenesis-AI-Platform.git
cd AutoGenesis-AI-Platform
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available UI Components

The project includes the following components (currently in root, should be in src/components/ui/):

- **Layout**: Accordion, Card, Tabs, Dialog, Sheet, Drawer
- **Forms**: Input, Button, Checkbox, Radio, Select, Textarea, Switch
- **Navigation**: Breadcrumb, Menubar, Navigation Menu, Pagination
- **Feedback**: Alert, Toast, Progress, Skeleton, Spinner
- **Data Display**: Table, Badge, Avatar, Calendar, Chart
- **Overlay**: Popover, Tooltip, Hover Card, Context Menu, Dropdown Menu
- **Specialized**: Carousel, Collapsible, Resizable, Scroll Area, Sidebar

## Configuration

### components.json

The project uses shadcn/ui with the following configuration:
```json
{
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## Development

### Building for Production

```bash
pnpm build
# or
npm run build
```

### Running Production Build

```bash
pnpm start
# or
npm start
```

## To-Do

- [ ] Reorganize UI components into proper directory structure
- [ ] Create main application pages
- [ ] Add application-specific logic and features
- [ ] Set up proper routing
- [ ] Add authentication
- [ ] Implement AI features
- [ ] Add tests
- [ ] Configure CI/CD

## Technologies

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Author

Garrettc123
