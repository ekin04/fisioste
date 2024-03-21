import type { InferGetServerSidePropsType } from "next";
import { HomePage } from "../components/home/Home";
import { fetchServizi } from "./api/servizi";
import Seo from "../components/shared/Seo";

export async function getStaticProps() {
  let servizi = await fetchServizi();

  return {
    props: {
      servizi,
    },
    revalidate: 10, // In seconds
  };
}

const Home = ({
  servizi,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const seo = {
    title: "Fisioterapia e Osteopatia Teramo",
    description:
      "Fisioterapia e Osteopatia. Professionalità e tecnologia al servizio del benessere e del recupero del paziente.",
    url: "",
    index: true,
  };

  return (
    <>
      <Seo metadata={seo} />
      <HomePage servizi={servizi} />
    </>
  );
};

export default Home;
