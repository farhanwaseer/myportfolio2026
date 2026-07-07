import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, HelpCircle, Linkedin, Github, CheckCircle, Clock, Trash2 } from 'lucide-react';
import { ContactMessage } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sentMessages, setSentMessages] = useState<ContactMessage[]>([]);

  // Load message logs on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio_messages');
    if (saved) {
      try {
        setSentMessages(JSON.parse(saved));
      } catch (err) {
        console.error('Failed to parse saved contact messages', err);
      }
    }
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate database write delay
    setTimeout(() => {
      const newMessage: ContactMessage = {
        ...formData,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const updatedHistory = [newMessage, ...sentMessages];
      setSentMessages(updatedHistory);
      localStorage.setItem('portfolio_messages', JSON.stringify(updatedHistory));

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear success notification after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  const handleDeleteMessage = (index: number) => {
    const updated = sentMessages.filter((_, idx) => idx !== index);
    setSentMessages(updated);
    localStorage.setItem('portfolio_messages', JSON.stringify(updated));
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 dark:bg-gray-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Let’s Architect Something Great
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Have a project opportunity, contract role, or technical inquiry? Reach out and launch the discussion.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Block: Communication Details (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 dark:border-gray-800 dark:bg-gray-900 shadow-sm">
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Prefer direct communication channels? Drop me a message or connect via professional platforms.
              </p>

              {/* Info Items */}
              <div className="mt-8 flex flex-col gap-6">
                
                {/* Email link */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Email Me</h4>
                    <a
                      id="contact-email-anchor"
                      href="mailto:farhan.llb6559@iiu.edu.pk"
                      className="text-base font-semibold text-gray-900 hover:text-teal-500 dark:text-white dark:hover:text-teal-400"
                    >
                      farhan.llb6559@iiu.edu.pk
                    </a>
                  </div>
                </div>

                {/* Location display */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Location</h4>
                    <span className="text-base font-semibold text-gray-900 dark:text-white">
                      Islamabad, Pakistan
                    </span>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Response SLA</h4>
                    <span className="text-base font-semibold text-gray-900 dark:text-white">
                      Typically within 12 Hours
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Channels Row */}
              <div className="mt-10 border-t border-gray-100/80 pt-8 dark:border-gray-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">Professional Channels</h4>
                <div className="flex items-center gap-4">
                  <a
                    id="contact-linkedin-link"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    id="contact-github-link"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Block: Active Form + Message Logs (Col Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Contact Form Card */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 dark:border-gray-800 dark:bg-gray-900 shadow-sm transition-colors">
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">Send a Message</h3>
              
              <form id="contact-message-form" onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`rounded-xl border bg-gray-50/50 px-4 py-3 text-sm text-gray-900 dark:bg-gray-800/30 dark:text-white outline-none focus:border-teal-500 focus:bg-white dark:focus:border-teal-400 dark:focus:bg-gray-900 transition-all ${
                        errors.name ? 'border-rose-400 focus:ring-rose-200' : 'border-gray-200 dark:border-gray-800'
                      }`}
                    />
                    {errors.name && <span className="text-xs font-semibold text-rose-500">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`rounded-xl border bg-gray-50/50 px-4 py-3 text-sm text-gray-900 dark:bg-gray-800/30 dark:text-white outline-none focus:border-teal-500 focus:bg-white dark:focus:border-teal-400 dark:focus:bg-gray-900 transition-all ${
                        errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-gray-200 dark:border-gray-800'
                      }`}
                    />
                    {errors.email && <span className="text-xs font-semibold text-rose-500">{errors.email}</span>}
                  </div>

                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    id="contact-subject-input"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="SaaS Dashboard Project Integration"
                    className={`rounded-xl border bg-gray-50/50 px-4 py-3 text-sm text-gray-900 dark:bg-gray-800/30 dark:text-white outline-none focus:border-teal-500 focus:bg-white dark:focus:border-teal-400 dark:focus:bg-gray-900 transition-all ${
                      errors.subject ? 'border-rose-400 focus:ring-rose-200' : 'border-gray-200 dark:border-gray-800'
                    }`}
                  />
                  {errors.subject && <span className="text-xs font-semibold text-rose-500">{errors.subject}</span>}
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Your Message
                    <span className="text-[10px] font-normal text-gray-400 ml-1">(Min 15 characters)</span>
                  </label>
                  <textarea
                    id="contact-message-input"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Farhan, we are looking for a senior developer to build a responsive collaboration applet..."
                    className={`rounded-xl border bg-gray-50/50 px-4 py-3 text-sm text-gray-900 dark:bg-gray-800/30 dark:text-white outline-none focus:border-teal-500 focus:bg-white dark:focus:border-teal-400 dark:focus:bg-gray-900 transition-all ${
                      errors.message ? 'border-rose-400 focus:ring-rose-200' : 'border-gray-200 dark:border-gray-800'
                    }`}
                  />
                  {errors.message && <span className="text-xs font-semibold text-rose-500">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/20 hover:bg-teal-600 hover:shadow-teal-600/35 active:translate-y-px transition-all disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Proposal</span>
                    </>
                  )}
                </button>
              </form>

              {/* Dynamic Action Success Banner */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 dark:border-emerald-950/30 dark:bg-emerald-950/10 text-emerald-800 dark:text-emerald-400"
                  >
                    <CheckCircle className="h-5 w-5 mt-0.5 text-emerald-500 flex-shrink-0 animate-bounce" />
                    <div>
                      <h4 className="text-sm font-bold">Message Saved & Sent!</h4>
                      <p className="text-xs leading-normal mt-0.5">
                        Your developer inquiry has been registered. A live record of your contact logs is appended below!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Interactive Sent Messages Local Logs Panel */}
            {sentMessages.length > 0 && (
              <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="h-4.5 w-4.5 text-teal-500" />
                    <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white">Your Sent Message History (Local Logs)</h3>
                  </div>
                  <span className="rounded-md bg-teal-50 px-2 py-0.5 text-[10px] font-semibold text-teal-600 dark:bg-teal-950/30 dark:text-teal-400">
                    {sentMessages.length} log{sentMessages.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-4 max-h-60 overflow-y-auto pr-1">
                  {sentMessages.map((msg, index) => (
                    <div
                      key={index}
                      className="group/msg relative rounded-xl border border-gray-100 bg-gray-50/50 p-4 dark:border-gray-800/80 dark:bg-gray-950/20 text-xs text-gray-700 dark:text-gray-300"
                    >
                      {/* Delete log trigger */}
                      <button
                        id={`delete-message-btn-${index}`}
                        onClick={() => handleDeleteMessage(index)}
                        className="absolute top-3 right-3 opacity-0 group-hover/msg:opacity-100 text-gray-400 hover:text-rose-500 transition-opacity p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                        aria-label="Delete message log"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>

                      <div className="flex items-center justify-between text-[10px] text-gray-400 dark:text-gray-500 mb-1">
                        <span>{msg.date}</span>
                        <span className="font-semibold text-teal-500 uppercase tracking-wider">{msg.subject}</span>
                      </div>
                      
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">
                        To: Farhan &lt;{msg.email}&gt;
                      </div>
                      <p className="italic leading-normal text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 p-2 rounded border border-gray-100 dark:border-gray-800 mt-1.5">
                        "{msg.message}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
