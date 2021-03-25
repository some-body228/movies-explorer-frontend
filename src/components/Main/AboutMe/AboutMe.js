import "./AboutMe.css"
import avatar from "../../../images/avatar.jpg"
function AboutMe(){
 return(
    <section className="AboutMe">
    <h3 className="about__title">Студент</h3>    
    <div className="about__container">
        <div className="about__info">
            <h4 className="about__name">Михаил</h4>
            <p className="about__сaption">Фронтенд-разработчик, 20 лет</p>
            <p className="about__bio">Я родился и живу в Москве, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <ul className="about__media">
                <li className="about__media-item"><a>Facebook</a></li>
                <li className="about__media-item"><a>Github</a></li>
            </ul>
        </div>
        <img src={avatar} alt="avatar" className="about__avatar"/>
    </div>

</section>
 )
}
export default AboutMe