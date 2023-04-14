import "./App.css";
import Header from "./components/header";
import Introduction from "./components/introduction";
import Description from "./components/description";
import Skills from "./components/skills";
import Projects from "./components/projects";
import { useState } from "react";
function App() {
  const [contact, setContact] = useState<boolean>(false);
  return (
    <div>
      <Header contact={contact} setContact={setContact} />

      <Introduction />
      <main className="m-auto max-w-7xl  ">
        <Description />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
