import useFetchData from "@/hooks/useFetchData";
import { RedditPostData } from "@/types/redditTypes";

export default function TrendingToday() {
  const { data, error, isLoading } = useFetchData<RedditPostData>(
    "https://www.reddit.com/r/all/hot.json?limit=20"
  );

  console.log("data", data);

  const renderPosts = () => {
    return data?.map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
      </div>
    ));
  };
  return (
    <div className="absolute shadow-md bg-white">
      <h1>Trending Today</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {renderPosts()}
    </div>
  );
}
