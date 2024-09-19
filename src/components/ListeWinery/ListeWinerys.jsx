
import styles from './ListeWinerys.module.css';

export default function ListeWinerys({winerys, selectedWinery, setSelectedWinery}) {

    return (
        <ul className="list-group">
            {winerys.map((winery, index) => (
                <li 
                    onClick={() => setSelectedWinery(winery)} 
                    key={index} 
                    className={`list-group-item d-flex justify-content-between ${selectedWinery === winery ? 'active' : ''} ${styles.listItem}`}>
                    <span>{winery.winery}</span>
                    <span className="text-muted">{winery.location}</span>
                </li>
            ))}
        </ul>
    )
}
