import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { IPhoto } from "@/data/medias.type"

function PhotosCarousel() {

  const [photos, setPhotos] = useState<IPhoto[]>([])

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/src/data/medias.json")
        const data = await response.json()
        setPhotos(data.photos)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
      <CarouselContent>
        {photos.map((photo) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img src={photo.url} alt={photo.name} className="object-cover h-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default PhotosCarousel
