import React from 'react'
import {Modal, Button as ButtonBootstrap} from 'react-bootstrap';
import Stage3 from '../images/home level 3.jpg';

const Dialog3 = ({show3, handleClose3}) => {

    function reloadAssessment(){
        window.location.href='/Assessment';
    }

    return (
        <div>
            <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <span className=" d-flex justify-content-center" style={{marginLeft: "150px"}}>
                    <img src={Stage3} class=" img-fluid d-block rounded " alt="nurse_image_1" style={{height: "165px"}}/>
                    </span>
                    
                </Modal.Header>

                <Modal.Body className="conatainer-fluid m-auto">
                    <h4 className="font-weight-bold mx-3">
                        Isolate yourself from others for 14 days
                        and notice the seriousness of any symptoms. 
                    </h4>
                </Modal.Body>

                <Modal.Footer  className="d-flex justify-content-center mx-auto">
                    <ButtonBootstrap onClick={reloadAssessment} variant="primary" size="lg" active>
                        Retake Self-Assessment
                    </ButtonBootstrap>
                </Modal.Footer>
            </Modal>
        </div>
        
    )
}

export default Dialog3
