import { priceFormatter } from "../util/priceFormat";
import { motion } from "framer-motion";
export default function CartItem({ item }) {
  return (
    <li className="flex justify-between">
      <div className="flex items-center">
        <p>{item.title}</p> -{" "}
        <p className="text-sm">{priceFormatter(item.priceCents)}</p>
      </div>

      <div className="flex flex-row items-center mt-[5px] gap-x-2">
        <div className="flex items-center justify-center h-[22px] w-[22px] p-2 rounded-full bg-opacity-50 bg-stone-400">
          <p className="text-xl cursor-pointer select-none text-stone-100 ">
            -
          </p>
        </div>
        <p>{item.quantity}</p>
        <div>
          <div className="flex items-center justify-center h-[22px] w-[22px] p-2 rounded-full bg-opacity-50 bg-stone-400">
            <p className="text-xl rounded-full cursor-pointer select-none text-stone-100">
              +
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
