import { lazy } from 'react'
import './App.css'
import Footer from './components/footer/footer'
import GoToUp from './components/footer/go-to-top-button'
import Header from './components/header/header'
import Profile from './components/profile/profile'
import { ThemeProvider } from './components/theme-provider'
const News = lazy(()=> import('./components/news/news'))
const Galleries = lazy(()=> import('./components/galleries/galleries'))

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
