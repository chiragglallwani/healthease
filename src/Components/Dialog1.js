import React from 'react'
import { Button } from '@material-ui/core';

const Dialog1 = () => {
    return (
        <div class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        These symptoms are the sign of coronavirus,
                        Please call 9-1-1 or call the Emergency 
                        Department for help!
                    </div>
                    <div class="modal-footer">
                        <Button class="btn btn-secondary" data-dismiss="modal" variant="contained" color="primary">Retake Self-assessment</Button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialog1
