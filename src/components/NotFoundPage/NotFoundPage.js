import "./NotFoundPage.css"
import { Switch, useHistory } from "react-router-dom";
function NotFoundPage(){
    const history= useHistory()
    return (
        <section className="not-found">
            <h1 className="not-found__code">404</h1>
            <p className="not-found__caption">Страница не найдена</p>
            <button className="not-found__btn" onClick={()=>{history.push('/')}}>назад</button>
        </section>
    )
}
export default NotFoundPage