import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaTrophy, FaNewspaper, FaCamera } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';

const galleryItems = [
  {
    id: 1,
    src: '/images/gallery/book-distribution.png',
    category: 'outreach',
    titleEn: 'Book Distribution Drive',
    titleMr: 'पुस्तक वाटप मोहीम',
    descEn: 'Distributing educational books and study materials to students in rural areas, empowering them with knowledge and resources to build a brighter future.',
    descMr: 'ग्रामीण भागातील विद्यार्थ्यांना शैक्षणिक पुस्तके आणि अभ्यास सामग्री वाटप, ज्ञान आणि संसाधनांद्वारे उज्ज्वल भविष्य घडवणे.',
    quoteEn: '"Education is the most powerful weapon which you can use to change the world." — Nelson Mandela',
    quoteMr: '"शिक्षण हे जगातील सर्वात शक्तिशाली शस्त्र आहे जे तुम्ही जग बदलण्यासाठी वापरू शकता."',
  },
  {
    id: 2,
    src: '/images/gallery/outdoor-study.png',
    category: 'education',
    titleEn: 'Community Study Sessions',
    titleMr: 'सामुदायिक अभ्यास सत्र',
    descEn: 'Children from underprivileged communities come together to study under the open sky. With mats, books, and determination — they prove that the will to learn knows no boundaries.',
    descMr: 'वंचित समुदायातील मुले मोकळ्या आकाशाखाली एकत्र येऊन अभ्यास करतात. चटई, पुस्तके आणि निश्चय — ते सिद्ध करतात की शिकण्याच्या इच्छेला कोणतीही सीमा नाही.',
    quoteEn: '"The beautiful thing about learning is that no one can take it away from you." — B.B. King',
    quoteMr: '"शिकण्याची सुंदर गोष्ट म्हणजे ते कोणीही तुमच्याकडून हिरावून घेऊ शकत नाही."',
  },
  {
    id: 3,
    src: '/images/gallery/news-coverage.png',
    category: 'achievement',
    titleEn: 'Media Recognition — Helping the Helpless',
    titleMr: 'माध्यम कव्हरेज — निराधारांना आधार',
    descEn: 'Our work in providing shelter and support to a disabled destitute woman was covered by Dainik Rashtra Sahyadri newspaper. This recognition motivates us to continue our mission of serving those in need.',
    descMr: 'दिव्यांग निराधार महिलेला निवारा आणि आधार देण्याच्या आमच्या कार्याची दैनिक राष्ट्र सह्याद्री वर्तमानपत्रात दखल घेण्यात आली. ही ओळख आम्हाला गरजूंची सेवा करण्याचे प्रेरणा देते.',
    quoteEn: '"The best way to find yourself is to lose yourself in the service of others." — Mahatma Gandhi',
    quoteMr: '"स्वतःला शोधण्याचा सर्वोत्तम मार्ग म्हणजे इतरांच्या सेवेत स्वतःला गमावणे." — महात्मा गांधी',
  },
  {
    id: 4,
    src: '/images/gallery/teaching-session.png',
    category: 'education',
    titleEn: 'Community Teaching & Mentorship',
    titleMr: 'सामुदायिक शिक्षण आणि मार्गदर्शन',
    descEn: 'Volunteers and teachers conduct free learning sessions for children in community spaces. Every child deserves the right to education, and we are committed to making it accessible to all.',
    descMr: 'स्वयंसेवक आणि शिक्षक सामुदायिक जागांमध्ये मुलांसाठी मोफत शिक्षण सत्रे आयोजित करतात. प्रत्येक मुलाला शिक्षणाचा अधिकार आहे, आणि ते सर्वांना सुलभ करण्यासाठी आम्ही वचनबद्ध आहोत.',
    quoteEn: '"A child without education is like a bird without wings." — Tibetan Proverb',
    quoteMr: '"शिक्षणाशिवाय मूल म्हणजे पंखांशिवाय पक्षी." — तिबेटी म्हण',
  },
];

const categories = [
  { key: 'all', labelEn: 'All', labelMr: 'सर्व' },
  { key: 'education', labelEn: 'Education', labelMr: 'शिक्षण' },
  { key: 'outreach', labelEn: 'Outreach', labelMr: 'समुदाय' },
  { key: 'achievement', labelEn: 'Achievements', labelMr: 'उपलब्धी' },
];

