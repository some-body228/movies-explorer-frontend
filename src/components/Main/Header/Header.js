import "./Header.css"
import logo from "../../../images/logo.png"
import { useHistory } from 'react-router-dom';

function Header(){
    const history = useHistory()
    return (
        <header className="header">
                <div className="header__logo-container">
                    <img className="header__logo" src ={logo} alt="logo" />
                </div>
                <div className="header__button-container">
                    <button className="header__button-signin" onClick={()=>{history.push("/signin")}}>Регистрация</button>
                    <button className="header__button-signup" onClick={()=>{history.push("/signup")}}>Войти</button>
                </div>
            </header>
    )
}
export default Header