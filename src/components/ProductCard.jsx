'use client';

/**
 * ProductCard.jsx
 * Displays a product in the grid with image, name, price, rating stars,
 * a "Popular" badge, and an "Add to Cart" button.
 */

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';

/** Renders filled / half / empty stars */
function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= Math.round(rating) ? 'star star--filled' : 'star star--empty'}
        >
          ★
        </span>
      ))}
      <span className="rating-number">({rating})</span>
    </div>
  );
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  // Check if image is local or external
  const isLocal = product.image.startsWith('/');

  function handleAddToCart(e) {
    e.preventDefault(); // Don't navigate when clicking the button
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <article className="product-card" id={`product-card-${product.id}`}>
      {/* Popular badge */}
      {product.popular && (
        <span className="popular-badge" aria-label="Popular item">
          ⭐ Popular
        </span>
      )}

      {/* Product image — links to detail page */}
      <Link href={`/products/${product.id}`} className="card-image-link">
        <div className="card-image-wrapper">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="card-image"
            style={{ objectFit: 'cover' }}
            unoptimized={!isLocal}
          />
        </div>
      </Link>

      {/* Card body */}
      <div className="card-body">
        {/* Category chip */}
        <span className={`category-chip category-chip--${product.category}`}>
          {product.category}
        </span>

        {/* Name */}
        <Link href={`/products/${product.id}`} className="card-title-link">
          <h3 className="card-title">{product.name}</h3>
        </Link>

        {/* Stars */}
        <StarRating rating={product.rating} />

        {/* Price + CTA */}
        <div className="card-footer">
          <p className="card-price">
            {product.price.toLocaleString('vi-VN')}₫
          </p>
          <button
            id={`add-to-cart-${product.id}`}
            onClick={handleAddToCart}
            className={`btn-add-cart${added ? ' btn-add-cart--added' : ''}`}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}
