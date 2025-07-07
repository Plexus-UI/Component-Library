import PlexCard from './components/PlexCard.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import CardDemo from './demos/CardDemo' ; 
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
        <CardDemo/>
      </ThemeProvider>
    </>
  )
}

export default App
