import Product from "./Product";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function Products() {
  const products = useSelector((state) => state.cartSlicer.products);
  return (
    <>
      <motion.ul
        animate="animation"
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 pt-20 pb-10 sm:gap-y-5 gap-y-0 gap-x-14 md:grid-cols-2 xl:grid-cols-3"
      >
        {products.map((coffee) => (
          <Product key={coffee.id} product={coffee} />
        ))}
      </motion.ul>
    </>
  );
}
