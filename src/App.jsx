import React from 'react'
import {Header, Introduction, Projects, Contact} from "../src/components/output"
import BackToTop from './components/BacktoTop'
const App = () => {
  return (
    <div className="bg-body">
      <div>
          <Header/>
          <Introduction/>
          <Projects/>
          <Contact/>
          <BackToTop />
      </div>


      
    </div>
  )
}

export default App
