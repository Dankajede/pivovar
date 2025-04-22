import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* Navigační menu */}
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-col md:flex-row md:space-x-8 text-center">
              <li>
                <Link
                  href="/nase-piva"
                  className="text-gray-300 hover:text-white"
                >
                  Naše piva
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="text-gray-300 hover:text-white">
                  O nás
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakty"
                  className="text-gray-300 hover:text-white"
                >
                  Kontakty
                </Link>
              </li>
            </ul>
          </nav>
          {/* Kontaktní údaje */}
          <div className="text-center md:text-right">
            <p className="text-gray-300 font-semibold">Pivovar Moucha</p>
            <p className="text-gray-400">Ulice 123, Město</p>
            <p className="text-gray-400">Tel: +420 123 456 789</p>
            <p className="text-gray-400">Email: info@pivovarmoucha.cz</p>
          </div>
        </div>
        {/* Sociální sítě */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 font-semibold mb-4 md:mb-0">
            Sledujte nás
          </p>
          <div className="flex space-x-6">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.495V14.706h-3.13v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.463.1 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.663V1.337C24 .6 23.4 0 22.675 0z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.849c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.015 7.052.072 5.782.129 4.635.45 3.68 1.405c-.955.955-1.276 2.102-1.333 3.372C2.015 5.668 2 6.077 2 9.337v5.326c0 3.259.015 3.668.072 4.948.057 1.27.378 2.417 1.333 3.372.955.955 2.102 1.276 3.372 1.333 1.28.057 1.689.072 4.948.072s3.668-.015 4.948-.072c1.27-.057 2.417-.378 3.372-1.333.955-.955 1.276-2.102 1.333-3.372.057-1.28.072-1.689.072-4.948V9.337c0-3.259-.015-3.668-.072-4.948-.057-1.27-.378-2.417-1.333-3.372C19.365.45 18.218.129 16.948.072 15.668.015 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pivovar Moucha. Všechna práva
            vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
