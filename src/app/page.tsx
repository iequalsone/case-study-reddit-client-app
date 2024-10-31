"use client";

import { useState } from "react";
import { Feed } from "@/components/Feed";
import { Sorting } from "@/components/Sorting";
import { Search } from "@/components/Search";
import { useDebounce } from "@/hooks/debounce";

const Home = () => {
  const [subreddits, setSubreddits] = useState<string[]>(["all"]);
  const [sort, setSort] = useState<string>("hot");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Reddit Client</h1>
      <div className="flex gap-4 mb-4">
        <Sorting onSortChange={setSort} />
        <Search onSearch={setSearchQuery} />
      </div>
      <Feed subreddits={subreddits} sort={sort} query={debouncedSearchQuery} />
    </div>
  );
};

export default Home;