export default function Gallery() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox(prev => (prev > 0 ? prev - 1 : filtered.length - 1));
  const nextImage = () => setLightbox(prev => (prev < filtered.length - 1 ? prev + 1 : 0));

  const isEn = language === 'en';

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
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary-100 text-sm font-semibold mb-4">
            {isEn ? 'Gallery & Achievements' : 'गॅलरी आणि उपलब्धी'}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {isEn ? 'Our Journey in' : 'आमचा प्रवास'}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-accent-400">
              {isEn ? 'Pictures' : 'चित्रांमध्ये'}
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-primary-200 max-w-2xl">
            {isEn
              ? 'Every image tells a story of hope, transformation, and the power of community. Explore our work on the ground.'
              : 'प्रत्येक चित्र आशा, परिवर्तन आणि समुदायाच्या शक्तीची कथा सांगतो. आमचे जमिनीवरील काम पहा.'}
          </motion.p>
        </div>
      </section>

      {/* Motivational Banner */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 py-6">
        <div className="container-custom text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-white text-lg md:text-xl font-semibold italic">
            {isEn
              ? '"Alone we can do so little; together we can do so much." — Helen Keller'
              : '"एकट्याने आपण फारच कमी करू शकतो; एकत्र आल्यावर आपण खूप काही करू शकतो." — हेलन केलर'}
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            tag={isEn ? 'Our Work' : 'आमचे कार्य'}
            title={isEn ? 'Moments That Matter' : 'महत्त्वाचे क्षण'}
            subtitle={isEn ? 'A glimpse into the lives we touch and the communities we serve.' : 'आम्ही स्पर्श करत असलेल्या जीवनांची आणि सेवा करत असलेल्या समुदायांची एक झलक.'}
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-primary-800 text-white shadow-lg shadow-primary-800/20'
                    : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                }`}
              >
                {isEn ? cat.labelEn : cat.labelMr}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div
                    className="relative h-64 overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={item.src}
                      alt={isEn ? item.titleEn : item.titleMr}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <FaCamera className="text-white text-xl" />
                    </div>
                    {/* Category badge */}
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      item.category === 'education' ? 'bg-blue-500' :
                      item.category === 'outreach' ? 'bg-green-500' : 'bg-accent-500'
                    }`}>
                      {item.category === 'education' ? (isEn ? 'Education' : 'शिक्षण') :
                       item.category === 'outreach' ? (isEn ? 'Outreach' : 'समुदाय') :
                       (isEn ? 'Achievement' : 'उपलब्धी')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      {isEn ? item.titleEn : item.titleMr}
                    </h3>
                    <p className="text-primary-600 text-sm leading-relaxed mb-4">
                      {isEn ? item.descEn : item.descMr}
                    </p>
                    <blockquote className="border-l-3 border-accent-400 pl-4 italic text-primary-500 text-sm">
                      {isEn ? item.quoteEn : item.quoteMr}
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Achievement Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            tag={isEn ? 'Milestones' : 'मैलाचे दगड'}
            title={isEn ? 'Our Achievements' : 'आमच्या उपलब्धी'}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaTrophy className="text-2xl" />,
                titleEn: 'Media Coverage',
                titleMr: 'माध्यम कव्हरेज',
                descEn: 'Our community service was recognized by leading Marathi newspapers, highlighting our work in providing shelter to the helpless.',
                descMr: 'आमच्या सामुदायिक सेवेची प्रमुख मराठी वर्तमानपत्रांनी दखल घेतली, निराधारांना निवारा देण्याच्या कार्याला प्रसिद्धी.',
              },
              {
                icon: <FaNewspaper className="text-2xl" />,
                titleEn: 'Rural Education Drive',
                titleMr: 'ग्रामीण शिक्षण मोहीम',
                descEn: 'Successfully conducted open-air study sessions reaching hundreds of children in underserved communities across Maharashtra.',
                descMr: 'महाराष्ट्रातील वंचित समुदायांमधील शेकडो मुलांपर्यंत पोहोचणारी खुल्या हवेतील अभ्यास सत्रे यशस्वीरित्या आयोजित.',
              },
              {
                icon: <FaCamera className="text-2xl" />,
                titleEn: 'Book Material Distribution',
                titleMr: 'पुस्तक साहित्य वाटप',
                descEn: 'Distributed thousands of educational books and learning materials to students in rural and tribal areas, fueling dreams of a better tomorrow.',
                descMr: 'ग्रामीण आणि आदिवासी भागातील विद्यार्थ्यांना हजारो शैक्षणिक पुस्तके आणि शिक्षण साहित्य वाटप, उज्ज्वल उद्याची स्वप्ने पूर्ण करण्यास मदत.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{isEn ? item.titleEn : item.titleMr}</h3>
                <p className="text-primary-600 text-sm leading-relaxed">{isEn ? item.descEn : item.descMr}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-accent-400 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-accent-400 rounded-full" />
        </div>
        <div className="relative section-padding">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-accent-300 text-3xl md:text-4xl font-bold italic leading-snug mb-6">
              {isEn
                ? '"Small acts, when multiplied by millions of people, can transform the world."'
                : '"लहान कृती, लाखो लोकांनी गुणाकार केल्यावर, जग बदलू शकतात."'}
            </motion.p>
            <p className="text-primary-300 text-lg">— Howard Zinn</p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10">
              <FaTimes size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10">
              <FaChevronLeft size={32} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10">
              <FaChevronRight size={32} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox]?.src}
                alt={isEn ? filtered[lightbox]?.titleEn : filtered[lightbox]?.titleMr}
                className="max-h-[65vh] rounded-xl object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-bold">
                  {isEn ? filtered[lightbox]?.titleEn : filtered[lightbox]?.titleMr}
                </h3>
                <p className="text-gray-400 text-sm mt-2 max-w-xl">
                  {isEn ? filtered[lightbox]?.descEn : filtered[lightbox]?.descMr}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
