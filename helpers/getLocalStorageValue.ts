export const getLocalStorageValue = <T>(value: string) => {
  const s = localStorage.getItem(value);
  return s ? (JSON.parse(s) as T) : null;
};
