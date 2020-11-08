import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="d-flex bg-primary sticky-top" style={{height: "120px"}}>

            <div className="d-flex pr-5 pl-2">
            <div className="navbar-brand">
                <Link to="/" style={{ textDecoration: 'none', color: "#FFF"}}>
                    <h1 className="healthease">HEALTHEASE</h1>
                </Link>
                
                <h3 className='subheader'>Make your Medical Assessment Easy</h3>
            </div>
            </div>

            <div className="navbar-collapse pt-4 container-fluid">

                <div className="d-flex justify-content-around" > {/*<!--d-flex justify-content-end float-right"-->*/}


                <div className="p-auto">
                    <Link to="/"  style={{ textDecoration: 'none', color: '#FFF'}}>
                        <h4 className="font-weight-normal text-sm-right" style={{fontSize: "18px"}}>HOME</h4>
                    </Link>
                </div>

                <div className="p-auto">
                    <Link to="/Assessment"  style={{ textDecoration: 'none', color: '#FFF' }}>
                        <div className="header__option">
                            <h4 className="font-weight-normal" style={{fontSize: "18px"}}>QUICK ASSESSMENT</h4>
                            <h4 className="pl-4 font-weight-normal" style={{fontSize: "18px"}}>FOR COVID-19</h4>
                        </div>
                    </Link>
                </div>

                <div className="p-auto">
                    <Link to="/FindStoreNearBy"  style={{ textDecoration: 'none', color: '#FFF' }}>
                        <div className="header__option">
                            <h4 className="font-weight-normal" style={{fontSize: "18px"}}>FIND PHARMACY</h4>
                            <h4 className="pl-5 font-weight-normal" style={{fontSize: "18px"}}>NEARBY</h4>
                        </div>
                    </Link>
                </div>

                <div className="">
                    <Link to="/AboutUS"  style={{ textDecoration: 'none', color: "#FFF" }}>
                        <h4 className="font-weight-normal" style={{fontSize: "18px"}}>ABOUT US</h4>
                    </Link>   
                </div>

                </div>  
                
            </div>
        </div>
    )
}

export default Header
