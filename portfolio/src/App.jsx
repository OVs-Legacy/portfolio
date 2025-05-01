import Scene from "./components/Scene";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import CVButton from "./components/CVButton.jsx";

export default function App() {
  return (
    <>
      <CVButton />
      <Hero />
      <Projects />
      <Scene />
    </>
  );
}
