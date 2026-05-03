'use client';

/**
 * /products/[id]/page.js — Product Detail Page
 * Shows: large image, name, category badge, rating, price,
 *        full description, quantity selector, Add to Cart button.
 */

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import products from '../../../data/products';
import { useCart } from '../../../hooks/useCart';

/** Star rendering component */
function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? 'star star--filled' : 'star star--empty'}>
          ★
        </span>
      ))}
      <span className="rating-number">({rating} / 5)</span>
    </div>
  );
}

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);
  if (!product) notFound();

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const isLocal = product.image.startsWith('/');

  function handleDecrease() {
    setQuantity((q) => Math.max(1, q - 1));
  }
  function handleIncrease() {
    setQuantity((q) => Math.min(99, q + 1));
  }
  function handleAddToCart() {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <section className="detail-page">
      <div className="container">
        {/* Back link */}
        <Link href="/" id="back-to-menu" className="back-link">
          ← Back to Menu
        </Link>

        <div className="detail-grid">
          {/* ── Left: Product image ── */}
          <div className="detail-image-wrapper" style={{ maxWidth: '450px', margin: '0 auto', aspectRatio: '4/5' }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 450px) 100vw, 450px"
              style={{ objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
              unoptimized={!isLocal}
              loading="eager"
            />
          </div>

          {/* ── Right: Product info ── */}
          <div className="detail-info">
            {/* Category chip */}
            <span className={`category-chip category-chip--${product.category}`}>
              {product.category}
            </span>

            {/* Name */}
            <h1 className="detail-title">{product.name}</h1>

            {/* Stars */}
            <StarRating rating={product.rating} />

            {/* Price */}
            <p className="detail-price">{product.price.toLocaleString('vi-VN')}₫</p>

            {/* Description */}
            <p className="detail-description">{product.description}</p>

            {/* Quantity selector */}
            <div className="qty-row">
              <span className="qty-label">Qty:</span>
              <div className="qty-controls">
                <button
                  id="qty-decrease"
                  className="qty-btn"
                  onClick={handleDecrease}
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="qty-value" aria-live="polite">{quantity}</span>
                <button
                  id="qty-increase"
                  className="qty-btn"
                  onClick={handleIncrease}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              id={`detail-add-to-cart-${product.id}`}
              onClick={handleAddToCart}
              className={`btn-primary${added ? ' btn-add-cart--added' : ''}`}
              style={{ marginTop: '0.5rem' }}
              aria-label={`Add ${quantity} × ${product.name} to cart`}
            >
              {added ? `✓ Added ${quantity} to Cart!` : `Add ${quantity} to Cart`}
            </button>

            {/* Popular badge if applicable */}
            {product.popular && (
              <p style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 600 }}>
                ⭐ This is one of our most popular items!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
