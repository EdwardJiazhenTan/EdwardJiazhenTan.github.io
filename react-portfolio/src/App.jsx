import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Work />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
