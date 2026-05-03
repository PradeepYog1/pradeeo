import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, UserCheck } from 'lucide-react';

const courses = [
  {
    id: '200h',
    title: '200 Hour Yoga TTC',
    price: '1000 USD',
    level: 'Beginner to Intermediate',
    duration: '22 Days Program',
    benefit: 'A transformative foundation. Build a daily practice.',
    description: 'Designed to initiate you into the path of yoga teaching. You will gain a clear understanding of core practices, proper alignment, and breath coordination.',
    availability: 'Limited seats available',
    learnings: ['Asanas & Alignment', 'Pranayama & Breathing Techniques', 'Meditation Practices', 'Yoga Anatomy', 'Yoga Philosophy'],
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '300h',
    title: '300 Hour Yoga TTC',
    price: '1100 USD',
    level: 'Advanced',
    duration: '28 Days Program',
    benefit: 'Deepen understanding and refine your authentic teaching voice.',
    description: 'Take your practice and teaching skills further. This advanced training focuses on deep internal practice, anatomical understanding, and advanced teaching methodologies.',
    availability: 'Limited seats available',
    learnings: ['Advanced Asana Adjustments', 'Deep Pranayama', 'Therapeutic Yoga Basics', 'Advanced Philosophy', 'Teaching Methodology'],
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '100h',
    title: '100 Hour Yoga Course',
    price: '600 USD',
    level: 'Beginner',
    duration: '11 Days Program',
    benefit: 'A short, immersive experience in authentic ashram life.',
    description: 'Perfect for beginners who want to experience the daily rhythm of an ashram and jumpstart their yoga journey without committing to a full TTC.',
    availability: 'Limited seats available',
    learnings: ['Introduction to Asanas', 'Basic Pranayama', 'Introduction to Meditation', 'Yogic Lifestyle', 'Foundational Anatomy'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  }
];

export default function CoursesPage() {
  return (
    <div className="bg-stone-50 pb-24 pt-16 sm:pb-32 sm:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h1 className="mb-4 font-serif text-5xl font-medium tracking-tight text-sage-900 sm:text-6xl">
            Yoga Teacher <span className="italic text-sage-700">Training</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-600">
            Transformative programs designed for every step of your journey.
          </p>
        </div>

        <div className="space-y-24">
          {courses.map((course, index) => (
            <div key={course.id} className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <div className="aspect-[4/3] overflow-hidden rounded-[32px] border border-stone-200/60 bg-stone-200">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                <div className="mb-4 flex flex-wrap items-center gap-4">
                  <span className="rounded-full bg-sage-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sage-800">
                    {course.price}
                  </span>
                  <span className="rounded-full border border-stone-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-600">
                    {course.duration}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-sage-600">
                    {course.availability}
                  </span>
                </div>
                
                <h2 className="mb-4 font-serif text-3xl text-sage-900 sm:text-4xl">{course.title}</h2>
                <p className="mb-2 text-lg font-medium text-stone-800">{course.benefit}</p>
                <p className="mb-6 text-lg text-stone-600">{course.description}</p>
                
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-stone-900">
                        <UserCheck className="h-4 w-4 text-sage-600" /> Suitable For
                      </span>
                      <span className="text-stone-600">{course.level}</span>
                    </div>

                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-stone-900">
                      <BookOpen className="h-4 w-4 text-sage-600" /> Curriculum
                    </span>
                    <ul className="list-inside list-disc text-stone-600 space-y-2 mt-2 text-sm">
                      {course.learnings.map((l, i) => <li key={i}>{l}</li>)}
                    </ul>
                  </div>
                </div>

                <Link
                  href={`/registration?course=${course.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-sage-900 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-sage-800"
                >
                  Register Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
