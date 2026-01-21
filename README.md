# Mohit Gupta - Portfolio Website

A professional, clean, and responsive portfolio website showcasing my skills, projects, and achievements.

## 🌟 Features

- **Modern Design** - Clean and professional layout with smooth animations
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Scrolling** - Seamless navigation between sections
- **Interactive Elements** - Hover effects, animations, and transitions
- **Contact Form** - Easy way for visitors to get in touch
- **Social Links** - Direct links to GitHub, LinkedIn, LeetCode, and HackerRank

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Interactive JavaScript
└── README.md           # Documentation
```

## 🚀 How to Run

### Option 1: Open Directly
1. Navigate to the `portfolio-website` folder
2. Double-click `index.html`
3. The website will open in your default browser

### Option 2: Using Live Server (VS Code)
1. Open the folder in VS Code
2. Install "Live Server" extension
3. Right-click on `index.html`
4. Select "Open with Live Server"

### Option 3: Using Python
```bash
cd portfolio-website
python -m http.server 8000
```
Then open: http://localhost:8000

## 📋 Sections

1. **Home** - Introduction with name, title, and call-to-action buttons
2. **About** - Professional summary and statistics (CGPA, ratings, problems solved)
3. **Skills** - Technical skills organized by categories
4. **Projects** - Featured projects with descriptions and tech stack
5. **Achievements** - Leadership roles and accomplishments
6. **Contact** - Contact information and form

## 🎨 Color Scheme

- **Primary Color**: Blue (#2563eb) - Professional and trustworthy
- **Background**: Light gray and white - Clean and minimal
- **Text**: Dark gray (#1f2937) - Easy to read
- **Accents**: Subtle shadows and hover effects

## ✨ Customization

### Update Personal Information

**In `index.html`:**
- Line 35-39: Update name and description
- Line 46-49: Update social media links
- Line 279-296: Update contact details

### Change Colors

**In `style.css`:**
- Line 7-11: Modify CSS variables for colors
```css
:root {
    --primary-color: #2563eb;  /* Change to your preferred color */
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
}
```

### Add Projects

**In `index.html`:**
- Find the "Projects Section" (around line 156)
- Copy an existing `.project-card` div
- Update the project details

### Add Your Photo (Optional)

1. Add your photo to the `portfolio-website` folder
2. In `index.html`, add this code inside the hero section:
```html
<img src="your-photo.jpg" alt="Mohit Gupta" class="profile-photo">
```
3. In `style.css`, add styling:
```css
.profile-photo {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--shadow-lg);
}
```

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔗 Social Media Links to Update

Update these links in `index.html`:
- GitHub: Line 46
- LinkedIn: Line 47
- LeetCode: Line 48
- HackerRank: Line 49

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Create a new repository: `your-username.github.io`
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select main branch
5. Your site will be live at: `https://your-username.github.io`

### Netlify (Free)
1. Go to netlify.com
2. Drag and drop the `portfolio-website` folder
3. Your site will be live instantly

### Vercel (Free)
1. Go to vercel.com
2. Import the folder
3. Deploy with one click

## 📧 Contact Form

Currently, the contact form shows an alert. To make it functional:

1. **Using EmailJS** (Free):
   - Sign up at emailjs.com
   - Add this in `script.js`:
   ```javascript
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
       name: name,
       email: email,
       message: message
   });
   ```

2. **Using Formspree** (Free):
   - Sign up at formspree.io
   - Change form action in HTML:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 To-Do / Future Enhancements

- [ ] Add dark mode toggle
- [ ] Add project images/screenshots
- [ ] Add blog section
- [ ] Add testimonials
- [ ] Integrate real contact form backend
- [ ] Add loading animation
- [ ] Add certificate section

## 📄 License

Free to use and modify for personal use.

## 👤 Author

**Mohit Gupta**
- Email: mohitgupta4547@gmail.com
- GitHub: [@mrcode-31](https://github.com/mrcode-31)
- Location: Vellore, India

---

Built with 💙 by Mohit Gupta