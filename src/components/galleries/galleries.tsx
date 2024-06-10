import PhotosCarousel from "./photos-carousel"
import VideosCarousel from "./videos-carousel"

function Galleries() {
  return (
    <section id='galleries' className='h-screen flex flex-col text-left gap-24 p-12'>
      <h2 className="text-3xl font-semibold">Galleries</h2>
      <article id='photos' className="px-12">
        <h3 className='sr-only'>Photos</h3>
        <PhotosCarousel />
      </article>

      <article id='videos' className="px-12 pb-24">
        <h3 className='sr-only'>Videos</h3>
        <VideosCarousel />
      </article>
    </section>
  )
}

export default Galleries
