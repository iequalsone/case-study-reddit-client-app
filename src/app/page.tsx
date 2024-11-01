"use client";

import { useState } from "react";
import { ResultsFeed } from "@/components/ResultsFeed";
import { useDebounce } from "@/hooks/debounce";
import { useSearch } from "@/contexts/SearchContext";
import { Sorting } from "@/components/Sorting";

const Home = () => {
  const [subreddits, setSubreddits] = useState<string[]>(["all"]);
  const [sort, setSort] = useState<string>("hot");

  const { searchTerm } = useSearch();
  const debouncedSearchQuery = useDebounce(searchTerm, 500);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Reddit Client</h1>
      <div className="flex gap-4 mb-4">
        <Sorting onSortChange={setSort} />
      </div>
      <ResultsFeed
        subreddits={subreddits}
        sort={sort}
        query={debouncedSearchQuery}
      />
    </div>
  );
};

export default Home;
