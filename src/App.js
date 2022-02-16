import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
