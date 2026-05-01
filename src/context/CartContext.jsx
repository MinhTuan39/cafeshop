'use client';

/**
 * CartContext.jsx
 * Provides global cart state using React Context + localStorage persistence.
 * Wrap the entire app with <CartProvider> inside layout.js.
 */

import { createContext, useContext, useEffect, useReducer, useCallback } from 'react';

const CART_STORAGE_KEY = 'cafeshop_cart';

// ── Reducer ──────────────────────────────────────────────────
function cartReducer(state, action) {
  switch (action.type) {
    case 'LOAD_CART':
      return action.payload;

    case 'ADD_ITEM': {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];
    }

    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload);

    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
}

// ── Context ──────────────────────────────────────────────────
const CartContext = createContext(null);

// ── Provider ─────────────────────────────────────────────────
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Hydrate from localStorage on mount (client only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        dispatch({ type: 'LOAD_CART', payload: JSON.parse(stored) });
      }
    } catch {
      // Ignore corrupted storage
    }
  }, []);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage errors (e.g. private browsing quota exceeded)
    }
  }, [cart]);

  // ── Actions ──────────────────────────────────────────────
  const addToCart = useCallback((product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity } });
  }, []);

  const removeFromCart = useCallback((productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  // ── Derived values ────────────────────────────────────────
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ── Raw context export (used by useCart hook) ─────────────────
export { CartContext };
