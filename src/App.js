import './App.css';
import Main from "./components/Main/Main"
import Movies from "./components/Movies/Movies"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import Profile from "./components/Profile/Profile"
import SavedMovies from "./components/SavedMovies/SavedMovies"
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"
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
      <SavedMovies />
      </Route>
      <Route path="/profile">
      <Profile />
      </Route>
      <Route path="/signin">
        <Register />
      </Route>
      <Route path="/signup">
      <Login />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
