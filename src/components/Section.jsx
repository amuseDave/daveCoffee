import { motion, useScroll, useTransform } from "framer-motion";
export default function Section({ title, img, left, right, multiple }) {
  const { scrollY } = useScroll();
  const sectionScrollOpacity = useTransform(
    scrollY,
    [
      0,
      400 * multiple,
      500 * multiple,
      600 * multiple,
      400 * (multiple + 1.7),
      400 * (multiple + 1.8),
    ],
    [0, 0, 0.5, 1, 0.5, 0]
  );

  const sectionScrollY = useTransform(
    scrollY,
    [0, 400 * multiple, 500 * multiple, 600 * multiple],
    [0, 0, 0, -100]
  );
  return (
    <motion.section
      className={`h-[500px] w-full flex justify-center md:justify-start md:px-40 mt-10 items-center ${
        left ? "" : "flex-row-reverse"
      }`}
      style={{ opacity: sectionScrollOpacity, y: sectionScrollY }}
    >
      <div className="relative">
        <motion.img
          whileHover={{ filter: "brightness(100%)" }}
          className="md:w-[380px] md:h-[380px] sm:h-[350px] sm:w-[350px] w-[300px] h-[300px] object-cover brightness-[20%] rounded-full"
          src={img}
        />
        <div
          className={`absolute bg-[#161616a9] top-0 ${left && "md:left-40 x"} ${
            right && "md:right-40 md:left-0"
          } w-max h-11 flex justify-center items-center px-3 rounded-3xl left-[50%] translate-x-[-50%] md:translate-x-[0]`}
        >
          <h1 className="md:text-4xl xl:text-5xl sm:text-3xl text-2xl font-bold text-white">
            {title}
          </h1>
        </div>
      </div>
    </motion.section>
  );
}
