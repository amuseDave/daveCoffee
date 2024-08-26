import { priceFormatter } from "../util/priceFormat";
import { motion } from "framer-motion";
export default function Product({ product }) {
  return (
    <motion.li
      layout
      variants={{
        animation: { opacity: [0, 1], y: [20, 0], scale: [0.8, 1] },
      }}
      transition={{ duration: 0.5 }}
      className="sm:w-[300px] min-h-[230px] w-[280px]"
    >
      <img
        className="opacity-75 brightness-75 sm:h-[210px] sm:w-[400px] h-[180px] w-[360px] object-cover rounded-xl border-2 border-stone-500"
        src={product.img}
      ></img>
      <div className="flex justify-between mt-1">
        <p className="text-xl font-extrabold text-white">
          {product.description}
        </p>

        <motion.div
          whileHover={{ filter: "brightness(180%)" }}
          className="px-5 border cursor-pointer border-stone-50 rounded-xl bg-stone-900"
        >
          <p className="text-xl text-stone-200">
            {priceFormatter(product.priceCents)}
          </p>
        </motion.div>
      </div>
    </motion.li>
  );
}
