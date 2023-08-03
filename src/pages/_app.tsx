import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apolloClient";
import { MantineProvider } from "@mantine/core";
import Layout from "./layout";
import { AnimeProvider } from "@/contexts/animeContext";
import colors from "@/styles/colors";
import { useEffect } from "react";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();

  useEffect(() => {
    switch (pathname) {
      case "/":
        document.title = "AnimeVault";
        break;
      case "/anime/[id]":
        document.title = "Anime Detail";
        break;
      case "/collection":
        document.title = "Collection List";
        break;
      case "/collection/[id]":
        document.title = "Collection Detail";
        break;
      default:
        document.title = "AnimeVault";
        break;
    }
  }, [pathname]);

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
