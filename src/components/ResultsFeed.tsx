"use client";

import { useState } from "react";

import { useSearch } from "@/contexts/SearchContext";
import { useDebounce } from "@/hooks/debounce";
import useFetchDatas from "@/hooks/useFetchDatas";

import { Sorting } from "./Sorting";

export const ResultsFeed = () => {
  const [subreddits, setSubreddits] = useState<string[]>([
    "all",
    "ProgrammerHumor",
    "webdev",
  ]);
  const [sort, setSort] = useState<string>("hot");

  const { searchTerm } = useSearch();
  const debouncedSearchQuery = useDebounce(searchTerm, 500);

  const urls = subreddits.map((subreddit) => {
    return `https://www.reddit.com/r/${subreddit}/${sort}.json`;
  });

  const results = useFetchDatas(urls);

  return (
    <>
      <div className="flex gap-4 mb-4">
        <Sorting onSortChange={setSort} />
      </div>
      <div>
        {!results.isLoading &&
          results.data &&
          results.data.map((post, index) => (
            <div
              key={`${post.id}-${index}`}
              className="bg-white p-4 shadow rounded-lg mb-4"
            >
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.selftext}</p>
            </div>
          ))}
      </div>
    </>
  );
};
