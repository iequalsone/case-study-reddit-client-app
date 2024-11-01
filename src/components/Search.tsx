import { Input } from "@/components/ui/input";

export const Search = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <Input
      type="text"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
      className="rounded-full"
    />
  );
};
