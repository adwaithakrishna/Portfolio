import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Counter from "./components/Counter";
import Data from "./components/Data";
import './App.css'


function App(){
  return(
    < >
    <Navbar/>
    <main>
     <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Project/>
    <Contact/>
    </main>
    <Footer/>
    </>
  )
}
export default App;