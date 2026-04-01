import { motion } from 'framer-motion';
import { FaCheckCircle, FaCalendarAlt, FaUsers, FaChartLine, FaHandsHelping, FaLightbulb } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import CTABanner from '../components/CTABanner';

export default function Programs() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent-400/15 rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary-100 text-sm font-semibold mb-4">{t.programs.badge}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.programs.title}{' '}<span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-accent-400">{t.programs.titleHighlight}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-primary-200 max-w-2xl">{t.programs.subtitle}</motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title={t.programs.ongoing.title} tag="🟢" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.programs.ongoing.items.map((program, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -4 }} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center text-primary-600 text-xl">
                    {[<FaUsers key={0} />, <FaChartLine key={1} />, <FaLightbulb key={2} />, <FaHandsHelping key={3} />][index]}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />{program.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading title={t.programs.future.title} tag="🚀" />
          <div className="space-y-6">
            {t.programs.future.items.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-primary-700 font-bold text-lg flex-shrink-0">{String(index + 1).padStart(2, '0')}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-primary-600 bg-primary-50 px-4 py-2 rounded-lg flex-shrink-0">
                  <FaCalendarAlt className="text-sm" /><span className="text-sm font-medium">{item.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-gray-900" />
        <div className="relative section-padding">
          <div className="container-custom">
            <SectionHeading title={t.programs.impact.title} subtitle={t.programs.impact.subtitle} light />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard number={500} label={t.stats.students} icon="🎓" />
              <StatCard number={20} label={t.stats.programs} icon="📋" />
              <StatCard number={5} label={t.stats.hostels} icon="🏠" />
              <StatCard number={10} label={t.stats.years} icon="⭐" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
