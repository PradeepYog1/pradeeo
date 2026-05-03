import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-stone-50 pb-24 pt-16 sm:pb-32 sm:pt-24 shrink-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h1 className="font-serif text-5xl font-medium tracking-tight text-sage-900 sm:text-6xl">
            About Our <span className="italic text-sage-700">Founder</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-[32px] border border-stone-200/60 bg-stone-200">
               <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                  alt="Pradeep Kumar - Founder"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
            </div>
          </div>

          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 font-serif text-3xl text-sage-900 sm:text-4xl">Pradeep Kumar</h2>
            <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-sage-600">Lead Instructor & Founder</p>
            
            <div className="space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                Pradeep Kumar is a dedicated yoga teacher with complete focus on breath awareness, proper alignment, and the subtle aspects of traditional yogic practices. Based in the spiritual environment of Rishikesh, his journey with yoga has been an exploration of the mind and body.
              </p>
              <p>
                With over 7 years of teaching experience, Pradeep has guided students from varied backgrounds. His teaching style is simple and grounded—emphasizing traditional Hatha and Vinyasa concepts without losing sight of modern anatomical safety.
              </p>
              <p>
                His vision for Yogashalarishikesh is to share a space where authentic traditional yoga combines with clear alignment-focused teaching. Under his guidance, students learn to move with mindfulness, coordinate breath with movement, and develop a real understanding of the practice.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-full bg-sage-900 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-sage-800"
              >
                Join our Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
