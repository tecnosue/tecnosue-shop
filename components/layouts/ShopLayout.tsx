import Head from "next/head";
import { FC } from "react";
import { Navbar } from '../ui';


interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const ShopLayout: FC = ({
  children,
  title,
  pageDescription,
  imageFullurl,
}) => {
  return (
    <>
      <Head>
        <title>{"title"}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullurl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <nav>
        <Navbar />
      </nav>
      {/* TODO : SIDEBAR */}

      <main
        style={{
          margin: "80px",
          maxWidth: "1440px",
          padding: "0px 30px",
        }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer>{/* TODO: footer */}</footer>
    </>
  );
};
