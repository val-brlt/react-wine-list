
import { useQuery } from '@tanstack/react-query';
import styles from './ListeWinerys.module.css';
import { API_HOST } from '../../constants/constants';
import { Link, useParams } from 'react-router-dom';

export default function ListeWinerys() {

    const { typevin } = useParams();
    console.log("ttypevinypevin:", typevin)

    // FETCH WINERY BY TYPE VIN
    const {isLoading, error, data : winerys} = useQuery({
        queryKey: ["winerys", typevin],
        queryFn: () => fetch(`${API_HOST}/${typevin}`)
            .then(r => r.json())
            .then(data => {
                data
                .map(winery => ({
                    id : winery.id,
                    winery: winery.winery,
                    location: winery.location.split('\n·\n')[0] // Extrait le pays
                }))
                .filter((winery, index, self) =>
                    index === self.findIndex((d) => (
                    d.winery === winery.winery && d.location === winery.location
                    ))
                )
                return data;
            }
        )
    })

    if (isLoading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>An error occured: {error.message}</h3>
    }

    return (
        <ul className="list-group">
            {winerys.map((winery, index) => (
                <Link 
                    to={`/typevin/${typevin}/winery/${winery.winery}`}
                    key={index} 
                    className={`list-group-item d-flex justify-content-between ${styles.listItem}`}>
                    <span>{winery.winery}</span>
                    <span className="text-muted">{winery.location}</span>
                </Link>
            ))}
        </ul>
    )
}
