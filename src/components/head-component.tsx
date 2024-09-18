import Head from "next/head";
import React from "react";

interface HeadComponentProps {
  title: string;
  description: string;
  image?: string;
  twitterHandle?: string;
}

export const HeadComponent: React.FC<HeadComponentProps> = ({
  title,
  description,
  image,
  twitterHandle,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://verify.walletconnect.org/" />
      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Open Graph data */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.example.com/" />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="next-web3-template" />
      {/* Additional tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="system" />{" "}
    </Head>
  );
};
