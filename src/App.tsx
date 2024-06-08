import './App.css'
import Header from './components/header'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />

      <section id='news' className='h-screen flex flex-col items-center gap-12 p-12'>
        <h2>News</h2>
        <article id='latest-appearance'>
          <h3 className='sr-only'>Latest Appearance</h3>
          <p>Sous la Seine de Xavier Gens</p>
        </article>

        <article id='latest-video'>
          <h3 className='sr-only'>Latest Video</h3>
          <iframe 
          className='w-full aspect-video'
          width="560" height="315"
          src="https://www.youtube.com/embed/HPfkQ9gMLMY?si=QFOrLU9UvqfR_I4_" 
          title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>
        </article>
      </section>

      <section id='profile' className='h-screen flex flex-col items-center gap-12 p-12'>
        <h2>Profile</h2>
        <article id='biography'>
          <h3 className='sr-only'>Biography</h3>
        </article>

        <article id='cinematography'>
          <h3 className='sr-only'>Cinematography</h3>
        </article>
      </section>

      <section id='galleries' className='h-screen flex flex-col items-center gap-12 p-12'>
        <h2>Galleries</h2>
        <article id='photos'>
          <h3 className='sr-only'>Photos</h3>
        </article>

        <article id='videos'>
          <h3 className='sr-only'>Videos</h3>
        </article>
      </section>

      <footer>

      </footer>
    </ThemeProvider>
  )
}

export default App
