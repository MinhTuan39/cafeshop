You are an expert Next.js developer. Build a complete, production-ready 
cafe shop website with the following spec:

## Tech Stack:
- Next.js 14+ with App Router
- Tailwind CSS for styling
- localStorage for cart persistence
- No backend, no database, no external APIs

## Project Structure:
src/
├── app/
│   ├── layout.js              # Root layout with Navbar
│   ├── page.js                # Landing page
│   ├── products/
│   │   └── [id]/
│   │       └── page.js        # Product detail page
│   ├── cart/
│   │   └── page.js            # Cart page
│   └── checkout/
│       └── page.js            # Fake checkout page
├── components/
│   ├── Navbar.jsx             # Logo + nav links + cart icon with badge
│   ├── ProductCard.jsx        # Card used in grid
│   ├── CartItem.jsx           # Row in cart with qty controls
│   └── CheckoutForm.jsx       # Form + success screen
├── data/
│   └── products.js            # Hardcoded product array
├── context/
│   └── CartContext.jsx        # Cart state using React Context + localStorage
└── hooks/
    └── useCart.js             # Custom hook for cart operations

## Product Data (in /data/products.js):
Each product must have:
- id (string)
- name (string)
- description (string)
- price (number)
- category: "coffee" | "food" | "drinks"
- image (use https://placehold.co/400x300?text=ProductName)
- rating (number 1-5)
- popular (boolean)

Include at least 9 products across 3 categories.

## Features:

### Landing Page (/)
- Hero section with cafe name, tagline, and CTA button
- Category filter tabs (All / Coffee / Food / Drinks)
- Responsive product grid (1 col mobile, 2 col tablet, 3 col desktop)
- "Popular" badge on featured items
- Each card: image, name, price, rating stars, "Add to Cart" button

### Product Detail Page (/products/[id])
- Large image
- Name, category badge, rating, price
- Full description
- Quantity selector
- "Add to Cart" button
- "Back to menu" link

### Cart Page (/cart)
- List of cart items with image, name, price
- Increase / decrease quantity buttons
- Remove item button
- Order summary: subtotal, tax (10%), total
- "Proceed to Checkout" button
- Empty cart state with link back to menu

### Checkout Page (/checkout)
- Form fields: Full Name, Email, Phone, Address, City
- Order summary sidebar
- "Place Order" button
- On submit: show a success screen with order confirmation message
  and a "Back to Home" button (do NOT redirect, just show success UI)
- Basic client-side validation (required fields)

## Cart Context:
- Wrap the whole app in CartProvider inside layout.js
- Cart stored and synced with localStorage
- Functions: addToCart, removeFromCart, updateQuantity, clearCart
- Derived values: cartCount, cartTotal

## Design:
- Warm & cozy cafe aesthetic
- Color palette: brown (#6B4226), cream (#FDF6EC), warm white (#FFFAF5),
  accent gold (#D4A017)
- Font: use Google Fonts — "Playfair Display" for headings, 
  "Inter" for body text
- Smooth hover effects on cards and buttons
- Fully responsive (mobile-first)
- Subtle shadows and rounded corners throughout

## Code Quality:
- Use 'use client' only where needed
- No TypeScript needed, plain JS is fine
- Clean, readable, well-commented code
- No external UI libraries (Tailwind only)

Generate ALL files completely with full code. Do not skip or abbreviate any file.