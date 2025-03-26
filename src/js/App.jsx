import "/src/scss/App.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Component/Header"
import ScrollToTop from "./Component/ScrollToTop"

import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"

import About from "./Pages/About"

function App() {
  return (
    <div className=" h-screen   ">
      <BrowserRouter>
        <Header />

        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  )
}

export default App
