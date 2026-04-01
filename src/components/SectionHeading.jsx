import { motion } from 'framer-motion';

export default function SectionHeading({ tag, title, highlight, subtitle, light = false }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {tag && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            light
              ? 'bg-white/20 text-white'
              : 'bg-primary-50 text-primary-700'
          }`}
        >
          {tag}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className={light ? 'text-accent-300' : 'gradient-text'}>
            {highlight}
          </span>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg max-w-3xl mx-auto ${
            light ? 'text-blue-100' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
