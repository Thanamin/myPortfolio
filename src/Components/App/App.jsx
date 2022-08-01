import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import { AboutMe } from "../AboutMe/AboutMe";
import { Bubble } from "../Bubble/Bubble";
import { Contact } from "../Contact/Contact";
import { Education } from "../Education/Education";
import { Experience } from "../Experience/Experience";
import { Hello } from "../Hello/Hello";
import { Navbar } from "../Navbar/Navbar";
import { Project } from "../Projects/Projects";
import { Skill } from "../Skill/Skill";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hello />
      <AboutMe />
      <Education />
      <Experience />
      <Skill />
      <Project />
      <Contact />

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
