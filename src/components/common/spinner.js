import React from 'react';
import './css/spinner.css';

const Spinner = props => {
    return (
        <div className="lds-spinner" style={{ width: '100%', height: '100%' }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};


export default Spinner;
