import { useState} from "react"

import ListeTypeVins from "./components/ListeTypeVins/ListeTypeVins"
import ListeWinerys from "./components/ListeWinery/ListeWinerys";
import ListeCardWines from "./components/ListeCardWines/ListeCardWines";
import { WINE_TYPES } from './constants/constants';
import { Route, Routes } from "react-router-dom";


function WineApp() {

  return (
    <div className="container-fluid text-center">
      <h1><a href="/">Liste des vins</a></h1>

      <div className="row mt-5">
        <div className="col d-flex justify-content-center">
          <Routes>
            <Route path="*" element={<h1>No Match !</h1>} />
            <Route path="/" element={<ListeTypeVins />} />
            <Route path="/typevin/:typevin" element={<ListeWinerys />} />
            <Route path="/typevin/:typevin/winery/:winery" element={<ListeCardWines />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default WineApp