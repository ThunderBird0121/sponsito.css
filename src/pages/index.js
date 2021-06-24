import React from "react";
import { Helmet } from "react-helmet";
import { render } from "minista";

import TheHeader from "../components/TheHeader";
import TheMain from "../components/TheMain";
import TheFooter from "../components/TheFooter";

const Home = () => {
  return render(
    <>
      <Helmet>
        <title>shokika.css - A lightly modern reset CSS.</title>
        <meta
          name="description"
          content="shokika.css is a modern CSS library that provides cross-browser default styles."
        />
        <meta
          property="og:title"
          content="shokika.css - A lightly modern reset CSS."
        />
        <meta
          property="og:description"
          content="shokika.css is a modern CSS library that provides cross-browser default styles."
        />
        <meta
          property="og:url"
          content="https://hiro0218.github.io/shokika.css/"
        />
        <meta
          property="og:image"
          content="https://hiro0218.github.io/shokika.css/ogp.png"
        />
        <meta property="og:site_name" content="shokika.css" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@hiro0218" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <TheHeader />
      <TheMain />
      <TheFooter />
    </>
  );
};

export default Home;
