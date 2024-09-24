
import styles from './ListeCardWines.module.css'
import {useQuery} from '@tanstack/react-query';
import { API_HOST } from '../../constants/constants';
import { useParams } from 'react-router-dom';

export default function ListeCardWines() {

    const {typevin, winery} = useParams();

    // FETCH WINES BY WYNERI
    const {isLoading, error, data : wines} = useQuery({
        queryKey: ["wines", typevin, winery],
        queryFn: () => fetch(`${API_HOST}/${typevin}/?winery=${winery}`)
              .then(r => r.json())
              .then(data => data)
    })
    
    if (isLoading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>An error occured: {error.message}</h3>
    }

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