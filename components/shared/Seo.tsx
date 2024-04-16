import React from "react";
import Head from "next/head";

interface Metadata {
  title: string;
  description: string;
  url: string;
  index: boolean;
}

interface SeoProps {
  metadata: Metadata;
}
const Seo: React.FC<SeoProps> = ({
  metadata = {
    title: "",
    description: "Fisioterapia e Osteopatia. Professionalità e tecnologia al servizio del benessere e del recupero del paziente.",
    url: "",
    index: true,
  },
}) => {
  const seoImage = "https://www.fisioste.it/banner_og.jpg";
  return (
    <>
      <Head>
        <title>{"Fisioste | " + metadata.title}</title>
        <meta name="title" content={"Fisioste | " + metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Fisioterapia,Fisioste,Osteopatia,Teramo"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://fisioste.it/" + metadata.url}
        />
        <meta property="og:title" content={"Fisioste | " + metadata.title} />
        <meta property="og:site_name" content="Fisioste - Fisioterapia e Osteopatia Teramo"  />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={seoImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={"https://fisioste.it/" + metadata.url}
        />
        <meta
          property="twitter:title"
          content={"Fisioste | " + metadata.title}
        />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={seoImage} />
        <meta name="robots" content={metadata.index ? "index, follow" : "noindex, nofollow"}/>
        <meta name="googlebot" content={metadata.index ? "index, follow" : "noindex, nofollow"}/>
        <link rel="author" href="https://fisioste.it" />
        <meta name="author" content="Fisioste" />
        <link rel="author" href="https://digital-three.com" />
        <meta name="author" content="Digital-Three" />
     </Head>
    </>
  );
};

export default Seo;
