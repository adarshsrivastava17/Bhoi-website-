import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/facilities', label: t.nav.facilities },
    { path: '/programs', label: t.nav.programs },
    { path: '/get-involved', label: t.nav.getInvolved },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="relative bg-primary-900 text-gray-300">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo.png"
                alt="BSA Logo"
                className="w-10 h-10 rounded-lg object-contain"
              />
              <div>
                <h3 className="text-white font-bold text-sm">भोई समाज आश्रय संस्था</h3>
                <p className="text-primary-400 text-xs">Pune, Maharashtra</p>
              </div>
            </div>
            <p className="text-primary-300 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-800 hover:bg-accent-600 flex items-center justify-center text-primary-400 hover:text-white transition-all duration-300"
                  aria-label="Social media link"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-300 hover:text-accent-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-600" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-5">{t.footer.contactUs}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-accent-400 mt-1 flex-shrink-0" size={14} />
                <a href="mailto:bhoisamajashraysanstha@gmail.com" className="text-sm text-primary-300 hover:text-accent-400 transition-colors break-all">
                  bhoisamajashraysanstha@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-accent-400 mt-1 flex-shrink-0" size={14} />
                <span className="text-sm text-primary-300">+91 99709 78463</span>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="text-accent-400 mt-1 flex-shrink-0" size={14} />
                <a href="https://wa.me/919970978463" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-300 hover:text-accent-400 transition-colors">
                  WhatsApp: +91 99709 78463
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-400 mt-1 flex-shrink-0" size={14} />
                <span className="text-sm text-primary-300">Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-5">{t.footer.newsletter}</h3>
            <p className="text-sm text-primary-300 mb-4">{t.footer.newsletterDesc}</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="w-full px-4 py-2.5 bg-primary-800 border border-primary-700 rounded-xl text-sm text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium rounded-xl transition-colors"
              >
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-400">{t.footer.copyright}</p>
          <p className="text-sm text-primary-400 flex items-center gap-1">
            {t.footer.madeWith}
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-accent-500 hover:bg-accent-600 text-white rounded-xl shadow-lg shadow-accent-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
