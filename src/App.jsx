import styles from "./App.module.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience" //default export
import { Projects } from "./components/Projects/Projects"; //named export
import Contact from "./components/Contact/Contact"; //default export

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
