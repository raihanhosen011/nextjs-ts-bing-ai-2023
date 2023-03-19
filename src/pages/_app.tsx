import "../shared/styles/globals.css";
//
import { QueryClient, QueryClientProvider } from "react-query";
//
import { AppPropsWithLayout } from "@config/types";


function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  // react query client
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
