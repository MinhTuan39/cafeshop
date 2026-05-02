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
          <span className="hero-eyebrow">Est. 2026 · Da Nang</span>
          <h1 className="hero-title">Urban Coffee</h1>
          <p className="hero-tagline">
            Tinh hoa cà phê Việt từ những hạt tuyển chọn nơi cao nguyên, mang đến hương vị đậm đà nhưng vẫn tinh tế và dễ thưởng thức.
            Mỗi ly là sự cân bằng giữa truyền thống và hiện đại, sẵn sàng cho mọi khoảnh khắc trong ngày.
          </p>
          <Link href="#menu" id="hero-cta" className="hero-cta">
            Sản Phẩm Của Urban ↓
          </Link>
        </div>
      </section>

      {/* ══ MENU / PRODUCT SECTION ════════════════════════════ */}
      <section id="menu" className="menu-section" aria-label="Product menu">
        <div className="container">
          {/* Section heading */}
          <div className="menu-header">
            <h2 className="section-title">Sản Phẩm</h2>
            <p className="section-subtitle">
              Những loại cà phê được chọn kỹ lưỡng, pha chế tươi mới và làm bằng cả tấm lòng
            </p>
          </div>

          {/* ── Category filter tabs ── */}


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
