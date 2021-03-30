import "./Techs.css"
function Techs(){
    return(
        <>
        <section className="techs" id="tech">   
            <h3 className="techs__title">Технологии</h3>
            <h4 className="techs__subtitle">7 технологий</h4>
            <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__skill-list">
                <li className="techs__skill">HTML</li>
                <li className="techs__skill">CSS</li>
                <li className="techs__skill">JS</li>
                <li className="techs__skill">React</li>
                <li className="techs__skill">Git</li>
                <li className="techs__skill">Express.js</li>
                <li className="techs__skill">mongoDB</li>

            </ul>
        </section>    
    </>       
    )
}
export default Techs