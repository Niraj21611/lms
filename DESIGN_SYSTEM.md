# Raah Academy Design System

## 🎨 Color Palette

### Primary Colors
- **Primary Blue**: `#0066ff` - Main brand color for CTAs and important elements
  - Light: `#3d8bff`
  - Dark: `#0052cc`
- **Coral**: `#ff6b6b` - Accent color for highlights and secondary CTAs
  - Light: `#ff8787`
  - Dark: `#fa5252`
- **Purple**: `#7c3aed` - Accent color for special features
  - Light: `#a78bfa`
- **Teal**: `#14b8a6` - Accent color for success states
  - Light: `#5eead4`

### Neutral Colors
- **Neutral 50**: `#fafbfc` - Light backgrounds
- **Neutral 100**: `#f5f7fa` - Subtle backgrounds
- **Neutral 200**: `#e1e8ed` - Borders
- **Neutral 300**: `#cfd9de` - Disabled states
- **Neutral 600**: `#5b7083` - Secondary text
- **Neutral 700**: `#485563` - Tertiary text
- **Neutral 800**: `#2f3843` - Dark text
- **Neutral 900**: `#0f1419` - Primary text

## 📐 Typography

### Font Families
- **Display/Headings**: Manrope (font-display)
  - Use for: Hero titles, section headings, card titles
  - Weights: 400, 500, 600, 700, 800
- **Body**: Inter (font-sans)
  - Use for: Paragraphs, buttons, small text
  - Weights: 300, 400, 500, 600, 700, 800

### Font Sizes
- **Hero**: 5xl - 7xl (48px - 72px)
- **Section Headings**: 4xl - 6xl (36px - 60px)
- **Card Titles**: xl - 2xl (20px - 24px)
- **Body Text**: base - xl (16px - 20px)
- **Small Text**: sm - base (14px - 16px)

### Font Usage
```tsx
// Hero heading
className="text-5xl md:text-6xl lg:text-7xl font-bold font-display"

// Section heading
className="text-4xl md:text-5xl lg:text-6xl font-bold font-display"

// Body text
className="text-lg md:text-xl text-neutral-600"
```

## 🎯 Gradient Patterns

### Background Gradients
```css
/* Blue gradient */
.gradient-blue {
  background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
}

/* Coral gradient */
.gradient-coral {
  background: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%);
}

/* Purple gradient */
.gradient-purple {
  background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
}
```

### Tailwind Gradient Classes
```tsx
// Primary blue gradient
className="bg-gradient-to-r from-primary to-primary-light"

// Coral gradient
className="bg-gradient-to-r from-coral to-coral-light"

// Purple gradient
className="bg-gradient-to-r from-purple to-purple-light"

// Multi-color gradient text
className="bg-gradient-to-r from-primary via-purple to-coral bg-clip-text text-transparent"
```

## 🧩 Component Patterns

### Cards
```tsx
<div className="bg-white rounded-2xl p-8 border border-neutral-200 hover:shadow-xl transition-all duration-300">
  {/* Card content */}
</div>
```

### Buttons

#### Primary Button
```tsx
<button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-light hover:shadow-xl hover:shadow-primary/30 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105">
  Get Started
</button>
```

#### Secondary Button
```tsx
<button className="px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-900 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg border border-neutral-200">
  Learn More
</button>
```

### Icon Containers
```tsx
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white">
  <Icon className="w-6 h-6" strokeWidth={2} />
</div>
```

### Badges/Tags
```tsx
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple/10 border border-primary/20 text-sm font-medium">
  Feature Badge
</span>
```

## ✨ Animations

### Framer Motion Patterns

#### Fade Up
```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};
```

#### Scale In
```tsx
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};
```

#### Hover Effects
```tsx
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

### CSS Animations
```css
/* Floating animation */
.floating {
  animation: floating 6s ease-in-out infinite;
}

@keyframes floating {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

## 🌈 Background Effects

### Mesh Gradient Background
```tsx
<div className="gradient-mesh">
  {/* Subtle multi-color gradient background */}
</div>
```

### Floating Blur Shapes
```tsx
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-purple/20 rounded-full blur-3xl" />
  <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-coral/20 to-teal/20 rounded-full blur-3xl" />
</div>
```

## 📱 Responsive Design

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Responsive Text Example
```tsx
className="text-4xl md:text-5xl lg:text-6xl"
```

### Responsive Spacing
```tsx
className="py-16 md:py-20 lg:py-24"
```

### Grid Layouts
```tsx
className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
```

## 🎭 Interaction States

### Hover States
- Scale: `hover:scale-105`
- Shadow: `hover:shadow-xl`
- Background: `hover:bg-neutral-50`
- Border: `hover:border-primary`

### Focus States
- Ring: `focus:ring-2 focus:ring-primary`
- Outline: `focus:outline-none`

### Transition Timing
- Fast: `duration-200`
- Normal: `duration-300`
- Slow: `duration-500`

## 🎬 Scroll Animations

Use Framer Motion's `whileInView` for scroll-triggered animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

## 📏 Spacing Scale

- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **base**: 16px (1rem)
- **md**: 24px (1.5rem)
- **lg**: 32px (2rem)
- **xl**: 48px (3rem)
- **2xl**: 64px (4rem)

## 🎨 Usage Guidelines

### Do's
✅ Use gradient backgrounds for CTAs and special sections
✅ Apply rounded-2xl or rounded-3xl for modern feel
✅ Add subtle hover animations (scale-105)
✅ Use font-display for headings
✅ Include floating blur shapes for depth
✅ Add scroll-triggered animations
✅ Use consistent spacing (py-24 for sections)

### Don'ts
❌ Don't use harsh shadows (prefer soft shadows)
❌ Don't mix too many gradient directions
❌ Don't animate too aggressively (subtle is better)
❌ Don't forget responsive design
❌ Don't use colors outside the palette
❌ Don't forget hover/focus states

## 🚀 Performance Tips

1. Use Next.js Image component with proper sizing
2. Lazy load animations with Framer Motion
3. Use `viewport={{ once: true }}` to animate only once
4. Optimize gradients (use CSS where possible)
5. Minimize blur effects on mobile

## 📦 Component Library

Key components in this design system:
- **Hero**: Stunning first impression with floating shapes
- **Features**: Grid of feature cards with gradient icons
- **ExternalTeacherSection**: Dedicated CTA section for educators
- **Stats Cards**: Gradient icon + number + description
- **Testimonials**: Card with navigation controls
- **CTA Sections**: Gradient background with pattern overlay
- **Footer**: Dark theme with gradient social icons

---

**Design Philosophy**: Modern, vibrant, professional, and engaging. The design balances sophistication with approachability, using gradients and animations to create a dynamic yet trustworthy learning platform.
