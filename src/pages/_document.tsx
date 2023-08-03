import { Html, Head, Main, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";
import { useEffect } from "react";

const getInitialProps = createGetInitialProps();

const MyDocument = () => {
  useEffect(() => {
    getInitialProps;
  }, []);

  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Mantine nextjs example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
