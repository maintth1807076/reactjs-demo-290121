import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {routes} from "./routes";
import LayoutAdmin from "./pages/inside/Layout";

function App() {
  const showRoute = () => {
    let result = routes.map((route, index) => {
      return (
          <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.components}
          />
      )
    })
    return (
        <Router>
          <Switch>{result}</Switch>
        </Router>
    );
  }

  return (
    showRoute()
  );
}

export default App;
