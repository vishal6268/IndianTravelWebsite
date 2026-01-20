# 🇮🇳 Incredible India - Travel & Tourism Website

A modern, responsive, and visually stunning travel website built with **React.js** and **Tailwind CSS v4**. This project showcases top Indian travel destinations with a clean and professional user interface.

## ✨ Features
- **Modern UI/UX:** Clean design with a focus on high-quality Indian tourism.
- **Fully Responsive:** Optimized for Mobile, Tablet, and Desktop screens.
- **Dynamic Navigation:** Smooth switching between Home, Tours, Packages, and Contact sections.
- **Interactive Elements:** - Sticky Navbar that changes color on scroll.
  - Interactive Search Bar for destinations.
  - Hover effects on destination cards.
- **Contact System:** A functional Contact Us form with validation and success alerts.

## 🚀 Getting Started

Follow these steps to get the project running on your local machine:

### 1. Prerequisites
Make sure you have **Node.js** installed on your system.

### 2. Create the Project
Open your terminal and run:
```bash
npx create-react-app my-travel-site
cd my-travel-site

```

### 3. Install Dependencies
Run:
```bash

npm install lucide-react @tailwindcss/postcss tailwindcss postcss autoprefixer

```
### 4.Configure Tailwind CSS (v4)
Create a file named postcss.config.js in the root folder and paste:
```javascript

JavaScript

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  }
}
```
### 5.Setup Styles
Open src/index.css, delete everything, and add this single line:

CSS

```css
@import "tailwindcss";
```
### 6. Add the Code
Replace the entire content of *src/App.js* with the provided React code.

### 7. Run the Application
```Bash
npm start
```
The website will open automatically at http://localhost:3000.

🛠️ Tech Stack

     Frontend: React.js

     Styling: Tailwind CSS v4

     Icons: Lucide React

     Deployment: Ready for Vercel, Netlify, or GitHub Pages.

📂 Folder Structure

     src/App.js: Contains all the logic, state management, and UI components.

     src/index.css: Global styles and Tailwind imports.

     postcss.config.js: Configuration for Tailwind processing.
Developed with ❤️ for exploring the beauty of India.

```bash
 npm install -D tailwindcss@3 postcss autoprefixer
>> npx tailwindcss init -p
```

