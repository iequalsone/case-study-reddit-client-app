import { useQuery } from "@tanstack/react-query";
import { FetchState } from "@/types/formTypes";

function useFetchData<T>(url: string): FetchState<T[]> {
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchData", url],
    queryFn: async (): Promise<T[]> => {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const jsonData = await response.json();
      // Assuming jsonData has the structure { data: { children: [{ data: T }] } }
      return jsonData.data.children.map((child: { data: T }) => child.data);
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return {
    data: data ?? null, // Ensure data is T[] | null
    error: error ? error.message : null,
    isLoading,
  };
}

export default useFetchData;
