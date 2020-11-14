import React from 'react'
import Header from './Header';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const Pharmacy = () => {
    return (
        <div>
            <Header/>
            <div className="d-flex">
                <div className="justify-content-start">
                
                </div>
                <div className="bg-primary">
                    <p>
                    New to Canada, Here
                    we have a map to 
                    checkout the pharmacy
                    near to your location
                    or get a various number
                    of pharmacy around
                    you, can also see a 
                    review of the pharmacy 
                    and find the one where
                    you can find the required 
                    medicine.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Pharmacy
