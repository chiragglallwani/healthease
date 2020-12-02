import React from 'react'
import {Modal} from 'react-bootstrap';

const Dialog4 = ({show4, handleClose4}) => {
    

    
    return (
        <div>
            <Modal show={show4} onHide={handleClose4}>
                <Modal.Header closeButton>
                    <span className="conatiner justify-content-center">
                    <h4 className="font-weight-bold mx-3 my-5 row">
                        Assessment done Successfully
                        You are not having any Symptoms 
                        of COVID-19.
                        But take the utmost care and wear
                        mask in public place and wash your
                        hands regularly.
                    </h4>
                    </span>
                    
                </Modal.Header>
            </Modal>
        </div>
        
    )
}

export default Dialog4
