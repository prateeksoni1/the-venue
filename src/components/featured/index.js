import React from 'react';
import Carraousel from './Carraousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>

            <Carraousel />

            <div className="artist_name">
                <div className="wrapper">
                    Emin3m
                </div>
            </div>

            <TimeUntil />
        </div>
    );
};

export default Featured;