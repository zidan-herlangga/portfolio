import { LangProvider } from './contexts/LanguageContext'
import MenuBar from './components/MenuBar'
import Beranda from './components/Beranda'
import Tentang from './components/Tentang'
import Keahlian from './components/Keahlian'
import Proyek from './components/Proyek'
import Kontak from './components/Kontak'
import Dock from './components/Dock'
import Footer from './components/Footer'

function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-mac-bg">
        <MenuBar />
        <main>
          <Beranda />
          <Tentang />
          <Keahlian />
          <Proyek />
          <Kontak />
          <Footer />
        </main>
        <Dock />
      </div>
    </LangProvider>
  )
}

export default App
