import p1 from "../assets/product1.jpg";
import p2 from "../assets/product2.jpg";
import p3 from "../assets/product3.jpg";
import p4 from "../assets/product4.jpg";
import p5 from "../assets/product5.jpg";
import p6 from "../assets/product6.jpg";
import p7 from "../assets/product7.jpg";
import p8 from "../assets/product8.jpg";
import p9 from "../assets/product9.jpg";
import Product from "./Product";
import { motion } from "framer-motion";

const COFFEE_PRODUCTS = [
  { id: "c1", img: p1, description: "African Coffee", priceCents: 499 },
  { id: "c2", img: p2, description: "best coffee", priceCents: 999 },
  { id: "c3", img: p3, description: "best coffee", priceCents: 499 },
  { id: "c4", img: p4, description: "best coffee", priceCents: 999 },
  { id: "c5", img: p5, description: "best coffee", priceCents: 499 },
  { id: "c6", img: p6, description: "best coffee", priceCents: 299 },
  { id: "c7", img: p7, description: "best coffee", priceCents: 249 },
  { id: "c8", img: p8, description: "best coffee", priceCents: 199 },
  { id: "c9", img: p9, description: "best coffee", priceCents: 899 },
];

export default function Products() {
  return (
    <>
      <motion.ul
        animate="animation"
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 pt-20 sm:gap-y-5 gap-y-0 gap-x-14 md:grid-cols-2 xl:grid-cols-3"
      >
        {COFFEE_PRODUCTS.map((coffee) => (
          <Product key={coffee.id} product={coffee} />
        ))}
      </motion.ul>
    </>
  );
}
