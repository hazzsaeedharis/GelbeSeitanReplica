# Gelbe Seiten Replica

A modern, production-ready replica of Gelbe Seiten (German business directory) built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📋 Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn

## 📁 Project Structure

```
GelbeSeitanReplica/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header & Footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   └── [branch]/
│       └── page.tsx         # Dynamic branch pages
├── components/
│   ├── layout/              # Header, Footer
│   └── sections/            # SearchForm, Awards, Categories
├── lib/
│   └── data/
│       └── branches.ts      # Branch categories data
├── public/
│   ├── fonts/               # TheSansB4 fonts
│   ├── images/              # Logos, awards, images
│   └── icons/               # SVG icons
└── tailwind.config.ts       # Tailwind configuration
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.3 (App Router)
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 4.1.18
- **React:** 19.2.3

## 🎨 Key Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Custom fonts (TheSansB4)
- ✅ SEO optimized
- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Clean, maintainable code

## 📦 Core Dependencies

```json
{
  "next": "^16.1.3",
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "typescript": "^5.9.3",
  "tailwindcss": "^4.1.18"
}
```

## 🎯 Available Routes

- `/` - Homepage with search and branch categories
- `/[branch]` - Dynamic branch pages (e.g., `/arzt`, `/elektroinstallation`)

## 🔧 Development Guide

### Adding New Components

Create components in the appropriate directory:

```typescript
// components/sections/NewSection.tsx
export default function NewSection() {
  return <div>New Section</div>;
}
```

### Adding New Branch Categories

Edit `lib/data/branches.ts`:

```typescript
export const branchCategories: BranchCategory[] = [
  {
    title: "Your Category",
    branches: [
      { name: "Branch Name", href: "/branchenbuch/branche/slug" },
    ],
  },
];
```

### Customizing Styles

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      'gs-yellow': '#ffdc00',
      'gs-black': '#1e1e1e',
    }
  }
}
```

## 📝 Code Standards

- **TypeScript:** All files use `.tsx` or `.ts` extensions
- **Components:** Use functional components with TypeScript interfaces for props
- **Styling:** Use Tailwind CSS utility classes
- **Imports:** Use absolute imports with `@/` prefix
- **Naming:** PascalCase for components, camelCase for functions

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Manual Deployment

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

## 🎨 Design System

### Colors
- Primary Yellow: `#ffdc00`
- Black: `#1e1e1e`
- White: `#ffffff`

### Typography
- Font: TheSansB4
- Weights: 300 (Light), 400 (Plain), 700 (Bold)

## 🔐 Environment Variables

No environment variables required for basic functionality.

## 🧪 Testing

```bash
# Run linter
npm run lint

# Type checking
npx tsc --noEmit
```

## 📈 Performance

- Next.js Image optimization
- Font preloading
- CSS optimization with Tailwind
- Static generation where possible

## 🤝 Contributing

This is a demonstration project. Feel free to fork and customize for your needs.

### Getting Started with Development

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature`
5. Make your changes
6. Test thoroughly: `npm run dev`
7. Build to verify: `npm run build`
8. Commit with clear messages
9. Push and create a pull request

## 📄 License

Educational use only. Original design by Gelbe Seiten (www.gelbeseiten.de).

## 🙏 Credits

- **Design Inspiration:** Gelbe Seiten
- **Framework:** Next.js by Vercel
- **Styling:** Tailwind CSS
- **Fonts:** TheSansB4

## 📞 Support

For questions or issues, please open a GitHub issue.

---

**Built with ❤️ using Next.js & Tailwind CSS**
