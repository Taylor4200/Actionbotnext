'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'; // Using lucide-react for the back arrow icon

interface MinimalHeaderProps {
  showBackLink?: boolean;
  backLinkHref?: string;
}

export default function MinimalHeader({
  showBackLink = false,
  backLinkHref = '/' // Default back link to root
}: MinimalHeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-800 bg-[#0f0f0f]"> {/* Minimal padding and background */}
      {/* Logo/Brand Name */}
      <div className="flex items-center gap-2">
        {/* Replace with your actual logo or brand name */}
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Actionbot
        </Link>
      </div>

      {/* Optional Back Link */}
      {showBackLink && (
        <Link href={backLinkHref} className="flex items-center text-gray-400 hover:text-gray-200 transition-colors duration-200">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </Link>
      )}
    </header>
  );
} 