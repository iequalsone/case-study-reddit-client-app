export const Search = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};
