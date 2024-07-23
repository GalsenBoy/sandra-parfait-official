import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import photos from "@/data/medias"
import { IPhoto } from "@/data/medias.type"

function PhotosCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
      <CarouselContent>
        {photos.map((photo: IPhoto) => (
          <CarouselItem className="basis-11/12 md:basis-1/2 lg:basis-1/3">
            <img src={photo.url} alt={photo.name} className="object-cover min-h-full h-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default PhotosCarousel
