// components/SectionHeader.jsx
'use client';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl font-bold text-gold mb-4"
    >
      {title}
    </motion.h1>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeader;
