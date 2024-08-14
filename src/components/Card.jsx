import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = ({ title, description, imageUrl }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "exit"}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6 flex flex-col sm:flex-row">
        <div className="sm:w-2/3 sm:pr-4 mb-4 sm:mb-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="sm:w-1/3">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-24 object-cover rounded-md" />
          ) : (
            <div className="bg-gray-200 h-24 w-full rounded-md"></div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default Card;