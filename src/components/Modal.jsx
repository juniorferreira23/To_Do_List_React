import React from "react";

const Modal = (props) => {

    return(
        <div className="modal">
            <h3>Add Task</h3>
            <textarea placeholder="Text"></textarea>
            <button className="btn-submit">Submit</button>
        </div>
    )
} 

export default Modal