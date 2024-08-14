import { useState, useEffect } from "react";

const AutoImageCarousel = () => {
  const images = [
    "../public/camara_001.png",
    "../public/detector_acceso_producto_2.png",
    "../public/mujer-borrosa-tiro-medio-interior.jpg",
    "../public/pexels-towfiqu-barbhuiya-13466254.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 md:mr-8">
      <div className="relative w-full h-96 pt-[100%] md:pt-[75%] lg:pt-[66.66%] mb-4 overflow-hidden rounded-lg shadow-lg">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AutoImageCarousel;