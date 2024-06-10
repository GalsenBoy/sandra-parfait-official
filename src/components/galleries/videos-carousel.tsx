import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
function VideosCarousel() {
  return (
    <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]}>
      <CarouselContent>
        <CarouselItem>
          <iframe className='w-full aspect-video'
            src="https://www.youtube.com/embed/6vZWMlQr6QA?si=Po0j0ODfxK3Mjgth"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </CarouselItem>
        <CarouselItem>
          <iframe
            className='w-full aspect-video'
            src="https://www.youtube.com/embed/gFCX5iScflw?si=T7w8Cl91NOw8DQA0"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default VideosCarousel