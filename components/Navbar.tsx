// components/Navbar.tsx
"use client"; // Make this a client-side component

import Link from "next/link";
import { useState } from "react"; // Import React hooks like useState

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <span className="text-lg font-impact text-white">Raksha Mitra</span>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/submit-report"
              className="text-base text-zinc-400 hover:text-white transition-colors"
            >
              Submit Report
            </Link>
            <Link
              href="/track-report"
              className="text-base text-zinc-400 hover:text-white transition-colors"
            >
              Track Report
            </Link>
            <Link
              href="/how-it-works"
              className="text-base text-zinc-400 hover:text-white transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/resources"
              className="text-base text-zinc-400 hover:text-white transition-colors"
            >
              Resources
            </Link>
          </div>

          {/* Emergency Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden md:block text-base text-zinc-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <button className="group flex h-9 items-center gap-2 rounded-full bg-red-500/10 pl-4 pr-5 text-base font-medium text-red-500 ring-1 ring-inset ring-red-500/20 transition-all hover:bg-red-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              Emergency: 112
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-zinc-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle the state
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40">
          <div className="bg-black text-white w-64 h-full p-4 flex flex-col space-y-4">
            <button
              className="self-end text-white text-2xl"
              onClick={() => setIsMobileMenuOpen(false)} // Close the mobile menu
            >
              ×
            </button>
            <Link
              href="/submit-report"
              className="text-base text-zinc-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)} // Close the menu after clicking
            >
              Submit Report
            </Link>
            <Link
              href="/track-report"
              className="text-base text-zinc-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)} // Close the menu after clicking
            >
              Track Report
            </Link>
            <Link
              href="/how-it-works"
              className="text-base text-zinc-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)} // Close the menu after clicking
            >
              How It Works
            </Link>
            <Link
              href="/resources"
              className="text-base text-zinc-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)} // Close the menu after clicking
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-base text-zinc-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)} // Close the menu after clicking
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
