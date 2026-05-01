'use client';

/**
 * page.js — Landing Page (/)
 * Features:
 *  - Hero section with banner image, cafe name, tagline, and CTA
 *  - Category filter tabs (All / Coffee / Food / Drinks)
 *  - Responsive product grid using ProductCard
 */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'coffee', label: '☕ Coffee' },
  { key: 'food', label: '🥐 Food' },
  { key: 'drinks', label: '🥤 Drinks' },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ══ HERO SECTION ══════════════════════════════════════ */}
      <section className="hero" aria-label="Hero banner">
        {/* Banner image */}
        <div className="hero-image-wrapper">
          <Image
            src="/image/banner.jpg"
            alt="Café Chính Thức — a warm, inviting coffee shop"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            loading="eager"
            sizes="100vw"
          />
        </div>

        {/* Dark overlay for readability */}
        <div className="hero-overlay" aria-hidden="true" />

        {/* Hero text content */}
        <div className="hero-content">
          <span className="hero-eyebrow">Est. 2020 · Ho Chi Minh City</span>
          <h1 className="hero-title">Café Chính Thức</h1>
          <p className="hero-tagline">
            Authentic Vietnamese coffee, crafted with tradition and served with heart.
            Your perfect cup is waiting.
          </p>
          <Link href="#menu" id="hero-cta" className="hero-cta">
            Explore Our Menu ↓
          </Link>
        </div>
      </section>

      {/* ══ MENU / PRODUCT SECTION ════════════════════════════ */}
      <section id="menu" className="menu-section" aria-label="Product menu">
        <div className="container">
          {/* Section heading */}
          <div className="menu-header">
            <h2 className="section-title">Our Menu</h2>
            <p className="section-subtitle">
              Handpicked blends, freshly brewed and lovingly made
            </p>
          </div>

          {/* ── Category filter tabs ── */}
          <div className="filter-tabs" role="tablist" aria-label="Filter products by category">
            {CATEGORIES.map(({ key, label }) => (
              <button
                key={key}
                id={`filter-tab-${key}`}
                role="tab"
                aria-selected={activeCategory === key}
                onClick={() => setActiveCategory(key)}
                className={`filter-tab${activeCategory === key ? ' filter-tab--active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* ── Product grid ── */}
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '3rem 0' }}>
              No products in this category yet.
            </p>
          ) : (
            <div className="product-grid" role="tabpanel" aria-label={`${activeCategory} products`}>
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
