import logo from '../../../images/logo.png';
import "./Header.css"
import React from "react"
import { useHistory } from 'react-router-dom';

function Header(){
const [burger, setburger] = React.useState(false)
const history = useHistory()
return (

<>
<header className="header header_type_movie">
<div className="header__logo-container">
<img className="header__logo" src ={logo} alt="logo" />
</div>
<div className="header__popup-shadow" style={{"display": `${burger? "block": "none"}`}}></div>
<div className="header__button-container header__button-container_movies" >
<button href="" className="header__button-films" onClick={()=>{history.push("/movies")}}>Фильмы</button>
<button href="" className="header__button-films header__button-films_selected" onClick={()=>{history.push("/saved-movies")}}>Сохраненые фильмы</button>
<button href="" className="header__button-account" onClick={()=>{history.push("/profile")}}>Аккаунт</button>
</div>
<button type="button" className="header__guard" onClick={()=>{setburger(!burger)}}></button>
</header>
<div className="header__button-container-popup" style={{"display": `${burger? "block": "none"}`}}>
<button href="" className="header__button-films header__button-films_popup" onClick={()=>{history.push("/")}}>Главная</button>
<button href="" className="header__button-films header__button-films_popup " onClick={()=>{history.push("/movies")}}>Фильмы</button>
<button href="" className="header__button-films header__button-films_popup header__button-films_selected-popup" onClick={()=>{history.push("/saved-movies")}}>Сохраненые фильмы</button>
<button href="" className="header__button-account " onClick={()=>{history.push("/profile")}}>Аккаунт</button>
<button className="header__exit-button" onClick={()=>{setburger(!burger)}}></button>
</div>
</>
)
}
export default Header