import React from 'react';
import Navbar from '../navbar'
import Pick from '../solar-system/pick/pick'
import TechnologyText from './technology-text/technology-text';
import './technology.scss'

function Technology() {
    return (
        <div className="technology-container">
            <Navbar />
             <Pick tag="03" text="SPACE LAUNCH 101" />
            <TechnologyText />
        </div>
    );
}

export default Technology;