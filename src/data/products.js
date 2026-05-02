/**
 * products.js
 * Hardcoded product catalog for the cafe shop.
 * Images for real products use local paths; others use placehold.co.
 */

const products = [
  // ── COFFEE ────────────────────────────────────────────────
  {
    id: "Arabica",
    name: "Cà Phê Hòa Tan Arabica",
    description:
      "Arabica mang cảm hứng từ những hạt cà phê Gia Lai, nổi bật với hương vị thanh nhẹ và tinh tế. Vị chua dịu mở đầu, tiếp nối là hậu ngọt thanh mượt mà, tạo nên tổng thể cân bằng và dễ chịu. Không quá đậm, không gắt, Arabica gợi cảm giác nhẹ nhàng nhưng vẫn đủ chiều sâu — như mang chất cao nguyên vào nhịp sống thành phố trong từng ly cà phê.",
    price: 149000,
    category: "coffee",
    image: "/image/arabica.png",
    rating: 4.9,
    popular: true,
  },
  {
    id: "Moka",
    name: "Cà Phê Hòa Tan Moka",
    description:
      "Moka mang cảm hứng từ những hạt cà phê Gia Lai, kết hợp cùng cacao để tạo nên hương vị cân bằng và êm mượt. Vị đậm nhẹ nhàng mở đầu, hòa quyện với hậu ngọt béo tinh tế, gợi cảm giác vừa gần gũi, vừa hiện đại — như mang chất cao nguyên vào nhịp sống thành phố trong từng ly cà phê.",
    price: 159000,
    category: "coffee",
    image: "/image/moka.png",
    rating: 4.8,
    popular: true,
  },
  {
    id: "Robusta",
    name: "Cà Phê Hòa Tan Robusta",
    description:
      "Robusta mang cảm hứng từ những hạt cà phê Gia Lai, nổi bật với hương vị đậm đà và mạnh mẽ. Vị đắng rõ nét mở đầu, tiếp nối là hậu vị sâu và dày, tạo nên tổng thể tròn vị và đầy năng lượng. Không cầu kỳ, không nhẹ nhàng, Robusta dành cho những ai yêu cà phê nguyên bản — như mang chất cao nguyên mạnh mẽ vào nhịp sống thành phố trong từng ly cà phê.",
    price: 79000,
    category: "coffee",
    image: "/image/robusta.png",
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
