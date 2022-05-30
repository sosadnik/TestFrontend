import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Suspense } from "react/cjs/react.production.min";
import "./App.css";
import Form from "./components/Form/Form";
import Graph from "./components/DataPresentation/DataPresentation";
import Menu from "./components/Menu/Menu";

function App() {
  const content = (
    <div>
      <Suspense fallback={<p>Ładowanie...</p>}>
        <Switch>
          <Route path="/graph" component={Graph} />
          <Route path="/" component={Form} />
        </Switch>
      </Suspense>
    </div>
  );
  return (
    <div className="App">
      <Router>
        <Menu className="manu" />
        {content}
      </Router>
    </div>
  );
}

export default App;
