import { useState, useEffect } from "react";
import { fetchSubredditPosts, searchPosts } from "@/lib/redditApi";

export const ResultsFeed = ({
  subreddits,
  sort,
  query,
}: {
  subreddits: string[];
  sort: string;
  query: string;
}) => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        const allPosts = await Promise.all(
          subreddits.map((subreddit) => fetchSubredditPosts(subreddit, sort))
        );
        setPosts(allPosts.flat());
      } else {
        const allPosts = await searchPosts(query, 5, sort);
        setPosts(allPosts.flat());
      }
    };
    fetchData();
  }, [subreddits, sort, query]);

  // searchPosts('TypeScript', 5).then(posts => console.log(posts));

  // // Usage (replace 'YOUR_ACCESS_TOKEN' with a valid token)
  // searchAuthenticatedPosts('React', 'YOUR_ACCESS_TOKEN', 5).then(posts => console.log(posts));

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 shadow rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600">{post.selftext}</p>
        </div>
      ))}
    </div>
  );
};
