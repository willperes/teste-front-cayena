import { useCallback, useEffect, useState } from "react";

type UseFetchProps<T> = {
  fetchFn: () => Promise<T>;
};

interface UseFetchReturn<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | null;
}

export function useFetch<T>({ fetchFn }: UseFetchProps<T>): UseFetchReturn<T> {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const init = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetchFn();
      setData(response as T);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    init();
  }, []);

  return {
    data,
    loading,
    error,
  };
}
