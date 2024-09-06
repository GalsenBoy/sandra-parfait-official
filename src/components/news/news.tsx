import { Card, CardContent } from "../ui/card"
import { Suspense } from "react"

function News() {
  return (
    <section id='news' className='w-full h-fit min-h-svh flex flex-col text-left gap-12 p-12'>
      <h2 className="text-3xl font-semibold">News</h2>

      <article id='latest-video' className="flex flex-col items-center">
        <h3 className='sr-only'>Latest Video</h3>
        <Suspense>
          <iframe
            loading="lazy"
            className='w-full aspect-video max-w-[840px] rounded-lg'
            src="https://www.youtube.com/embed/HPfkQ9gMLMY?si=QFOrLU9UvqfR_I4_"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </Suspense>
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
