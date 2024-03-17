import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about"
import Project from "./components/Projects/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Skills from "./components/skills/skills"



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <About />
    <Skills />   
    <Project/>
    <Contact /> 
    <Footer/>
    </div>
  );
}

export default App;
