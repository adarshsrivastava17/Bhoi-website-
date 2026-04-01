import { motion } from 'framer-motion';
import { FaHome, FaGraduationCap, FaTools, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';

const serviceIcons = [FaHome, FaGraduationCap, FaTools, FaBriefcase];
const serviceColors = [
  { bg: 'from-primary-500 to-primary-700', shadow: 'shadow-primary-500/25', light: 'bg-primary-50', text: 'text-primary-600' },
  { bg: 'from-accent-500 to-accent-700', shadow: 'shadow-accent-500/25', light: 'bg-accent-50', text: 'text-accent-600' },
  { bg: 'from-warm-400 to-warm-500', shadow: 'shadow-warm-400/25', light: 'bg-warm-50', text: 'text-warm-500' },
  { bg: 'from-purple-500 to-purple-700', shadow: 'shadow-purple-500/25', light: 'bg-purple-50', text: 'text-purple-600' },
];

export default function Services() {
  const { t } = useLanguage();

  const services = [
    t.services.hostel,
    t.services.education,
    t.services.skill,
    t.services.career,
  ];

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
            {t.services.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {t.services.title}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-accent-400">
              {t.services.titleHighlight}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-200 max-w-2xl"
          >
            {t.services.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-20">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            const color = serviceColors[index];
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
              >
                {/* Icon/Visual */}
                <div className="lg:w-5/12">
                  <div className={`relative w-full aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br ${color.bg} ${color.shadow} shadow-2xl flex items-center justify-center`}>
                    <Icon className="text-white text-7xl md:text-8xl opacity-90" />
                    {/* Decorative ring */}
                    <div className="absolute inset-4 border-2 border-white/20 rounded-2xl" />
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-lg">
                      {['🏠', '📚', '🛠️', '💼'][index]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-7/12">
                  <div className={`inline-flex w-12 h-12 rounded-xl ${color.light} ${color.text} items-center justify-center text-xl mb-4`}>
                    <Icon />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <FaCheckCircle className={`${color.text} mt-1 flex-shrink-0`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
