import React from 'react'
import Header from './Header';
import GoogleMap from './GoogleMap';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const Pharmacy = () => {
    return (
        <div>
            <Header/>
            <div className="row">
               <div className="col-8 mx-4 my-5">
                   <GoogleMap style={{maxWidth:"500px", maxHeight:"500px" }}/>
               </div>
                <div className="bg-primary col-2 my-5 p-2" style={{borderRadius:"25px", marginLeft:"100px"}}>
                    <h2 className="text-center mb-3" style={{color: "white"}}>Find Store Nearby</h2>
                    <h4 className="font-weight-normal m-3"  style={{color: "white"}}>
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
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Pharmacy
