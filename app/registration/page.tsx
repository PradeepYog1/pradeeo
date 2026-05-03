'use client';

import { useState, Suspense, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(6, 'Valid phone number is required'),
  course: z.string().min(1, 'Please select a course'),
  message: z.string().optional(),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

function RegistrationForm() {
  const searchParams = useSearchParams();
  const courseFromUrl = searchParams.get('course');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      course: courseFromUrl || '',
    }
  });

  useEffect(() => {
    if (courseFromUrl) {
      setValue('course', courseFromUrl);
    }
  }, [courseFromUrl, setValue]);

  const onSubmit = async (data: RegistrationFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Registration submitted:', data);
    setSuccess(true);
    setIsSubmitting(false);
    reset();
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[32px] border border-stone-200/60 bg-white p-12 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sage-100">
          <CheckCircle2 className="h-10 w-10 text-sage-600" />
        </div>
        <h2 className="mb-4 font-serif text-3xl text-sage-900">Registration Successful!</h2>
        <p className="mb-8 max-w-md text-stone-600">
          Thank you. We will contact you shortly on WhatsApp.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="rounded-full bg-sage-900 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-sage-800"
        >
          Register Another Student
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[32px] border border-stone-200/60 bg-white p-8 sm:p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-stone-900">Full Name *</label>
            <input
              {...register('fullName')}
              type="text"
              id="fullName"
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition focus:border-sage-500 focus:bg-white"
              placeholder="Gautam Buddha"
            />
            {errors.fullName && <p className="mt-2 text-sm text-red-500">{errors.fullName.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-900">Email Address *</label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition focus:border-sage-500 focus:bg-white"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-stone-900">Phone / WhatsApp Number *</label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition focus:border-sage-500 focus:bg-white"
              placeholder="+91..."
            />
            {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="course" className="mb-2 block text-sm font-medium text-stone-900">Select Course *</label>
            <select
              {...register('course')}
              id="course"
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition focus:border-sage-500 focus:bg-white appearance-none"
            >
              <option value="">Select a program...</option>
              <option value="200h">200 Hour Yoga TTC</option>
              <option value="300h">300 Hour Yoga TTC</option>
              <option value="100h">100 Hour Yoga Course</option>
              <option value="retreat">Yoga Retreat (Rishikesh/Bali/Thailand)</option>
            </select>
            {errors.course && <p className="mt-2 text-sm text-red-500">{errors.course.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-stone-900">Additional Message / Questions</label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition focus:border-sage-500 focus:bg-white"
            placeholder="Tell us about your yoga experience or any dietary requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-sage-900 px-8 py-4 font-semibold text-white transition hover:bg-sage-800 disabled:opacity-70 text-lg"
        >
          {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}

export default function RegistrationPage() {
  return (
    <div className="bg-stone-50 pb-24 pt-16 sm:pb-32 sm:pt-24 shrink-0">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="mb-4 font-serif text-5xl font-medium tracking-tight text-sage-900 sm:text-6xl">
            Course <span className="italic text-sage-700">Registration</span>
          </h1>
          <p className="text-lg text-stone-600">
            Take the first step towards transformation. Fill out the form below to secure your spot.
          </p>
        </div>

        <Suspense fallback={<div className="flex justify-center p-12"><div className="h-8 w-8 animate-spin rounded-full border-4 border-sage-200 border-t-sage-600"></div></div>}>
          <RegistrationForm />
        </Suspense>
      </div>
    </div>
  );
}
