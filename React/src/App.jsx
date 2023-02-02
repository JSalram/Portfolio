import "./css/App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}
