import './App.css';
import Main from "./components/Main/Main"
import Movies from "./components/Movies/Movies"
import { Switch, Route, useHistory } from "react-router-dom";


function App() {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path="/">
      <Main />
      </Route>
      <Route path="/movies">
      <Movies />
      </Route>
      <Route path="/saved-movies">
      <p>3</p>

      </Route>
      <Route path="/profile">
      <p>4</p>

      </Route>
      <Route path="/signin">
      <p>5</p>

      </Route>
      <Route path="/signup">
      <p>6</p>

      </Route>
    </Switch>
  );
}

export default App;
