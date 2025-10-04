# React Basics for Beginners

This document explains React concepts used in this website in simple terms.

## What is React?

React is a JavaScript library for building user interfaces. Think of it like LEGO blocks for websites - you create small, reusable pieces (components) and combine them to build a complete website.

## Key Concepts

### 1. Components

**What they are:** Components are reusable pieces of your website. Each component is a JavaScript function that returns HTML-like code.

**Example:**
```javascript
function Header() {
  return (
    <header>
      <h1>My Website</h1>
    </header>
  );
}
```

This creates a Header component that you can use anywhere.

**In this website:**
- `Header.js` - The navigation bar
- `About.js` - The about section
- `Skills.js` - The skills section
- etc.

### 2. JSX (JavaScript XML)

**What it is:** JSX lets you write HTML-like code inside JavaScript. It looks like HTML but it's actually JavaScript.

**Regular HTML:**
```html
<div class="container">
  <h1>Hello World</h1>
</div>
```

**JSX (notice className instead of class):**
```jsx
<div className="container">
  <h1>Hello World</h1>
</div>
```

**Key differences from HTML:**
- Use `className` instead of `class`
- Use `htmlFor` instead of `for`
- Self-closing tags need a `/` (e.g., `<img />` not `<img>`)
- Use `{}` to insert JavaScript: `<p>2 + 2 = {2 + 2}</p>` → "2 + 2 = 4"

### 3. Props (Properties)

**What they are:** Props are like function parameters - they pass data from a parent component to a child component.

**Example:**
```javascript
// Parent component
function App() {
  return <Greeting name="Blake" />;
}

// Child component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
// Shows: "Hello, Blake!"
```

**Modern way (destructuring):**
```javascript
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### 4. State

**What it is:** State is data that can change over time. When state changes, React automatically updates the display.

**Example:**
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

**Note:** This website doesn't use state much since it's mainly displaying static content, but you can add it for interactive features.

### 5. Arrays and .map()

**What it is:** You often need to display a list of items. React uses JavaScript's `.map()` function for this.

**Example from Skills.js:**
```javascript
const skills = ['Python', 'JavaScript', 'R'];

// .map() creates a new array by transforming each item
skills.map((skill, index) => (
  <li key={index}>{skill}</li>
))

// Output:
// <li>Python</li>
// <li>JavaScript</li>
// <li>R</li>
```

**The key prop:** React needs a unique `key` for each item in a list to track changes efficiently.

### 6. Importing and Exporting

**Exporting a component:**
```javascript
// Header.js
function Header() {
  return <header>...</header>;
}

export default Header;  // Makes it available to other files
```

**Importing a component:**
```javascript
// App.js
import Header from './components/Header';

function App() {
  return <Header />;  // Use the imported component
}
```

**Importing CSS:**
```javascript
import './Header.css';  // Styles in this file apply to the component
```

### 7. Events

**What they are:** Events are actions like clicks, hovers, form submissions, etc.

**Examples:**
```javascript
// onClick event
<button onClick={() => alert('Clicked!')}>
  Click Me
</button>

// onChange event (for forms)
<input onChange={(e) => console.log(e.target.value)} />

// onSubmit event
<form onSubmit={(e) => e.preventDefault()}>
  ...
