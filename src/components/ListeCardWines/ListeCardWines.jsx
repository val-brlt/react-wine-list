
import styles from './ListeCardWines.module.css'

export default function ListeCardWines({ wines }) {
    return (
        <div className="row">
            {wines.map(wine => (
                <div className={`col-md-4 ${styles.card}`} key={wine.id}>
                    <div className="card mb-4">
                        <img src={wine.image} width="50" className={`card-img-top ${styles.cardImage}`} alt={wine.wine} />
                        <div className="card-body">
                            <h5 className="card-title">{wine.winery}</h5>
                            <p className="card-text"><strong>{wine.wine}</strong></p>
                            <p className="card-text">Location: {wine.location.split('\n·\n')[0]}</p>
                            <p className="card-text">Rating: {wine.rating.average} ({wine.rating.reviews})</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}