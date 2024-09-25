import Intro from './components/Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
