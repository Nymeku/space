import React from 'react';
import * as data from "../../../data.json"
import './planet-infos.scss'

function PlanetInfos({currentPlanet}) {
    
    const object = data.destinations.find(item => item.name.toLowerCase() === currentPlanet)

    console.log(object)

    return (
        <div className="infos">
            <p className="infos__name"> {object.name} </p>
            <p className="infos__description">{object.description} </p>
            <p className="infos__line"></p>

            <div className="infos__travel" >
                <div className="infos__travel__distance">
                    <p className="infos__travel__distance__generic">AVG. DISTANCE</p>
                    <p className="infos__travel__distance__text">{object.distance}</p>
                </div>
                <div className="infos__travel__time">
                    <p className="infos__travel__time__generic">EST. TRAVEL TIME</p>
                    <p className="infos__travel__time__text">{object.travel}</p>
                </div>
            </div>
        </div>
    );
}

export default PlanetInfos;