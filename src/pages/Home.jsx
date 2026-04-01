import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaGraduationCap, FaTools, FaBookReader, FaHeart, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import CTABanner from '../components/CTABanner';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQ from '../components/FAQ';

export default function Home() {
  const { t } = useLanguage();

  const highlightIcons = [
    <FaHome className="text-2xl" />,
    <FaGraduationCap className="text-2xl" />,
    <FaTools className="text-2xl" />,
    <FaBookReader className="text-2xl" />,
  ];

  const highlights = [
    { ...t.highlights.hostel, icon: highlightIcons[0] },
    { ...t.highlights.education, icon: highlightIcons[1] },
    { ...t.highlights.skill, icon: highlightIcons[2] },
    { ...t.highlights.values, icon: highlightIcons[3] },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-100 text-sm mb-8"
            >
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {t.hero.title}
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-accent-400">
                {t.hero.titleHighlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-200 max-w-2xl mb-10 leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-accent-500/20"
              >
                <FaHeart className="text-sm" />
                {t.hero.cta1}
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                {t.hero.cta2}
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
          </div>

          {/* Floating stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex absolute bottom-16 right-8 xl:right-16 gap-6"
          >
            {[
              { num: '500+', label: t.stats.students },
              { num: '5+', label: t.stats.hostels },
              { num: '10+', label: t.stats.years },
            ].map((stat, i) => (
              <div key={i} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
                <div className="text-2xl font-bold text-accent-300">{stat.num}</div>
                <div className="text-xs text-primary-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            tag={t.highlights.sectionTag}
            title={t.highlights.title}
            subtitle={t.highlights.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.desc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-80 h-80 border border-accent-400 rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 border border-accent-400 rounded-full" />
        </div>
        <div className="relative section-padding">
          <div className="container-custom">
            <SectionHeading
              tag={t.stats.sectionTag}
              title={t.stats.title}
              light
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard number={500} label={t.stats.students} icon="🎓" />
              <StatCard number={5} label={t.stats.hostels} icon="🏠" />
              <StatCard number={20} label={t.stats.programs} icon="📋" />
              <StatCard number={10} label={t.stats.years} icon="⭐" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* CTA Banner */}
      <CTABanner />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
