import { useState, createContext, useContext, useEffect } from 'react';

import { initiateCheckout } from '../lib/payments.js';
import { getStorageItem, setStorageItem } from '../lib/storage.js';

import products from '../products.json';

const CART_STATE_KEY = 'cart';

const defaultCart = {
  products: {},
};

export const CartContext = createContext();

export function useCartState() {
  const [cart, updateCart] = useState(defaultCart);

  useEffect(() => {
    const data = getStorageItem(CART_STATE_KEY);
    if (data) {
      updateCart(data);
    }
  }, []);

  useEffect(() => {
    setStorageItem(CART_STATE_KEY, cart);
  }, [cart]);

  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      ...cart.products[key],
      pricePerUnit: product.price,
    };
  });

  const subtotal = cartItems.reduce(
    (accumulator, { pricePerUnit, quantity }) => {
      return accumulator + pricePerUnit * quantity;
    },
    0
  );

  const quantity = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  function addToCart({ id }) {
    updateCart((prev) => {
      let cart = { ...prev };

      if (cart.products[id]) {
        cart.products[id].quantity = cart.products[id].quantity + 1;
      } else {
        cart.products[id] = {
          id,
          quantity: 1,
        };
      }

      return cart;
    });
  }

  function checkout() {
    if (quantity === 0) {
      alert('Sorry no items in your cart.');
    }
    initiateCheckout({
      lineItems: cartItems.map(({ id, quantity }) => {
        return {
          price: id,
          quantity,
        };
      }),
    });
  }

  function updateItem({ id, quantity }) {
    updateCart((prev) => {
      let cart = { ...prev };

      if (cart.products[id]) {
        cart.products[id].quantity = quantity;
      } else {
        cart.products[id] = {
          id,
          quantity: 1,
        };
      }

      return cart;
    });
  }

  return {
    cart,
    cartItems,
    subtotal,
    quantity,
    addToCart,
    checkout,
    updateItem,
  };
}

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}
