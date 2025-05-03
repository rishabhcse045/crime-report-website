// components/MobileMenu.tsx

import Link from "next/link";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-end items-start p-4">
      <div className="bg-white w-64 h-full p-6 space-y-4 rounded-lg">
        <button onClick={onClose} className="text-xl text-gray-700">
          Close
        </button>
        <div className="space-y-2">
          <Link href="/" className="block text-gray-700">
            Home
          </Link>
          <Link href="/submit-report" className="block text-gray-700">
            Submit Report
          </Link>
          <Link href="/track-report" className="block text-gray-700">
            Track Report
          </Link>
          <Link href="/how-it-works" className="block text-gray-700">
            How It Works
          </Link>
          <Link href="/resources" className="block text-gray-700">
            Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
