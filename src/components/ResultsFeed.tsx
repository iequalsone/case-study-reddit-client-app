import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchRedditPosts,
  fetchSubredditPosts,
  searchPosts,
} from "@/lib/redditApi";
import { RedditSearchPost } from "@/types/types";

export const ResultsFeed = ({
  subreddits,
  sort,
  query,
}: {
  subreddits: string[];
  sort: string;
  query: string;
}) => {
  const [posts, setPosts] = useState<RedditSearchPost[]>([]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["redditPosts", subreddits, sort], // Query key as part of an options object
    queryFn: () => fetchRedditPosts(subreddits, sort), // Fetch function
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data &&
        data.map((post) => (
          <div key={post.id} className="bg-white p-4 shadow rounded-lg mb-4">
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.selftext}</p>
          </div>
        ))}
    </div>
  );
};
