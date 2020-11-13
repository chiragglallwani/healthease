import React, { useState } from 'react'
import Header from './Header'
import { Button } from '@material-ui/core';
import {Modal} from 'react-bootstrap';
import Dialog1 from './Dialog1';

const Assessment = () => {

    const[div2visibility, setdiv2visibility] = useState("invisible");
    const[div3visibility, setdiv3visibility] = useState("invisible");
    const[div4visibility, setdiv4visibility] = useState("invisible");
    const[div5visibility, setdiv5visibility] = useState("invisible");

    const showDialog1 = () => {
        return(
            <Modal>
                <Modal.Header>Here will be the image and close button</Modal.Header>
                <Modal.Body>Here will be the message</Modal.Body>
                <Modal.Footer>Here will be the button for re-assessment</Modal.Footer>
            </Modal>
        )
    }

    return (
        <div>
            <Header/>
            <div className="d-flex flex-row">
                <div className="d-flex flex-column align-items-start m-3 mx-5">
                    <div className='m-2 mx-5 visible' style={{borderRadius: "15px", padding: "10px", paddingRight:"25px", backgroundColor:"#00CCFF"}}>
                        <h5 className='font-weight-bold'>Are you having any of these following:-</h5>
                        <div className='d-flex flex-row'>
                            <ul>
                                <li>Extremely difficult to breath</li>
                                <li>Severe Chest pain.</li>
                                <li>Having a tough time awakening</li>
                                <li>Losing consciousness</li>
                            </ul>
                            <Button onClick={() => {showDialog1(); console.log("onclick worked!")}}
                             className="mx-5 my-4 align-content-around" 
                             variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px"}}>
                                Yes
                            </Button>

                            <Button onClick={e => {e.preventDefault(); setdiv2visibility("visible");}}
                            className="mx-1 my-4 align-content-around" 
                            color="white" variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px"}}>
                                No
                            </Button>

                        </div>
                    </div>
                    <div className={`m-3 mx-5 ${div2visibility}`} style={{borderRadius: "15px", padding: "10px", paddingRight: "5px", backgroundColor:"#00CCFF"}}>
                        <h5 className='font-weight-bold'>Are you having any of these following:-</h5>
                        <div className="d-flex flex-row">
                            <ul>
                                <li>Moderately problem in breathing.</li>
                                <li>Not able to bent down because of <br/>
                                        breathing problem.</li>
                                <li>Difficulty in managing chronic health <br/>
                                    conditions because of difficulty in breathing.</li>
                            </ul>
                            <Button className="mr-4 my-4 align-content-around" 
                            color="white" variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px"}}>
                                Yes
                            </Button>

                            <Button onClick={(e) => {setdiv3visibility("visible"); e.preventDefault();}}
                             className=" mx-2 my-4 align-content-around" 
                            color="white" variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px"}}>
                                No
                            </Button>
                        </div>
                        
                    </div>
                    <div className={`m-3 mx-5 ${div3visibility}`} style={{borderRadius: "15px", padding: "10px", paddingRight: "5px", backgroundColor:"#00CCFF"}}>
                        <h5 className='font-weight-bold'>Are you having flu, cold or COVID symptoms <br/>like?(even mild ones)</h5>
                        <div className="d-flex flex-row">
                            <p>
                                Fever, chills, chronic cough 
                                runny nose, sore throat, difficulty in breathing 
                                diarrhea, vomiting, headache.<br/>

                                <br/>Fever includes body temperature  
                                more than 380 C.
                            </p>
                            <Button 
                            className="mx-1 my-4 align-content-around" 
                            color="white" variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px"}}>
                                Yes
                            </Button>

                            <Button onClick={(e) => {setdiv4visibility("visible"); e.preventDefault();}}
                             className="mx-2 my-4 align-content-around" 
                            color="white" variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px"}}>
                                No
                            </Button>
                        </div>
                        
                    </div>
                </div>


                <div className="d-flex flex-column align-items-start m-3 mr-3">
                    <div className={`m-3 mx-5 ${div4visibility}`} style={{borderRadius: "15px", padding: "10px", paddingRight:"25px", backgroundColor:"#00CCFF"}}>
                        <div className="d-flex flex-row">
                            <h5 className='font-weight-bold'>In past 14 days, have you
                                travelled to any other country
                                outside Canada ?</h5>
                            <Button className="mx-5 my-4 align-content-around" 
                                color="white" variant="contained" 
                                style={{maxWidth: "30px", maxHeight: "30px"}}>
                                    Yes
                            </Button>
                            <Button onClick={(e) => {setdiv5visibility("visible"); e.preventDefault();}}
                            className="mx-1 my-4 align-content-around" 
                                color="white" variant="contained" 
                                style={{maxWidth: "30px", maxHeight: "30px"}}>
                                    No
                            </Button>
                        </div>
                    </div>
                    <div className={`m-3 mx-5 ${div5visibility}`} style={{borderRadius: "15px", padding: "10px", marginTop:"75px", paddingRight:"25px", backgroundColor:"#00CCFF"}}>
                        <div className="d-flex flex-row">
                            <h5 className='font-weight-bold'>Have you ever been in contact
                                with a person having 
                                confirm COVID-19?</h5>
                            <Button className="mx-4 my-4 align-content-around" 
                                color="white" variant="contained" 
                                style={{maxWidth: "30px", maxHeight: "30px"}}>
                                    Yes
                            </Button>
                            <Button className="mx-3 my-4 align-content-around" 
                                color="white" variant="contained" 
                                style={{maxWidth: "30px", maxHeight: "30px"}}>
                                    No
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Assessment


