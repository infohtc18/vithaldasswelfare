"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Title */}
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
          <div>
            <div className="text-lg font-bold">
              Vithaldass Welfare Foundation
            </div>
            <div className="text-xs text-slate-500">
              Empowering Lives, Enriching Futures
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/">
            <span className="text-slate-700 hover:text-orange-950 hover:underline decoration-orange-950">
              Home
            </span>
          </Link>

          <Link href="/about">
            <span className="text-slate-700 hover:text-orange-950 hover:underline decoration-orange-950">
              About
            </span>
          </Link>

          <Link href="/support-us">
            <span className="text-orange-950 hover:underline decoration-orange-950">
              Support Us
            </span>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          <div className="space-y-1.5 transition">
            <span
              className={`block w-6 h-0.5 bg-slate-700 transition-transform ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-700 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-700 transition-transform ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col p-4 space-y-3">
            <Link href="/" onClick={() => setOpen(false)}>
              <span className="block text-slate-700 hover:text-orange-950 hover:underline decoration-orange-950 py-1">
                Home
              </span>
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              <span className="block text-slate-700 hover:text-orange-950 hover:underline decoration-orange-950 py-1">
                About
              </span>
            </Link>

            <Link href="/support-us" onClick={() => setOpen(false)}>
              <span className="block text-orange-950 hover:underline decoration-orange-950 py-1">
                Support Us
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
