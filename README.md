# ⚡ NOVA — Next-Gen E-Commerce Platform
> Built for the **Prompt War Challenge** 🏆 | Pure Vanilla Frontend Architecture

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

---

## 🌟 Overview
**NOVA** is a premium, ultra-fast, zero-dependency e-commerce web platform engineered strictly using **HTML5, CSS3, and modern Vanilla JavaScript**. It delivers an Amazon/Flipkart-grade shopping experience with a futuristic dark-mode glassmorphism aesthetic, lightning-fast client-side state persistence, and authentic Indian e-commerce features.

---

## ✨ Key Features & Capabilities

### 🛍️ 1. Massive 100+ Product Interactive Catalogue
- **105+ Fully Curated Products** across 7 major categories:
  - 📱 Phones & Tablets (Flagship series, foldable displays)
  - 💻 Laptops & Computing (M3 Pro MacBooks, RTX 4080 Gaming rigs)
  - 🎧 Audio & Studio (ANC wireless headphones, audiophile IEMs)
  - ⌚ Wearables & Tech (Smartwatches, fitness rings)
  - 📚 Books & Bestsellers (Atomic Habits, Psychology of Money, Deep Work)
  - 🎮 Gaming & Consoles (PS5 Pro, RTX consoles, controllers)
  - 🔌 Essentials & Accessories (GaN Chargers, MagSafe docks)
- **Multi-Angle Gallery & Color Switching:** Live swatch color switching per product (Space Black, Silver, Titanium, Emerald) with synchronized image galleries.
- **Dynamic Spec Benchmarks:** Side-by-side technical specification comparison modal for up to 3 products simultaneously.

### 📍 2. Precision GPS & Interactive Map Locator
- **Live Satellite & Reverse Geocoding:** Auto-detects real user locality, city, state, and pincode via browser GPS or network IP fallback without hardcoded mockups.
- **Interactive Radar Map:** Interactive canvas allowing customers to click anywhere on an animated radar grid to relocate delivery pins, or choose 1-click metro hubs (UP, Delhi NCR, Mumbai, Bengaluru).

### 🔐 3. Customer Authentication & Order Gate
- **Safe Visitor Mode:** Default state starts logged out for privacy and realistic authentication flow.
- **Multi-View Account Modal:**
  - 📝 **Create Account:** Name, Gmail/Email, password, delivery address (with 1-click test pre-fill).
  - 🔑 **Sign In:** Fast login with stored credentials.
  - 👑 **VIP Profile:** Active session card showing member badge, avatar initials, registered address, and 1-click **Sign Out**.
- **Checkout Guard:** Attempting "Instant Buy Now" or "Proceed to Checkout" while signed out prompts the customer to create an account or sign in first. Once authenticated, checkout automatically resumes!

### 🚚 4. Live Real-Time Order Tracking & Invoice
- **Simulated Dispatch Visualizer:** Moving delivery van animation between the NOVA Fulfillment Robotics Hub and the customer's pinned destination.
- **Courier Pilot Card:** Live pilot profile with pilot phone call and dispatch instructions modal.
- **Instant Tax Invoice:** 1-click downloadable printable tax invoice receipt with unique order reference (`NOVA-ORD-XXXXXX`).

### ⚡ 5. Performance & UX Polish
- **Real-Time Autocomplete Search:** Instant dropdown suggestions across title, brand, description, and keywords.
- **Dynamic Filtering & Sorting:** Instant category chips, price range slider up to ₹1,49,999, rating filters, and stock status.
- **Cart & Wishlist Slide-Over Drawers:** Live badge counters, quantity increments, free shipping progress bar (threshold: ₹2,499), and persistent `localStorage` synchronization.
- **Responsive Design:** 100% fluid mobile bottom navigation bar and desktop sticky header.

---

## 🛠️ Project Structure

Strictly built across 3 core files:

```
Prompt War/
├── index.html       # Semantic HTML5 markup, accessible ARIA dialogs & SVGs
├── style.css        # Premium dark glassmorphism, responsive grid, animations
├── script.js        # 105 products catalog, cart/wishlist engine, GPS & tracking
├── .gitignore       # Git ignore rules
└── README.md        # Project documentation
```

---

## 🚀 Local Setup & Running

No build steps, bundlers, or `npm install` needed!

1. Clone or download this repository:
   ```bash
   git clone <your-repository-url>
   cd "Prompt War"
   ```
2. Open `index.html` directly in any modern browser:
   - Double click `index.html`, OR
   - Run a local server (e.g., using VS Code Live Server or `npx serve .`).

---

## ☁️ Deployment

### Deploying to Vercel (Static Site):
1. Push this repository to your **GitHub** account.
2. Go to **[Vercel Dashboard](https://vercel.com/new)**.
3. Click **"Import"** next to your GitHub repository.
4. Leave build settings as default (Framework: `Other`, Root: `./`).
5. Click **"Deploy"** — your live link will be generated in seconds!

---

## 👨‍💻 Author & Credits
- **Participant:** Divyansh Dev Sharma
- **Challenge:** Prompt War Challenge 🚀
- **Theme:** Next-Gen E-Commerce Platform
