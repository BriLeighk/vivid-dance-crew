import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from 'next/image';


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#CBC9FF]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">VIVID Dance Crew</span>
              <Image
                src="/logo.png"
                alt=""
                width={500}
                height={300}
                className="h-12 w-auto"
              />
            </a>
          </div>
          
        </nav>
      </header>
    </div>
  );
}
