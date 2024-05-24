
import Nav1 from './components/navbar/Nav1'
import AboutMe from './components/aboutMe/AboutMe'
import Card from './components/card/Card'
import Contact from './components/contact/Contact'
import Curriculum from './components/curriculum/Curriculum'
import Test from './components/navbar/test'
import Portf from './components/portf/Portf'
import Skills from './components/skills/Skills'

function App() {


  return (
    <div className="  ">

      <Nav1 className='' />


      {/* <Test /> */}

      <div className="  relative text-white">
        <div className="" >
          <Card />
        </div>
        <div className="">
          <AboutMe />
        </div>

        <div className="" >
          <Skills />
        </div>

        <div>
          <Curriculum />
        </div>

        <div >
          <Portf />
        </div>
        <div >
          < Contact />
        </div>
      </div>
    </div>
  )
}

export default App
