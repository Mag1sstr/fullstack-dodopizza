"use client";
import ModalsContextProvider from "./ModalsContextProvider";

function Providers({ children }: { children: React.ReactNode }) {
  return <ModalsContextProvider>{children}</ModalsContextProvider>;
}

export default Providers;
