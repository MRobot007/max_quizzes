import React, { useState } from 'react';
import { Mail, MapPin, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null as string | null
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: null });

    try {
      // Here you would typically send the data to your backend
      // For demo purposes, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Send email using mailto link as a fallback
      const mailtoLink = `mailto:maxquizzes1336@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
      window.location.href = mailtoLink;

      setStatus({ submitted: true, submitting: false, error: null });
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        error: 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-[#007BFF]">
          Get in Touch
        </h2>
        <div className="max-w-4xl mx-auto bg-[#E0F7FA] rounded-xl p-4 md:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6 text-[#212121]">Contact Us</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'maxquizzes1336@gmail.com' },
                  { icon: MapPin, text: 'Gujarat, India' }
                ].map(({ icon: Icon, text }, index) => (
                  <div key={index} className="flex items-center space-x-4 text-[#212121]/70">
                    <div className="w-10 h-10 bg-[#007BFF] rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="text-sm md:text-base">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: 'Name', type: 'text', name: 'name', required: true },
                { label: 'Email', type: 'email', name: 'email', required: true },
                { label: 'Message', type: 'textarea', name: 'message', required: true }
              ].map(({ label, type, name, required }) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-[#212121]/70 mb-2">
                    {label} {required && <span className="text-red-500">*</span>}
                  </label>
                  {type === 'textarea' ? (
                    <textarea
                      name={name}
                      value={formData[name as keyof typeof formData]}
                      onChange={handleChange}
                      rows={4}
                      required={required}
                      className="w-full bg-white border border-[#007BFF]/20 rounded-lg px-3 md:px-4 py-2 md:py-3 text-[#212121]
                        focus:ring-2 focus:ring-[#007BFF]/50 focus:border-transparent transition-all text-sm md:text-base
                        disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={status.submitting}
                    />
                  ) : (
                    <input
                      type={type}
                      name={name}
                      value={formData[name as keyof typeof formData]}
                      onChange={handleChange}
                      required={required}
                      className="w-full bg-white border border-[#007BFF]/20 rounded-lg px-3 md:px-4 py-2 md:py-3 text-[#212121]
                        focus:ring-2 focus:ring-[#007BFF]/50 focus:border-transparent transition-all text-sm md:text-base
                        disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={status.submitting}
                    />
                  )}
                </div>
              ))}

              {status.error && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {status.error}
                </div>
              )}

              {status.submitted && (
                <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
                  <Check size={20} />
                  Message sent successfully!
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-[#FF5722] text-white py-2 md:py-3 px-4 md:px-6 rounded-lg 
                  hover:bg-[#FF5722]/90 transform hover:translate-y-[-2px] transition-all duration-300 
                  shadow-lg hover:shadow-[#FF5722]/20 text-sm md:text-base font-medium
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                  flex items-center justify-center gap-2"
              >
                {status.submitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}