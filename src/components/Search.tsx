import { Input } from "@/components/ui/input";
import searchIcon from "./assets/icons/search.svg";

export const Search = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <div className="flex flex-row">
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
        className="rounded-full border-transparent bg-slate-200 hover:bg-slate-300 focus:bg-white focus:border-blue-400 focus-visible:ring-0 pl-10 py-5"
      />
    </div>
  );
};
