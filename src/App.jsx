import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { WorkExperience } from "./components/WorkExperience"

function App() {

  const toogleTheme = () => {
    const html = document.querySelector('html')
    const dark = document.querySelector('.dark-mode')
    const light = document.querySelector('.light-mode')
    // if light - else dark
    if (html.classList.contains('dark')) {
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
        <Navbar toogleTheme={toogleTheme} />
        <div id="site-content">
          <Hero />
          <Projects />
          <WorkExperience />
        </div>
      </div>
    </>
  )
}

export default App
