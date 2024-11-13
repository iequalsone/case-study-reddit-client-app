"use client";

import { useEffect, useState } from "react";

import { useSearch } from "@/contexts/SearchContext";
import { useDebounce } from "@/hooks/debounce";
import useFetchData from "@/hooks/useFetchData";
import useFetchDatas from "@/hooks/useFetchDatas";

import { Sorting } from "./Sorting";
import { RedditSearchPost } from "@/types/redditTypes";

export const ResultsFeed = () => {
  const [sort, setSort] = useState<string>("hot");
  const { searchTerm, setSortOption } = useSearch();
  const debouncedSearchQuery = useDebounce(searchTerm, 500);

  useEffect(() => {
    setSortOption(sort);
  }, [sort]);

  return (
    <>
      <div className="flex gap-4 mb-4">
        <Sorting onSortChange={setSort} />
      </div>
      <div>
        {debouncedSearchQuery ? (
          <SearchResults sort={sort} searchQuery={debouncedSearchQuery} />
        ) : (
          <Results sort={sort} />
        )}
      </div>
    </>
  );
};

function Results({ sort }: { sort: string }) {
  const [subreddits, setSubreddits] = useState<string[]>([
    "all",
    "ProgrammerHumor",
    "webdev",
  ]);

  const urls = subreddits.map((subreddit) => {
    return `https://www.reddit.com/r/${subreddit}/${sort}.json`;
  });

  const results = useFetchDatas(urls);

  return (
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
  );
}

function SearchResults({
  sort,
  searchQuery,
}: {
  sort: string;
  searchQuery: string;
}) {
  const url = `https://www.reddit.com/search.json?q=${encodeURIComponent(
    searchQuery
  )}&sort=${sort}&limit=10`;
  const results = useFetchData<RedditSearchPost>(url);

  return (
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
  );
}
