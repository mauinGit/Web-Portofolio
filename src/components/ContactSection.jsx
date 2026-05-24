import { useState } from "react";
import { profile } from "../data";

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(null), 4000);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      {/* Toast Notification */}
      {formStatus && (
        <div
          className={`toast-notification ${
            formStatus === "success" ? "toast-success" : "toast-error"
          }`}
        >
          <div className="flex items-center gap-2">
            <i
              className={
                formStatus === "success"
                  ? "ri-checkbox-circle-fill text-xl"
                  : "ri-error-warning-fill text-xl"
              }
            />
            <span className="text-sm font-medium">
              {formStatus === "success"
                ? "Pesan berhasil dikirim! Terima kasih 🎉"
                : "Gagal mengirim pesan. Coba lagi nanti."}
            </span>
          </div>
        </div>
      )}

      {/* Section Header */}
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold"
          style={{ color: "var(--text-heading)" }}
        >
          Contact Me
        </h2>
        <p
          className="py-3 sm:py-4 lg:py-6 text-xs sm:text-sm lg:text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya
        </p>
        <div className="section-divider mb-10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:mx-8 lg:mx-16 xl:mx-32">
        {/* Contact Info */}
        <div
          className="lg:col-span-2 flex flex-col gap-4"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="glass-card p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white gradient-bg"
              >
                <i className="ri-mail-fill text-lg" />
              </div>
              <div>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: "var(--primary)" }}
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white gradient-bg"
              >
                <i className="ri-map-pin-fill text-lg" />
              </div>
              <div>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Location
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--primary)" }}
                >
                  Palembang, Indonesia
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white gradient-bg"
              >
                <i className="ri-user-smile-fill text-lg" />
              </div>
              <div>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Status
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#10b981" }}
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                  Open for Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="lg:col-span-3"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8 rounded-2xl"
            autoComplete="off"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="font-semibold text-xs sm:text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  <i className="ri-user-line mr-1" style={{ color: "var(--primary)" }} />
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  id="contact-name"
                  className="search-input !pl-4"
                  placeholder="Masukkan nama..."
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="font-semibold text-xs sm:text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  <i className="ri-mail-line mr-1" style={{ color: "var(--primary)" }} />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  className="search-input !pl-4"
                  placeholder="Masukkan email..."
                  required
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-semibold text-xs sm:text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  <i className="ri-chat-1-line mr-1" style={{ color: "var(--primary)" }} />
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="contact-message"
                  rows="5"
                  className="search-input !pl-4 resize-none"
                  placeholder="Tulis pesan anda..."
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                id="contact-submit"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
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
                    Mengirim...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-fill" />
                    Kirim Pesan
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
