'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Contact form submitted:', data);
    setSuccess(true);
    setIsSubmitting(false);
    reset();
  };

  return (
    <div className="bg-stone-50 pb-24 pt-16 sm:pb-32 sm:pt-24 shrink-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h1 className="mb-4 font-serif text-5xl font-medium tracking-tight text-sage-900 sm:text-6xl">
            Get in <span className="italic text-sage-700">Touch</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-600">
            We&apos;d love to hear from you. Reach out with any questions about our courses, retreats, or ashram life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="mb-8 font-serif text-3xl text-sage-900">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-stone-900">Our Location</h3>
                  <p className="text-stone-600">Jonk, Swarg Ashram<br />Rishikesh, Uttarakhand 249304<br />India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-stone-900">Email Us</h3>
                  <a href="mailto:yogabypradeep@gmail.com" className="text-stone-600 hover:text-sage-700">yogabypradeep@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-stone-900">Call / WhatsApp</h3>
                  <a href="https://wa.me/919368144187" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-sage-700">+91 9368144187</a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/919368144187" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:bg-[#20BE5A] sm:w-auto"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[32px] border border-stone-200/60 bg-white p-8 sm:p-12">
            <h2 className="mb-8 font-serif text-3xl text-sage-900">Send a Message</h2>
            
            {success ? (
              <div className="rounded-2xl border border-sage-200 bg-sage-50 p-8 text-center text-sage-900">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-100">
                  <Send className="h-5 w-5 text-sage-600" />
                </div>
                <h3 className="mb-2 text-xl font-serif">Message Sent Successfully</h3>
                <p className="text-sm text-sage-700">Thank you for reaching out to us. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-sm font-semibold uppercase tracking-wide text-sage-600 hover:text-sage-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-stone-900">Full Name</label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition focus:border-sage-500 focus:bg-white"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-900">Email Address</label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition focus:border-sage-500 focus:bg-white"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-stone-900">Message</label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition focus:border-sage-500 focus:bg-white"
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-sage-900 px-8 py-4 font-semibold text-white transition hover:bg-sage-800 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 sm:mt-24">
          <div className="aspect-[21/9] w-full overflow-hidden rounded-[2rem] bg-stone-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13813.064977465942!2d78.30058778401344!3d30.129532508819475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909161474d2836f%3A0xe54fb79730ed5448!2sSwarg%20Ashram%2C%20Rishikesh%2C%20Uttarakhand%20249304%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
