// import React from 'react';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const TimelineCard = ({ number, content }) => (
  <motion.li className="mb-4 ms-6" variants={itemVariants}>
    <div className="absolute flex items-center justify-center w-6 h-6 bg-[#0055CC] rounded-full -start-3 ring-4 ring-white">
      <h2 className="text-white font-bold">{number}</h2>
    </div>
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="text-sm font-normal text-gray-700">
        <p>{content}</p>
      </div>
    </div>
  </motion.li>
);

TimelineCard.propTypes = {
  number: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default TimelineCard;