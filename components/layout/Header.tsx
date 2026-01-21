"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-sticky bg-white shadow-sm">
      <div className="gc-header">
        <div className="gc-header__bar">
          <div className="gc-header__line max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="gc-header__logo">
              <Image
                src="/images/gelbe-seiten-logo.svg"
                alt="Gelbe Seiten Unternehmen finden"
                width={200}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <div className="relative group">
                <button className="gc-header__link text-gray-700 hover:text-gray-900 font-medium">
                  Suchen
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link href="/" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Was & Wo Suche
                  </Link>
                  <Link href="/branchenbuch" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Branchenkatalog
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <button className="gc-header__link text-gray-700 hover:text-gray-900 font-medium">
                  Service
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    <p className="text-xs font-bold text-gray-500 mb-2">FÜR SIE</p>
                    <Link href="https://vermittlungsservice.gelbeseiten.de/" className="block px-2 py-2 text-sm hover:bg-gray-100 rounded">
                      Vermittlungsservice
                    </Link>
                    <Link href="/projektplaner/energieberatung" className="block px-2 py-2 text-sm hover:bg-gray-100 rounded">
                      Energieberatung <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded ml-2">NEU</span>
                    </Link>
                    <p className="text-xs font-bold text-gray-500 mt-4 mb-2">FÜR FIRMENINHABER</p>
                    <Link href="/starteintrag" className="block px-2 py-2 text-sm hover:bg-gray-100 rounded">
                      Neuer Firmeneintrag
                    </Link>
                    <Link href="/starteintrag/findentry?step=1" className="block px-2 py-2 text-sm hover:bg-gray-100 rounded">
                      Firmeneintrag ändern
                    </Link>
                    <Link href="/gsservice/werbung" className="block px-2 py-2 text-sm hover:bg-gray-100 rounded">
                      Premium Eintrag sichern
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="gc-header__link text-gray-700 hover:text-gray-900 font-medium">
                  Ratgeber
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link href="/ratgeber" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Ratgeber Übersicht
                  </Link>
                  <Link href="/ratgeber/gl" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Gesünder Leben
                  </Link>
                  <Link href="/ratgeber/hg" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Haus & Garten
                  </Link>
                  <Link href="/ratgeber/rf" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Recht & Finanzen
                  </Link>
                </div>
              </div>

              <Link
                href="/starteintrag"
                className="gc-btn gc-btn--black bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium"
              >
                Firma eintragen
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü öffnen"
            >
              <svg className="w-6 h-6" viewBox="0 0 20 20">
                <line x1="1" y1="4" x2="19" y2="4" stroke="black" strokeWidth="1" strokeLinecap="round" />
                <line x1="1" y1="10" x2="19" y2="10" stroke="black" strokeWidth="1" strokeLinecap="round" />
                <line x1="1" y1="16" x2="19" y2="16" stroke="black" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <nav className="px-4 py-4 space-y-4">
                <Link href="/" className="block text-gray-700 hover:text-gray-900">Suchen</Link>
                <Link href="/branchenbuch" className="block text-gray-700 hover:text-gray-900 ml-4">Branchenkatalog</Link>
                <Link href="/ratgeber" className="block text-gray-700 hover:text-gray-900">Ratgeber</Link>
                <Link href="/starteintrag" className="block bg-black text-white px-4 py-2 rounded-md text-center">
                  Firma eintragen
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
