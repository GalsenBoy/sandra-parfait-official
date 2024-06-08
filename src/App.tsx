import './App.css'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header>
        <h1>Sandra Parfait</h1>
        <p id="subtitles">Actress - Stuntwoman</p>

        <nav>
          <menu>
            <li>
              <a href="#">Homepage</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#profile">Profile</a>
            </li>
            <li>
              <a href="#galleries">Galleries</a>
            </li>
          </menu>
        </nav>
      </header>

      <section id='news'>
        <h2>News</h2>
        <article id='latest-appearance'>
          <h3 className='sr-only'>Latest Appearance</h3>
        </article>

        <article id='latest-video'>
          <h3 className='sr-only'>Latest Video</h3>
        </article>
      </section>

      <section id='profile'>
        <h2>Profile</h2>
        <article id='biography'>
          <h3 className='sr-only'>Biography</h3>
        </article>

        <article id='cinematography'>
          <h3 className='sr-only'>Cinematography</h3>
        </article>
      </section>

      <section id='galleries'>
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
