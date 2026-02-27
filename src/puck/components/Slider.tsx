import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DropZone } from "@measured/puck";

export interface SliderProps {
  slides: number;
  autoplay?: boolean;
}

export const Slider: React.FC<SliderProps> = ({ slides = 1 }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {Array.from({ length: slides }).map((_, i) => (
          <div key={i} className="embla__slide flex-[0_0_100%] min-w-0 border p-4 bg-gray-50">
            <DropZone zone={`slide-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
