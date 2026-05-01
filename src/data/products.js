/**
 * products.js
 * Hardcoded product catalog for the cafe shop.
 * Images for real products use local paths; others use placehold.co.
 */

const products = [
  // ── COFFEE ────────────────────────────────────────────────
  {
    id: "arabica",
    name: "Arabica Chính Thức",
    description:
      "Our signature Arabica blend sourced from the highlands of Vietnam. Bright, fruity notes with a smooth, lingering finish. Perfectly roasted to unlock its full floral complexity — ideal as both a pour-over and a classic espresso.",
    price: 55000,
    category: "coffee",
    image: "/image/arabicachinhthuc.jpg",
    rating: 4.9,
    popular: true,
  },
  {
    id: "mocha",
    name: "Mocha Chính Thức",
    description:
      "A velvety fusion of premium espresso and rich dark chocolate, crowned with silky steamed milk. Our Mocha strikes the perfect balance between bitter cacao depth and creamy sweetness — a coffeehouse classic, elevated.",
    price: 60000,
    category: "coffee",
    image: "/image/mokachinhthuc.jpg",
    rating: 4.8,
    popular: true,
  },
  {
    id: "robusta",
    name: "Robusta Bao Bì Chính Thức",
    description:
      "Bold, full-bodied Robusta with earthy undertones and an intense caffeine punch. Traditionally drip-brewed with a Vietnamese phin filter and served over ice with sweetened condensed milk. A timeless afternoon ritual.",
    price: 45000,
    category: "coffee",
    image: "/image/robustabaobichinhthuc.jpg",
    rating: 4.7,
    popular: true,
  },
  // {
  //   id: "cold-brew",
  //   name: "Cold Brew Reserve",
  //   description:
  //     "Steeped for 18 hours in cold, filtered water, our Cold Brew Reserve delivers an ultra-smooth, low-acidity coffee experience. Notes of dark chocolate and toasted caramel with a clean, refreshing finish.",
  //   price: 65000,
  //   category: "coffee",
  //   image: "https://placehold.co/400x300/6B4226/FDF6EC?text=Cold+Brew",
  //   rating: 4.6,
  //   popular: false,
  // },

  // // ── FOOD ──────────────────────────────────────────────────
  // {
  //   id: "croissant",
  //   name: "Butter Croissant",
  //   description:
  //     "Freshly baked every morning using French-style laminated dough with premium butter. Crispy, flaky layers on the outside, wonderfully soft and airy inside. Best enjoyed warm alongside your favourite coffee.",
  //   price: 35000,
  //   category: "food",
  //   image: "https://placehold.co/400x300/D4A017/FFFAF5?text=Croissant",
  //   rating: 4.7,
  //   popular: true,
  // },
  // {
  //   id: "tiramisu",
  //   name: "Classic Tiramisu",
  //   description:
  //     "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with fine cocoa powder. Our house-made Tiramisu recipe has been perfected over the years — rich, indulgent, and deeply satisfying.",
  //   price: 55000,
  //   category: "food",
  //   image: "https://placehold.co/400x300/D4A017/FFFAF5?text=Tiramisu",
  //   rating: 4.8,
  //   popular: false,
  // },
  // {
  //   id: "avocado-toast",
  //   name: "Avocado Toast",
  //   description:
  //     "Creamy, smashed avocado on thick-cut sourdough toast, topped with cherry tomatoes, a poached egg, micro herbs, and a drizzle of extra-virgin olive oil. A wholesome, energising start to your day.",
  //   price: 70000,
  //   category: "food",
  //   image: "https://placehold.co/400x300/D4A017/FFFAF5?text=Avocado+Toast",
  //   rating: 4.5,
  //   popular: false,
  // },

  // // ── DRINKS ────────────────────────────────────────────────
  // {
  //   id: "matcha-latte",
  //   name: "Matcha Latte",
  //   description:
  //     "Ceremonial-grade Japanese matcha whisked to a smooth paste, then blended with steamed oat milk and a touch of honey. Earthy, creamy, and subtly sweet — the perfect caffeine alternative for any time of day.",
  //   price: 58000,
  //   category: "drinks",
  //   image: "https://placehold.co/400x300/6B4226/FDF6EC?text=Matcha+Latte",
  //   rating: 4.6,
  //   popular: false,
  // },
  // {
  //   id: "strawberry-smoothie",
  //   name: "Strawberry Smoothie",
  //   description:
  //     "A vibrant blend of fresh strawberries, banana, Greek yoghurt, and a splash of cold-pressed orange juice. No added sugar, no artificial flavours — just pure, fruity goodness that refreshes from the inside out.",
  //   price: 52000,
  //   category: "drinks",
  //   image: "https://placehold.co/400x300/6B4226/FDF6EC?text=Smoothie",
  //   rating: 4.4,
  //   popular: false,
  // },
];

export default products;
