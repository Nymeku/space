import React from 'react';
import './pagination.scss'
import * as data from '../../../data.json'






function Pagination({currentShip, setCurrentShip}) {
    const ships = data.technology.map(x => x.name)
    return (
        <div className="pagination-outter">
            {ships.map((item, i) => currentShip === item ? (
                <div className="bubble-container active" key={i}>{i + 1}</div>
            ):(
                <div className="bubble-container" onClick={() => setCurrentShip(item)} key={i}>{i + 1}</div>
            ))}
        </div>
    );
}
export default Pagination;