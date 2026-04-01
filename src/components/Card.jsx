import { motion } from 'framer-motion';

export default function Card({ icon, title, description, features, index = 0, accent = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative group rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        accent
          ? 'bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-xl shadow-primary-500/25'
          : 'bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-primary-100/50 hover:border-primary-100'
      }`}
    >
      {/* Decorative gradient orb */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
        accent ? 'bg-accent-300' : 'bg-primary-400'
      }`} />
      
      {icon && (
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 ${
          accent
            ? 'bg-white/20 text-white'
            : 'bg-gradient-to-br from-primary-50 to-accent-50 text-primary-600'
        }`}>
          {icon}
        </div>
      )}
      
      <h3 className={`text-xl font-bold mb-3 ${accent ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      
      <p className={`leading-relaxed ${accent ? 'text-blue-100' : 'text-gray-600'}`}>
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="mt-5 space-y-2">
          {features.map((feature, i) => (
            <li key={i} className={`flex items-start gap-2 text-sm ${accent ? 'text-blue-100' : 'text-gray-600'}`}>
              <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent ? 'bg-accent-300' : 'bg-accent-500'}`} />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
