import './App.css'
import Footer from './components/footer'
import Galleries from './components/galleries'
import Header from './components/header'
import News from './components/news'
import Profile from './components/profile'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <News />
      <Profile />
      <Galleries />
      <Footer />
    </ThemeProvider>
  )
}

export default App
