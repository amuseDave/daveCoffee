import { priceFormatter } from "../util/priceFormat";
import { motion } from "framer-motion";
export default function Product({ product }) {
  return (
    <motion.li
      layout
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="w-[300px] min-h-[220px]"
    >
      <img
        className="opacity-75 brightness-75 h-[210px] w-[400px] object-cover rounded-xl border-2 border-stone-500"
        src={product.img}
      ></img>
      <div className="flex justify-between mt-1">
        <p className="text-3xl font-extrabold text-white">
          {product.description}
        </p>

        <div className="px-5 border cursor-pointer border-stone-50 rounded-xl bg-stone-900">
          <p className="text-3xl text-stone-200">
            {priceFormatter(product.priceCents)}
          </p>
        </div>
      </div>
    </motion.li>
  );
}
