import React from "react";
import AutoImageCarousel from "./AutoImageCarousel";
import TimelineCard from "./TimelineCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useAnimationControl = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return { ref, controls };
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const OurServices = () => {
  const { ref, controls } = useAnimationControl();

  const timelineData = [
    {
      number: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam odio nec lacus sollicitudin, ac eleifend velit eleifend. Ut sollicitudin felis id nibh blandit, eget mattis erat ultricies",
    },
    {
      number: 2,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam odio nec lacus sollicitudin, ac eleifend velit eleifend. Ut sollicitudin felis id nibh blandit, eget mattis erat ultricies",
    },
    {
      number: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam odio nec lacus sollicitudin, ac eleifend velit eleifend. Ut sollicitudin felis id nibh blandit, eget mattis erat ultricies",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Acerca de nuestro servicio
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <AutoImageCarousel />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="w-full md:w-1/2"
        >
          <ol className="relative border-s border-gray-200">
            {timelineData.map((item) => (
              <TimelineCard
                key={item.number}
                number={item.number}
                content={item.content}
              />
            ))}
          </ol>
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
