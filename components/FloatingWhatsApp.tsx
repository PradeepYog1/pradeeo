'use client';

import { MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function FloatingWhatsApp() {
  const pathname = usePathname();

  return (
    <a
      href="https://wa.me/919368144187"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
