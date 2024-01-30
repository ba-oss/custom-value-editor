import { useState, useEffect } from "react";

function useGet<T>(...args: Parameters<typeof fetch>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  const fetchData = () => {
    setIsLoading(true);
    fetch(...args)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line

  const reset = () => {
    setIsError(false);
    setData(null);

    fetchData();
  };

  return { isLoading, isError, data, reset };
}

export default useGet;
