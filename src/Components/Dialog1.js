import React from 'react'
import {Modal, Button as ButtonBootstrap} from 'react-bootstrap';
import Stage1 from '../images/nurse level 0.png';

const Dialog1 = ({show1, handleClose1}) => {

    //const[showDialog, setShowDialog] = useState(false) 
    function reloadAssessment(){
        window.location.href='/Assessment';
    }

    return (
        <div>
            <Modal show={show1} onHide={handleClose1}>
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
                    <ButtonBootstrap onClick={reloadAssessment} variant="primary" size="lg" active>
                        Retake Self-Assessment
                    </ButtonBootstrap>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Dialog1
