import React from "react"
import logo from '../../images/logo.png';
import { useHistory } from 'react-router-dom';
import useFormWithValidation from "../Validation";
import MainApi from "../../utils/MainApi"
function Login(props){
    const history = useHistory()
    const validation = useFormWithValidation()
    const [error, setError] = React.useState("")
    
    function handleSubmite(evt){
        evt.preventDefault()
        props.onLogin(validation)
            .then(res=>{
                setError("")
            })
            .catch(err=>{
                console.log(err)
                setError(err.message)
            })
    }
    return(
        <section className="register">
            <header className="register__header">
                <div className="register__logo-container">
                    <img className="register__logo" src ={logo} alt="logo" />
                </div>
            </header>
            <form className="register__form" onChange={validation.handleChange} onSubmit={handleSubmite}>
                <h1 className="register__title">Рады видеть!</h1>
                <label className="register__caption">E-mail</label>
                <input type="email" className={`register__input ${validation.errors["email"]?"register__input_invalid": ""}`} name="email" required></input>
                <p className={` register__valid-message ${validation.errors["email"]?"": "register__valid-message_hidden"}`}>{validation.errors["email"]}</p>
                <label className="register__caption">пароль</label>
                <input type="password" className={`register__input ${validation.errors["pas"]?"register__input_invalid": ""}`} name="password" required minLength="4" maxLength="10"></input>
                <p className={` register__valid-message ${validation.errors["pas"]?"": "register__valid-message_hidden"}`}>{validation.errors["password"]}</p>
                <button type="submit" className={`register__signup ${validation.isValid? "": "register__signup_disabled"}`} disabled={!validation.isValid}>Войти</button>
                <p className={` register__valid-message  ${error?"": "register__valid-message_hidden"}`} style={{}}>{error}</p>
                <p className="register__signin-caption">Ещё не зарегистрированы?<button type="button" className="register__signin-btn" onClick={()=>{history.push("/signin")}}>Регистрация</button></p>
            </form>
        </section>
    )
}
export default Login