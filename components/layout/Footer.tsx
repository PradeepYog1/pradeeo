import Link from 'next/link';
import { Instagram, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200/60 bg-stone-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <h3 className="font-serif text-2xl text-sage-900">Yogashalarishikesh</h3>
            <p className="max-w-md text-sm leading-relaxed text-stone-600">
              A professional yoga school in the heart of Rishikesh, India, offering deep immersion into traditional teachings combined with modern approaches.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com/pradeepyoga_" target="_blank" rel="noopener noreferrer" className="rounded-full border border-stone-300 p-2 text-stone-500 transition-colors hover:border-sage-500 hover:text-sage-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-900">Explore</h4>
            <ul className="space-y-3 text-sm text-stone-600">
              <li><Link href="/about" className="hover:text-sage-700">About Pradeep</Link></li>
              <li><Link href="/courses" className="hover:text-sage-700">Yoga Teacher Training</Link></li>
              <li><Link href="/retreats" className="hover:text-sage-700">Retreats</Link></li>
              <li><Link href="/registration" className="hover:text-sage-700">Enroll Now</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-900">Contact</h4>
            <ul className="space-y-3 text-sm text-stone-600">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
                <span>Jonk, Swarg Ashram, <br/>Rishikesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-sage-600" />
                <a href="mailto:yogabypradeep@gmail.com" className="hover:text-sage-700">yogabypradeep@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-sage-600" />
                <a href="https://wa.me/919368144187" target="_blank" rel="noopener noreferrer" className="hover:text-sage-700">+91 9368144187</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-stone-200 pt-8 text-center text-xs text-stone-500 space-y-4">
          <p>&copy; {new Date().getFullYear()} Yogashalarishikesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
