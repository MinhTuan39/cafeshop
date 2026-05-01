'use client';

/**
 * CartItem.jsx
 * Represents a single row in the cart page.
 * Shows image, name, unit price, quantity controls, and a remove button.
 */

import Image from 'next/image';
import { useCart } from '../hooks/useCart';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();
  const isLocal = item.image.startsWith('/');

  return (
    <div className="cart-item" id={`cart-item-${item.id}`}>
      {/* Product image */}
      <div className="cart-item-image-wrapper">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="96px"
          className="cart-item-image"
          style={{ objectFit: 'cover' }}
          unoptimized={!isLocal}
        />
      </div>

      {/* Details */}
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-unit-price">
          {item.price.toLocaleString('vi-VN')}₫ each
        </p>

        {/* Quantity controls */}
        <div className="qty-controls">
          <button
            id={`qty-decrease-${item.id}`}
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="qty-btn"
            aria-label={`Decrease quantity of ${item.name}`}
          >
            −
          </button>
          <span className="qty-value" aria-live="polite">
            {item.quantity}
          </span>
          <button
            id={`qty-increase-${item.id}`}
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="qty-btn"
            aria-label={`Increase quantity of ${item.name}`}
          >
            +
          </button>
        </div>
      </div>

      {/* Line total + remove */}
      <div className="cart-item-right">
        <p className="cart-item-total">
          {(item.price * item.quantity).toLocaleString('vi-VN')}₫
        </p>
        <button
          id={`remove-item-${item.id}`}
          onClick={() => removeFromCart(item.id)}
          className="remove-btn"
          aria-label={`Remove ${item.name} from cart`}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
