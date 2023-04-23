import React from "react";

function Modal(props) {
    console.log(props.message)
    return (
        <div className="modal" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Well done</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={props.onClose}>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{props.message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={props.onClose}>Advance</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
