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

        <Image
          src="/image/banner.jpg"
          alt="Café Chính Thức"
          fill
          style={{ objectFit: 'inherit' }}
          priority
          className='h-full'
        />


        {/* Dark overlay for readability */}
        <div className="hero-overlay" aria-hidden="true" />

        {/* Hero text content */}
        <div className="hero-content">
          <span className="hero-eyebrow">Premium Coffee Experience</span>
          <h1 className="hero-title">Urban Coffee</h1>
          <p className="hero-tagline">
            Đánh thức giác quan với hương vị cà phê nguyên bản, được rang xay thủ công từ những hạt Arabica tuyển chọn.
            Khám phá không gian tinh tế và trọn vẹn từng khoảnh khắc.
          </p>
          <Link href="#menu" id="hero-cta" className="hero-cta">
            Khám Phá Thực Đơn
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
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
