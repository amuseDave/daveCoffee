import { motion } from "framer-motion";
export default function Input({ id, label, ...props }) {
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
        className="w-full px-3 py-2 text-sm border rounded-lg text-stone-900 placeholder-stone-400 bg-stone-100 border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:border-stone-800"
        id={id}
        name={id}
        label={label}
        {...props}
      />
    </motion.div>
  );
}
