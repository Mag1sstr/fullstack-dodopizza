export const getLocalStorageValue = <T>(value: string) => {
  if (typeof window === "undefined") return null;
  try {
    const s = localStorage.getItem(value);
    return s ? (JSON.parse(s) as T) : null;
  } catch {
    return null;
  }
};
