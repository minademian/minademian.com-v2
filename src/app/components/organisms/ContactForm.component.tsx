'use client';

import emailjs from '@emailjs/browser';
import { FormEvent, useEffect, useState } from 'react';

const isEmailJSConfigured = (): boolean => {
  return !!(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  const NAME_MIN_LENGTH = 2;
  const MESSAGE_MIN_LENGTH = 10;

  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < NAME_MIN_LENGTH) {
    errors.name = `Name must be at least ${NAME_MIN_LENGTH} characters`;
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.subject.trim()) {
    errors.subject = 'Subject is required';
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < MESSAGE_MIN_LENGTH) {
    errors.message = `Message must be at least ${MESSAGE_MIN_LENGTH} characters`;
  }

  return errors;
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [isConfigured, setIsConfigured] = useState(true);

  useEffect(() => {
    const configured = isEmailJSConfigured();
    setIsConfigured(configured);

    // Notify in production if env vars are missing
    if (!configured && process.env.NODE_ENV === 'production') {
      fetch('/api/notify-config-error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'EmailJS environment variables not configured' }),
      }).catch(() => {
        // Silently fail - notification is best effort
      });
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg border-2 border-dark/20 dark:border-light/20
    bg-light dark:bg-dark text-dark dark:text-light
    focus:outline-none focus:border-primary dark:focus:border-primaryDark
    transition-colors`;

  const errorClasses = 'text-red-500 dark:text-red-400 text-sm mt-1';

  if (!isConfigured) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center">
        <div className="p-8 rounded-2xl border-2 border-dark/10 dark:border-light/10 bg-dark/5 dark:bg-light/5">
          <div className="text-4xl mb-4">🔧</div>
          <h3 className="text-xl font-semibold text-dark dark:text-light mb-3">
            Contact Form Unavailable
          </h3>
          <p className="text-dark/70 dark:text-light/70 mb-6">
            The contact form is temporarily unavailable. Please reach out directly via email instead.
          </p>
          <a
            href="mailto:mina@minademian.com"
            className="inline-flex items-center text-light p-2.5 px-6 rounded-lg text-lg
              font-semibold border-2 border-solid bg-dark
              border-transparent dark:bg-light dark:text-dark
              hover:border-dark hover:bg-light hover:text-dark
              hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
              transition-colors"
          >
            Email Me Directly
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-dark dark:text-light font-medium mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${inputClasses} ${errors.name ? 'border-red-500 dark:border-red-400' : ''}`}
          placeholder="Your name"
        />
        {errors.name && <p className={errorClasses}>{errors.name}</p>}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-dark dark:text-light font-medium mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${inputClasses} ${errors.email ? 'border-red-500 dark:border-red-400' : ''}`}
          placeholder="your@email.com"
        />
        {errors.email && <p className={errorClasses}>{errors.email}</p>}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-dark dark:text-light font-medium mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`${inputClasses} ${errors.subject ? 'border-red-500 dark:border-red-400' : ''}`}
          placeholder="What's this about?"
        />
        {errors.subject && <p className={errorClasses}>{errors.subject}</p>}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-dark dark:text-light font-medium mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`${inputClasses} resize-none ${errors.message ? 'border-red-500 dark:border-red-400' : ''}`}
          placeholder="Your message..."
        />
        {errors.message && <p className={errorClasses}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full inline-flex items-center justify-center text-light p-3 px-8 rounded-lg text-lg
          font-semibold border-2 border-solid bg-dark
          border-transparent dark:bg-light dark:text-dark
          hover:border-dark hover:bg-light hover:text-dark
          hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
          transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-center">
          Message sent successfully! I&apos;ll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-center">
          Something went wrong. Please try again or email me directly.
        </div>
      )}
    </form>
  );
};
