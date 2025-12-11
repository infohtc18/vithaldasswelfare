// components/Footer.jsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 mt-12 border-t">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {/* Brand Info */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/logo.png"
                alt="logo"
                height={100}
                width={100}
                className="object-cover rounded-full"
              />
            </div>

            <div className="font-bold text-lg">
              Vithaldass Welfare Foundation
            </div>
          </Link>

          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Section 8 NGO working across education, healthcare, women
            empowerment & community development.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-sm">
          <div className="font-semibold">Quick Links</div>
          <div className="mt-3 space-y-2">
            <Link href="/" className="block hover:text-orange-950">
              Home
            </Link>

            <Link href="/about" className="block hover:text-orange-950">
              About
            </Link>

            <Link href="/support-us" className="block hover:text-orange-950">
              Support Us
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="font-semibold">Contact</div>

          <div className="mt-3 text-sm text-slate-600 leading-relaxed">
            +91 9311707772 <br />
            vithaldaswelfare@gmail.com <br />
            A-253 Second Floor, Meera Bagh, <br />
            West Delhi – 110087
          </div>

          <div className="mt-4 text-sm text-slate-500">
            © {new Date().getFullYear()} Vithaldass Welfare Foundation
          </div>
        </div>
      </div>
    </footer>
  );
}
