import './Portfolio.css'
import PortfolioLink from '../../../images/portfolio-link.svg'


function Portfolio(){
    return(
        <section className="portfolio">
            <h1 className="portfolio__title">Портфолио</h1>
            <ul className="portfolio__items-container">
                <li className="portfolio__item-container"><p className="portfolio__item">Статичный сайт</p><a href=" https://some-body228.github.io/how-to-learn/"><img className="portfolio__link" src={PortfolioLink} /></a></li>
                <li className="portfolio__item-container"><p className="portfolio__item">Адаптивный сайт</p><a href="https://some-body228.github.io/russian-travel/index.html"><img className="portfolio__link" src={PortfolioLink} /></a></li>
                <li className="portfolio__item-container"><p className="portfolio__item">Одностраничное приложение</p><a href="https://some-body228.github.io/mesto"><img className="portfolio__link" src={PortfolioLink} /></a></li>
            </ul>
       
        </section>
    )
   }
   export default Portfolio