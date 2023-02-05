import Head from "next/head";
import {
  META_NAME,
  META_DESC,
  META_SUBJECT,
  META_VIEWPORT,
  HOME_OG_IMAGE_URL,
  META_KEYWORDS,
  HOME_OG_URL,
  HOME_OG_TITLE,
  HOME_OG_IMAGE_ALT,
  TWITTER_HANDLE,
} from "../lib/constants";

const Meta = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content={META_VIEWPORT} />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />

      {/* Common */}
      <meta name="keywords" content={META_KEYWORDS} />
      <meta name="author" content={META_NAME} />
      <meta name="description" content={META_DESC} />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="subject" content={META_SUBJECT} />

      {/* Icons --- */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" color="#75FFE5" />

      {/* Manifest (PWA) --- */}
      {/* Safari takes accent color (the rubber-band effect background color from this manifest or meta tag below, or else it takes from body) */}
      <link rel="manifest" href="/favicon/site.webmanifest" />

      {/* Windows tile --- */}
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

      {/* Theme --- */}
      {/* Safari takes accent color (the rubber-band effect background color from this meta tag, also this is how theme is set for mobile browsers */}
      <meta name="theme-color" content="#75FFE5" />

      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      {/* Facebook */}
      <meta property="og:url" content={HOME_OG_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={HOME_OG_TITLE} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta property="og:image:alt" content={HOME_OG_IMAGE_ALT} />
      <meta property="og:description" content={META_DESC} />
      <meta property="og:site_name" content={HOME_OG_TITLE} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:url" content={HOME_OG_URL} />
      <meta name="twitter:title" content={HOME_OG_TITLE} />
      <meta name="twitter:description" content={META_DESC} />
      <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />
      <meta name="twitter:image:alt" content={HOME_OG_IMAGE_ALT} />
    </Head>
  );
};

export default Meta;
