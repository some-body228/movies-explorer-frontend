import "./Profile.css";
import React from "react";
import Header from "../Movies/Header/Header";
import useFormWithValidation from "../Validation";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import MainApi from "../../utils/MainApi"
function Profile(props){
    const currentUser = React.useContext(CurrentUserContext);

    const [error, setError] = React.useState(false)
    const [success, setSuccsess] = React.useState(false)

    const validation = useFormWithValidation();
    function onUpdateUser(evt){
        evt.preventDefault()
        props.onUpdateUser(validation.values)
            .then(res=>{
                setSuccsess(true)
            })
            .catch(err=>{
                setError(true)
            })
    }
    console.log(currentUser)
    return(
        <>
            <Header />
            <section className="profile">
                <form onChange={validation.handleChange} onSubmit={onUpdateUser}>
                    <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                    <div className="profile__input-container">
                        <p className="profile__key">Имя</p>
                        <input type="text" className="profile__value" name="name" placeholder={currentUser.name} required minLength="2" maxLength="30"/>
                    </div>
                    <p className={` register__valid-message ${validation.errors["name"]?"": "register__valid-message_hidden"}`}>{validation.errors["name"]}</p>

                    <div className="profile__input-container">
                        <p className="profile__key">Почта</p>
                        <input type="email" className="profile__value" name="email" placeholder={currentUser.email} required/>
                    </div>
                    <p className={` register__valid-message ${validation.errors["email"]?"": "register__valid-message_hidden"}`}>{validation.errors["email"]}</p>
                    <p className={` register__valid-message ${error?"": "register__valid-message_hidden"}`}>Что-то пошло не так.</p>
                    <p className={` register__valid-message register__valid-message_succes ${success?"": "register__valid-message_hidden"}`}>Данные обновлены.</p>
                    <button type="submit" className={`profile__redaction-btn ${validation.isValid? "": "profile__redaction-btn_disabled"}`} disabled={!validation.isValid}>Редактировать</button>
                    <button type="button" className="profile__exit-btn" onClick={props.onLogOut}>Выйти из аккаунта</button>
                </form>
                
            </section>
        </>
    )
}
export default Profile 