import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">Über Gelbe Seiten</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Das führende Branchenbuch in Deutschland für Telefonnummern, Adressen und Firmen-Infos.
            </p>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/starteintrag" className="text-gray-400 hover:text-white transition-colors">
                  Neuer Firmeneintrag
                </Link>
              </li>
              <li>
                <Link href="/gsservice/werbung" className="text-gray-400 hover:text-white transition-colors">
                  Werbung
                </Link>
              </li>
              <li>
                <Link href="/gsservice/verlage" className="text-gray-400 hover:text-white transition-colors">
                  Ansprechpartner finden
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-400 hover:text-white transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <p className="text-gray-400 text-sm">
              Support und Anfragen<br />
              für alle Services
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gelbe Seiten. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Educational Project - Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
