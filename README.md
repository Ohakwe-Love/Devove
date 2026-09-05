# Devove - Portfolio Website


**Devove** is a professional portfolio website designed to highlight my work as a full-stack software engineer. It features a clean, modern interface with smooth animations, project showcases, contact management, and a comprehensive resume page.

**Built with:**

- Backend: PHP with Clean Architecture
- Frontend: Vanilla JavaScript + CSS3
- Email Service: PHPMailer for secure contact submissions
- Styling: Custom CSS with responsive design
- Animations: AOS (Animate On Scroll) for smooth transitions

---

## Contents

- About Me — A brief introduction and background
- Projects — Selected projects I've worked on
- Skills & Technologies — Tools and technologies I work with
- Resume — My experience, education, and technical background
- Contact — A way for potential clients, collaborators, and employers to reach me
- Responsive Design — Designed to work across desktop, tablet, and mobile devices
- Custom 404 Page — A dedicated page for invalid routes


---

## Design Thought Process

### Logo Design

The **Devove logo** represents the fusion of development and innovation:

- **Modern Minimalism**: Clean, geometric shapes that convey professionalism
- **SVG Format**: Scalable across all devices without quality loss
- **Symbolism**: The logo combines abstract shapes symbolizing code, creativity, and forward-thinking
- **Available in Multiple Formats**:
  - `assets/images/logo/1.svg` (Scalable Vector)
  - `assets/images/logo/2.png` (Raster - PNG)

**Logo Placement**: Featured in headers, footer, and metadata for consistent branding.

### Main Design System

#### Color Palette

- **Primary**: Modern accent color for CTAs and highlights
- **Background**: Carefully selected for contrast and readability
- **Text**: High contrast for accessibility
- **Secondary**: Complement colors for visual hierarchy

#### Typography

- **Primary Font**: DM Sans (clean, modern sans-serif)
- **Secondary Font**: Chillax (unique, expressive font for headings)
- **Web Fonts**: Switzer font system for optimized loading

#### Design Principles

1. **Minimalist Approach**: Remove unnecessary elements, focus on content
2. **Consistent Spacing**: Rhythm-based layout using CSS Grid and Flexbox
3. **Smooth Animations**: Micro-interactions using AOS library
4. **Dark-Friendly**: CSS variables enable easy theme switching
5. **Accessibility First**: Semantic HTML, ARIA labels, keyboard navigation
6. **Performance**: Optimized images, lazy loading, minimal JavaScript

#### Visual Hierarchy

- **Hero Section**: Bold typography with gradient effects
- **Section Headers**: Icon + Label + Heading + Subtitle structure
- **Cards**: Consistent shadow and hover states
- **CTAs**: High contrast buttons with hover animations
- **Navigation**: Sticky header with smooth scrolling

#### Component Design

- **Status Badge**: Animated dot + text for "Available for projects"
- **Project Cards**: Image container with overlay actions, specs, and details
- **Social Links**: Keyboard-inspired design with hover effects
- **Form Elements**: Custom styling with validation feedback
- **Loader**: Spinning grid animation during page transitions

---

## Project Structure

```
Devove/
├── index.php                    # Main router
├── contact.php                  # Contact form handler
├── composer.json                # PHP dependencies (PHPMailer)
├── composer.lock
├── assets/
│   ├── css/
│   │   ├── main.css             # Global styles
│   │   ├── style.css            # Home page styles
│   │   ├── projects.css         # Projects page styles
│   │   ├── contact.css          # Contact form styles
│   │   ├── my_cv.css            # Resume page styles
│   │   └── 404.css              # Error page styles
│   ├── js/
│   │   ├── main.js              # Core JavaScript
│   │   ├── projects.js          # Projects page logic
│   │   ├── contact.js           # Contact form handling
│   │   └── my_cv.js             # Resume interactivity
│   ├── images/
│   │   ├── logo/                # Logo files (SVG, PNG, JPG)
│   │   ├── favicon_io/          # Favicon assets
│   │   ├── bgs/                 # Background images
│   │   ├── me/                  # Profile images
│   │   ├── projects/            # Project screenshots
│   │   ├── skills/              # Skill icons
│   │   └── stacks/              # Technology stack icons
│   ├── Fonts/                   # Custom font files
│   │   ├── DM_Sans/             # Primary font
│   │   ├── chillax/             # Secondary font
│   │   └── WEB/                 # Web font CSS
│   └── design/                  # Design assets
├── components/
│   └── connect.php              # Database connection helper
├── config/
│   └── env.php                  # Environment configuration
├── core/
│   └── Database.php             # Database class
├── layout/
│   ├── layout.php               # Main layout wrapper
│   ├── header.php               # Header component
│   └── footer.php               # Footer component
├── pages/
│   ├── home.php                 # Home page content
│   ├── projects.php             # Projects showcase
│   ├── contact.php              # Contact page form
│   ├── my_cv.php                # Resume/CV page
│   └── 404.php                  # 404 error page
├── theme/                       # Static theme templates (backup)
│   ├── index.html
│   ├── projects.html
│   ├── contact.html
│   └── my_cv.html
└── vendor/                      # Composer dependencies
    └── phpmailer/               # PHPMailer library
```

