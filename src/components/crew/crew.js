import React from 'react';
import Navbar from '../navbar';
import Pick from '../solar-system/pick/pick';
import './crew.scss'

function Crew() {
    return (
        <div className="crew-container">
            <Navbar />
            {/* <Pick tag="02" text="meet your crew" /> */}
        </div>
    );
}

export default Crew;