</form>
```

**Note:** In React, event names use camelCase (`onClick` not `onclick`).

## File Structure Explained

```
PersonalWebsite/
├── public/
│   ├── index.html        # Main HTML file - React injects your app here
│   └── ...               # Static assets (images, icons)
│
├── src/
│   ├── components/       # Your reusable components
│   │   ├── Header.js    # Component code
│   │   └── Header.css   # Component styles
│   │
│   ├── App.js           # Main app component (combines all sections)
│   ├── App.css          # App-wide styles
│   ├── index.js         # Entry point (renders App)
│   └── index.css        # Global styles
│
└── package.json         # Project configuration & dependencies
```

## How the Website Works

1. **index.js** is the entry point:
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
This finds the `<div id="root">` in `index.html` and renders the App component there.

2. **App.js** combines all sections:
```javascript
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Courses />
      <Research />
      <Footer />
    </div>
  );
}
```

3. Each component renders its own content and styles.

## Common Patterns in This Website

### Pattern 1: Data Arrays
```javascript
const courses = [
  { title: 'Course 1', description: '...' },
  { title: 'Course 2', description: '...' }
];
```
Storing data in arrays makes it easy to add/remove items.

### Pattern 2: Mapping Data to Components
```javascript
{courses.map((course, index) => (
  <div key={index}>
    <h3>{course.title}</h3>
    <p>{course.description}</p>
  </div>
))}
```
This creates a component for each item in the array.

### Pattern 3: CSS Modules
Each component has its own CSS file, keeping styles organized and preventing conflicts.

## JavaScript You Need to Know

### Variables
```javascript
const name = 'Blake';        // Can't be reassigned
let age = 30;                // Can be reassigned
var old = 'avoid this';      // Old way, don't use
```

### Arrow Functions
```javascript
// Traditional function
function greet(name) {
  return 'Hello ' + name;
}

// Arrow function (modern)
const greet = (name) => {
  return 'Hello ' + name;
};

// Short form (implicit return)
const greet = (name) => 'Hello ' + name;
```

### Template Literals
```javascript
const name = 'Blake';
const greeting = `Hello, ${name}!`;  // Hello, Blake!
```

### Destructuring
```javascript
// Array destructuring
const [first, second] = ['Python', 'JavaScript'];

// Object destructuring
const { title, description } = course;
// Same as:
// const title = course.title;
// const description = course.description;
```

### Spread Operator
```javascript
const skills1 = ['Python', 'R'];
const skills2 = ['JavaScript', 'Java'];
const allSkills = [...skills1, ...skills2];
// ['Python', 'R', 'JavaScript', 'Java']
```

## Debugging Tips

### 1. Console Logging
```javascript
console.log('Value:', someVariable);
```
View output in browser console (F12 → Console tab)

### 2. React DevTools
Install the React Developer Tools browser extension to inspect components.

### 3. Common Errors

**"X is not defined"**
- You forgot to import something
- Typo in variable name

**"Objects are not valid as a React child"**
- You're trying to render an object directly
- Use object properties: `{user.name}` not `{user}`

**"Each child should have a unique key prop"**
- Add `key={index}` to items in a list

## Next Steps

### Learn More
1. [React Official Tutorial](https://react.dev/learn) - Interactive, beginner-friendly
2. [JavaScript.info](https://javascript.info/) - Learn modern JavaScript
3. [MDN Web Docs](https://developer.mozilla.org/) - Reference for HTML, CSS, JavaScript

### Add Features
- **Contact Form**: Add a section with email/social links
- **Dark Mode**: Toggle between light and dark themes
- **Animations**: Use CSS transitions for smooth effects
- **Gallery**: Add a portfolio/projects section with images
- **Blog**: Create a simple blog section

### Example: Adding a Button to Header
```javascript
function Header() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <header className="header">
      <h1>Dr. Blake Head</h1>
      <button onClick={handleClick}>
        Contact Me
      </button>
    </header>
  );
}
```

## Practice Exercises

1. **Easy**: Change the greeting text in About.js
2. **Medium**: Add a new skill category to Skills.js
3. **Medium**: Change the color scheme in Header.css
4. **Hard**: Create a new "Contact" component with your email and social links
5. **Hard**: Add a "Publications" section with a list of papers

Remember: The best way to learn is by doing. Don't be afraid to experiment - you can always undo changes with Git!

## Getting Help

- **Error messages**: Read them carefully - they often tell you exactly what's wrong
- **Google**: Search for "React [your question]"
- **Stack Overflow**: Most questions have been answered
- **React Docs**: Official documentation is excellent

Happy coding! 🚀
