import { priceFormatter } from "../util/priceFormat";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlicer";
import { motion } from "framer-motion";
export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleAddItem() {
    dispatch(cartActions.addItem2(item.id));
  }
  function handleRemoveItem() {
    dispatch(cartActions.removeItem(item.id));
  }

  return (
    <motion.li
      layout
      variants={{
        animation: { opacity: [0, 1], y: [20, 0], scale: [0.8, 1] },
      }}
      className="flex justify-between mt-1"
    >
      <div className="flex items-center">
        <p className="capitalize">{item.title}</p> -{" "}
        <p className="text-sm">{priceFormatter(item.priceCents)}</p>
      </div>

      <div className="flex flex-row items-center gap-x-2 w-[70px] justify-center">
        <div
          onClick={handleRemoveItem}
          className="flex items-center justify-center h-[22px] w-[22px] p-2 rounded-full bg-opacity-50 bg-stone-400"
        >
          <p className="text-xl cursor-pointer select-none text-stone-100 ">
            -
          </p>
        </div>
        <p className="w-[20px]">{item.quantity}</p>
        <div>
          <div className="flex items-center justify-center h-[22px] w-[22px] p-2 rounded-full bg-opacity-50 bg-stone-400">
            <p
              onClick={handleAddItem}
              className="text-xl rounded-full cursor-pointer select-none text-stone-100"
            >
              +
            </p>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
