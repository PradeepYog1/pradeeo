import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Heart, Sun, Feather, Users, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2400"
            alt="Yoga in Rishikesh"
            fill
            className="object-cover object-center"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/40" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-sage-100 drop-shadow-md">
            Welcome to Rishikesh, India
          </span>
          <h1 className="mb-8 font-serif text-5xl font-medium tracking-tight text-white drop-shadow-lg sm:text-7xl lg:text-8xl">
            Authentic Yoga <br className="hidden sm:block" />
            <span className="italic text-sage-100">Teacher Training</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-stone-200 drop-shadow-md sm:text-xl">
            Join Yogashalarishikesh near the Ganges and experience traditional yoga with modern understanding.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/registration"
              className="inline-flex items-center gap-2 rounded-full bg-sage-900 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-sage-800"
            >
              Join Now
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Explore Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-stone-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-4xl text-sage-900 sm:text-5xl">
                Practice by the <br />
                <span className="italic">Ganges River</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-stone-600">
                Yogashalarishikesh is located in Swarg Ashram, Rishikesh, situated peacefully near the banks of the sacred Ganges. 
              </p>
              <p className="mb-8 text-lg leading-relaxed text-stone-600">
                We focus on simple, grounded teachings rooted in traditional Hatha and Vinyasa yoga. Our approach emphasizes breath awareness and proper structural alignment, allowing students to build a sustainable and deep practice without force.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-semibold uppercase tracking-widest text-sage-600 transition hover:text-sage-800"
              >
                Read our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[32px] bg-stone-200">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                  alt="Yoga practice alignment"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-[24px] border border-sage-900/10 bg-white p-6 sm:-bottom-10 sm:-left-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-sage-900">
                    <Heart className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-serif text-3xl font-bold text-stone-900">7+</p>
                    <p className="text-sm font-medium uppercase tracking-widest text-stone-500">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="bg-sage-900 py-24 text-stone-50 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl text-sage-50 sm:text-5xl">Our Key Offerings</h2>
            <p className="mx-auto max-w-2xl text-lg text-sage-200">
              Transformative programs designed for all levels, guided by experienced masters in the heart of the Himalayas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "200 Hour TTC",
                desc: "Beginner friendly foundation. Build a daily practice and find inner transformation.",
                note: "Limited seats available",
                icon: Sun,
                link: "/courses"
              },
              {
                title: "300 Hour TTC",
                desc: "For advanced practitioners ready to deepen understanding and refine their teaching voice.",
                note: "Limited seats available",
                icon: Star,
                link: "/courses"
              },
              {
                title: "100 Hour Course",
                desc: "A shorter immersion for an authentic ashram experience to kickstart your practice.",
                note: "Limited seats available",
                icon: Feather,
                link: "/courses"
              },
              {
                title: "Yoga Retreats",
                desc: "Disconnect, reflect, and practice near the holy Ganges River in Rishikesh.",
                note: "Seasonal availability",
                icon: Heart,
                link: "/retreats"
              }
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-[24px] border border-sage-700 bg-sage-800/50 p-8 transition hover:bg-sage-800">
                <div className="mb-6 inline-flex rounded-full bg-sage-700/50 p-4 text-sage-200">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-serif text-2xl text-white">{item.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-sage-200">{item.desc}</p>
                <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-sage-400">{item.note}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-sage-300 transition hover:text-white group-hover:underline"
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Social Proof */}
      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-stone-400">
            <div className="flex items-center gap-2"><Award className="h-6 w-6" /> <span className="font-semibold uppercase tracking-widest text-sm">Yoga Alliance Certified</span></div>
            <div className="flex items-center gap-2"><Users className="h-6 w-6" /> <span className="font-semibold uppercase tracking-widest text-sm">International Community</span></div>
            <div className="flex items-center gap-2"><Heart className="h-6 w-6" /> <span className="font-semibold uppercase tracking-widest text-sm">Authentic Teachings</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}
