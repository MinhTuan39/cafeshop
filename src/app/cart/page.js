'use client';

/**
 * /cart/page.js — Cart Page
 * Shows all cart items with qty controls and a persistent order summary.
 */

import Link from 'next/link';
import { useCart } from '../../hooks/useCart';
import CartItem from '../../components/CartItem';

const TAX_RATE = 0.10;

export default function CartPage() {
  const { cart, cartTotal } = useCart();

  const tax = cartTotal * TAX_RATE;
  const total = cartTotal + tax;

  // ── Empty cart state ──────────────────────────────────────
  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <div className="container">
          <div className="empty-cart" id="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven&apos;t added anything yet.</p>
            <Link href="/" id="back-to-menu-empty" className="btn-primary">
              Browse Our Menu
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="container">
        <h1 className="page-title">Your Cart</h1>

        <div className="cart-layout">
          {/* ── Cart items list ── */}
          <div className="cart-items-section" aria-label="Cart items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* ── Order summary sidebar ── */}
          <aside className="order-summary-box" aria-label="Order summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>{cartTotal.toLocaleString('vi-VN')}₫</span>
            </div>
            <div className="summary-row">
              <span>Tax (10%)</span>
              <span>{tax.toLocaleString('vi-VN')}₫</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-row summary-row--total">
              <span>Total</span>
              <span>{total.toLocaleString('vi-VN')}₫</span>
            </div>

            <Link
              href="/checkout"
              id="proceed-to-checkout"
              className="btn-primary w-full mt-4"
              style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center' }}
            >
              Proceed to Checkout →
            </Link>
            <Link
              href="/"
              id="continue-shopping"
              className="btn-outline w-full"
              style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'center' }}
            >
              ← Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
