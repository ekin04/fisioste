import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import AOS from "aos";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import FloatingWhatsApp from "react-floating-whatsapp";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("782387836062997"); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <div className="hidden md:flex">
        <FloatingWhatsApp
          accountName={"Fisioste"}
          phoneNumber={"+393288349050"}
          avatar="/favicon.ico"
          placeholder="Scrivi..."
          chatMessage="Ciao, come possiamo aiutarti?"
          statusMessage="Disponibile"
          className="z-50"
        />
      </div>
      <div className="md:hidden">
        <FloatingWhatsApp
          accountName={"Fisioste"}
          phoneNumber={"+393288349050"}
          avatar="/favicon.ico"
          placeholder="Scrivi..."
          chatMessage="Ciao, come possiamo aiutarti?"
          statusMessage="Disponibile"
          className="z-50"
          styles={{ bottom: "4.2rem", right: "1rem" }}
        />
      </div>
      <CookieConsent
        location="bottom"
        buttonText="Accetta"
        cookieName="Cookie_Fisioste"
        style={{ background: "#264193", alignItems: "center" }}
        buttonStyle={{
          color: "white",
          backgroundColor: "#5a73b5",
          fontSize: "13px",
          borderRadius: "5px",
          fontWeight: 700,
        }}
        buttonClasses="hover:opacity-70"
        expires={150}
        enableDeclineButton
        declineButtonText="Rifiuta"
        declineButtonStyle={{
          backgroundColor: "#969595",
          fontSize: "13px",
          borderRadius: "5px",
          fontWeight: 700,
        }}
        declineButtonClasses="hover:opacity-50"
        onDecline={() => {}}
      >
        <h2 className="text-white text-[20px] mb-2">Cookie Policy</h2>
        <p>
          Utilizziamo cookie e tecnologie simili sul nostro sito Web per
          elaborare i tuoi dati personali, come il tuo indirizzo IP.
          Condividiamo questi dati anche con terze parti. Il trattamento dei
          dati può essere effettuato con il tuo consenso o sulla base di un
          interesse legittimo, al quale puoi opporti nelle singole impostazioni
          sulla privacy.
        </p>
      </CookieConsent>
      <Footer />
    </>
  );
}

export default MyApp;
