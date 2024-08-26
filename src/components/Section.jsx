import { motion, useScroll, useTransform } from "framer-motion";
export default function Section({ title, img, left, right, multiple }) {
  const { scrollYProgress } = useScroll();

  let sectionScrollOpacity;

  if (multiple === 2) {
    sectionScrollOpacity = useTransform(
      scrollYProgress,
      [0, 0.5, 0.6, 0.78, 0.88],
      [0, 0, 1, 1, 0]
    );
  }

  if (multiple === 1) {
    sectionScrollOpacity = useTransform(
      scrollYProgress,
      [0, 0.24, 0.28, 0.45, 0.57],
      [0, 0, 1, 1, 0]
    );
  }

  const sectionScrollY = useTransform(
    scrollYProgress,
    [0, 0.242 * multiple, 0.246 * multiple],
    [0, 0, -20]
  );
  return (
    <motion.section
      className={`h-[70svh] w-full flex justify-center items-start md:justify-start md:px-40 ${
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
          <h1 className="text-2xl font-bold text-white md:text-4xl xl:text-5xl sm:text-3xl">
            {title}
          </h1>
        </div>
      </div>
    </motion.section>
  );
}
