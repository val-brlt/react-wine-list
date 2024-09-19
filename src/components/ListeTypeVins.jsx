

export default function ListeTypeVins({typeVins, selectedTypeVin, setSelectedTypeVin}) {

    return (
        <ul className="list-group">
            {typeVins.map((typeVin, index) => (
                <li onMouseEnter={e => setSelectedTypeVin(typeVin)} key={index} className={`list-group-item ${selectedTypeVin === typeVin ? 'active' : ''}`}>{typeVin}</li>
            ))}
        </ul>
    )
}
