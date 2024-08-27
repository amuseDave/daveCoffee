import cartAddImg from "../assets/addbag.png";
import cartBagAddImg from "../assets/coffee-bean-bag-add.png";
import { priceFormatter } from "../util/priceFormat";
import { motion, useAnimate } from "framer-motion";

import { useDispatch } from "react-redux";
import cartSlicer, { cartActions } from "../store/cartSlicer";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();

  function handleIncreaseQuantity() {
    if (product.selectedQuantity === 9) {
      animate(
        scope.current,
        { x: [0, 5, 0, -5, 0, 5, 0, -5, 0] },
        { duration: 0.1 }
      );
      return;
    }
    dispatch(cartActions.increaseQuantity(product.id));
    animate(scope.current, { scale: [1, 1.05, 1] }, { duration: 0.2 });
  }

  function handleDecreaseQuantity() {
    if (product.selectedQuantity === 1) {
      animate(
        scope.current,
        { x: [0, 5, 0, -5, 0, 5, 0, -5, 0] },
        { duration: 0.1 }
      );
      return;
    }

    dispatch(cartActions.decreaseQuantity(product.id));
    animate(scope.current, { scale: [1, 1.08, 1] }, { duration: 0.1 });
  }

  function handleAddItem() {
    dispatch(cartActions.addItem(product.id));

    animate(scope2.current, { rotateZ: [0, 15, 0, -15, 0] }, { duration: 0.1 });

    const productRect = scope2.current.getBoundingClientRect();

    const targetX = window.innerWidth - productRect.right - 50; // Adjust 50 for cart width
    const targetY = -productRect.top + 10; // Adjust 10 for cart top offset

    // Animate movement to the top-right corner
    animate(
      scope3.current,
      {
        opacity: [1, 1, 0],
        x: [0, targetX],
        y: [0, targetY],
      },
      { duration: 0.2 }
    );
  }

  return (
    <motion.li
      layout
      variants={{
        animation: { opacity: [0, 1], y: [20, 0], scale: [0.8, 1] },
      }}
      transition={{ duration: 0.5 }}
      className="sm:w-[300px] min-h-[230px] w-[280px] relative"
    >
      <motion.div
        ref={scope3}
        animate={{ opacity: 0 }}
        className="absolute w-[40px] opacity-0 bottom-6 right-0"
      >
        <img src={cartBagAddImg} className="select-none" />
      </motion.div>

      <img
        className="opacity-75 brightness-75 sm:h-[210px] sm:w-[400px] h-[180px] w-[360px] object-cover rounded-xl border-2 border-stone-500"
        src={product.img}
        alt={product.title}
      />
      <div className="flex justify-between mt-1">
        <p className="text-lg font-medium capitalize text-stone-400">
          {product.title} -{" "}
          <span className="text-base text-stone-200">
            {priceFormatter(product.priceCents)}
          </span>
        </p>
        <motion.div ref={scope2}>
          <img
            onClick={handleAddItem}
            src={cartAddImg}
            className="w-[35px] opacity-70 invert cursor-pointer hover:opacity-100 transition-all"
          />
        </motion.div>
      </div>
      <div className="flex flex-row items-center justify-start mt-[5px] gap-x-2">
        <div className="flex items-center justify-center h-[22px] w-[22px] p-2 rounded-full bg-opacity-50 bg-stone-400">
          <p
            className="text-xl cursor-pointer select-none text-stone-100 "
            onClick={handleDecreaseQuantity}
          >
            -
          </p>
        </div>

        <motion.div
          ref={scope}
          className="w-12 text-center border select-none border-stone-50 rounded-xl bg-stone-900 text-stone-100 quantity "
        >
          {product.selectedQuantity}
        </motion.div>
        <div>
          <div className="flex items-center justify-center h-[22px] w-[22px] p-2 rounded-full bg-opacity-50 bg-stone-400">
            <p
              className="text-xl rounded-full cursor-pointer select-none text-stone-100"
              onClick={handleIncreaseQuantity}
            >
              +
            </p>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
