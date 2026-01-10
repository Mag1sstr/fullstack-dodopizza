import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return debouncedValue;
};
