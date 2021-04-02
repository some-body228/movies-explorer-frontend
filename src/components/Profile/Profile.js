import "./Profile.css"
import Header from "../Movies/Header/Header"
function Profile(){
    return(
        <>
            <Header />
            <section className="profile">
                <h1 className="profile__title">Привет, Михаил!</h1>
                <div className="profile__input-container">
                    <p className="profile__key">Имя</p>
                    <p className="profile__value">Михаил</p>
                </div>
                <div className="profile__input-container">
                    <p className="profile__key">Почта</p>
                    <p className="profile__value" >Some@mail.ru</p>
                </div>
                <button className="profile__redaction-btn">Редактировать</button>
                <button className="profile__exit-btn">Выйти из аккаунта</button>
            </section>
        </>
    )
}
export default Profile 