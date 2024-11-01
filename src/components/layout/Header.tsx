"use client";

import { useSearch } from "@/contexts/SearchContext";
import { Search } from "@/components/Search";
import Image from "next/image";

import logo from "./assets/logo.webp";

export default function Header() {
  const { setSearchTerm } = useSearch();

  return (
    <header className="py-4 px-8 flex items-center justify-between">
      <div className="relative">
        <Image src={logo} alt="Reddit!" width={100} />
      </div>

      <div className="flex-1 mx-4 max-w-lg">
        <Search onSearch={setSearchTerm} />
      </div>

      {/* User Icon */}
      <div className="text-white">
        <span className="material-icons">account_circle</span>
      </div>
    </header>
  );
}
