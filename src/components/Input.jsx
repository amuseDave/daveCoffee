import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function Input({ id, label, isValidating, ...props }) {
  const inputRef = useRef();
  const [isValid, setIsValid] = useState(undefined);

  const cssClass = isValid === false ? "bg-red-400" : "bg-stone-100";

  useEffect(() => {
    if (isValidating === null || isValidating === true) {
      if (inputRef.current.value.length <= 5) {
        if (id === "number") {
          if (inputRef.current.value.length < 7) {
            setIsValid(false);
          }
        } else if (label === "Email") {
          if (!inputRef.current.value.includes("@")) {
            setIsValid(false);
            return;
          } else {
            setIsValid(true);
            return;
          }
        } else {
          setIsValid(false);
          return;
        }
      } else {
        setIsValid(true);
      }
    }
  }, [isValidating]);

  return (
    <motion.div
      variants={{
        animate: {
          rotateZ: [0, 3, 0, -3, 0, 3, 0, -3, 0],
          transition: { duration: 0.1 },
        },
      }}
      className="flex flex-col items-start gap-y-[6px]"
    >
      <label className="ml-2 text-sm font-medium text-stone-300" htmlFor={id}>
        {label}
      </label>
      <input
        ref={inputRef}
        className={`w-full px-3 py-2 text-sm border rounded-lg text-stone-900 placeholder-stone-400 
       border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:border-stone-800 ${cssClass}`}
        id={id}
        name={id}
        label={label}
        {...props}
      />
    </motion.div>
  );
}
