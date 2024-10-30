import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Box,
  ChakraProvider,
  ColorModeScript,
  theme,
  useToast,
} from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RootLayout from "@/components/RootLayout";
import { BrowserRouter } from "react-router-dom";

type ProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export function Providers({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        {/* <BrowserRouter> */}
          <RootLayout>{children}</RootLayout>
        {/* </BrowserRouter> */}
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default Providers;
