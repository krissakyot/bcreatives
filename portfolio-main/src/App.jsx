import About from "./compo/About"
import Footer from "./compo/Footer"
import Home from "./compo/Home"
import Mobile from "./compo/Mobile"
import Nav from "./compo/Nav"
import Website from "./compo/Website"

function App() {

  return (
    <div className="relative w-[100%]">
      <Nav />
      <Home />
      <About />
      <Website />
      <Mobile />
      <Footer />
    </div>
  )
}

export default App
