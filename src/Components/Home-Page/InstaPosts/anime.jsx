import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Anime = () => {
  const [viewportRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const autoplayRef = useRef(null);

  useEffect(() => {
    if (!emblaApi) return;

    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      clearInterval(autoplayRef.current);
    };
  }, [emblaApi]);

  return {
    viewportRef,
  };
};

export default Anime;
