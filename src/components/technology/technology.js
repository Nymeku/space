import React, { useState} from 'react';
import Navbar from '../navbar'
import Pick from '../solar-system/pick/pick'
import Pagination from './pagination/pagination';
import ShipInfos from './ship-infos/ship-infos';
import './technology.scss'


function Technology() {
    const [currentShip, setCurrentShip] = useState("Launch vehicle")
    return (
        <div className="technology-container">
            <Navbar />
             <Pick tag="03" text="SPACE LAUNCH 101" />
            <Pagination currentShip={currentShip} setCurrentShip={setCurrentShip} />
            <ShipInfos currentShip={currentShip} key={currentShip} />
        </div>
    );
}

export default Technology;