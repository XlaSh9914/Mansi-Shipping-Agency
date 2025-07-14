import { Carousel, IconButton } from "@material-tailwind/react";

interface CarouselComponentProps {
  imageUrls: (string | undefined)[];
}

export default function CarouselComponent({
  imageUrls,
}: CarouselComponentProps) {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={5000}
      className="rounded-xl"
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              type="button"
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
          color="white"
          placeholder=""
          size="lg"
          variant="text"
          onClick={handleNext}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      )}
      placeholder=""
      prevArrow={({ handlePrev }) => (
        <IconButton
          className="!absolute top-2/4 left-4 -translate-y-2/4"
          color="white"
          placeholder=""
          size="lg"
          variant="text"
          onClick={handlePrev}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      )}
      transition={{ type: "spring", duration: 1 }}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      {imageUrls.map((url: string | undefined, index: number) => (
        <img
          key={index}
          alt={`Slide ${index + 1}`}
          className="h-full w-full object-cover"
          src={url}
        />
      ))}
    </Carousel>
  );
}
