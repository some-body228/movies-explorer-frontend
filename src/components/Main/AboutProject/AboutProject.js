import "./AboutProject.css"
function AboutProject(){
    return (<section className="about">
        <h2 className="about__title">О проекте</h2>
        <div className="about__container">
            <div className="about__paragraph-container">
                <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                <p className="about__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="about__paragraph-container">
                <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                <p className="about__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
        </div>
        <div className="about__landing">
            <p className="about__one-week">1 неделя</p>
            <p className="about__four-week">4 недели</p>
            <p className="about__caption">Back-end</p>
            <p className="about__caption">Front-end</p>
        </div>
    </section>)
}
export default AboutProject