---


### Navigation Routes

- `/` - Home page
- `/projects` - Projects showcase
- `/contact` - Contact form
- `/resume` - CV/Resume page
- `/[invalid-path]` - 404 error page

---

## Technical Stack

### Backend

| Technology    | Purpose                     |
| ------------- | --------------------------- |
| **PHP 7.4+**  | Server-side logic & routing |
| **PHPMailer** | Secure email handling       |
| **Composer**  | Dependency management       |

### Frontend

| Technology             | Purpose              |
| ---------------------- | -------------------- |
| **HTML5**              | Semantic markup      |
| **CSS3**               | Styling & animations |
| **Vanilla JavaScript** | Interactivity        |
| **AOS Library**        | Scroll animations    |

### Fonts & Design

| Asset       | Type                 |
| ----------- | -------------------- |
| **DM Sans** | Primary typography   |
| **Chillax** | Display/heading font |
| **Switzer** | Web font system      |

### Features & Libraries

| Feature        | Implementation     |
| -------------- | ------------------ |
| **Email**      | PHPMailer SMTP     |
| **Animations** | CSS3 + AOS.js      |
| **Icons**      | SVG + Inline CSS   |
| **SEO**        | Meta tags, OG tags |
| **Icons**      | Custom SVG assets  |

---

## Key Customization Points

### Styling

- **CSS Variables**: Update color scheme in `assets/css/main.css`
  ```css
  :root {
    --primary: #your-color;
    --background-2: #your-bg;
  }
  ```

### Content

- **Home Page**: Edit `pages/home.php`
- **Projects**: Update `pages/projects.php`
- **Resume**: Modify `pages/my_cv.php`
- **Contact Email**: Change `CONTACT_EMAIL` in `contact.php`

### Configuration

- **Environment**: Update `.env` file
- **Email Settings**: Configure SMTP credentials
- **Rate Limit**: Adjust cooldown in `contact.php` (currently 60 seconds)

---

## Responsive Design

The website is optimized for:

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Large Screens**: 1440px+

All layouts use **CSS Flexbox** and **CSS Grid** for flexibility.

---

## Performance Optimizations

- **Lazy Loading**: Images load on-demand
- **Minified Assets**: CSS and JS compressed
- **Font Optimization**: Web fonts properly configured
- **Image Compression**: Optimized formats (WebP, PNG, JPG)
- **Async Scripts**: Non-blocking JavaScript execution
- **CSS Grid**: Efficient layout rendering

---

## SEO & Meta Tags

**Included:**

- Meta descriptions for all pages
- Open Graph tags for social sharing
- Twitter Card metadata
- Favicon and manifest files
- Structured data ready for JSON-LD

---

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

---

## Contact & Social

- **Email**: ohakwemuna@gmail.com
- **GitHub**: [@Ohakwe-Love](https://github.com/Ohakwe-Love)
- **LinkedIn**: [Love Ohakwe](https://www.linkedin.com/in/love-ohakwe/)
- **Website**: [devove.dev](https://devove.dev)

---

## Acknowledgments

- **AOS Library** - For smooth scroll animations
- **PHPMailer** - For reliable email handling
- **Font Creators** - DM Sans, Chillax, Switzer

---