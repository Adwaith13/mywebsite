import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import "./page.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
}
