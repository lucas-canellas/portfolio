import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"

function App() {

  const toogleTheme = () => {
    const html = document.querySelector('html')
    const dark = document.querySelector('.dark-mode')
    const light = document.querySelector('.light-mode')
    // if light - else dark
    if(html.classList.contains('dark')) {
      html.classList.remove('dark')
      light.classList.add('hidden')
      dark.classList.remove('hidden')
    } else {
      html.classList.add('dark')
      light.classList.remove('hidden')
      dark.classList.add('hidden')
    }
  }

  return (
    <>
      <div className="text-cinder">
          <Navbar toogleTheme={toogleTheme}/>
          <Hero />
          <Projects />
      </div>   
    </>
  )
}

export default App
 