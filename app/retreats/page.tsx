import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Leaf, Heart } from 'lucide-react';

export default function RetreatsPage() {
  return (
    <div className="bg-stone-50 pb-24 pt-16 sm:pb-32 sm:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h1 className="mb-4 font-serif text-5xl font-medium tracking-tight text-sage-900 sm:text-6xl">
            Yoga <span className="italic text-sage-700">Retreats</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-600">
            Recharge, heal, and reconnect with your inner self in the world&apos;s most serene locations.
          </p>
        </div>

        {/* Feature Retreat */}
        <div className="relative overflow-hidden rounded-[32px] bg-sage-900 mb-24 border border-sage-700/50">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000"
              alt="Yoga Retreat by the Ganges in Rishikesh"
              fill
              className="object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/60 to-transparent" />
          </div>
          
          <div className="relative z-10 flex min-h-[600px] flex-col justify-end p-8 sm:p-16 lg:w-2/3">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-sage-300" />
              <span className="text-sm font-semibold uppercase tracking-widest text-sage-200">Swarg Ashram, Rishikesh</span>
            </div>
            <h2 className="mb-6 font-serif text-4xl text-white sm:text-5xl">Ganges & Himalayas Retreat</h2>
            <p className="mb-8 text-lg leading-relaxed text-sage-100 max-w-xl">
              Experience the peaceful energy of the Himalayas. Located steps from the holy Ganges, our retreat offers simple, grounded practices in Hatha yoga, breathwork, and meditation. A perfect space to disconnect and find silence.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                <Leaf className="h-4 w-4" /> Himalayan Hikes
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                <Heart className="h-4 w-4" /> Ganges Meditation
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/registration?course=retreat"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-sage-900 transition hover:bg-stone-100"
              >
                Book Retreat <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Global Retreats Grid */}
        <div className="mt-16 sm:mt-24">
          <h3 className="mb-12 text-center font-serif text-3xl text-sage-900">Upcoming International Retreats</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-[32px] aspect-[4/3] bg-stone-200">
               <Image
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200"
                alt="Bali Retreat"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/40" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="font-serif text-3xl text-white mb-2">Bali, Indonesia</h4>
                <p className="text-stone-200 mb-6">Awaken amidst lush jungles and spiritual temples.</p>
                <Link href="/contact" className="text-sm uppercase tracking-widest text-white uppercase font-semibold underline underline-offset-4 hover:text-sage-200">Inquire Now</Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[32px] aspect-[4/3] bg-stone-200">
               <Image
                src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=1200"
                alt="Thailand Retreat"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/40" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="font-serif text-3xl text-white mb-2">Koh Phangan, Thailand</h4>
                <p className="text-stone-200 mb-6">Pristine beaches and deep meditation practice.</p>
                <Link href="/contact" className="text-sm uppercase tracking-widest text-white uppercase font-semibold underline underline-offset-4 hover:text-sage-200">Inquire Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
