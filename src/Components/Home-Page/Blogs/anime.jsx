import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const useBlogsSlider = () => {
  const [viewportRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const autoplayRef = useRef(null);

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => {
      clearInterval(autoplayRef.current);
    };
  }, [emblaApi]);

  return {
    viewportRef,
    scrollPrev,
    scrollNext,
  };
};

export default useBlogsSlider;
