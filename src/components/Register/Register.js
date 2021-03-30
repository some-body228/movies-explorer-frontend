import "./Register.css"
import logo from '../../images/logo.png';

function Register(){
    return(
        <section className="register">
            <header className="register__header">
                <div className="register__logo-container">
                    <img className="register__logo" src ={logo} alt="logo" />
                </div>
            </header>
            <form className="register__form">
                <h1 className="register__title">Добро пожаловать!</h1>
                <label className="register__caption">имя</label>
                <input type="text" className="register__input" required></input>
                <label className="register__caption">E-mail</label>
                <input type="email" className="register__input" required></input>
                <label className="register__caption">пароль</label>
                <input type="password" className="register__input" required></input>
                <button type="submit" className="register__signup">Зарегистрироваться</button>
                <p className="register__signin-caption">Уже зарегистрированы?<button type="button" className="register__signin-btn">Войти</button></p>
            </form>
        </section>
    )
}
export default Register