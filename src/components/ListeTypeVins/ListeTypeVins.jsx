import { Link, useParams } from "react-router-dom";
import { WINE_TYPES } from "../../constants/constants";
import styles from './ListeTypeVins.module.css'

export default function ListeTypeVins({}) {

    return (
        <ul className={`list-group ${styles.typevincontainer}`}>
            {WINE_TYPES.map((typeVinLoop, index) => (
                <Link to={`/typevin/${typeVinLoop}`} key={index} className={`${styles.typevin} list-group-item`}>{typeVinLoop}</Link>
            ))}
        </ul>
    )
}
