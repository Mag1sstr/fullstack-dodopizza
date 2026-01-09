"use client";
import ModalsContextProvider from "./ModalsContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ModalsContextProvider>{children}</ModalsContextProvider>
    </QueryClientProvider>
  );
}

export default Providers;
