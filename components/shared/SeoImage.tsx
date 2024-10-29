import React from "react";
import Head from "next/head";

interface Metadata {
  title: string;
  description: string;
  url: string;
  index: boolean;
  image: string;
}

interface SeoProps {
  metadata: Metadata;
}
const Seo: React.FC<SeoProps> = ({
  metadata = {
    title: "",
    description:
      "Fisioterapia e Osteopatia. Professionalità e tecnologia al servizio del benessere e del recupero del paziente.",
    url: "",
    index: true,
    image: "",
  },
}) => {
  const baseUrl = "https://fisioste.it";
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Fisioste" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <title>{"Fisioste | " + metadata.title}</title>
        <meta name="title" content={"Fisioste | " + metadata.title} />
        <meta
          name="description"
          content={metadata.description.slice(0, 150) + " ..."}
        />
        <meta
          name="keywords"
          content="Fisioterapia,Fisioste,Osteopatia,Teramo"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl + "/" + metadata.url} />
        <link rel="canonical" href={baseUrl + "/" + metadata.url} />
        <meta property="og:title" content={"Fisioste | " + metadata.title} />
        <meta
          property="og:site_name"
          content="Fisioste - Fisioterapia e Osteopatia Teramo"
        />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={baseUrl + metadata.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={baseUrl + "/" + metadata.url} />
        <meta
          property="twitter:title"
          content={"Fisioste | " + metadata.title}
        />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={baseUrl + metadata.image} />
        <meta
          name="robots"
          content={metadata.index ? "index, follow" : "noindex, nofollow"}
        />
        <meta
          name="googlebot"
          content={metadata.index ? "index, follow" : "noindex, nofollow"}
        />
        <link rel="author" href={baseUrl} />
        <meta name="author" content="Fisioste" />
        <link rel="author" href="https://digital-three.com" />
        <meta name="author" content="Digital-Three" />
      </Head>
    </>
  );
};

export default Seo;
