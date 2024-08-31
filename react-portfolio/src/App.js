import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <Navbar />
      <Home />  
      <Work />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
