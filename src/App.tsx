import "./App.css";
import Header from "./components/header";
import Introduction from "./components/introduction";
import Description from "./components/description";
import Skills from "./components/skills";
import Projects from "./components/projects";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Introduction />
        <Description />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
