import "./Header.css"
import logo from "../../../images/logo.png"

function Header(){
    return (
        <header className="header">
                <div className="header__logo-container">
                    <img className="header__logo" src ={logo} alt="logo" />
                </div>
                <div className="header__button-container">
                    <button className="header__button-signin">Регистрация</button>
                    <button className="header__button-signup">Войти</button>
                </div>
            </header>
    )
}
export default Header