import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHandsHelping, FaBuilding, FaCheckCircle, FaShieldAlt, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const WHATSAPP_NUMBER = '919970978463';

function sendToWhatsApp(type, data) {
  let message = '';
  if (type === 'volunteer') {
    message = `*New Volunteer Registration*%0A%0A` +
      `*Name:* ${data.name}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Area of Interest:* ${data.role}%0A` +
      `*Message:* ${data.message}`;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
}

export default function GetInvolved() {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', phone: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp('volunteer', volunteerForm);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setVolunteerForm({ name: '', email: '', phone: '', role: '', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent-400/15 rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary-100 text-sm font-semibold mb-4">{t.getInvolved.badge}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.getInvolved.title}{' '}<span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-accent-400">{t.getInvolved.titleHighlight}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-primary-200 max-w-2xl">{t.getInvolved.subtitle}</motion.p>
        </div>
      </section>

      {/* Donate Section with QR Code */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Donate info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white text-2xl mb-5 shadow-lg shadow-accent-500/20"><FaHeart /></div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">{t.getInvolved.donate.title}</h2>
              <p className="text-primary-600 text-lg mb-6 leading-relaxed">{t.getInvolved.donate.desc}</p>

              {/* QR Code Card */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100 mb-6">
                <h3 className="text-lg font-bold text-primary-900 mb-4 text-center">Scan & Pay via UPI</h3>
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/qr-code.png"
                    alt="Scan to Donate via UPI"
                    className="w-64 h-auto rounded-xl shadow-md"
                  />
                </div>
                <p className="text-center text-sm text-primary-600 font-medium">UPI ID: 9970978463-2@okbizaxis</p>
                <p className="text-center text-xs text-primary-400 mt-1">Supports Google Pay, PhonePe, Paytm, BHIM & more</p>
              </div>

              {/* Tax Benefits */}
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-6 border border-accent-100">
                <div className="flex items-center gap-3 mb-3">
                  <FaShieldAlt className="text-accent-600 text-xl" />
                  <h3 className="text-lg font-bold text-primary-900">{t.getInvolved.donate.taxTitle}</h3>
                </div>
                <p className="text-primary-600 leading-relaxed text-sm">{t.getInvolved.donate.taxDesc}</p>
                <div className="mt-4 space-y-2">
                  {['12A Registration', '80G Certification', 'Transparent Audits'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><FaCheckCircle className="text-accent-500" /><span className="text-primary-700 text-sm">{item}</span></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Amount selection */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-primary-900 mb-6">Choose Donation Amount</h3>
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {t.getInvolved.donate.amounts.map((amount, i) => (
                    <button key={i} onClick={() => setSelectedAmount(i)} className={`py-3 rounded-xl font-semibold text-sm transition-all ${selectedAmount === i ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25 scale-105' : 'bg-primary-50 text-primary-700 hover:bg-primary-100'}`}>{amount}</button>
                  ))}
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-accent-500/20 flex items-center justify-center gap-2">
                  <FaHeart className="text-sm" />{t.getInvolved.donate.button}
                </button>

                {/* WhatsApp donate contact */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-primary-500 mb-3">Or contact us directly on WhatsApp</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I would like to make a donation to भोई समाज आश्रय संस्था.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
                  >
                    <FaWhatsapp className="text-lg" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center text-white text-2xl mb-5"><FaHandsHelping /></div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">{t.getInvolved.volunteer.title}</h2>
              <p className="text-primary-600 text-lg mb-6">{t.getInvolved.volunteer.desc}</p>
              <div className="grid grid-cols-2 gap-3">
                {t.getInvolved.volunteer.roles.map((role, i) => (
                  <div key={i} className="flex items-center gap-2 text-primary-700 text-sm"><FaCheckCircle className="text-accent-500 flex-shrink-0" />{role}</div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                <p className="text-sm text-green-700 flex items-center gap-2"><FaWhatsapp className="text-green-500" /> Form responses will be sent directly to our WhatsApp</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-primary-900 mb-6">{t.getInvolved.volunteer.formTitle}</h3>
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <input type="text" placeholder={t.getInvolved.volunteer.namePlaceholder} value={volunteerForm.name} onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all" />
                  <input type="email" placeholder={t.getInvolved.volunteer.emailPlaceholder} value={volunteerForm.email} onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all" />
                  <input type="tel" placeholder={t.getInvolved.volunteer.phonePlaceholder} value={volunteerForm.phone} onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all" />
                  <select value={volunteerForm.role} onChange={(e) => setVolunteerForm({...volunteerForm, role: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all text-gray-500">
                    <option value="">{t.getInvolved.volunteer.rolePlaceholder}</option>
                    {t.getInvolved.volunteer.roles.map((role, i) => (<option key={i} value={role}>{role}</option>))}
                  </select>
                  <textarea placeholder={t.getInvolved.volunteer.messagePlaceholder} value={volunteerForm.message} onChange={(e) => setVolunteerForm({...volunteerForm, message: e.target.value})} rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all resize-none" />
                  <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-primary-700 to-primary-800 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <FaWhatsapp /> {t.getInvolved.volunteer.submit}
                  </button>
                  {submitted && <p className="text-green-600 text-sm text-center font-medium">✓ Redirecting to WhatsApp...</p>}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl mb-5"><FaBuilding /></div>
                <h2 className="text-3xl font-bold mb-4">{t.getInvolved.csr.title}</h2>
                <p className="text-primary-200 text-lg leading-relaxed">{t.getInvolved.csr.desc}</p>
              </div>
              <div>
                <ul className="space-y-4">
                  {t.getInvolved.csr.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3"><FaCheckCircle className="text-accent-400 mt-1 flex-shrink-0" /><span className="text-primary-200">{benefit}</span></li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! We are interested in a CSR partnership with भोई समाज आश्रय संस्था.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all"
                >
                  <FaWhatsapp /> {t.getInvolved.csr.cta}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
