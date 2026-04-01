import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const WHATSAPP_NUMBER = '919970978463';

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Subject:* ${form.subject}%0A` +
      `*Message:* ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: t.contact.info.email, href: `mailto:${t.contact.info.email}` },
    { icon: <FaPhone />, label: 'Phone', value: '+91 99709 78463', href: 'tel:+919970978463' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+91 99709 78463', href: `https://wa.me/${WHATSAPP_NUMBER}` },
    { icon: <FaMapMarkerAlt />, label: 'Address', value: t.contact.info.address },
    { icon: <FaClock />, label: 'Hours', value: t.contact.info.hours },
  ];

  const inputClass = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all";

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent-400/15 rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary-100 text-sm font-semibold mb-4">{t.contact.badge}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.contact.title}{' '}<span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-accent-400">{t.contact.titleHighlight}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-primary-200 max-w-2xl">{t.contact.subtitle}</motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-50 transition-colors">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.label === 'WhatsApp' ? 'bg-green-50 text-green-600' : 'bg-primary-50 text-primary-700'}`}>{item.icon}</div>
                  <div>
                    <p className="text-sm text-primary-400 mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.label === 'WhatsApp' ? '_blank' : undefined} rel="noopener noreferrer" className="text-primary-900 font-medium hover:text-accent-600 transition-colors break-all">{item.value}</a>
                    ) : (
                      <p className="text-primary-900 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <div className="mt-6 p-5 bg-green-50 rounded-2xl border border-green-100">
                <p className="text-sm text-green-700 mb-3 font-medium">💬 Prefer chatting on WhatsApp?</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I would like to know more about भोई समाज आश्रय संस्था.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all text-sm"
                >
                  <FaWhatsapp className="text-lg" /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="text-xl font-bold text-primary-900">Send a Message</h3>
                  <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded-full font-medium flex items-center gap-1"><FaWhatsapp /> via WhatsApp</span>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1.5">{t.contact.form.nameLabel}</label>
                      <input type="text" placeholder={t.contact.form.namePlaceholder} value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1.5">{t.contact.form.emailLabel}</label>
                      <input type="email" placeholder={t.contact.form.emailPlaceholder} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1.5">{t.contact.form.phoneLabel}</label>
                      <input type="tel" placeholder={t.contact.form.phonePlaceholder} value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1.5">{t.contact.form.subjectLabel}</label>
                      <input type="text" placeholder={t.contact.form.subjectPlaceholder} value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1.5">{t.contact.form.messageLabel}</label>
                    <textarea placeholder={t.contact.form.messagePlaceholder} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} rows={5} required className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-primary-700 to-primary-800 hover:from-primary-800 hover:to-primary-900 text-white font-semibold rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2">
                    <FaWhatsapp className="text-lg" /> {t.contact.form.submit}
                  </button>
                  {submitted && <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 text-sm text-center font-medium">✓ Redirecting to WhatsApp...</motion.p>}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68082829955!2d73.72287893281249!3d18.524598700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location Map"
        />
      </section>
    </>
  );
}
