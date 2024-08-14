import { useState, useEffect, lazy, Suspense } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const OurServices = lazy(() => import("./components/OurServices"));
const PricingPlans = lazy(() => import("./components/PricingPlan"));
const PackageCards = lazy(() => import("./components/PackageCards"));

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 900);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "51999949241";
    const message = "Hola, estoy interesado en sus servicios.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden font-itim">
      <div
        className="fixed inset-0 z-[-1] bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Background.jpg')" }}
      ></div>

      <Header />

      <main className="flex-grow">
        <section className="bg-transparent bg-opacity-80 w-full min-h-full px-4 py-16 lg:px-20 xl:px-56 mt-8 md:mt-10 lg:mt-20">
          <Hero />
        </section>

        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
          <section className="bg-white bg-opacity-80 w-full min-h-full px-4 py-16 lg:px-20 xl:px-56">
            <OurServices />
          </section>

          <section className="bg-transparent bg-opacity-80 w-full min-h-full px-4 py-16 lg:px-20 xl:px-56">
            <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-12">
              Nuestros paquetes
            </h1>
            <PackageCards />
          </section>

          <section className="bg-white bg-opacity-80 w-full min-h-full px-4 py-16 lg:px-20 xl:px-56">
            <PricingPlans />
          </section>
        </Suspense>
      </main>

      <Footer />

      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-4">
        <button
          onClick={scrollToTop}
          className={`bg-[#0084F1] hover:bg-blue-500 text-white font-bold p-3 rounded-full transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Ir arriba"
        >
          <FaArrowUp />
        </button>

        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300"
          aria-label="Contact via WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 mr-2" />
          WhatsApp
        </button>
      </div>
    </div>
  );
}

export default App;
