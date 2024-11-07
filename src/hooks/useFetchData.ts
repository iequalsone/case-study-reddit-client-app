import { useQuery } from "@tanstack/react-query";
import { FetchState } from "@/types/formTypes";

function useFetchData<T>(url: string): FetchState<T> {
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchData", url],
    queryFn: async (): Promise<T> => {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json() as Promise<T>;
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return {
    data: data ?? null, // Ensure data is T | null
    error: error ? error.message : null,
    isLoading,
  };
}

export default useFetchData;
