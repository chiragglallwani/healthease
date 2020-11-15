import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/HealthEaseLogo1.png'

const Header = () => {

    
    function reloadHome(){
        window.location.href='/';
    }

    function reloadAssessment(){
        window.location.href="/Assessment";
    }

    function reloadPharmacy(){
        window.location.href='/FindStoreNearBy';
    }

    function reloadAboutus(){
        window.location.href='/AboutUS';
    }


    return (
        <div className="d-flex bg-primary sticky-top" style={{height: "120px"}}>

            <div className="d-flex pr-5 pl-2">
            <div className="navbar-brand">
                <Link to="/" onClick={reloadHome} style={{ textDecoration: 'none', color: "#FFF"}}>
                    <img src={Logo} className="d-block" style={{width: "420px", height: "115px"}} />
                </Link>
            </div>
            </div>

            <div className="navbar-collapse pt-4 container-fluid">

                <div className="d-flex justify-content-around" > {/*<!--d-flex justify-content-end float-right"-->*/}


                <div className="p-auto">
                    <Link to="/" onClick={reloadHome}  style={{ textDecoration: 'none', color: '#FFF'}}>
                        <h4 className="font-weight-normal text-sm-right" style={{fontSize: "18px"}}>HOME</h4>
                    </Link>
                </div>

                <div className="p-auto">
                    <Link to="/Assessment" onClick={reloadAssessment}  style={{ textDecoration: 'none', color: '#FFF' }}>
                        <div className="header__option">
                            <h4 className="font-weight-normal" style={{fontSize: "18px"}}>QUICK ASSESSMENT</h4>
                            <h4 className="pl-4 font-weight-normal" style={{fontSize: "18px"}}>FOR COVID-19</h4>
                        </div>
                    </Link>
                </div>

                <div className="p-auto">
                    <Link to="/FindStoreNearBy" onClick={reloadPharmacy}  style={{ textDecoration: 'none', color: '#FFF' }}>
                        <div className="header__option">
                            <h4 className="font-weight-normal" style={{fontSize: "18px"}}>FIND PHARMACY</h4>
                            <h4 className="pl-5 font-weight-normal" style={{fontSize: "18px"}}>NEARBY</h4>
                        </div>
                    </Link>
                </div>

                <div className="">
                    <Link to="/AboutUS" onClick={reloadAboutus} style={{ textDecoration: 'none', color: "#FFF" }}>
                        <h4 className="font-weight-normal" style={{fontSize: "18px"}}>ABOUT US</h4>
                    </Link>   
                </div>

                </div>  
                
            </div>
        </div>
    )
}

export default Header
