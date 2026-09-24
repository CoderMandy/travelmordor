import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainRoutes from "./components/MainRoutes"

function App() {
    return (
    <BrowserRouter>
        
      <Header />

      <main>
        <MainRoutes />
      </main>

      <Footer />
        
    </BrowserRouter>
  )
}

export default App
