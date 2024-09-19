import { useState, useEffect} from "react"

import ListeTypeVins from "./components/ListeTypeVins"
import ListeWinerys from "./components/ListeWinery/ListeWinerys";
import ListeCardWines from "./components/ListeCardWines/ListeCardWines";
import { WINE_TYPES, API_HOST } from './constants/constants';


function WineApp() {

  const [winerys, setWinerys] = useState([]);
  const [wines, setWines] = useState([]);

  const [selectedTypeVin, setSelectedTypeVin] = useState(WINE_TYPES[0]);
  const [selectedWinery, setSelectedWinery] = useState(null);



  function fetchWinerys() {

    fetch(`${API_HOST}/${selectedTypeVin}`)
      .then(r => r.json())
      .then(winerys => {
          setWinerys(winerys
            .map(winery => ({
              winery: winery.winery,
              location: winery.location.split('\n·\n')[0] // Extrait le pays
            }))
            .filter((winery, index, self) =>
              index === self.findIndex((d) => (
                d.winery === winery.winery && d.location === winery.location
              ))
            )
          );

          setSelectedWinery(winerys[0]);
      });
  }

  function fetchWines() {

    fetch(`${API_HOST}/${selectedTypeVin}/?winery=${selectedWinery.winery}`)
      .then(r => r.json())
      .then(wines => setWines(wines));
  }

  useEffect(() => {
    setSelectedTypeVin(WINE_TYPES[0]);
  }, [])

  useEffect(() => {
    fetchWinerys();
  }, [selectedTypeVin])

  useEffect(() => {
    if (selectedWinery) {
      fetchWines();
    }
  }, [selectedWinery])

  return (
    <div className="container-fluid text-center">
      <h1>Liste des vins</h1>

      <div className="row mt-5">
        <div className="col-3">
          <h3>Type de Vins</h3>
          <ListeTypeVins typeVins={WINE_TYPES} selectedTypeVin={selectedTypeVin} setSelectedTypeVin={setSelectedTypeVin} />
        </div>
        <div className="col-3">
          <h3>Winery</h3>
          <ListeWinerys winerys={winerys} selectedWinery={selectedWinery} setSelectedWinery={setSelectedWinery} />
        </div>
        <div className="col-6">
          <h3>Vins</h3>
          <ListeCardWines wines={wines}/>
        </div>
      </div>
    </div>
  )
}

export default WineApp