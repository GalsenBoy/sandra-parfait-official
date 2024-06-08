import { Card, CardContent } from "./ui/card"

function News() {
  return (
    <section id='news' className='w-full h-screen flex flex-col text-left gap-12 p-12'>
      <h2 className="text-3xl font-semibold">News</h2>

      <article id='latest-video' className="flex flex-col items-center">
        <h3 className='sr-only'>Latest Video</h3>
        <iframe
          className='w-full aspect-video max-w-[840px] rounded-lg'
          src="https://www.youtube.com/embed/HPfkQ9gMLMY?si=QFOrLU9UvqfR_I4_"
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </article>

      <article id='latest-appearance' className="flex flex-col items-center">
        <h3 className='sr-only'>Latest Appearance</h3>
        <Card>
          <CardContent className="pt-6">
          <p>Sous la Seine <span className="text-sm text-muted-foreground">de Xavier Gens</span></p>
          <p>Role: name of the character</p>
          </CardContent>
        </Card>
      </article>
    </section>
  )
}

export default News
