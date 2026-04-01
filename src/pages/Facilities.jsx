import { motion } from 'framer-motion';
import { FaMale, FaFemale, FaCheckCircle, FaWifi, FaBolt, FaUtensils, FaTint, FaFirstAid, FaGamepad, FaBook, FaTshirt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';

const amenityIcons = [FaTint, FaUtensils, FaWifi, FaBolt, FaTshirt, FaFirstAid, FaGamepad, FaBook];

const galleryImages = [
  'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
];

export default function Facilities() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary-100 text-sm font-semibold mb-4"
          >
            {t.facilities.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {t.facilities.title}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-accent-400">
              {t.facilities.titleHighlight}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-200 max-w-2xl"
          >
            {t.facilities.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Boys Hostel */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-5/12"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-2xl shadow-primary-500/25 flex items-center justify-center overflow-hidden">
                <FaMale className="text-white text-8xl opacity-80" />
                <div className="absolute inset-4 border-2 border-white/20 rounded-2xl" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  {t.facilities.boys.title}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-7/12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.facilities.boys.title}</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{t.facilities.boys.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.facilities.boys.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Girls Hostel */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-5/12"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-accent-500 to-accent-700 shadow-2xl shadow-accent-500/25 flex items-center justify-center overflow-hidden">
                <FaFemale className="text-white text-8xl opacity-80" />
                <div className="absolute inset-4 border-2 border-white/20 rounded-2xl" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  {t.facilities.girls.title}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-7/12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.facilities.girls.title}</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{t.facilities.girls.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.facilities.girls.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-accent-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Amenities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title={t.facilities.common.title} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {t.facilities.common.items.map((item, i) => {
              const Icon = amenityIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100 hover:shadow-lg hover:border-primary-100 transition-all"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 text-xl mb-3">
                    <Icon />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading title={t.facilities.gallery.title} subtitle={t.facilities.gallery.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="aspect-[3/2] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={src}
                  alt={`Facility ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
