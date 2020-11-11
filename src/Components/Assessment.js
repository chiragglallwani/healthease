import React from 'react'
import Header from './Header'
import { Button } from '@material-ui/core';

const Assessment = () => {
    return (
        <div>
            <Header/>
            <div className="d-flex flex-column align-items-start m-3 mx-5">
                <div className='bg-secondary m-2 mx-5 visible' style={{borderRadius: "15px", padding: "10px", paddingRight:"25px"}}>
                    <h5 className='font-weight-bold'>Are you having any of these following:-</h5>
                    <div className='d-flex flex-row'>
                        <ul>
                            <li>Extremely difficult to breath</li>
                            <li>Severe Chest pain.</li>
                            <li>Having a tough time awakening</li>
                            <li>Losing consciousness</li>
                        </ul>
                        <Button className="mx-5 align-content-around" color="white">Yes</Button>
                        <Button className="" color="white">No</Button>

                    </div>
                   
                </div>
                <div className='bg-secondary m-3 mx-5 visible' style={{borderRadius: "15px", padding: "10px", paddingRight: "150px"}}>
                    <h5 className='font-weight-bold'>Are you having any of these following:-</h5>
                    <ul>
                        <li>Extremely difficult to breath</li>
                        <li>Severe Chest pain.</li>
                        <li>Having a tough time awakening</li>
                        <li>Losing consciousness</li>
                    </ul>
                </div>
                <div className='bg-secondary m-3 mx-5 visible' style={{borderRadius: "15px", padding: "10px", paddingRight: "150px"}}>
                    <h5 className='font-weight-bold'>Are you having any of these following:-</h5>
                    <ul>
                        <li>Extremely difficult to breath</li>
                        <li>Severe Chest pain.</li>
                        <li>Having a tough time awakening</li>
                        <li>Losing consciousness</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Assessment


