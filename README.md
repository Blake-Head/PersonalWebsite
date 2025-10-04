# PersonalWebsite
Repo for the personal and professional website of Dr. Blake Head.

## Overview
This is a personal website built with React.js to showcase professional skills, courses, and research interests. It's designed to be a portfolio and professional presence on the web.

## What is React?
React is a popular JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is widely used in the web development industry.

### Key Concepts for Beginners:
- **Components**: React apps are built from reusable pieces called "components" (like building blocks)
- **JSX**: A syntax that lets you write HTML-like code in JavaScript files
- **Props**: Data passed from parent components to child components
- **State**: Data that can change over time within a component

## Project Structure
```
PersonalWebsite/
├── public/              # Static files (HTML template, icons, etc.)
│   └── index.html       # Main HTML file
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── Header.js    # Navigation bar at the top
│   │   ├── About.js     # Introduction section
│   │   ├── Skills.js    # Skills showcase
│   │   ├── Courses.js   # Courses section
│   │   ├── Research.js  # Research interests section
│   │   └── Footer.js    # Footer at the bottom
│   ├── App.js           # Main application component
│   ├── App.css          # Global app styles
│   ├── index.js         # Entry point of the app
│   └── index.css        # Global CSS styles
├── package.json         # Project dependencies and scripts
└── README.md           # This file
```

## Getting Started

### Prerequisites
You need to have Node.js and npm (Node Package Manager) installed on your computer.
- Download Node.js from: https://nodejs.org/ (this includes npm)
- Verify installation by running: `node --version` and `npm --version`

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Blake-Head/PersonalWebsite.git
   cd PersonalWebsite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   This downloads all the libraries and tools needed to run the website.

### Running the Development Server
To see your website in action:
```bash
npm start
```
This will:
- Start a development server
- Open your browser automatically to http://localhost:3000
- Automatically reload when you make changes to the code

### Building for Production
When you're ready to publish your website:
```bash
npm run build
```
This creates an optimized version of your website in the `build/` folder that can be deployed to a web server.

### Running Tests
To run the test suite:
```bash
npm test
```

## Customizing the Website

### Editing Content
All content is in the `src/components/` folder. Each section is its own file:

1. **About Section** (`src/components/About.js`): Edit your bio and introduction
2. **Skills Section** (`src/components/Skills.js`): Update your skills and competencies
3. **Courses Section** (`src/components/Courses.js`): Add or modify courses
4. **Research Section** (`src/components/Research.js`): Update research interests

### Modifying Styles
Each component has its own CSS file (e.g., `Header.css`, `Skills.css`). You can change:
- Colors
- Fonts
- Spacing
- Layout

Global styles are in `src/App.css` and `src/index.css`.

### Example: Adding a New Skill
In `src/components/Skills.js`, find the `skillCategories` array and add to it:
```javascript
{
  title: 'New Category',
  skills: ['Skill 1', 'Skill 2', 'Skill 3']
}
```

## Deployment
You can deploy this website to various platforms:
- **GitHub Pages**: Free hosting for static websites
- **Netlify**: Easy deployment with continuous integration
- **Vercel**: Optimized for React applications
- **AWS S3**: Amazon's cloud storage service

## Learn More
- [React Documentation](https://react.dev/)
- [Create React App Documentation](https://create-react-app.dev/)
- [JavaScript Tutorial](https://javascript.info/)
- [MDN Web Docs](https://developer.mozilla.org/)

## Support
If you encounter any issues or have questions, please open an issue in this repository.

## License
This project is for personal use.
