import "../shared/styles/globals.css";
import { AppPropsWithLayout } from "@config/types";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return <Layout>{page}</Layout>;
    });
  return getLayout(
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
