
import Link from "next/link";
import { School } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b shadow-sm">
      <nav className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-gray-800 hover:text-gray-900 transition-colors"
        >
          <School className="h-6 w-6 text-blue-600" />
          <span>SchoolScout</span>
        </Link>

        <div className="flex gap-4">
          <Link
            href="/showSchools"
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
          >
            Browse
          </Link>
          <Link
            href="/addSchool"
            className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
          >
            Add School
          </Link>
        </div>
      </nav>
    </header>
  );
}
