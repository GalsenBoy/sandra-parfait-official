import './App.css'
import Footer from './components/footer/footer'
import GoToUp from './components/footer/go-to-top-button'
import Galleries from './components/galleries/galleries'
import Header from './components/header/header'
import News from './components/news/news'
import Profile from './components/profile/profile'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <News />
      <Profile />
      <Galleries />
      <Footer />
      <GoToUp />
    </ThemeProvider>
  )
}

export default App
