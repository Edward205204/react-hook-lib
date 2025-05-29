import { useEffect, useState } from "react";

export default function useQueryParams(): Record<string, string> {
  const [params, setParams] = useState({});

  useEffect(() => {
    let isMounted = true;

    try {
      const reactRouterDom = require("react-router");
      const [searchParams] = reactRouterDom.useSearchParams();
      if (isMounted) {
        setParams(Object.fromEntries([...searchParams]));
      }
    } catch {
      console.warn(
        "[useQueryParams]: react-router-dom is not installed. Returning empty params."
      );
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return params;
}
