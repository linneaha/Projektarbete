import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { AddCard } from "./pages/addCard";

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
