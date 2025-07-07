# Components Architecture

This directory contains all React components organized by purpose and functionality.

## 📁 Directory Structure

```
components/
├── layout/          # Layout and navigation components
├── sections/        # Page sections and content blocks  
├── cards/           # Card-style components and containers
├── ui/              # Reusable UI components
├── forms/           # Form-related components
└── index.ts         # Central export file
```

## 🧩 Component Categories

### 🏗️ Layout (`layout/`)
Core navigation and structural components:
- `NavBar.tsx` - Responsive navigation with burger menu
- `Footer.tsx` - Site footer with links

### 📄 Sections (`sections/`)
Full-width page sections and content blocks:
- `HeroSection.tsx` - Homepage hero with CTA
- `AboutIntroSection.tsx` - Personal introduction
- `InfoSection.tsx` - General information blocks
- `ProjectsPreviewSection.tsx` - Homepage project showcase
- `AllServicesSection.tsx` - Complete service listing
- `ToolsSection.tsx` - Technology stack display
- `FinalCTASection.tsx` - Call-to-action footer

### 🃏 Cards (`cards/`)
Card-style components and containers:
- `ProjectCard.tsx` - Individual project showcase
- `ServiceCard.tsx` - Service offering cards
- `MiniServiceCard.tsx` - Compact service preview
- `Service.tsx` - Full-screen service sections

### 🎨 UI (`ui/`)
Reusable interface components:
- `Button.tsx` - Styled button variants
- `PageHeader.tsx` - Page title headers

### 📝 Forms (`forms/`)
Form components and inputs:
- `ContactForm.tsx` - Contact form with validation

## 🔄 Import Guidelines

### ✅ Recommended: Use Central Index
```typescript
// Import multiple components
import { 
  NavBar, 
  HeroSection, 
  ProjectCard, 
  ContactForm 
} from '@/components';

// Import single component
import { PageHeader } from '@/components';
```

### ⚠️ Alternative: Direct Imports
```typescript
// For specific use cases
import NavBar from '@/components/layout/NavBar';
import ProjectCard from '@/components/cards/ProjectCard';
```

## 🎯 Component Naming Convention

- **PascalCase** for component names
- **Descriptive names** indicating purpose
- **Section** suffix for page sections
- **Card** suffix for card components
- **Form** suffix for form components

## 📦 Adding New Components

### 1. Choose the Right Category
- **Layout**: Navigation, headers, footers
- **Sections**: Full-width content blocks
- **Cards**: Container components with borders/shadows
- **UI**: Small, reusable interface elements
- **Forms**: Input, validation, submission components

### 2. Create the Component
```typescript
// Example: components/ui/NewButton.tsx
"use client";

interface NewButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function NewButton({ variant = 'primary', children }: NewButtonProps) {
  return (
    <button className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}
```

### 3. Add to Index
```typescript
// components/index.ts
export { default as NewButton } from './ui/NewButton';
```

### 4. Update Category README (if needed)
Document complex components or special usage patterns.

## 🔧 Internal Dependencies

Some components may import from other categories:
```typescript
// ✅ Allowed: sections importing cards
import ProjectCard from '../cards/ProjectCard';

// ✅ Allowed: cards importing ui
import Button from '../ui/Button';

// ❌ Avoid: ui importing from sections/cards
```

## 🏷️ TypeScript Interfaces

Keep interfaces close to components:
```typescript
// In the same file as component
interface ComponentProps {
  title: string;
  description?: string;
}

// Or in separate types file for shared interfaces
// types/components.ts
```

## 📱 Responsive Considerations

All components should follow mobile-first design:
- Use Tailwind responsive prefixes (`md:`, `lg:`)
- Test on mobile devices
- Consider touch interactions
- Optimize for performance

## 🎨 Styling Guidelines

- Use **Tailwind CSS** classes
- Follow existing design system
- Maintain consistent spacing
- Use semantic color names
- Consider dark mode (future)

---

## 🔍 SEO Integration

All page components include comprehensive SEO metadata:
- **Page-specific titles and descriptions**
- **Open Graph tags** for social media sharing  
- **Twitter Cards** with proper content
- **Keywords** optimized for search engines
- **Structured data** in layout components

---

This organization improves:
- **Developer Experience**: Easy to find components
- **Code Maintenance**: Clear separation of concerns  
- **Import Management**: Clean, organized imports
- **Team Collaboration**: Consistent structure
- **Scalability**: Easy to add new components 