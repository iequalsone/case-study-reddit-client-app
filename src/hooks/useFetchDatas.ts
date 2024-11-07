import { useQueries } from "@tanstack/react-query";
import { useEffect, useState, useMemo } from "react";
import { FetchState } from "@/types/formTypes";
import { RedditListingData } from "@/types/redditTypes";

function useFetchDatas<T>(urls: string[]): FetchState<RedditListingData[]> {
  const [combinedData, setCombinedData] = useState<RedditListingData[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const results = useQueries({
    queries: urls.map((url) => ({
      queryKey: ["fetchData", url],
      queryFn: async (): Promise<RedditListingData> => {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch data from ${url}`);
        return response.json() as Promise<RedditListingData>;
      },
      refetchOnWindowFocus: false,
      retry: 1,
    })),
  });

  // Memoize the result to ensure stability and prevent re-triggering
  const allResultsFetched = useMemo(() => {
    return results.every((result) => result.isFetched);
  }, [results]);

  useEffect(() => {
    if (allResultsFetched) {
      // Collect all successful data
      const successfulData = results
        .filter((result) => result.isSuccess)
        .map((result) => result.data) as RedditListingData[];

      // Aggregate errors if any query failed
      const errors = results
        .filter((result) => result.isError)
        .map((result) => (result.error as Error).message);
      const combinedError = errors.length > 0 ? errors.join(", ") : null;

      setCombinedData(successfulData);
      setError(combinedError);
      setIsLoading(false);
    }
  }, [allResultsFetched]); // Rely only on allResultsFetched and stable results

  return {
    data: combinedData,
    error,
    isLoading,
  };
}

export default useFetchDatas;
