import LiteYTEmbed from "@/lib/lite-yt-embed/lite-yt-embed"
import { Card, CardContent } from "../ui/card"

function News() {
  return (
    <section id='news' className='w-full h-fit min-h-svh flex flex-col text-left gap-12 p-12'>
      <h2 className="text-3xl font-semibold">News</h2>

      <article id='latest-video' className="flex flex-col items-center">
        <h3 className='sr-only'>Latest Video</h3>
        <LiteYTEmbed
          videoId="HPfkQ9gMLMY"
          playLabel="Play Video"
          title="Sous la Seine | Bande-Annonce officielle VF | Netflix France"
        />
      </article>

      <article id='latest-appearance' className="flex flex-col items-center">
        <h3 className='sr-only'>Latest Appearance</h3>
        <Card>
          <CardContent className="w-full md:w-[640px] pt-6 pb-2">
            <p>Sous la Seine <span className="text-sm text-muted-foreground">de Xavier Gens</span></p>
            <p>Role: Caro</p>
            <p>Release: 5 juin 2024</p>
          </CardContent>
        </Card>
      </article>
    </section>
  )
}

export default News
