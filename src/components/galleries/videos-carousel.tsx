import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { videoCarousel } from "@/data/video-carousel";
import LiteYTEmbed from "@/lib/lite-yt-embed/lite-yt-embed";

function VideosCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {videoCarousel.map((video) => (
          <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
            <LiteYTEmbed
              key={video.id}
              videoId={video.videoId}
              playLabel={video.playLabel}
              title={video.title}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default VideosCarousel;
