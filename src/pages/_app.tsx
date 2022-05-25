import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { theme } from "../styles/theme";
import { SIdebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { MakeServer } from "../services/mirage";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";

if (process.env.NODE_ENV === "development") {
  MakeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SIdebarDrawerProvider>
          <Component {...pageProps} />
        </SIdebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
