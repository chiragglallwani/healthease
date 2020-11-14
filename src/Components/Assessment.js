import React, { useState } from 'react'
import Header from './Header'
import { Button, Dialog } from '@material-ui/core';
import Dialog1 from './Dialog1'
import {Modal, Button as ButtonBootstrap} from 'react-bootstrap';


const Assessment = () => {

    const[div2visibility, setdiv2visibility] = useState("invisible");
    const[div3visibility, setdiv3visibility] = useState("invisible");
    const[div4visibility, setdiv4visibility] = useState("invisible");
    const[div5visibility, setdiv5visibility] = useState("invisible");
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return (
        <div> 
           
            <Dialog1 show1={show1} handleClose1={handleClose1} setShow1={setShow1} reload={rerender}/>


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
                            <Button onClick={handleShow1}
                             className="mx-5 my-4 align-content-around" 
                             variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px"}}>
                                Yes
                            </Button>

                            <Button onClick={e => {setdiv2visibility("visible");}}
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


 {/**This is the modal for question 1 */}
           {/* <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <span className=" d-flex justify-content-center" style={{marginLeft: "150px"}}>
                    <img src={Stage1} class=" img-fluid d-block rounded " alt="nurse_image_1" style={{height: "165px"}}/>
                    </span>
                    
                </Modal.Header>

                <Modal.Body className="conatainer-fluid m-auto">
                    <h4 className="font-weight-bold mx-3">
                        These symptoms are the sign of coronavirus.
                        Please call 9-1-1 or call the Emergency 
                        Department for help!
                    </h4>
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-center mx-auto">
                    <ButtonBootstrap onClick={redirect} variant="primary" size="lg" active>
                        Retake Self-Assessment
                    </ButtonBootstrap>
                </Modal.Footer>
    </Modal>*/}