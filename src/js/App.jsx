import {useState} from "react"
import "/src/scss/App.scss"

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Component/Header"
import MainPage from "./Pages/MainPage"

import Contact from "./Pages/Contact"

import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import ButtonToTop from "./Component/ButtonToTop"
import Services from "./Pages/Services"

function App() {
  return (
    <div className=" h-screen  text-stone-50  bg-red-50   dark:bg-[rgb(36,36,36)]      ">
      <BrowserRouter>
      
        <Header />

        <MainPage />

        <Services />
        <Skills />
        <Projects />
        <Contact />

        <ButtonToTop />
       
      </BrowserRouter>
    </div>
  )
}

export default App
/* <BrowserRouter>

        <Header />

        <Routes>
          
          <Route path='/' element={<MainPage />} />
        
          <Route path='/about-us' element={<AboutUs />} />
          
          <Route path='/contact' element={<Contact />} /> 
          <Route path='/Skills' element={<Skills />} /> 
          <Route path='/Projects' element={<Projects />} /> 
        
         
          
        </Routes>

         <Footer /> 

      </BrowserRouter> */
