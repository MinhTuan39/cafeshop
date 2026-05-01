'use client';

/**
 * /checkout/page.js — Checkout Page
 * Renders the CheckoutForm component which handles the form + success UI.
 */

import CheckoutForm from '../../components/CheckoutForm';

export default function CheckoutPage() {
  return (
    <section className="checkout-page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>
        <CheckoutForm />
      </div>
    </section>
  );
}
