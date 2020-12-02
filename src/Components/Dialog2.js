import React from 'react'
import {Modal, Button as ButtonBootstrap} from 'react-bootstrap';
import Stage2 from '../images/doctor level 1.png';

const Dialog2 = ({show2, handleClose2}) => {

    function reloadAssessment(){
        window.location.href='/Assessment';
    }

    return (
        <div>
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <span className=" d-flex justify-content-center" style={{marginLeft: "150px"}}>
                    <img src={Stage2} class=" img-fluid d-block rounded " alt="nurse_image_1" style={{height: "165px"}}/>
                    </span>
                    
                </Modal.Header>

                <Modal.Body className="conatainer-fluid m-auto">
                    <h4 className="font-weight-bold mx-3">
                        Consult your family doctor or nurse 
                        practitioner and take precautions 
                        accordingly!
                    </h4>
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-center mx-auto">
                    <ButtonBootstrap onClick={reloadAssessment} variant="primary" size="lg" active>
                        Retake Self-Assessment
                    </ButtonBootstrap>
                </Modal.Footer>
            </Modal>
        </div>
        
    )
}

export default Dialog2
