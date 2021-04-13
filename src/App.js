import './App.css';
import React from "react";
import Main from "./components/Main/Main"
import Movies from "./components/Movies/Movies"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import Profile from "./components/Profile/Profile"
import SavedMovies from "./components/SavedMovies/SavedMovies"
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"
import ProtectedRoute from "./components/ProtectRoute"
import { Switch, Route, useHistory } from "react-router-dom";
import {CurrentUserContext} from "./context/CurrentUserContext"
import MainApi from "./utils/MainApi"

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false)
  const history = useHistory();

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if(jwt){
      MainApi
      .getInfo()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
  }, []);

  function onLogin(data){
    const {email, password, name} = data.values
    return MainApi.login({password, email})
                .then(res=>{
                    console.log(res)
                    localStorage.setItem("jwt", res.token);
                    setLoggedIn(true)
                    MainApi.getInfo(res.token)
                      .then((res)=>{
                        const {name, email} = res
                        setCurrentUser({name, email})
                        history.push("/movies")
                      })
                    
                })
}
  function logOut(){
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/")
  }
  function onUpdateUser(data){
    const {name, email} = data
     return MainApi.updateUser({name, email})
      .then(res=>{
        setCurrentUser({name, email})
        console.log(currentUser)
      })
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <Switch>
      <Route exact path="/">
      <Main  loggedIn={loggedIn}/>
      </Route>
      <ProtectedRoute exact path="/movies" component={Movies} loggedIn={loggedIn}/>
      <ProtectedRoute exact path="/saved-movies" component={SavedMovies} loggedIn={loggedIn}/>
      <ProtectedRoute exact path="/profile" component={Profile} loggedIn={loggedIn} onLogOut={logOut} onUpdateUser={onUpdateUser}/>
      <Route path="/signin">
        <Register logged={setLoggedIn} onLogin={onLogin}/>
      </Route>
      <Route path="/signup">
      <Login logged={setLoggedIn} onLogin={onLogin}/>
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
    </CurrentUserContext.Provider>
    
  );
}

export default App;
