import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import LiteYTEmbed from "@/lib/lite-yt-embed/lite-yt-embed"

function VideosCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }} >
      <CarouselContent>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
          <LiteYTEmbed
            videoId="_LxGIBtXuUI"
            playLabel="Play Video"
            title="Interview Sandra Parfait Guadeloupe la 1ère (2023)"
          />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
          <LiteYTEmbed
            videoId="AeB3b_PAkOA"
            playLabel="Play Video"
            title="Interview Sandra Parfait France 3 Outremer Cannes 2023"
          />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
          <LiteYTEmbed
            videoId="6vZWMlQr6QA"
            playLabel="Play Video"
            title="Conann - Sandra Parfait nous parle de son rôle de barbare !"
          />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
        <LiteYTEmbed
            videoId="qQd080up3o4"
            playLabel="Play Video"
            title="Conann new clip official from Cannes Film Festival 2023 - 2/2"
          />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
        <LiteYTEmbed
            videoId="qQd080up3o4"
            playLabel="Play Video"
            title="She Is Conann - U.S. Trailer"
          />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
        <LiteYTEmbed
            videoId="gFCX5iScflw"
            playLabel="Play Video"
            title="Sandra Parfait - Démo 2019"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default VideosCarousel