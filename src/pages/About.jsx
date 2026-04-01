import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaHeart, FaCheckCircle, FaShieldAlt, FaFileAlt, FaBalanceScale, FaBuilding } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';

const certIcons = [FaShieldAlt, FaFileAlt, FaBalanceScale, FaBuilding];

export default function About() {
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
            {t.about.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {t.about.title}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-accent-400">
              {t.about.titleHighlight}
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-primary-700 leading-relaxed mb-6"
            >
              {t.about.intro}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-600 leading-relaxed"
            >
              {t.about.introP2}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-2xl mb-5 shadow-lg shadow-primary-500/25">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.about.mission.title}</h3>
              <p className="text-primary-600 leading-relaxed">{t.about.mission.text}</p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 shadow-xl shadow-primary-500/25 text-white"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white text-2xl mb-5">
                <FaEye />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.about.vision.title}</h3>
              <p className="text-primary-200 leading-relaxed">{t.about.vision.text}</p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white text-2xl mb-5 shadow-lg shadow-accent-500/25">
                <FaHeart />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.about.values.title}</h3>
              <ul className="space-y-3">
                {t.about.values.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary-600">
                    <FaCheckCircle className="text-accent-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            tag="✅"
            title={t.about.certTitle}
            subtitle={t.about.certSubtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.certs.map((cert, index) => {
              const Icon = certIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center text-primary-600 text-xl mb-4 transition-colors">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{cert.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
