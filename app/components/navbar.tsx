import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo vlevo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                className="h-16 w-auto"
                src="/images/logo.png"
                alt="Logo Pivovaru"
              />
            </Link>
          </div>
          {/* Navigační odkazy - desktop */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/nase-piva"
              className="text-gray-700 hover:text-gray-900"
            >
              Naše piva
            </Link>
            <Link href="/o-nas" className="text-gray-700 hover:text-gray-900">
              O nás
            </Link>
            <Link
              href="/kam-na-mouchu"
              className="text-gray-700 hover:text-gray-900"
            >
              Kam na Mouchu
            </Link>
            <Link
              href="/kontakty"
              className="text-gray-700 hover:text-gray-900"
            >
              Kontakty
            </Link>
            <Link href="/e-shop" className="text-gray-700 hover:text-gray-900">
              E-shop
            </Link>
          </div>
          {/* Tlačítko pro mobilní menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Otevřít menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobilní menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/nase-piva"
              className="block text-gray-700 hover:text-gray-900"
            >
              Naše piva
            </Link>
            <Link
              href="/o-nas"
              className="block text-gray-700 hover:text-gray-900"
            >
              O nás
            </Link>
            <Link
              href="/kam-na-mouchu"
              className="block text-gray-700 hover:text-gray-900"
            >
              Kam na mouchu
            </Link>
            <Link
              href="/kontakty"
              className="block text-gray-700 hover:text-gray-900"
            >
              Kontakty
            </Link>
            <Link
              href="/e-shop"
              className="block text-gray-700 hover:text-gray-900"
            >
              E-shop
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
