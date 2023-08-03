import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apolloClient";
import { MantineProvider } from "@mantine/core";
import Layout from "./layout";
import { AnimeProvider } from "@/contexts/animeContext";
import colors from "@/styles/colors";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <AnimeProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colors: {
              primary: [colors.primary900],
            },
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </AnimeProvider>
    </ApolloProvider>
  );
};

export default App;
