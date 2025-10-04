# Website Customization Guide

This guide will help you customize your personal website. As a beginner, you'll find step-by-step instructions for common customizations.

## Quick Start

Before making changes:
1. Run `npm start` to see your website at http://localhost:3000
2. Keep this running - it will automatically reload when you save changes
3. Edit files and watch your changes appear instantly!

## Understanding the Component Structure

Your website is built from **components** - reusable pieces that make up different parts of the page:

```
Header (top navigation)
↓
About (introduction section)
↓
Skills (your skills grid)
↓
Courses (courses you've taken/taught)
↓
Research (research interests)
↓
Footer (bottom of page)
```

## Common Customizations

### 1. Changing Your Personal Information

**File:** `src/components/About.js`

Look for this code:
```javascript
<p>
  Welcome! I'm Dr. Blake Head, and this is my professional website 
  showcasing my academic journey, research interests, and expertise.
</p>
```

Change the text inside the `<p>` tags to your own introduction.

### 2. Adding/Removing Skills

**File:** `src/components/Skills.js`

Find the `skillCategories` array (around line 12). It looks like this:
```javascript
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'R', 'Java']
  },
  // ... more categories
];
```

**To add a skill:** Add it to the `skills` array:
```javascript
skills: ['Python', 'JavaScript', 'R', 'Java', 'C++']  // Added C++
```

**To add a category:** Add a new object:
```javascript
{
  title: 'Databases',
  skills: ['MySQL', 'PostgreSQL', 'MongoDB']
}
```

**To remove a skill:** Just delete it from the array.

### 3. Updating Courses

**File:** `src/components/Courses.js`

Find the `courses` array (around line 12):
```javascript
const courses = [
  {
    title: 'Advanced Data Analysis',
    description: 'Comprehensive study of statistical methods...',
    type: 'Completed'  // or 'Taught'
  },
  // ... more courses
];
```

**To add a course:** Copy the structure and add your details:
```javascript
{
  title: 'Your Course Name',
  description: 'What the course covered',
  type: 'Completed'  // or 'Taught'
}
```

### 4. Modifying Research Interests

**File:** `src/components/Research.js`

Find the `researchAreas` array (around line 12):
```javascript
const researchAreas = [
  {
    title: 'Computational Methods',
    description: 'Exploring novel computational approaches...',
    status: 'Ongoing'  // or 'Active', 'Completed', etc.
  },
  // ... more areas
];
```

Follow the same pattern as courses to add/edit/remove research areas.

### 5. Changing Colors

**Main Color Scheme:** `src/components/Header.css`

Find this line (around line 2):
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Change `#667eea` and `#764ba2` to your preferred colors. Use a color picker tool online to get hex codes.

Popular color combinations:
- Blue to Purple: `#667eea` to `#764ba2` (current)
- Red to Orange: `#ee0979` to `#ff6a00`
- Green to Blue: `#11998e` to `#38ef7d`
- Dark: `#2c3e50` to `#3498db`

### 6. Changing Fonts

**File:** `src/index.css`

Find the `font-family` line (around line 8):
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...
```

To use Google Fonts:
1. Visit https://fonts.google.com/
2. Choose a font (e.g., "Roboto")
3. Click "Get font" and copy the `<link>` tag
4. Add it to `public/index.html` in the `<head>` section
5. Update the CSS to use your font:
```css
font-family: 'Roboto', sans-serif;
```

### 7. Adding New Sections

To add a new section (e.g., "Publications"):

1. **Create component file:** `src/components/Publications.js`
```javascript
import React from 'react';
import './Publications.css';

function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <h2>Publications</h2>
        {/* Your content here */}
      </div>
    </section>
  );
}

export default Publications;
```

2. **Create CSS file:** `src/components/Publications.css`

3. **Add to App.js:**
```javascript
import Publications from './components/Publications';

// Inside the return statement:
<Publications />
```

4. **Add to navigation** in `src/components/Header.js`:
```javascript
<a href="#publications">Publications</a>
```

## CSS Basics for Styling

### Spacing
```css
padding: 2rem;     /* Space inside an element */
margin: 1rem;      /* Space outside an element */
gap: 1.5rem;       /* Space between grid items */
```

### Colors
```css
color: #333;              /* Text color */
background-color: #fff;   /* Background color */
```

### Sizing
```css
font-size: 1.2rem;   /* Text size (1rem = 16px typically) */
width: 100%;         /* Width of element */
max-width: 1200px;   /* Maximum width */
```

### Common Units
- `px` - Pixels (fixed size)
- `rem` - Relative to root font size (recommended)
- `%` - Percentage of parent element
- `vh` - Viewport height (100vh = full screen height)

## Testing Your Changes

After making changes:
1. Check http://localhost:3000 in your browser
2. Make sure everything looks good
3. Run `npm test` to ensure tests still pass
4. Run `npm run build` to verify it builds successfully

## Getting Help

If something breaks:
1. Check the browser console (F12 key) for error messages
2. Make sure you closed all brackets `{}` and parentheses `()`
3. Check that all quotes `''` and double quotes `""` are matched
4. Use `git diff` to see what you changed
5. Use `git restore <filename>` to undo changes to a file

## Deployment

When ready to publish:
1. Run `npm run build`
2. The `build/` folder contains your website
3. Deploy to:
   - **GitHub Pages**: Free, easy for GitHub repos
   - **Netlify**: Drag-and-drop the build folder
   - **Vercel**: Connect your GitHub repo

Detailed deployment instructions are in the main README.md

## Common Beginner Mistakes

1. **Forgetting to save files** - The website won't update until you save
2. **Missing commas in arrays** - Each item except the last needs a comma
3. **Mismatched quotes** - Use consistent quotes ('single' or "double")
4. **Not closing tags** - Every `<div>` needs a `</div>`
5. **Editing node_modules** - Never edit files in this folder

## Pro Tips

- Use your browser's "Inspect Element" (right-click → Inspect) to experiment with CSS
- Copy-paste existing components/sections as templates
- Keep backups before major changes
- Test on different browsers (Chrome, Firefox, Safari)
- Test on mobile devices (or use browser's device toolbar)

Happy customizing! 🚀
