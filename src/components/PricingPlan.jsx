import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PricingPlan = ({
  title,
  price,
  description,
  features,
  isHighlighted,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-3xl border shadow-md transition-all duration-300
        ${
          isHighlighted
            ? "border-blue-500 shadow-lg sm:scale-105"
            : "border-gray-200 hover:border-blue-500 hover:shadow-lg"
        }`}
    >
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <div className="flex justify-center items-baseline my-3">
        <span className="mr-2 text-5xl font-extrabold">
          {price === "GRATIS" ? price : `S/${price}`}
        </span>
        {price !== "GRATIS" && <span className="text-gray-500">/mensual</span>}
      </div>
      <p className="mb-4 text-gray-700">{description}</p>
      <ul className="mb-8 space-y-2 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 mr-2 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`mt-auto text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300
          ${
            isHighlighted
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-600 hover:bg-blue-700"
          } 
          focus:ring-4 focus:ring-blue-200 focus:outline-none`}
      >
        Empezar ahora
      </a>
    </motion.div>
  );
};

const PricingPlans = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto"
    >
      <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-center text-gray-900">
        Planes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <PricingPlan
          title="Bronze"
          price="GRATIS"
          description="Sharp Bronze 60 Premier HMO"
          features={[
            "We cover costs towards the cervical collar, braces, belts etc",
            "Go cashless with in-built coverage",
            "We cover cost for delivery kit, orthokit and recovery kit.",
            "We cover costs towards gauze, cotton",
          ]}
          isHighlighted={true}
        />
        <PricingPlan
          title="Silver"
          price="20"
          description="Sharp Silver 70 Premier HMO"
          features={[
            "We cover costs towards the cervical collar, braces, belts etc",
            "Go cashless with in-built coverage",
            "We cover cost for delivery kit, orthokit and recovery kit.",
            "We cover costs towards gauze, cotton",
          ]}
        />
        <PricingPlan
          title="Gold"
          price="30"
          description="Sharp Gold 80 Premier HMO"
          features={[
            "We cover costs towards the cervical collar, braces, belts etc",
            "Go cashless with in-built coverage",
            "We cover cost for delivery kit, orthokit and recovery kit.",
            "We cover costs towards gauze, cotton",
          ]}
        />
      </div>
    </motion.section>
  );
};

PricingPlan.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  isHighlighted: PropTypes.bool,
};

export default PricingPlans;