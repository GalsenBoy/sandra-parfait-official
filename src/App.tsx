import { lazy, Suspense } from 'react'
import './App.css'
import Footer from './components/footer/footer'
import GoToUp from './components/footer/go-to-top-button'
import Header from './components/header/header'
import Profile from './components/profile/profile'
import { ThemeProvider } from './components/theme-provider'
import { Skeleton } from './components/ui/skeleton'
const News = lazy(() => import('./components/news/news'))
const Galleries = lazy(() => import('./components/galleries/galleries'))

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Suspense fallback={<Skeleton className="h-[125px] w-[250px] rounded-xl" />}>
        <News />
      </Suspense>
      <Profile />
      <Suspense fallback={<Skeleton className="h-[125px] w-[250px] rounded-xl" />}>
        <Galleries />
      </Suspense>
      <Footer />
      <GoToUp />
    </ThemeProvider>
  )
}

export default App
