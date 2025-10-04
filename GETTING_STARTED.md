# 🚀 Getting Started - Quick Reference

Welcome! This is your quick-start guide to using your new React-based personal website.

## ⚡ Quick Commands

```bash
# Install dependencies (first time only)
npm install

# Start the development server (opens in browser)
npm start

# Run tests
npm test

# Build for production
npm run build
```

## 📁 Important Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `src/components/About.js` | Your introduction | To change bio/welcome text |
| `src/components/Skills.js` | Your skills | To add/remove skills |
| `src/components/Courses.js` | Course list | To update courses |
| `src/components/Research.js` | Research interests | To modify research areas |
| `src/components/Header.js` | Top navigation | To change site title/navigation |
| `src/components/*.css` | Styling | To change colors/fonts/layout |
| `README.md` | Project documentation | Reference only |
| `CUSTOMIZATION_GUIDE.md` | How to customize | Read when making changes |
| `REACT_BASICS.md` | React tutorial | Learn React concepts |

## 🎨 Common Tasks

### Change Your Name
1. Open `src/components/Header.js`
2. Find `<h1 className="site-title">Dr. Blake Head</h1>`
3. Replace "Dr. Blake Head" with your name
4. Save and check http://localhost:3000

### Add a Skill
1. Open `src/components/Skills.js`
2. Find `skillCategories` array
3. Add to an existing category's `skills` array:
   ```javascript
   skills: ['Python', 'JavaScript', 'R', 'Java', 'Your New Skill']
   ```
4. Save and see it appear automatically

### Change Colors
1. Open `src/components/Header.css`
2. Find the gradient line:
   ```css
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   ```
3. Replace `#667eea` and `#764ba2` with your colors
4. Save and see the new colors

### Add a Course
1. Open `src/components/Courses.js`
2. Find the `courses` array
3. Add a new object (copy existing format):
   ```javascript
   {
     title: 'Your Course Name',
     description: 'Course description here',
     type: 'Completed'  // or 'Taught'
   },
   ```
4. Don't forget the comma!

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Changes not showing | Make sure you saved the file |
| "Module not found" error | Run `npm install` |
| Port 3000 already in use | Stop other instances or use a different port |
| Build fails | Check console for syntax errors |
| Website looks broken | Check browser console (F12) for errors |

## 📚 Documentation Guide

1. **Start here**: `GETTING_STARTED.md` (this file)
2. **Learn React basics**: `REACT_BASICS.md`
3. **Customize your site**: `CUSTOMIZATION_GUIDE.md`
4. **Full reference**: `README.md`

## 🎯 Your First 5 Minutes

1. **Install**: Run `npm install` (one time only)
2. **Start**: Run `npm start` (opens browser)
3. **Edit**: Open `src/components/About.js`
4. **Change**: Update the welcome text
5. **Save**: Watch it update in the browser!

## 🌐 Deployment

When ready to publish:

1. **Build**: `npm run build`
2. **Choose a host**:
   - **GitHub Pages**: Free, integrated with GitHub
   - **Netlify**: Free tier, drag-and-drop
   - **Vercel**: Free tier, optimized for React
3. **Deploy**: Follow host-specific instructions in `README.md`

## 💡 Pro Tips

- Keep `npm start` running while developing - it auto-updates!
- Use browser "Inspect Element" to experiment with CSS
- Save frequently and check the browser
- Read error messages - they often tell you exactly what's wrong
- Don't edit files in `node_modules/` or `build/`

## 🆘 Need Help?

1. Check the error message in terminal or browser console
2. Read the relevant guide (CUSTOMIZATION_GUIDE.md or REACT_BASICS.md)
3. Search online: "React [your question]"
4. Check [React documentation](https://react.dev/)

## ✅ Checklist: Is Everything Working?

- [ ] `npm install` completed without errors
- [ ] `npm start` opens the website in browser
- [ ] Website displays with your name and sections
- [ ] `npm test` shows all tests passing
- [ ] `npm run build` completes successfully

If all checked, you're ready to go! 🎉

---

**Next Steps**: 
- Read `REACT_BASICS.md` to understand how React works
- Read `CUSTOMIZATION_GUIDE.md` to personalize your website
- Make your first edit and see it update live!
