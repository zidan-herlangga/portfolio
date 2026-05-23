import { useState } from 'react';
import { useLang } from '../contexts/LanguageContext';
import useInView from '../hooks/useInView';

const contactLinks = [
  {
    name: 'Instagram',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    url: 'https://instagram.com/zidanherlangga_',
    color: 'hover:text-mac-pink',
  },
  {
    name: 'LinkedIn',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    url: 'https://linkedin.com/in/zidanherlangga',
    color: 'hover:text-mac-accent',
  },
  {
    name: 'Facebook',
    icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    url: 'https://www.facebook.com/profile.php?id=100092408072498&locale=id_ID',
    color: 'hover:text-mac-accent',
  },
  {
    name: 'GitHub',
    icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
    url: 'https://github.com/zidan-herlangga',
    color: 'hover:text-mac-text',
  },
];

export default function Kontak() {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sectionRef, inView] = useInView({ threshold: 0.05 });
  const [leftRef, leftIn] = useInView({ threshold: 0.2 });
  const [rightRef, rightIn] = useInView({ threshold: 0.2 });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      } else {
        setError(
          data.error ||
            (lang === 'id'
              ? 'Gagal mengirim pesan.'
              : 'Failed to send message.'),
        );
      }
    } catch {
      setError(
        lang === 'id'
          ? 'Gagal terhubung ke server. Pastikan server backend berjalan.'
          : 'Cannot connect to server. Make sure the backend is running.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="kontak"
      className="relative min-h-screen flex items-center py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 left-1/3 w-60 h-60 bg-mac-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        <div
          className="absolute -bottom-20 right-1/4 w-60 h-60 bg-mac-mauve/5 rounded-full blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div
        ref={sectionRef}
        className={`max-w-4xl w-full mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-mac-surface/90 backdrop-blur-sm rounded-2xl border border-mac-border/60 overflow-hidden shadow-2xl shadow-black/20">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-mac-bg/60 border-b border-mac-border/50">
            <div className="w-3 h-3 rounded-full bg-mac-red transition-transform hover:scale-110 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-mac-yellow transition-transform hover:scale-110 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-mac-green transition-transform hover:scale-110 cursor-pointer" />
            <div className="ml-3 text-mac-text-dim/50 text-[10px] md:text-xs">
              kontak.py — Python
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-6">
              <p className="text-mac-green text-xs md:text-sm mb-1 font-mono">
                <span className="text-mac-text-dim">~ </span>
                <span className="text-mac-accent">{t('kontak.terminal')}</span>
              </p>
              <p className="text-mac-text-dim/40 text-[10px] md:text-xs">
                ────────────────
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6 md:gap-8">
              <div
                ref={leftRef}
                className={`md:col-span-2 transition-all duration-600 ${
                  leftIn
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
              >
                <h2 className="text-lg md:text-xl font-bold font-sans text-mac-text mb-4 flex items-center gap-2">
                  <span className="text-mac-accent">{'//'}</span>{' '}
                  {t('kontak.title')}
                </h2>
                <p className="text-mac-text-dim/70 text-xs md:text-sm leading-relaxed mb-6">
                  {t('kontak.desc')}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                  {contactLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-mac-bg/50 rounded-xl border border-mac-border/30 ${link.color} transition-all duration-300 hover:scale-110 hover:border-mac-accent/40 hover:shadow-lg hover:shadow-mac-accent/10 active:scale-95`}
                      title={link.name}
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d={link.icon} />
                      </svg>
                    </a>
                  ))}
                </div>

                <div className="bg-mac-bg/40 rounded-xl p-4 border border-mac-border/30 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-mac-accent/10 rounded-lg text-sm">
                      📧
                    </span>
                    <div>
                      <p className="text-mac-text-dim/60 text-[10px]">
                        {t('kontak.email_label')}
                      </p>
                      <p className="text-mac-text text-xs md:text-sm">
                        zidanherlangga24@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-mac-accent/10 rounded-lg text-sm">
                      📍
                    </span>
                    <div>
                      <p className="text-mac-text-dim/60 text-[10px]">
                        {t('kontak.lokasi_label')}
                      </p>
                      <p className="text-mac-text text-xs md:text-sm">
                        Bekasi, Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-mac-accent/10 rounded-lg text-sm">
                      🕐
                    </span>
                    <div>
                      <p className="text-mac-text-dim/60 text-[10px]">
                        {t('kontak.time_label')}
                      </p>
                      <p className="text-mac-text text-xs md:text-sm">
                        WIB (UTC+7)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-gradient-to-r from-mac-accent/10 to-mac-mauve/10 rounded-xl p-3 md:p-4 border border-mac-accent/20">
                  <p className="text-mac-text-dim/70 text-[10px] md:text-xs flex items-center gap-2">
                    <span className="text-mac-green">💬</span>
                    {t('kontak.response_time')}
                  </p>
                </div>
              </div>

              <div
                ref={rightRef}
                className={`md:col-span-3 transition-all duration-600 ${
                  rightIn
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 md:space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-[10px] md:text-xs text-mac-text-dim mb-1.5 font-mono">
                        <span className="text-mac-accent">$</span>{' '}
                        {t('kontak.form_name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder={t('kontak.name_placeholder')}
                        className="w-full bg-mac-bg/50 border border-mac-border/50 rounded-lg px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm text-mac-text placeholder:text-mac-text-dim/30 focus:outline-none focus:border-mac-accent/50 focus:ring-1 focus:ring-mac-accent/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] md:text-xs text-mac-text-dim mb-1.5 font-mono">
                        <span className="text-mac-accent">$</span>{' '}
                        {t('kontak.form_email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder={t('kontak.email_placeholder')}
                        className="w-full bg-mac-bg/50 border border-mac-border/50 rounded-lg px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm text-mac-text placeholder:text-mac-text-dim/30 focus:outline-none focus:border-mac-accent/50 focus:ring-1 focus:ring-mac-accent/20 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs text-mac-text-dim mb-1.5 font-mono">
                      <span className="text-mac-accent">$</span>{' '}
                      {t('kontak.form_message')}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder={t('kontak.message_placeholder')}
                      className="w-full bg-mac-bg/50 border border-mac-border/50 rounded-lg px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm text-mac-text placeholder:text-mac-text-dim/30 focus:outline-none focus:border-mac-accent/50 focus:ring-1 focus:ring-mac-accent/20 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-mac-red/10 border border-mac-red/30 rounded-lg px-3 md:px-4 py-2 text-mac-red text-[10px] md:text-xs">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 md:py-3 bg-gradient-to-r from-mac-accent to-mac-sapphire text-mac-bg rounded-lg hover:from-mac-accent/90 hover:to-mac-sapphire/90 transition-all duration-300 text-xs md:text-sm font-medium shadow-lg shadow-mac-accent/20 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        <span>
                          {lang === 'id' ? 'Mengirim...' : 'Sending...'}
                        </span>
                      </>
                    ) : sent ? (
                      <>
                        <span className="text-green-300">✓</span>
                        <span>{t('kontak.btn_sent')}</span>
                      </>
                    ) : (
                      <>
                        <span className="font-mono">{'>'}</span>
                        <span>{t('kontak.btn_send')}</span>
                        <span className="animate-ping text-mac-green/60">
                          _
                        </span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
