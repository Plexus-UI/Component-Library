import PlexCard from './components/PlexCard.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import Circles from './components/Circles'
import Default from './assets/default.png'
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
        {/* <CardDemo/> */}
        <Circles 
          images={[ Default, Default, Default ]}
          titles={[ Default, Default, Default ]}
        /> 
      </ThemeProvider>
    </>
  )
}

export default App
