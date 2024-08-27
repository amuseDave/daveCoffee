import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlicer";
import { AnimatePresence, motion } from "framer-motion";
import Input from "./Input";
import loadingGif from "../assets/loading.gif";
import {
  useNavigate,
  useSubmit,
  useNavigation,
  useActionData,
} from "react-router-dom";
import { priceFormatter } from "../util/priceFormat";
import { useEffect, useState } from "react";

export default function CheckOut() {
  const dispatch = useDispatch();
  const [isValidating, setIsValidating] = useState(false);
  const navigation = useNavigation();
  const isSuccess = useSelector((state) => state.cartSlicer.isSuccess);
  const submit = useSubmit();
  const cartItems = useSelector((state) => state.cartSlicer.cart);
  const isCheckoutVisible = useSelector((state) => state.cartSlicer.isCheckout);
  const navigate = useNavigate();
  const data = useActionData();

  function handleNavigate() {
    if (isSuccess) {
      dispatch(cartActions.resetCart());
      dispatch(cartActions.setSuccessFalse());
    }
    dispatch(cartActions.setCheckoutHide());
    dispatch(cartActions.setCartHide());

    setTimeout(() => {
      navigate("/products");
    }, 100);
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.totalPriceCents,
    0
  );

  function handleSubmit(e) {
    e.preventDefault();
    setIsValidating((prevState) => {
      if (prevState === false) return true;
      if (prevState === true) return null;
      if (prevState === null) return true;
    });
    const fd = new FormData(e.target);
    const fdParsed = Object.fromEntries(fd.entries());

    if (
      fdParsed.tel.length < 8 ||
      !fdParsed.email.includes("@") ||
      fdParsed.email.length < 6 ||
      fdParsed.address.length < 6 ||
      fdParsed.city.length < 5
    )
      return;

    submit({ data: fdParsed }, { method: "POST" });
    console.log("order successful");
  }

  useEffect(() => {
    if (cartItems.length > 0) {
      dispatch(cartActions.setCheckoutVisible());
    }
  }, []);

  useEffect(() => {
    if (data === true) {
      setTimeout(() => {
        dispatch(cartActions.setSuccess());
      }, 200);
    }
  }, [data]);

  return (
    <AnimatePresence mode="wait">
      {data === true ? (
        <motion.div animate={{ opacity: [0, 1] }}>
          <h1 className="self-center text-center text-stone-300">
            Your Order Was Submitted! <br />
            Check Your E-Mail!
          </h1>
          <button
            onClick={handleNavigate}
            className="absolute bottom-5 left-1/2 translate-x-[-50%] bg-stone-200 px-4 py-2 rounded-lg"
          >
            Okay
          </button>
        </motion.div>
      ) : navigation.state === "submitting" ? (
        <motion.img
          exit={{ opacity: 0, y: [30] }}
          animate={{ opacity: [0, 0.6], y: [30, 0] }}
          src={loadingGif}
          className="object-cover h-[95%]"
        />
      ) : (
        isCheckoutVisible && (
          <motion.div
            exit={{
              x: [0, 30],
              opacity: [1, 0],
              transition: { duration: 0.2 },
            }}
            className="flex flex-col justify-center mt-4 rounded-lg"
          >
            <motion.form
              onSubmit={handleSubmit}
              animate="animate"
              transition={{ staggerChildren: 0.05 }}
              className="w-full space-y-2"
            >
              <Input
                isValidating={isValidating}
                id="tel"
                type="number"
                label="Your Number"
                placeholder="123-456-7890"
              />
              <Input
                isValidating={isValidating}
                id="email"
                type="email"
                label="E-Mail Address"
                placeholder="you@example.com"
              />
              <Input
                isValidating={isValidating}
                id="city"
                type="text"
                label="City"
                placeholder="Your City"
              />
              <Input
                isValidating={isValidating}
                id="address"
                type="text"
                label="Address"
                placeholder="Your Address"
              />
              <div className="relative flex flex-col justify-between top-2">
                <div className="flex justify-between font-bold border-b-2 border-stone-500 text-stone-950">
                  <h1>Total Price - </h1>
                  <h1>{priceFormatter(totalPrice)}</h1>
                </div>
                <motion.button
                  disabled={navigation.state === "submitting" ? true : false}
                  className="w-full py-1 mt-1 transition-colors rounded-lg hover:text-stone-950 text-stone-100 hover:bg-stone-500 bg-stone-950"
                >
                  Place Order
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        )
      )}
    </AnimatePresence>
  );
}
