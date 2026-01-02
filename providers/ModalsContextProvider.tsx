import { createContext, ReactNode } from "react";

interface ModalsContext {
  open: boolean;
}
export const ModalsContext = createContext({} as ModalsContext);

export default function ModalsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ModalsContext.Provider value={{}}>{children}</ModalsContext.Provider>;
}
