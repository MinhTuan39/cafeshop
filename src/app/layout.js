/**
 * layout.js
 * Root layout — wraps the entire app with CartProvider and renders the Navbar.
 * Fonts are loaded via Google Fonts CSS @import in globals.css.
 */

import './globals.css';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Café Chính Thức — Premium Vietnamese Coffee',
  description:
    'Experience the finest Vietnamese coffee blends — Arabica, Mocha, Robusta and more. Order fresh, handcrafted beverages and artisan food at Café Chính Thức.',
  keywords: 'cafe, Vietnamese coffee, Arabica, Mocha, Robusta, coffee shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect + load Google Fonts — must be in <head>, not CSS @import,
            because Tailwind v4's PostCSS expansion makes CSS @import url() illegal */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          {/* Sticky navigation */}
          <Navbar />

          {/* Main content area */}
          <main className="page-wrapper">{children}</main>

          {/* Site-wide footer */}
          <footer className="site-footer">
            <p>
              © {new Date().getFullYear()} <strong>Café Chính Thức</strong>. Crafted with ☕ and passion.
            </p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
