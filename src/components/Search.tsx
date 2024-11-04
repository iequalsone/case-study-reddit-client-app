import { useState } from "react";
import { Input } from "@/components/ui/input";
import searchIcon from "./assets/icons/search.svg";
import { TrendingToday } from "./TrendingToday";

export const Search = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative flex flex-col">
      <img
        className="absolute mt-3 ml-4"
        width={20}
        src={searchIcon.src}
        alt=""
      />
      <Input
        type="text"
        placeholder="Search Reddit"
        onChange={(e) => onSearch(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="rounded-full border-transparent border-2 bg-slate-200 hover:bg-slate-300 focus:bg-white focus:border-blue-400 focus-visible:ring-0 pl-10 py-5"
      />

      {isFocused && <TrendingToday />}
    </div>
  );
};
