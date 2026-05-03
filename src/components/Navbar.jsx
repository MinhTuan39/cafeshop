'use client';

/**
 * Navbar.jsx
 * Top navigation bar with logo, nav links, and a cart icon with item count badge.
 */

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '../hooks/useCart';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { cartCount } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/cart', label: 'Cart' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* ── Logo ── */}
        <Link href="/" className="transition-transform hover:scale-105" id="navbar-logo">
          <Image src="/image/logo.png" alt="Café Chính Thức Logo" width={200} height={200} className="object-contain h-15 w-[200px]" priority />
        </Link>

        {/* ── Nav links ── */}
        <nav className="flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className={`relative text-sm font-semibold tracking-wide transition-colors py-1 ${pathname === link.href ? 'text-cafe-900' : 'text-cafe-600/80 hover:text-cafe-900'
                }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 rounded-full" />
              )}
            </Link>
          ))}

          {/* ── Cart icon with badge ── */}
          <Link
            href="/cart"
            id="nav-cart-icon"
            className="relative flex items-center text-cafe-800 p-2 rounded-full hover:bg-cafe-200/50 hover:shadow-md hover:-translate-y-0.5 transition-all active:scale-95"
            aria-label="View cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm animate-[bounce_0.5s_ease-out]">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
