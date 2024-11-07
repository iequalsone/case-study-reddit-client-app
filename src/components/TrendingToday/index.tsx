import useFetchData from "@/hooks/useFetchData";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function TrendingToday() {
  const { data, error, isLoading } = useFetchData<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div className="absolute shadow-md">
      <h1>Trending Today</h1>
    </div>
  );
}
