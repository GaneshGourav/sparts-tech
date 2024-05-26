

import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
// import { Slider } from './components/Slider1'
import { Footer } from './components/Footer'
import { Academies } from './Page/Acadimies'
import { Testomonial } from './Page/Testimonials'

function App() {
 

  return (
    <>
      <div>
        <Navbar/>
        <Header/>
       <Academies/>
       <Testomonial/>
        <Footer/>
      </div>
    </>
  )
}

export default App
