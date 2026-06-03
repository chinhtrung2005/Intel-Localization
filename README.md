# Project 2: Intel Sustainability Journey - Localized & Accessible Edition

Build an interactive webpage that presents Intel's sustainability goals in a timeline format with **global accessibility** and **multilingual support** (English and Arabic with RTL support).

## 🌍 New Features

### 1. **Right-to-Left (RTL) Language Support**
- **Arabic Translation**: Full Arabic translations for all content including headers, descriptions, and form labels
- **Dynamic Direction Switching**: Page automatically switches between LTR (English) and RTL (Arabic) based on language selection
- **Language Toggle Button**: Fixed, accessible button in the top corner to switch between English and العربية
- **Persistent Language Preference**: Uses localStorage to remember user's language choice across sessions

### 2. **Accessibility Best Practices**
The website includes comprehensive accessibility features to ensure inclusive design:

#### **Semantic HTML**
- Proper heading hierarchy (h1 → h2 → h3/h4)
- Semantic elements: `<header>`, `<section>`, `<footer>`, `<nav>`
- Proper `<label>` elements for all form inputs

#### **ARIA Labels & Attributes**
- `role="banner"` for header
- `role="contentinfo"` for footer
- `aria-labelledby` for linked headings
- `aria-label` for buttons and interactive elements
- `aria-required="true"` for required form fields
- `aria-invalid` for form validation states
- `aria-live="polite"` for dynamic content updates
- `aria-describedby` for form helper text

#### **Keyboard Navigation**
- All interactive elements are keyboard accessible (Tab, Enter, Space)
- Focus indicators with clear visual styling
- Keyboard support for language toggle button
- Proper tab order throughout the page

#### **Screen Reader Support**
- Descriptive alt text for all images
- Helper text for form fields
- Success/error messages announced to screen readers
- Hidden screen reader announcements for dynamic updates

#### **Form Accessibility**
- Proper label associations with form fields
- Required field indicators with ARIA labels
- Email validation with helpful error messages
- Checkbox with clear descriptions
- Select dropdown with proper options
- Form submission feedback

#### **Visual Accessibility**
- High contrast colors that meet WCAG AA standards
- Clear focus indicators (3px outline)
- Readable font sizes (minimum 14px)
- Sufficient line height (1.6) for readability
- Support for `prefers-reduced-motion`
- Support for `prefers-contrast` (high contrast mode)

### 3. **Responsive Three-Column Design**
- **Sustainability Pillars Section**: Features three cards (Innovation, Renewable Energy, Responsible Manufacturing)
- Icons from Font Awesome for visual enhancement
- Responsive grid using Bootstrap (stacks on mobile, 2 columns on tablet, 3 on desktop)
- Hover effects and focus states for interactivity
- Card-based layout for easy scanning

### 4. **Newsletter Subscription Form**
- **Accessible Form Fields**:
  - Email input (required, with validation)
  - Name input (optional)
  - Country/Region selector
  - Terms agreement checkbox
  - Submit button

- **Form Features**:
  - HTML5 form validation
  - Custom error messages
  - Success confirmation message
  - Form data logged to console (ready for API integration)
  - Responsive form layout

### 5. **Timeline Section**
- Horizontally scrollable timeline with 9 sustainability milestones (1968-2024)
- Smooth scroll behavior
- Snap scrolling for better UX
- Keyboard accessible with proper focus management
- Full English and Arabic translations

## 📁 File Structure

```
Intel-Localization/
├── index.html          # Main HTML with semantic structure and ARIA labels
├── style.css           # RTL-compatible styling with accessibility features
├── script.js           # Language switching, form handling, and accessibility JS
├── img/                # Images folder (logo and milestone images)
└── README.md           # Documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with ARIA attributes
- **CSS3**: 
  - Flexbox for layout
  - CSS variables for theming
  - RTL support with `dir` attribute
  - Responsive design with media queries
  - Focus styles for keyboard navigation
  - Reduced motion support
  
- **Bootstrap 5.3**: Responsive grid system and components
- **Font Awesome 6.4**: Icons for sustainability pillars
- **Vanilla JavaScript**: Language switching, form handling, accessibility enhancements

## 🎯 Accessibility Features Summary

| Feature | Details |
|---------|---------|
| **Keyboard Navigation** | Tab, Enter, Space keys work throughout |
| **Screen Reader Support** | Proper labels, descriptions, and announcements |
| **Color Contrast** | WCAG AA compliant contrast ratios |
| **Focus Indicators** | Clear 3px outlines with 2px offset |
| **RTL Support** | Full support for Arabic and other RTL languages |
| **Form Validation** | HTML5 + custom error messages |
| **Language Toggle** | Persistent, accessible language switching |
| **Motion Preferences** | Respects `prefers-reduced-motion` setting |
| **High Contrast Mode** | Enhanced borders for better visibility |

## 🌐 Language Support

### English (English)
- Default language
- LTR (Left-to-Right) text direction

### العربية (Arabic)
- Complete translations for all content
- RTL (Right-to-Left) text direction
- Language-specific form placeholders

**To Switch Languages:**
1. Click the "العربية" (or "English") button in the top corner
2. Language preference is saved automatically
3. Page direction and content change instantly

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 992px (2 columns)
- **Desktop**: > 992px (3 columns)

## ✅ Testing Checklist

- [ ] Test keyboard navigation (Tab, Enter, Space)
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Test language toggle (English ↔ Arabic)
- [ ] Test form submission
- [ ] Test on mobile, tablet, and desktop
- [ ] Test with high contrast mode enabled
- [ ] Test with reduced motion preferences
- [ ] Verify all images have alt text
- [ ] Check color contrast with Color Contrast Analyzer

## 🚀 To Get Started

1. Launch a Codespace
2. Open `index.html` in your browser
3. Click the language toggle button to switch to Arabic
4. Test keyboard navigation with Tab key
5. Fill out the newsletter form
6. Commit and Push your changes to GitHub

## 💡 Beginner-Friendly Notes

### Key Concepts for Students:

**RTL (Right-to-Left):**
- Some languages like Arabic, Hebrew, and Persian read right to left
- We use the `dir` attribute in HTML to tell the browser the text direction
- CSS auto-adjusts margins and padding based on `dir="rtl"`

**Accessibility (A11y):**
- Making websites usable for everyone, including people with disabilities
- ARIA = Accessible Rich Internet Applications (special HTML attributes)
- Always include `alt` text for images, labels for form inputs
- Test with keyboard only - don't rely on mouse!

**Bootstrap Grid:**
- Makes responsive layouts easy with predefined column sizes
- `col-md-6` = 50% width on medium screens
- `col-lg-4` = 33.3% width on large screens (3 columns)

**LocalStorage:**
- Stores user preferences in the browser (like language choice)
- Data persists even after closing the browser
- Great for simple user settings

## 📚 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Font Awesome Icons](https://fontawesome.com/icons)

---

**Build an interactive webpage that works for everyone, everywhere! 🌍**

