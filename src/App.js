import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { AddCard } from "./pages/AddCard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={(props) => <Home />} />
        <Route path="/addcard" render={(props) => <AddCard />} />
      </Switch>
    </div>
  );
}

export default App;
