import React from 'react'
import Header from './Header';
import GoogleMap from './GoogleMap';
import Footer from './Footer';
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
                    New to Canada? Zoom out the Google Map to get the nearest 
                    pharmacy store
                    at your locations along with their reviews. Find a required <b>COVID First Aid Kit</b> to take precautions for <b>COVID-19.</b>
                    
                    
                    
                    
                    
                    
                    
                    

                    </h4>
                </div>
            </div>
            <footer className="bg-primary footer" >
                <Footer/>
            </footer>
        </div>
    )
}

export default Pharmacy
