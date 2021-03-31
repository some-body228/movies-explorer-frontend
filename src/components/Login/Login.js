import logo from '../../images/logo.png';
import { useHistory } from 'react-router-dom';

function Login(){
    const history = useHistory()
    return(
        <section className="register">
            <header className="register__header">
                <div className="register__logo-container">
                    <img className="register__logo" src ={logo} alt="logo" />
                </div>
            </header>
            <form className="register__form">
                <h1 className="register__title">Рады видеть!</h1>
                <label className="register__caption">E-mail</label>
                <input type="email" className="register__input" required></input>
                <label className="register__caption">пароль</label>
                <input type="password" className="register__input" required></input>
                <button type="submit" className="register__signup">Войти</button>
                <p className="register__signin-caption">Ещё не зарегистрированы?<button type="button" className="register__signin-btn" onClick={()=>{history.push("/signin")}}>Регистрация</button></p>
            </form>
        </section>
    )
}
export default Login