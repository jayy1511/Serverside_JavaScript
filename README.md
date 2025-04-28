# 🛒 b-eay — E-commerce PC Parts Store

Welcome to **b-eay**, a modern full-stack e-commerce web application built with **React + Tailwind CSS** on the frontend and a **Node.js + Express + MongoDB** REST API on the backend.

This project allows users to:
- Browse PC parts and accessories 🖥️
- Sign up, log in, and view their profile 👤
- Admin users can add, edit, and delete products 🛠️
- Smooth, professional, responsive UI ✨

---

## 🌟 Frontend Features

- **Authentication:**
  - Secure login and signup with JWT
  - User session stored in `localStorage`
- **Hero Section:**
  - Full-screen background with bold title and "Checkout Now" button
- **Product Management:**
  - Add, edit, and delete products (admin side)
- **Profile Page:**
  - Logged-in users can view their profile details
- **Responsive Design:**
  - Mobile-first, fully responsive
- **Modern UI:**
  - Custom reusable Button components
  - Greyish dark theme (#888888 and #3d3d3d)
  - Smooth hover transitions
- **Protected Actions:**
  - Product management actions restricted to logged-in users
- **Sticky Navbar & Footer:**
  - Navbar remains fixed while scrolling
  - Footer at the bottom on all pages

---

## 📋 Frontend Pages

- Home (Hero Section)
- Products
- Login
- Signup
- Profile
- Add Product
- Manage Products

---

## 🔥 Backend Features

- **User Management:**
  - User registration and login
  - User roles (admin, customer, vendor)
  - User profile management
- **Product Management:**
  - CRUD operations (Create, Read, Update, Delete)
- **Authentication & Authorization:**
  - JWT (JSON Web Tokens) for secure access
  - Middleware for protecting routes
- **Security:**
  - Helmet, CORS, dotenv for enhanced API security
  - Rate limiting & validation to prevent abuse
- **Other Backend Utilities:**
  - Multer for file uploads (images if needed)
  - Mongoose ODM for working with MongoDB
  - Hosted API server (e.g., Render)

---

# 🚀 Made with passion by Jay
