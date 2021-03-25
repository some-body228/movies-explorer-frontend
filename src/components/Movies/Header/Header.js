import "./Header.css"
import logo from "../../../images/logo.png"

function Header(){
    return (
        <header className="header header_type_movie">
                <div className="header__logo-container">
                    <img className="header__logo" src ={logo} alt="logo" />
                </div>
                <button className="header__guard"></button>
                <div className="header__button-container">
                    <a className="header__button-films header__button-films_selected">Фильмы</a>
                    <a className="header__button-films">Сохраненые фильмы</a>
                    <a className="header__button-account">Аккаунт</a>
                </div>
            </header>
    )
}
export default Header