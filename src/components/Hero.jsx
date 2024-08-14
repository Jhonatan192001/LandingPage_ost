import { motion } from "framer-motion";

const Hero = () => {
  const animationProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  };;

  return (
    <div className="mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
      <motion.div
        className="w-full sm:w-3/4 md:w-1/2 max-w-md order-first lg:order-last"
        {...animationProps}
        transition={{
          ...animationProps.transition,
          delay: animationProps.transition.delay + 0.4,
        }}
      >
        <div className="border-4 border-white rounded-3xl shadow-xl p-4 pb-8">
          <img src="../public/camara_001.png" alt="Camera" className="w-full h-auto" />
        </div>
      </motion.div>
      
      <div className="lg:ml-10 order-last lg:order-first w-full lg:w-1/2">
        <motion.div
          className="w-full min-h-80 md:min-h-96 border-8 md:border-[16px] border-[#0055CC] flex items-center relative"
          {...animationProps}
        >
          <motion.div
            className="w-full min-h-52 md:min-h-72 bg-white absolute p-3 md:p-6 left-[-15px] md:left-[-30px]"
            {...animationProps}
            transition={{
              ...animationProps.transition,
              delay: animationProps.transition.delay + 0.2,
            }}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Titulo</h1>
            <p className="text-sm md:text-base text-gray-700">
            Ut a accumsan mi. Donec pellentesque ultricies fringilla. Vestibulum sagittis vestibulum velit molestie eleifend. Integer vestibulum posuere commodo. In hac habitasse platea dictumst. Proin porttitor orci nibh, a auctor ipsum ultrices ut. Donec pharetra dignissim mauris ut ullamcorper. Sed ac semper leo. Ut eros lacus, faucibus nec iaculis et, consequat sit amet lorem. Ut bibendum elementum nunc nec euismod. Aliquam metus lectus, dignissim sed enim ac, rhoncus euismod nisi.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;