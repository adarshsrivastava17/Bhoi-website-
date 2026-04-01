import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaHeart } from 'react-icons/fa';

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-900" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-accent-400 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-accent-400 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-accent-400 rounded-full" />
      </div>

      <div className="relative section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaHeart className="text-accent-400 text-4xl mx-auto mb-6 animate-float" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.cta.title}
            </h2>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto mb-10">
              {t.cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-500/20"
              >
                <FaHeart className="text-sm" />
                {t.cta.donate}
              </Link>
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
              >
                {t.cta.volunteer}
              </Link>
            </div>

            <p className="text-primary-300/70 text-sm mt-6">{t.cta.taxNote}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
