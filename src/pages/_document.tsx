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
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
