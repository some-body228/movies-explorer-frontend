import "./Register.css"
import logo from '../../images/logo.png';
import { useHistory } from 'react-router-dom';
import useFormWithValidation from "../Validation";
import MainApi from "../../utils/MainApi"
import React, { useState } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Register(props){
    const currentUser = React.useContext(CurrentUserContext);
    const history = useHistory()
    const validation = useFormWithValidation()
    const [error, setError] = React.useState("")
    function handleSubmite(evt){
        evt.preventDefault()
        const {name, email, password} = validation.values
        MainApi.register({name, email, password})
            .then(res=>{
                console.log(res)
                setError("")
                props.onLogin(validation)
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
                <h1 className="register__title">Добро пожаловать!</h1>
                <label className="register__caption">имя</label>
                <input type="text" className={`register__input ${validation.errors["name"]?"register__input_invalid": ""}`} name="name" required minLength='4' maxLength="10"></input>
                <p className={` register__valid-message ${validation.errors["name"]?"": "register__valid-message_hidden"}`}>{validation.errors["name"]}</p>
                <label className="register__caption">E-mail</label>
                <input type="email" className={`register__input ${validation.errors["email"]?"register__input_invalid": ""}`} name="email" required></input>
                <p className={` register__valid-message ${validation.errors["email"]?"": "register__valid-message_hidden"}`}>{validation.errors["email"]}</p>
                <label className="register__caption">пароль</label>
                <input type="password" className={`register__input ${validation.errors["password"]?"register__input_invalid": ""}`} name="password" required minLength="4" maxLength="10"></input>
                <p className={` register__valid-message ${validation.errors["password"]?"": "register__valid-message_hidden"}`}>{validation.errors["password"]}</p>
                <button type="submit" className={`register__signup ${validation.isValid? "": "register__signup_disabled"}`} disabled={!validation.isValid}>Зарегистрироваться</button>
                <p className={` register__valid-message  ${error?"": "register__valid-message_hidden"}`} style={{}}>{error}</p>
                <p className="register__signin-caption">Уже зарегистрированы?<button type="button" className="register__signin-btn"  onClick={()=>{history.push("/signup")}}>Войти</button></p>
            </form>
        </section>
    )
}
export default Register