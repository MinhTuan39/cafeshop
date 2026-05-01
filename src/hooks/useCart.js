'use client';

/**
 * useCart.js
 * Custom hook that provides convenient access to cart context.
 * Must be used inside a <CartProvider>.
 */

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
