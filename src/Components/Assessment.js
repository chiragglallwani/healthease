import React, { useState } from 'react'
import Header from './Header'
import { Button } from '@material-ui/core';
import Dialog1 from './Dialog1'
import Dialog2 from './Dialog2';
import Dialog3 from './Dialog3';
import Dialog4 from './Dialog4';
import DoctorAssessment from '../images/Doctor_Assessment.jpg';
import Footer from './Footer';


const Assessment = () => {

    const[div2visibility, setdiv2visibility] = useState("invisible");
    const[div3visibility, setdiv3visibility] = useState("invisible");
    const[div4visibility, setdiv4visibility] = useState("invisible");
    const[div5visibility, setdiv5visibility] = useState("invisible");

    /*Invoke modal 1 by using below state */
    const [show1, setShow1] = useState(false);
    //const[showDialog1, setShowDialog1] = useState(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    /*Invoke modal by using below state */
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    /*Invoke modal by using below state */
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    /*Invoke modal by using below state */
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    return (
        <div> 

            {/*all the modals will invoke based on the state */}
           
            <Dialog1 show1={show1} handleClose1={handleClose1} setShow1={setShow1} />
            <Dialog2 show2={show2} handleClose2={handleClose2} setShow1={setShow2} />
            <Dialog3 show3={show3} handleClose3={handleClose3} setShow1={setShow3} />
            <Dialog4 show4={show4} handleClose4={handleClose4} setShow4={setShow4} />


            <Header/>
            
            <div className="d-flex w-50 mx-auto my-2" style={{borderRadius: "15px", padding: "10px", paddingRight:"25px", backgroundColor:"#00CCFF"}}>
                    <img src={DoctorAssessment} className="img-fluid d-block rounded mx-2" alt="assessment_image" style={{height: "50px"}}/>
                    <p className="text-center">Answer some of these simple questions and get the feedback from our Quick Assessment</p>
                </div>

            <div className="d-flex">
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
                             className="mx-5 my-4 align-content-around font-weight-bold" 
                             variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px", backgroundColor: "white"}}>
                                Yes
                            </Button>

                            <Button onClick={e => {setdiv2visibility("visible");}}
                            className="mx-1 my-4 align-content-around font-weight-bold" 
                            color="white" variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px", backgroundColor: "white"}}>
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
                            <Button onClick={handleShow2}
                            className="mr-4 my-4 align-content-around font-weight-bold" 
                            color="white" variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px", backgroundColor: "white"}}>
                                Yes
                            </Button>

                            <Button onClick={(e) => {setdiv3visibility("visible"); e.preventDefault();}}
                             className=" mx-2 my-4 align-content-around font-weight-bold" 
                            color="white" variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px", backgroundColor: "white"}}>
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
                            <Button onClick={handleShow3}
                            className="mx-1 my-4 align-content-around font-weight-bold" 
                            color="white" variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px", backgroundColor: "white"}}>
                                Yes
                            </Button>

                            <Button onClick={(e) => {setdiv4visibility("visible"); e.preventDefault();}}
                             className="mx-2 my-4 align-content-around font-weight-bold" 
                            color="white" variant="contained" 
                            style={{maxWidth: "30px", maxHeight: "30px", backgroundColor: "white"}}>
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
                            <Button onClick={handleShow3}
                            className="mx-5 my-4 align-content-around font-weight-bold" 
                                color="white" variant="contained" 
                                style={{maxWidth: "30px", maxHeight: "30px", backgroundColor: "white"}}>
                                    Yes
                            </Button>
                            <Button onClick={(e) => {setdiv5visibility("visible"); e.preventDefault();}}
                            className="mx-1 my-4 align-content-around font-weight-bold" 
                                color="white" variant="contained" 
                                style={{maxWidth: "30px", maxHeight: "30px", backgroundColor: "white"}}>
                                    No
                            </Button>
                        </div>
                    </div>
                    <div className={`m-3 mx-5 ${div5visibility}`} style={{borderRadius: "15px", padding: "10px", marginTop:"75px", paddingRight:"25px", backgroundColor:"#00CCFF"}}>
                        <div className="d-flex flex-row">
                            <h5 className='font-weight-bold'>Have you ever been in contact
                                with a person having 
                                confirm COVID-19?</h5>
                            <Button onClick={handleShow3}
                            className="mx-4 my-4 align-content-around font-weight-bold" 
                                color="white" variant="contained" 
                                style={{maxWidth: "30px", maxHeight: "30px", backgroundColor: "white"}}>
                                    Yes
                            </Button>
                            <Button onClick={handleShow4}
                             className="mx-3 my-4 align-content-around font-weight-bold" 
                                color="white" variant="contained" 
                                style={{maxWidth: "30px", maxHeight: "30px", backgroundColor: "white"}}>
                                    No
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-primary footer" >
                <Footer/>
            </footer>
            
        </div>
    )
}

export default Assessment