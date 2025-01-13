import 'aos/dist/aos.css';
import AOS from 'aos';
import { Projects } from './components/projects/projects'
import { Education } from './components/education/education'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Hero } from './components/hero/hero'
import { SlideTrack } from './components/slideTrack/slideTrack'
import { WorkExperiences } from './components/workExperiences/workExperiences'

function App() {

  AOS.init();
  return (
    <>
      <Header />
      <Hero />
      <SlideTrack />
      <WorkExperiences />
      <Education />
      <Projects />
      <Footer />
    </>
  )
}

export default App
