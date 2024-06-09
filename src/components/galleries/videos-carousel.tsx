import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
function VideosCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default VideosCarousel