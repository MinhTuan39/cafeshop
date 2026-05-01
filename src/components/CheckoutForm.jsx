'use client';

/**
 * CheckoutForm.jsx
 * Checkout form with order summary sidebar and a success screen.
 * On valid submit, clears the cart and shows confirmation UI (no redirect).
 */

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';

const TAX_RATE = 0.10;

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
};

export default function CheckoutForm() {
  const { cart, cartTotal, clearCart } = useCart();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const tax = cartTotal * TAX_RATE;
  const total = cartTotal + tax;

  // ── Validation ────────────────────────────────────────────
  function validate() {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid phone number.';
    }
    if (!form.address.trim()) newErrors.address = 'Address is required.';
    if (!form.city.trim()) newErrors.city = 'City is required.';
    return newErrors;
  }

  // ── Handle input change ───────────────────────────────────
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  // ── Handle form submit ────────────────────────────────────
  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Generate fake order ID
    const id = `CF-${Date.now().toString(36).toUpperCase()}`;
    setOrderId(id);
    clearCart();
    setOrderPlaced(true);
  }

  // ── Success screen ────────────────────────────────────────
  if (orderPlaced) {
    return (
      <div className="checkout-success" id="checkout-success">
        <div className="success-icon">✅</div>
        <h2 className="success-title">Order Confirmed!</h2>
        <p className="success-message">
          Thank you for your order. Your café experience is on its way!
        </p>
        <p className="success-order-id">Order ID: <strong>{orderId}</strong></p>
        <p className="success-sub">
          A confirmation will be sent to <strong>{form.email}</strong>.
        </p>
        <Link href="/" id="back-home-btn" className="btn-primary mt-6 inline-block">
          ← Back to Home
        </Link>
      </div>
    );
  }

  // ── Form + Summary ────────────────────────────────────────
  return (
    <div className="checkout-layout">
      {/* ── Form ── */}
      <form
        id="checkout-form"
        onSubmit={handleSubmit}
        noValidate
        className="checkout-form-section"
      >
        <h2 className="section-heading">Delivery Details</h2>

        {[
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Nguyen Van A' },
          { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
          { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+84 901 234 567' },
          { name: 'address', label: 'Address', type: 'text', placeholder: '123 Le Loi, District 1' },
          { name: 'city', label: 'City', type: 'text', placeholder: 'Ho Chi Minh City' },
        ].map(({ name, label, type, placeholder }) => (
          <div key={name} className="form-group">
            <label htmlFor={`field-${name}`} className="form-label">
              {label}
            </label>
            <input
              id={`field-${name}`}
              name={name}
              type={type}
              value={form[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className={`form-input${errors[name] ? ' form-input--error' : ''}`}
              aria-describedby={errors[name] ? `error-${name}` : undefined}
            />
            {errors[name] && (
              <p id={`error-${name}`} className="form-error" role="alert">
                {errors[name]}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          id="place-order-btn"
          className="btn-primary w-full mt-4"
          disabled={cart.length === 0}
        >
          Place Order
        </button>
        {cart.length === 0 && (
          <p className="form-error text-center mt-2">Your cart is empty.</p>
        )}
      </form>

      {/* ── Order summary sidebar ── */}
      <aside className="checkout-summary" aria-label="Order summary">
        <h2 className="section-heading">Order Summary</h2>
        <ul className="summary-items">
          {cart.map((item) => (
            <li key={item.id} className="summary-item">
              <span className="summary-item-name">
                {item.name} × {item.quantity}
              </span>
              <span className="summary-item-price">
                {(item.price * item.quantity).toLocaleString('vi-VN')}₫
              </span>
            </li>
          ))}
        </ul>
        <div className="summary-divider" />
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
      </aside>
    </div>
  );
}
