"use client";

import { useSearch } from "@/contexts/SearchContext";
import { Search } from "@/components/Search";

export default function Header() {
  const { setSearchTerm } = useSearch();

  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <Search onSearch={setSearchTerm} />
      </div>

      {/* User Icon */}
      <div className="text-white">
        <span className="material-icons">account_circle</span>
      </div>
    </header>
  );
}
